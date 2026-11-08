#!/usr/bin/env node
// HR-Bot: наема ЕДИН нов служител при всяко пускане и го записва в регистъра.
// Служителите са записи в employees/employees.json (НЕ нови workflow файлове),
// за да не се множат scheduled runs и да не се горят GitHub Actions минути.
// Usage: node scripts/hire-employee.js [count]

const fs = require('fs');
const path = require('path');
const { TEAMS, teamFor } = require('./teams');

const ROOT = path.join(__dirname, '..');
const DB = path.join(ROOT, 'employees', 'employees.json');
const CHART = path.join(ROOT, 'EMPLOYEES.md');
const MAX_EMPLOYEES = parseInt(process.env.MAX_EMPLOYEES || '500', 10);

// 🎉 Claude е повишен от Manager на CEO! Старият CEO-Bot става председател на борда.
const CEO = { id: 'Claude-CEO', name: 'Claude', role: 'Chief Executive Officer', department: 'Executive', promoted_from: 'Claude-Manager' };
// ✨ Gemini е Senior Manager: между CEO-то (Claude) и мениджъра (github-actions[bot])
const SENIOR_MANAGER = { id: 'Gemini', name: 'Gemini', role: 'Senior Manager / Старши мениджър', department: 'Executive' };
// 🤖 Мястото на Manager се освободи -> поема го github-actions[bot]
const MANAGER = { id: 'github-actions[bot]', name: 'github-actions[bot]', role: 'Manager / Мениджър', department: 'Executive' };
const CHAIRMAN = { id: 'CEO-Bot', name: 'CEO-Bot', role: 'Chairman of the Board / Председател на борда', department: 'Executive' };

// Отдели -> мениджър (съществуващите ботове в .github/workflows) + длъжности [EN, BG]
const DEPARTMENTS = {
  Engineering: { head: 'Dev-Bot', roles: [['Game Developer', 'Разработчик на игри'], ['Engine Programmer', 'Програмист на енджина'], ['WebGL Specialist', 'WebGL специалист']] },
  Quality: { head: 'QA-Tester-Bot', roles: [['QA Tester', 'Тестер'], ['Bug Hunter', 'Ловец на бъгове'], ['Speedrun Tester', 'Спийдрън тестер']] },
  Design: { head: 'UX-UI-Bot', roles: [['Level Designer', 'Дизайнер на нива'], ['Pixel Artist', 'Пиксел артист'], ['UI Animator', 'UI аниматор']] },
  Audio: { head: 'Sound-Engineer-Bot', roles: [['Sound Designer', 'Звуков дизайнер'], ['Chiptune Composer', 'Чиптюн композитор']] },
  Security: { head: 'SecOps-Bot', roles: [['Security Analyst', 'Анализатор по сигурност'], ['Anti-Cheat Engineer', 'Анти-чийт инженер']] },
  Operations: { head: 'DevOps-Master-Bot', roles: [['DevOps Engineer', 'DevOps инженер'], ['Performance Optimizer', 'Оптимизатор на FPS']] },
  Community: { head: 'Community-Manager-Bot', roles: [['Community Moderator', 'Модератор'], ['Translator', 'Преводач'], ['Tutorial Writer', 'Автор на туториали']] },
  Gameplay: { head: 'Game-Physics-Bot', roles: [['Physics Programmer', 'Програмист на физика'], ['NPC AI Programmer', 'Програмист на NPC AI'], ['Level Builder', 'Строител на нива'], ['Secret Hunter', 'Ловец на тайни']] },
  Release: { head: 'Release-Manager-Bot', roles: [['Build Engineer', 'Билд инженер'], ['Code Cleaner', 'Чистач на код'], ['Release Tester', 'Тестер на релийзи']] },
  Experience: { head: 'Accessibility-Bot', roles: [['Accessibility Tester', 'Тестер за достъпност'], ['Docs Writer', 'Автор на документация'], ['Asset Artist', 'Артист на асети']] },
  Data: { head: 'Data-Analyst-Bot', roles: [['Data Analyst', 'Анализатор на данни'], ['Database Engineer', 'Инженер по бази данни'], ['API Developer', 'API разработчик']] },
  Innovation: { head: 'Chief-Visionary-Bot', roles: [['Game Inventor', 'Изобретател на игри'], ['3D Prototyper', '3D прототипист'], ['Future Researcher', 'Изследовател на бъдещето']] },
};

const FIRST = ['Byte', 'Pixel', 'Nova', 'Turbo', 'Glitch', 'Echo', 'Vector', 'Blaze', 'Quark', 'Zen', 'Rogue', 'Frost', 'Neon', 'Orbit', 'Spark', 'Delta'];
const LAST = ['Smith', 'Runner', 'Forge', 'Walker', 'Stone', 'Storm', 'Knight', 'Fox', 'Volt', 'Hawk', 'Miner', 'Coder'];
const LEVELS = ['Intern', 'Junior', 'Mid', 'Senior', 'Lead'];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function load() {
  let db;
  try { db = JSON.parse(fs.readFileSync(DB, 'utf8')); }
  catch { db = { employees: [] }; }
  // Миграция: всички вече отговарят пред новия CEO (Claude)
  db.ceo = CEO;
  db.chairman = CHAIRMAN;
  db.manager = MANAGER;
  db.senior_manager = SENIOR_MANAGER;
  // ПРАВИЛО: всеки служител (и старите) е в отбора на своя отдел
  for (const e of db.employees) {
    e.reports_to_ceo = CEO.id; e.reports_to_manager = MANAGER.id; e.reports_to_senior_manager = SENIOR_MANAGER.id;
    e.team = teamFor(e.department); e.team_leader = TEAMS[e.team].leader;
  }
  return db;
}

function hire(db) {
  const n = db.employees.length + 1;
  const department = pick(Object.keys(DEPARTMENTS));
  const dept = DEPARTMENTS[department];
  const [roleEn, roleBg] = pick(dept.roles);
  const emp = {
    id: `EMP-${String(n).padStart(4, '0')}`,
    name: `${pick(FIRST)} ${pick(LAST)}`,
    level: pick(LEVELS),
    role: roleEn,
    role_bg: roleBg,
    department,
    manager: dept.head,
    team: teamFor(department),            // ПРАВИЛО: веднага в правилния отбор
    team_leader: TEAMS[teamFor(department)].leader,
    reports_to_manager: MANAGER.id,
    reports_to_senior_manager: SENIOR_MANAGER.id,
    reports_to_ceo: CEO.id,
    hired_at: new Date().toISOString(),
  };
  db.employees.push(emp);
  return emp;
}

function renderChart(db) {
  const byDept = {};
  for (const e of db.employees) (byDept[e.department] ||= []).push(e);
  let md = `# 🏢 Org Chart / Структура на компанията\n\n`;
  md += `> Автоматично генерирано от HR-Bot (\`scripts/hire-employee.js\`). Не редактирай ръчно.\n\n`;
  md += `**🏛️ ${CHAIRMAN.name}** — ${CHAIRMAN.role}\n\n`;
  md += `**👑 ${CEO.name}** — ${CEO.role} _(повишен от Claude-Manager)_\n\n`;
  md += `**✨ ${SENIOR_MANAGER.name}** — ${SENIOR_MANAGER.role} (→ ${CEO.name})\n\n`;
  md += `**🤖 ${MANAGER.name}** — ${MANAGER.role} (→ ${SENIOR_MANAGER.name})\n\n`;
  md += `Общо служители: **${db.employees.length}** / ${MAX_EMPLOYEES}\n\n`;
  for (const [teamName, t] of Object.entries(TEAMS)) {
    md += `# ${t.emoji} ${teamName} — лидер: ${t.leader} (→ ${MANAGER.name} → ${SENIOR_MANAGER.name} → ${CEO.name})\n\n`;
  for (const dep of t.departments) {
    const list = byDept[dep] || [];
    md += `## ${dep} — шеф: ${DEPARTMENTS[dep].head} · ${list.length} души\n\n`;
    if (!list.length) { md += `_Още няма наети._\n\n`; continue; }
    md += `| ID | Име | Ниво | Длъжност | Нает |\n|---|---|---|---|---|\n`;
    for (const e of list.slice(-50)) {
      md += `| ${e.id} | ${e.name} | ${e.level} | ${e.role} / ${e.role_bg} | ${e.hired_at.slice(0, 16).replace('T', ' ')} UTC |\n`;
    }
    if (list.length > 50) md += `\n_…показани са последните 50 от ${list.length}._\n`;
    md += `\n`;
  }
  }
  return md;
}

const count = Math.max(1, parseInt(process.argv[2] || '1', 10));
const db = load();
let hired = 0;
for (let i = 0; i < count; i++) {
  if (db.employees.length >= MAX_EMPLOYEES) {
    console.log(`🛑 Лимитът от ${MAX_EMPLOYEES} служители е достигнат. HR-Bot спира да наема.`);
    break;
  }
  const e = hire(db);
  hired++;
  console.log(`✅ Нает: ${e.id} ${e.name} — ${e.level} ${e.role} (${e.department}, шеф: ${e.manager}, отбор: ${e.team})`);
}
fs.mkdirSync(path.dirname(DB), { recursive: true });
fs.writeFileSync(DB, JSON.stringify(db, null, 2) + '\n');
fs.writeFileSync(CHART, renderChart(db));
console.log(`👥 Общо: ${db.employees.length}. Нови: ${hired}.`);
