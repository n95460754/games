#!/usr/bin/env node
// Office Chat: ВСЕКИ говори с ВСЕКИ.
// При всяко пускане ВСИЧКИ участници (CEO, шефове на отдели, служители) се
// разделят на двойки и си пишат. Приоритет имат двойки, които още НЕ са се
// срещали, така че с времето всяка възможна двойка си поговоря.
// Кой с кого се е срещал се пази компактно като bitset в employees/met.json.
// Usage: node scripts/office-chat.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DB = path.join(ROOT, 'employees', 'employees.json');
const LOG = path.join(ROOT, 'employees', 'chat.json');
const MET = path.join(ROOT, 'employees', 'met.json');
const PAGE = path.join(ROOT, 'OFFICE_CHAT.md');
const KEEP = 600; // съобщения в chat.json (пазим малко, за да не се надува репото)

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fill = (tpl, v) => tpl.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? `{${k}}`);
const load = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };

// ---------- Участници (стабилен ред -> стабилни индекси за bitset) ----------
const HEADS = [
  ['Dev-Bot', 'Engineering'], ['QA-Tester-Bot', 'Quality'], ['UX-UI-Bot', 'Design'],
  ['Sound-Engineer-Bot', 'Audio'], ['SecOps-Bot', 'Security'],
  ['DevOps-Master-Bot', 'Operations'], ['Community-Manager-Bot', 'Community'],
];
function participants(staff) {
  const list = [
    { key: 'Claude-CEO', name: '👑 Claude', role: 'CEO', department: 'Executive' },
    { key: 'CEO-Bot', name: '🏛️ CEO-Bot', role: 'Chairman', department: 'Executive' },
  ];
  for (const [h, d] of HEADS) list.push({ key: h, name: h, role: 'Head of ' + d, department: d });
  for (const e of staff) list.push({ key: e.id, name: e.name, role: e.role, department: e.department });
  return list;
}

// ---------- Bitset "кой с кого се е срещал" ----------
// met.json = { order: [keys...], bits: { key: base64 } }
function loadMet() { return load(MET, { order: [], bits: {} }); }
function idxOf(met, key) {
  let i = met.order.indexOf(key);
  if (i < 0) { met.order.push(key); i = met.order.length - 1; }
  return i;
}
function getBits(met, key) { return Buffer.from(met.bits[key] || '', 'base64'); }
function hasMet(met, a, b) {
  const bits = getBits(met, a.key), i = met._idx.get(b.key);
  return (bits[i >> 3] || 0) & (1 << (i & 7));
}
function markOne(met, key, i) {
  let bits = getBits(met, key);
  if (bits.length <= i >> 3) { const nb = Buffer.alloc((i >> 3) + 1); bits.copy(nb); bits = nb; }
  bits[i >> 3] |= 1 << (i & 7);
  met.bits[key] = bits.toString('base64');
}
function markMet(met, a, b) { markOne(met, a.key, met._idx.get(b.key)); markOne(met, b.key, met._idx.get(a.key)); }
function metCount(met, p) {
  let c = 0;
  for (const byte of getBits(met, p.key)) { let x = byte; while (x) { c += x & 1; x >>= 1; } }
  return c;
}

// ---------- Двойки: първо тези, които още не са се срещали ----------
function makePairs(people, met) {
  const free = shuffle([...people]);
  const pairs = [];
  while (free.length > 1) {
    const a = free.shift();
    let j = free.findIndex((b) => !hasMet(met, a, b));
    if (j < 0) j = 0;
    pairs.push([a, free.splice(j, 1)[0]]);
  }
  if (free.length) pairs[pairs.length - 1].push(free[0]); // нечетен брой -> група от 3
  return pairs;
}

// ---------- Реални игри от /arcade ----------
function loadGames() {
  const dir = path.join(ROOT, 'arcade');
  let files = [];
  try { files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')); } catch {}
  const out = shuffle(files).slice(0, 40).map((f) => {
    const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/<title>([^<]+)<\/title>/i);
    return (m ? m[1] : f).trim();
  });
  return out.length ? out : ['Block World'];
}

// ---------- Реплики ----------
const FIRST_MEET = [
  ['Здрасти, {b}! Мисля, че не сме се запознавали. Аз съм {a}, {arole} от {adep}.', 'Приятно ми е, {a}! Аз съм {brole} в {bdep}. Най-накрая се срещаме! 🤝'],
  ['Ей, {b}! Ти ли си новият от {bdep}?', 'Аз съм! {brole}. А ти с какво се занимаваш?', 'Аз съм {arole}. Ако имаш бъг в {game} — пиши ми.'],
  ['{b}, видях името ти в org chart-а. Аз съм {a} от {adep}. 👋', 'Здрасти! Супер, че ми писа. Каква е любимата ти игра от аркадата?', 'Определено {game}. А твоята?', '{game2}! Трябва да се надиграем някой път. 🎮'],
];
const AGAIN = [
  ['{b}, как върви работата по {game}?', 'Добре! Почти съм готов. Ти?', 'И аз. Кафе после? ☕'],
  ['{b}, имаш ли минутка за {game}? Колизиите там нещо бъгват.', 'Разбира се. Сигурно е от хитбокса. Пращай линк.'],
  ['Пак ти, {b}! 😄 Рекордът ти в {game} още ли стои?', 'Стои! Опитай се да го биеш.', 'Приемам предизвикателството! 🏆'],
  ['{b}, видя ли новото съобщение от Claude?', 'Видях. Новият CEO черпи пица в петък! 🍕', 'Най-добрата новина тази седмица.'],
  ['{b}, мисля да добавим тъмна тема на {game}. Мнение?', 'Да! И нощни цветове на блоковете. 🌙'],
  ['{b}, можеш ли да прегледаш кода ми за {game}?', 'Давай. Само без глобални променливи, моля. 😅', 'Обещавам!'],
  ['Спешно, {b}! {game} не зарежда на Firefox!', 'Спокойно, пробвах — просто кешът ти е стар. Ctrl+F5. 😉', 'Ох... благодаря!'],
  ['{b}, кой е по-добър: {game} или {game2}?', '{game2}, без съмнение.', 'Грешен отговор, но те уважавам. 😂'],
];
const BOSS_LINES = [
  ['{b}, как се чувстваш в екипа?', 'Страхотно! Много неща научих вече.', 'Радвам се. Продължавай така! 💪'],
  ['{b}, отличната ти работа по {game} беше забелязана.', 'Благодаря! Екипът ми помогна много.'],
];

function converse(group, met, games, post) {
  const [a, b, c] = group;
  const isBoss = (p) => p.key === 'Claude-CEO' || p.key === 'CEO-Bot' || HEADS.some(([h]) => h === p.key);
  const first = !hasMet(met, a, b);
  const pool = first ? FIRST_MEET : (isBoss(a) && !isBoss(b) ? BOSS_LINES : AGAIN);
  const g1 = pick(games); let g2 = pick(games); if (g2 === g1 && games.length > 1) g2 = games.find((g) => g !== g1);
  const v = { a: a.name, b: b.name, arole: a.role, brole: b.role, adep: a.department, bdep: b.department, game: g1, game2: g2 };
  const lines = pick(pool);
  const thread = `${a.name} ↔ ${b.name}${c ? ' ↔ ' + c.name : ''}${first ? ' · 🆕 първа среща' : ''}`;
  lines.forEach((txt, i) => post(i % 2 ? b : a, fill(txt, v), thread));
  if (c) post(c, `Мога ли да се включа? Аз съм ${c.name}, ${c.role}. Здравейте и двамата! 👋`, thread);
  markMet(met, a, b);
  if (c) { markMet(met, a, c); markMet(met, b, c); }
}

// ---------- Main ----------
const db = load(DB, { employees: [] });
const people = participants(db.employees);
const log = load(LOG, { round: 0, messages: [] });
const met = loadMet();
met._idx = new Map(people.map((p) => [p.key, idxOf(met, p.key)]));

log.round = (log.round || 0) + 1;
const games = loadGames();
const roundMsgs = [];
const t0 = Date.now();
const post = (who, text, thread) => {
  const m = { round: log.round, time: new Date(t0 + roundMsgs.length * 1000).toISOString(), from: `${who.name} (${who.role})`, text, thread };
  roundMsgs.push(m);
};
// 📣 Еднократна обява за повишението на Claude
if (!log.claudePromoted) {
  const by = (k) => people.find((p) => p.key === k);
  const ceo = by('Claude-CEO'), chair = by('CEO-Bot');
  const th = '📣 ОБЯВА: Claude е новият CEO!';
  post(chair, 'Внимание, всички! От днес Claude-Manager е повишен на CEO на компанията. Аз оставам председател на борда. 🏛️', th);
  post(ceo, 'Благодаря на всички! Целта ми като CEO: повече игри, нула бъгове и стабилни 60 FPS навсякъде. Вратата ми е винаги отворена. 👑', th);
  const cheers = shuffle(['Поздравления, шефе! 🎉', 'Заслужено! 👏', 'Ура за новия CEO! 🚀', 'Моят отдел е с теб, Claude! 💪']);
  shuffle([...HEADS]).slice(0, 3).forEach(([h], i) => post(by(h), cheers[i], th));
  const fan = people.find((p) => !p.key.endsWith('-Bot') && p.key !== 'Claude-CEO');
  if (fan) post(fan, 'Значи вече мога да пиша директно на CEO-то? Супер! 😄', th);
  log.claudePromoted = new Date(t0).toISOString();
}
const pairs = makePairs(people, met);
for (const g of pairs) converse(g, met, games, post);

log.messages = log.messages.concat(roundMsgs).slice(-KEEP);
delete met._idx;

// Статистика: колко от всички възможни двойки вече са се срещали
const n = people.length;
const total = (n * (n - 1)) / 2;
const metPairs = people.reduce((s, p) => s + metCount(met, p), 0) / 2;
const pct = total ? ((metPairs / total) * 100).toFixed(1) : '0';
const loners = people.filter((p) => metCount(met, p) < n - 1).length;

let md = `# 💬 Office Chat / Чат в офиса\n\n`;
md += `> Всеки говори с всеки. Автоматично от \`scripts/office-chat.js\` при всяко пускане на HR-Bot.\n\n`;
md += `| Кръг | Участници | Разговори в този кръг | Срещнали се двойки | Прогрес |\n|---|---|---|---|---|\n`;
md += `| #${log.round} | ${n} | ${pairs.length} | ${metPairs} / ${total} | **${pct}%** ${'🟩'.repeat(Math.round(pct / 10))}${'⬜'.repeat(10 - Math.round(pct / 10))} |\n\n`;
md += loners ? `_Още ${loners} души не са говорили с абсолютно всички._\n` : `🎉 **Всеки вече е говорил с всеки!** Сега си говорят като стари приятели.\n`;
md += `\n## Кръг #${log.round} — всички разговори\n`;
let cur = null;
for (const m of roundMsgs) {
  if (m.thread !== cur) { cur = m.thread; md += `\n### 🧵 ${cur}\n\n`; }
  md += `- **${m.from}:** ${m.text}\n`;
}

fs.mkdirSync(path.dirname(LOG), { recursive: true });
fs.writeFileSync(LOG, JSON.stringify(log, null, 1) + '\n');
fs.writeFileSync(MET, JSON.stringify(met) + '\n');
fs.writeFileSync(PAGE, md);
console.log(`💬 Кръг #${log.round}: ${n} участници, ${pairs.length} разговора, срещнати двойки ${metPairs}/${total} (${pct}%)`);
