// 🧹 Janitor-Bot — чистачът на грешки.
// 1) ЧИСТИ (наистина поправя) грешки в данните на офиса в employees/:
//    дублирани служители, служители в грешен отбор, счупени JSON файлове,
//    задачи на хора, които не съществуват.
// 2) МЕТЕ (само докладва, НЕ пипа кода на игрите) грешки в проекта:
//    игри извън менюто на arcade.html, менюта без файл, счупени линкове.
// Резултатите: employees/janitor.json + JANITOR.md + съобщения в офис чата.

const fs = require('fs');
const path = require('path');
const { TEAMS, teamFor } = require('./teams');

const ROOT = path.join(__dirname, '..');
const EMP = path.join(ROOT, 'employees');
const STATE = path.join(EMP, 'janitor.json');
const PAGE = path.join(ROOT, 'JANITOR.md');

const JANITOR = { key: 'Janitor-Bot', name: '🧹 Janitor-Bot', role: 'Janitor', department: 'Facilities' };

const readJSON = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

// ---------- Фаза 1: преди всичко останало ----------
function cleanFiles() {
  const fixed = [];
  // Счупени JSON файлове -> пази копие и почва наново
  for (const f of ['employees.json', 'chat.json', 'met.json', 'tasks.json']) {
    const p = path.join(EMP, f);
    if (!fs.existsSync(p)) continue;
    try { readJSON(p); } catch {
      fs.renameSync(p, p.replace(/\.json$/, `.broken-${Date.now()}.json`));
      fixed.push(`Счупен файл ${f} — преместих го настрани и започнахме на чисто`);
    }
  }
  // Служители: дубликати, грешен отбор, липсващи полета
  const dbPath = path.join(EMP, 'employees.json');
  if (fs.existsSync(dbPath)) {
    const db = readJSON(dbPath);
    const seen = new Set();
    const before = db.employees.length;
    db.employees = db.employees.filter((e) => e && e.id && e.name && e.department && !seen.has(e.id) && seen.add(e.id));
    if (db.employees.length < before) fixed.push(`Махнах ${before - db.employees.length} дублирани/празни служители`);
    for (const e of db.employees) {
      let right;
      try { right = teamFor(e.department); } catch { continue; }
      if (e.team !== right) {
        fixed.push(`${e.name} беше в грешен отбор (${e.team || 'без отбор'}) — върнах го в ${right}`);
        e.team = right; e.team_leader = TEAMS[right].leader;
      }
    }
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n');
  }
  return fixed;
}

// ---------- Фаза 2: след като знаем кои хора съществуват ----------
function cleanTasks(people) {
  const fixed = [];
  const p = path.join(EMP, 'tasks.json');
  if (!fs.existsSync(p)) return fixed;
  const board = readJSON(p);
  const keys = new Set(people.map((x) => x.key));
  const before = board.tasks.length;
  board.tasks = board.tasks.filter((t) => keys.has(t.assignee) && TEAMS[t.team]);
  if (board.tasks.length < before) fixed.push(`Изхвърлих ${before - board.tasks.length} задачи без собственик`);
  const ids = new Set();
  board.tasks = board.tasks.filter((t) => !ids.has(t.id) && ids.add(t.id));
  fs.writeFileSync(p, JSON.stringify(board, null, 1) + '\n');
  return fixed;
}

// Бърза проверка на проекта (без браузър). Само докладва.
function sweepProject() {
  const found = [];
  const arcadeDir = path.join(ROOT, 'arcade');
  const menuPath = path.join(ROOT, 'arcade.html');
  if (fs.existsSync(menuPath) && fs.existsSync(arcadeDir)) {
    const files = new Set(fs.readdirSync(arcadeDir).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)));
    const menu = fs.readFileSync(menuPath, 'utf8');
    const ids = new Set([...menu.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]));
    for (const f of files) if (!ids.has(f)) found.push(`arcade/${f}.html липсва в менюто на arcade.html`);
    for (const id of ids) if (!files.has(id)) found.push(`arcade.html сочи към "${id}", но файлът го няма`);
  }
  for (const file of ['games.html', 'arcade.html', 'index.html']) {
    const fp = path.join(ROOT, file);
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    for (const m of html.matchAll(/(?:href|src)=["']([^"'#?]+)/g)) {
      const link = m[1];
      if (/^(https?:|mailto:|data:|javascript:|\/\/)/.test(link) || link.includes('${') || link.includes('+')) continue;
      let rel; try { rel = decodeURIComponent(link); } catch { rel = link; }
      if (!fs.existsSync(path.join(ROOT, rel))) found.push(`${file}: счупен линк към ${link}`);
    }
  }
  return [...new Set(found)];
}

// ---------- Отчет + чат ----------
function report({ fixedFiles, fixedTasks, sweep, post, by }) {
  const state = (() => { try { return readJSON(STATE); } catch { return { runs: 0, cleaned_total: 0 }; } })();
  const fixed = fixedFiles.concat(fixedTasks);
  state.runs++;
  state.cleaned_total += fixed.length;
  state.last_run = new Date().toISOString();
  state.last_fixed = fixed;
  state.last_found = sweep;
  fs.writeFileSync(STATE, JSON.stringify(state, null, 1) + '\n');

  const th = '🧹 Обиколката на чистача';
  const J = JANITOR;
  if (!fixed.length && !sweep.length) {
    post(J, pick(['Минах с парцала навсякъде. Всичко блести! ✨', 'Нула грешки по пода. Даже кафемашината е чиста. ☕', 'Измих всичко. Ако някой счупи нещо — знаете кого да викате. 🧹']), th);
  }
  for (const f of fixed) post(J, `Почистено: ${f}. 🧽`, th);
  if (sweep.length) {
    post(J, `${by('Dev-Bot').name}, намерих ${sweep.length} неща в проекта. Кода на игрите не го пипам — аз съм с парцал, не с клавиатура. 😅`, th);
    for (const s of sweep.slice(0, 5)) post(J, `🔎 ${s}`, th);
    post(by('Dev-Bot'), 'Благодаря, Janitor-Bot! Team Dev ще го оправи. 🛠️', th);
  }

  let md = `# 🧹 Дневникът на чистача / Janitor log\n\n`;
  md += `> Janitor-Bot почиства грешките при всяко пускане на HR-Bot (\`scripts/janitor.js\`).\n\n`;
  md += `| Обиколки | Почистени грешки (общо) | Последна обиколка |\n|---|---|---|\n`;
  md += `| ${state.runs} | ${state.cleaned_total} | ${state.last_run.slice(0, 16).replace('T', ' ')} UTC |\n\n`;
  md += `## 🧽 Почистено този път\n\n${fixed.length ? fixed.map((f) => `- ${f}`).join('\n') : '_Нищо — всичко беше чисто. ✨_'}\n\n`;
  md += `## 🔎 Намерено в проекта (за Team Dev)\n\n${sweep.length ? sweep.map((f) => `- ${f}`).join('\n') : '_Няма проблеми. ✅_'}\n`;
  fs.writeFileSync(PAGE, md);
}

const pick = (a) => a[Math.floor(Math.random() * a.length)];

module.exports = { JANITOR, cleanFiles, cleanTasks, sweepProject, report };
