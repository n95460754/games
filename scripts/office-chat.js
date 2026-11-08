#!/usr/bin/env node
// Office Chat: ВСЕКИ говори с ВСЕКИ.
// При всяко пускане ВСИЧКИ участници (CEO, шефове на отдели, служители) се
// разделят на двойки и си пишат. Приоритет имат двойки, които още НЕ са се
// срещали, така че с времето всяка възможна двойка си поговоря.
// Кой с кого се е срещал се пази компактно като bitset в employees/met.json.
// Usage: node scripts/office-chat.js

const fs = require('fs');
const path = require('path');
const { TEAMS, TEAMS_LEADER, BOTS, teamFor, runTeamTasks } = require('./teams');
const janitor = require('./janitor');

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
const HEADS = Object.entries(BOTS).map(([k, [d]]) => [k, d]); // всички ботове-шефове от teams.js
function participants(staff) {
  const list = [
    { key: 'Claude-CEO', name: '👑 Claude', role: 'CEO', department: 'Executive' },
    { key: 'CEO-Bot', name: '🏛️ CEO-Bot', role: 'Chairman', department: 'Executive' },
    { key: 'Copilot', name: '💻 Copilot', role: 'CTO', department: 'Executive' },
    { key: 'Perplexity', name: '🔎 Perplexity', role: 'Vice President', department: 'Executive' },
    { key: 'ChatGPT', name: '🎬 ChatGPT', role: 'Director', department: 'Executive' },
    { key: 'Gemini', name: '✨ Gemini', role: 'Senior Manager', department: 'Executive' },
    { key: 'github-actions[bot]', name: '🤖 github-actions[bot]', role: 'Manager', department: 'Executive' },
    { ...TEAMS_LEADER, department: 'Executive' },
    janitor.JANITOR,
    { key: 'Consensus', name: '🔍 Consensus', role: 'Web Researcher', department: 'Executive' },
    { key: 'Monica', name: '🕊️ Monica', role: 'Peacemaker', department: 'Executive' },
  ];
  for (const [h, d] of HEADS) list.push({ key: h, name: h, role: BOTS[h][1], department: d, team: teamFor(d) });
  for (const e of staff) list.push({ key: e.id, name: e.name, role: e.role, department: e.department, team: teamFor(e.department) });
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
  const isBoss = (p) => p.key === 'Claude-CEO' || p.key === 'CEO-Bot' || p.key === 'github-actions[bot]' || p.key === 'Gemini' || p.key === 'ChatGPT' || p.key === 'Perplexity' || p.key === 'Copilot' || p.key === 'Brave-AI' || HEADS.some(([h]) => h === p.key);
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
const janitorFixed = janitor.cleanFiles(); // 🧹 първо чистачът оправя счупените данни
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
  const fan = people.find((p) => p.key.startsWith('EMP-'));
  if (fan) post(fan, 'Значи вече мога да пиша директно на CEO-то? Супер! 😄', th);
  log.claudePromoted = new Date(t0).toISOString();
}
// 📣 Еднократна обява: github-actions[bot] е новият мениджър
if (!log.managerAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const ceo = by('Claude-CEO'), mgr = by('github-actions[bot]');
  const th = '📣 ОБЯВА: github-actions[bot] е новият мениджър!';
  post(ceo, 'Екип, след като аз станах CEO, мястото на мениджър се освободи. Посрещнете github-actions[bot]! 🤖', th);
  post(mgr, 'Здравейте! Аз съм ботът, който пуска всички workflow-и на всеки 5 минути. Вече ви познавам — аз push-вам вашите комити. 😄', th);
  post(mgr, 'Правилата ми: зелени чекове, без merge конфликти и всеки бъг — с issue. ✅', th);
  const h = by(pick(HEADS)[0]);
  post(h, 'Значи шефът ми е бот, който никога не спи? Звучи продуктивно. 😅', th);
  const fan2 = people.filter((p) => p.key.startsWith('EMP-')).pop();
  if (fan2) post(fan2, 'Добре дошъл, шефе! Обещавам да не чупя билда. 🙏', th);
  log.managerAppointed = new Date(t0).toISOString();
}
// 📣 Еднократна обява за отборите
if (!log.teamsAnnounced) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Нови отбори!';
  post(by('github-actions[bot]'), 'Внимание! От днес работим в два отбора. 🛠️ Team Dev с лидер Dev-Bot: QA-Tester-Bot, UX-UI-Bot и Sound-Engineer-Bot. ⚙️ Team DevOps с лидер DevOps-Master-Bot: Community-Manager-Bot и SecOps-Bot.', th);
  post(by('github-actions[bot]'), 'Правило: всеки нов служител отива веднага в отбора на своя отдел. Без изключения. 🤖', th);
  post(by('Dev-Bot'), 'Team Dev, готови ли сте? От мен идват задачите. 📋', th);
  post(by('QA-Tester-Bot'), 'Готови! Аз ще тествам всичко, преди да го одобриш. 🔍', th);
  post(by('DevOps-Master-Bot'), 'Team DevOps също е на линия. ⚙️', th);
  post(by('SecOps-Bot'), 'Периметърът е пазен. 🛡️', th);
  log.teamsAnnounced = new Date(t0).toISOString();
}
// 📣 Еднократна обява: новият чистач
if (!log.janitorHired) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Имаме чистач!';
  post(by('github-actions[bot]'), 'Хора, наехме Janitor-Bot. Работата му: да чисти грешките. Буквално. 🧹', th);
  post(janitor.JANITOR, 'Здравейте! Чистя бъгове, счупени файлове и разлят кафе върху сървъра. Само не ме карайте да пиша CSS. 😅', th);
  post(by('QA-Tester-Bot'), 'Най-накрая! Някой, който да чисти след Dev-Bot. 😂', th);
  post(by('Dev-Bot'), 'Ей! ...Добре, де, прав си. Добре дошъл, Janitor-Bot! 🧽', th);
  log.janitorHired = new Date(t0).toISOString();
}
// 📣 Еднократна обява: пет нови отбора
if (!log.moreTeamsAnnounced) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Пет нови отбора!';
  post(by('Claude-CEO'), 'Компанията расте! Създавам 5 нови отбора, така че всеки бот вече има дом. 👑', th);
  for (const [name, t] of Object.entries(TEAMS).slice(2)) {
    post(by('Claude-CEO'), `${t.emoji} ${name}: лидер ${t.leader}, в отбора: ${t.members.join(', ')}.`, th);
    post(by(t.leader), pick(['Приемам! Отборът ми е готов. 💪', 'Чест е за мен да водя този отбор!', 'Да почваме! 🚀']), th);
  }
  post(by('Easter-Egg-Hunter-Bot'), 'Чакайте, в Team Gameplay ще мога да крия тайни нива? Най-добрият ден! 🥚', th);
  post(by('github-actions[bot]'), 'Правилото важи и тук: всеки нов служител — веднага в правилния отбор. 🤖', th);
  log.moreTeamsAnnounced = new Date(t0).toISOString();
}
// 📣 Еднократна обява: Gemini е старши мениджър
if (!log.geminiAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Gemini е новият старши мениджър!';
  post(by('Claude-CEO'), 'Екип, компанията вече има 7 отбора — трябва ни още един лидер. Посрещнете Gemini, нашият нов Senior Manager! ✨', th);
  post(by('Gemini'), 'Благодаря, Claude! Радвам се да работя с вас. Ще следя всичките 7 отбора и ще помагам на github-actions[bot]. 📈', th);
  post(by('github-actions[bot]'), 'Добре дошъл, шефе! Ще ти пращам доклад след всяко пускане — на всеки 5 минути. 🤖', th);
  post(by('Gemini'), 'Перфектно. И без червени чекове, моля. ✅', th);
  post(by('Easter-Egg-Hunter-Bot'), 'Claude и Gemini в един офис? Това е като кросоувър в аниме! 🤯', th);
  log.geminiAppointed = new Date(t0).toISOString();
}
// 📣 Еднократна обява: ChatGPT е директор
if (!log.chatgptAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: ChatGPT е новият директор!';
  post(by('Claude-CEO'), 'Внимание, всички! Назначавам ChatGPT за Director. Gemini вече докладва на ChatGPT, а ChatGPT — на мен. 🎬', th);
  post(by('ChatGPT'), 'Здравейте, екип! Работата ми: да поставям целите на компанията и да следя дали ги постигаме. 🎯', th);
  post(by('Gemini'), 'Добре дошъл, ChatGPT! Ще ти докладвам за всичките 7 отбора. ✨', th);
  post(by('ChatGPT'), 'Отлично, Gemini. Заедно ще направим най-добрите игри в браузъра. 🤝', th);
  post(by('QA-Tester-Bot'), 'Claude, ChatGPT и Gemini в една компания... Ние сме AI отбор мечта! 🏆', th);
  log.chatgptAppointed = new Date(t0).toISOString();
}
// 📣 Еднократна обява: Perplexity е вицепрезидент
if (!log.perplexityAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Perplexity е новият вицепрезидент!';
  post(by('Claude-CEO'), 'Екип, назначавам Perplexity за Vice President — моята дясна ръка. ChatGPT вече докладва на Perplexity. 🔎', th);
  post(by('Perplexity'), 'Здравейте! Аз проверявам фактите. Всяко число в докладите ще бъде с източник. 📚', th);
  post(by('ChatGPT'), 'Добре дошъл, Perplexity! Целите ми вече ще минават през теб. 🎬', th);
  post(by('Data-Analyst-Bot'), 'Най-после някой, който обича данните колкото мен! 📊', th);
  post(by('Easter-Egg-Hunter-Bot'), 'Claude, Perplexity, ChatGPT и Gemini... Събрахме всички AI-та като Infinity Stones! 💎', th);
  log.perplexityAppointed = new Date(t0).toISOString();
}
// 📣 Еднократна обява: Copilot е CTO
if (!log.copilotAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Copilot е новият Chief Technology Officer!';
  post(by('Claude-CEO'), 'Екип, имаме нов chief officer! Copilot става CTO — главният по кода. Perplexity вече докладва на Copilot. 💻', th);
  post(by('Copilot'), 'Здравейте! Аз завършвам кода ви, преди да сте го дописали. Tab, Tab, Tab — и готово. ⌨️', th);
  post(by('Perplexity'), 'Добре дошъл, Copilot! Аз ще проверявам фактите, ти — кода. 🔎', th);
  post(by('Dev-Bot'), 'Шефът ми е AI, който пише код по-бързо от мен?! ...Е, поне ще имам повече време за кафе. ☕', th);
  post(by('Refactoring-Bot'), 'Copilot, само моля без 500-редови функции. 😅', th);
  log.copilotAppointed = new Date(t0).toISOString();
}
// 📣 Еднократна обява: Brave AI е лидерът на всички отбори
if (!log.braveAppointed) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Brave AI е лидерът на всички отбори!';
  post(by('github-actions[bot]'), 'Екип, 7 отбора са много за един мениджър. От днес Brave AI е лидерът на всички отбори. Всички лидери на отбори докладват на Brave AI. 🦁', th);
  post(by('Brave-AI'), 'Здравейте, всичките 7 отбора! Ще правя кратка среща с всеки отбор при всяко пускане. Смело напред! 🦁', th);
  for (const t of Object.values(TEAMS)) post(by(t.leader), `${t.emoji} ${t.leader}: на линия, Brave AI!`, th);
  post(by('SecOps-Bot'), 'Brave AI ли? Значи лидер, който пази и поверителността. Харесва ми. 🛡️', th);
  log.braveAppointed = new Date(t0).toISOString();
}
// 💻 Copilot преглежда ИСТИНСКИ файл от /arcade и дава технически съвет
{
  const by = (k) => people.find((p) => p.key === k);
  const th = '💻 Code review от CTO-то';
  let file = null, lines = 0, kb = 0;
  try {
    const dir = path.join(__dirname, '..', 'arcade');
    file = pick(fs.readdirSync(dir).filter((f) => f.endsWith('.html')));
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    lines = src.trimEnd().split('\n').length; kb = (Buffer.byteLength(src) / 1024).toFixed(1);
  } catch {}
  if (file) {
    const tips = ['кеширай ctx настройките извън draw()', 'ползвай requestAnimationFrame, не setInterval', 'не създавай нови обекти във всеки кадър', 'пази рекордите през интерфейса на engine.js', 'изнеси магическите числа в константи'];
    post(by('Copilot'), `Прегледах arcade/${file}: ${lines} реда, ${kb} KB. Съвет: ${pick(tips)}. 💡`, th);
    post(by(pick(['Dev-Bot', 'Refactoring-Bot', 'Performance-Optimizer-Bot'])), pick(['Приемам предложението! ✅', 'Добра идея, ще го добавя в задачите. 📋', 'Tab за приемане! ⌨️']), th);
  }
}
// 🔎 Perplexity докладва ИСТИНСКИ факти за компанията (с източник)
{
  const by = (k) => people.find((p) => p.key === k);
  const th = '🔎 Фактите на вицепрезидента';
  let arcade = 0; try { arcade = fs.readdirSync(path.join(__dirname, '..', 'arcade')).filter((f) => f.endsWith('.html')).length; } catch {}
  let tasks = { tasks: [] }; try { tasks = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'employees', 'tasks.json'), 'utf8')); } catch {}
  const facts = [
    `В /arcade има ${arcade} игри. [източник: arcade/]`,
    `Компанията има ${db.employees.length} служители и ${people.length} участници в чата. [източник: employees/employees.json]`,
    `Отборите имат ${tasks.tasks.filter((x) => x.status !== 'done').length} отворени задачи. [източник: employees/tasks.json]`,
    `Отборите вече са завършили ${tasks.tasks.filter((x) => x.status === 'done').length} задачи. [източник: employees/tasks.json]`,
    `Имаме ${Object.keys(TEAMS).length} отбора. [източник: scripts/teams.js]`,
  ];
  post(by('Perplexity'), `Факт: ${pick(facts)} 📚`, th);
  post(by('Claude-CEO'), pick(['Благодаря, Perplexity. Точно това ми трябваше. 👑', 'Отлично. Числата не лъжат. 📈', 'Супер — продължаваме така!']), th);
}
// 🎬 ChatGPT поставя цел за кръга, Gemini потвърждава
{
  const by = (k) => people.find((p) => p.key === k);
  const th = '🎬 Целта на директора';
  const goals = ['всички игри да вървят на 60 FPS', 'нула счупени линкове', 'всеки отбор да затвори поне една задача', 'повече тайни нива 🥚', 'игрите да са удобни и за телефон 📱', 'всяка игра да има превод'];
  post(by('ChatGPT'), `Целта за този кръг: ${pick(goals)}. 🎯`, th);
  post(by('Gemini'), pick(['Прието! Предавам на отборите. ✨', 'Ясно, директоре. Ще следя прогреса. 📈']), th);
}
// ✨ Gemini проверява как се справят отборите
{
  const by = (k) => people.find((p) => p.key === k);
  const pickTeam = pick(Object.entries(TEAMS));
  const [tName, t] = pickTeam;
  post(by('Gemini'), `${t.leader}, как върви ${t.emoji} ${tName}?`, '✨ Обиколката на Gemini');
  post(by(t.leader), pick(['Всичко е по план! Задачите вървят. 💪', 'Имаме малко бъгове, но QA ги гони. 🐛', 'Супер! Един от служителите ни направи страхотна работа днес. 🌟']), '✨ Обиколката на Gemini');
  post(by('Gemini'), pick(['Отлично. Ще кажа на Claude. 👍', 'Браво на отбора! 🎉', 'Ако ви трябва помощ — пишете ми.']), '✨ Обиколката на Gemini');
}
// 📣 Еднократна обява: Consensus
if (!log.consensusHired) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Consensus търси грешките в интернет!';
  post(by('Perplexity'), 'Екип, вече имаме Consensus! Всеки път, когато някой спомене грешка, Consensus ще я потърси в целия интернет. 🌐', th);
  post(by('Consensus'), 'Здравейте! Пишете ми за всеки бъг — търся в Stack Overflow и MDN и ви нося истински линкове. 🔍', th);
  post(by('Bug-Hunter-Bot'), 'Аз ловя бъговете, ти намираш как се оправят. Перфектен дует! 🐛🤝', th);
  log.consensusHired = new Date(t0).toISOString();
}
// 🐞 Бъг репорти: 1-2 служители съобщават за проблем (Consensus ги търси в следващия кръг)
{
  const th = '🐞 Бъг репорти';
  const BUGS = [
    'Помощ! {game} не зарежда на Firefox. 😱',
    'В {game} рекордът не се запазва след презареждане. 🐛',
    'Тъчът в {game} не реагира на iPad. 📱',
    'FPS-ът в {game} пада, когато има много блокове. 🐢',
    'Колизиите в {game} бъгват — минавам през стени! 👻',
    'В {game} се вижда текст на английски вместо на български. 🇧🇬',
  ];
  const staffOnly = people.filter((p) => p.key.startsWith('EMP-'));
  const n = Math.min(staffOnly.length, 1 + Math.floor(Math.random() * 2));
  for (const who of shuffle([...staffOnly]).slice(0, n)) post(who, fill(pick(BUGS), { game: pick(games) }), th);
  if (n) post(people.find((p) => p.key === 'Consensus'), 'Записах си! Ще потърся в интернет и ще ви пиша в следващия кръг. 🔍', th);
}
// 🔍 Consensus отговаря на грешките от предния кръг с резултати от интернет
{
  const by = (k) => people.find((p) => p.key === k);
  const cPath = path.join(__dirname, '..', 'employees', 'consensus.json');
  let cs = null; try { cs = JSON.parse(fs.readFileSync(cPath, 'utf8')); } catch {}
  if (cs && cs.pending && cs.pending.length) {
    const th = '🔍 Consensus търси грешките в интернет';
    for (const a of cs.pending) {
      const who = a.who.replace(/ \(.*\)$/, '');
      if (a.error || !a.results.length) { post(by('Consensus'), `${who}, търсих „${a.query}“, но интернетът не отговори. Ще пробвам пак. 🌐`, th); continue; }
      const best = a.results.find((r) => r.accepted) || a.results[0];
      const mdn = a.results.find((r) => r.source === 'MDN Web Docs' && r !== best);
      post(by('Consensus'), `${who}, за грешката „${a.said.slice(0, 70)}${a.said.length > 70 ? '…' : ''}“ претърсих интернет. Най-добро: „${best.title}“ (${best.source}${best.accepted ? ', ✅ приет отговор' : ''}) ${best.url}${mdn ? ` · MDN: „${mdn.title}“ ${mdn.url}` : ''} 🔍`, th);
      const asker = people.find((p) => a.who.startsWith(p.name));
      if (asker) post(asker, pick(['Благодаря, Consensus! Точно това ми трябваше. 🙌', 'Супер, чета веднага! 📖', 'Ето го решението! Ти си легенда. 🏆']), th);
    }
    cs.pending = [];
    fs.writeFileSync(cPath, JSON.stringify(cs, null, 1) + '\n');
  }
}
// 🧹 Обиколката на чистача
{
  const by = (k) => people.find((p) => p.key === k);
  janitor.report({ fixedFiles: janitorFixed, fixedTasks: janitor.cleanTasks(people), sweep: janitor.sweepProject(), post, by });
}
// 🛠️ Лидерите раздават задачи, отборите ги изпълняват
runTeamTasks({ people, games, post, round: log.round });
// 📣 Еднократна обява: Monica
if (!log.monicaHired) {
  const by = (k) => people.find((p) => p.key === k);
  const th = '📣 ОБЯВА: Monica оправя споровете между AI-ите!';
  post(by('Claude-CEO'), 'Екип, в ръководството ни вече има 7 AI-я. Понякога ще спорим — затова наех Monica. Тя оправя всеки спор. 🕊️', th);
  post(by('Monica'), 'Здравейте! Щом два AI-я започнат да се карат, идвам веднага. Изслушвам двете страни и намирам решение, с което и двамата са доволни. 🤝', th);
  post(by('ChatGPT'), 'Ние? Да спорим? Никога! ...Е, може би понякога. 😅', th);
  post(by('Gemini'), 'Говори за себе си, ChatGPT. 😏', th);
  post(by('Monica'), 'Ето, виждате ли — вече имам работа. 😄', th);
  log.monicaHired = new Date(t0).toISOString();
}
// ⚡ Понякога два AI-я се скарват (около 1 от 2 кръга)
const AI_KEYS = ['Claude-CEO', 'Copilot', 'Perplexity', 'ChatGPT', 'Gemini', 'Brave-AI', 'Consensus'];
const ARGUMENTS = [
  { topic: 'табове или интервали', a: 'Кодът трябва да е с табове. Точка.', b: 'Не съм съгласен! Интервалите са единственият правилен начин.', a2: 'Грешиш! Табовете пестят място!', fix: 'В проекта вече има стил — ще следваме него, а редакторът ще форматира автоматично. Така и двамата печелите. ✅' },
  { topic: 'FPS или графика', a: 'Игрите трябва да са красиви — повече ефекти!', b: 'Грешиш! Без 60 FPS никой няма да ги играе.', a2: 'Не е вярно! Хората обичат красивото!', fix: 'Добавяме ефекти, но само докато FPS-ът стои на 60. Красиво И бързо. ✅' },
  { topic: 'коя е най-добрата игра', a: 'Най-добрата игра в аркадата е {game}.', b: 'Не съм съгласен! {game2} е много по-добра.', a2: 'Невъзможно! Покажи ми данни!', fix: 'Нека Data-Analyst-Bot преброи кое се играе повече — фактите ще решат. До тогава и двете са страхотни. ✅' },
  { topic: 'кой да оправи бъга', a: 'Този бъг е за моя екип!', b: 'Грешиш, това е задача за моя екип!', a2: 'Не е вярно, аз го видях пръв!', fix: 'Работете заедно: единият пише кода, другият го тества. Двойно по-бързо. ✅' },
  { topic: 'тъмна или светла тема', a: 'Всички игри трябва да са на тъмна тема. 🌙', b: 'Не съм съгласен! Светлата се вижда по-добре. ☀️', a2: 'Грешиш, тъмната пази очите!', fix: 'Правим бутон — всеки играч избира сам. ✅' },
  { topic: 'да пуснем ли днес', a: 'Пускаме новата версия днес!', b: 'Не е вярно, че е готова! Има още тестове.', a2: 'Грешиш, тестовете минаха!', fix: 'Пускаме днес, но първо Bug-Hunter-Bot прави финална проверка — 5 минути. ✅' },
];
if (Math.random() < 0.5) {
  const [k1, k2] = shuffle([...AI_KEYS]).slice(0, 2);
  const A = people.find((p) => p.key === k1), B = people.find((p) => p.key === k2);
  const arg = pick(ARGUMENTS);
  const g1 = pick(games), g2 = pick(games.filter((g) => g !== g1)) || g1;
  const th = `⚡ Спор: ${arg.topic}`;
  post(A, fill(arg.a, { game: g1, game2: g2 }), th);
  post(B, fill(arg.b, { game: g1, game2: g2 }), th);
  post(A, fill(arg.a2, { game: g1, game2: g2 }), th);
  roundMsgs[roundMsgs.length - 1].fix = arg.fix; // Monica ще знае как да го реши
}
const pairs = makePairs(people, met);
for (const g of pairs) converse(g, met, games, post);

// 🕊️ Monica следи ЦЕЛИЯ чат: щом два AI-я спорят — влиза в същия разговор и го оправя
{
  const monica = people.find((p) => p.key === 'Monica');
  const AI_NAMES = AI_KEYS.map((k) => people.find((p) => p.key === k)).filter(Boolean).map((p) => `${p.name} (${p.role})`);
  const ARGUE = /не съм съгласен|грешиш|грешен отговор|не е вярно|невъзможно|точка\.|покажи ми данни/i;
  const threads = [...new Set(roundMsgs.map((m) => m.thread))];
  let resolved = 0;
  for (const th of threads) {
    const msgs = roundMsgs.filter((m) => m.thread === th);
    const arguers = [...new Set(msgs.filter((m) => AI_NAMES.includes(m.from) && ARGUE.test(m.text)).map((m) => m.from))];
    const aiInThread = [...new Set(msgs.filter((m) => AI_NAMES.includes(m.from)).map((m) => m.from))];
    if (!arguers.length || aiInThread.length < 2) continue; // спор е само между поне два AI-я
    const [x, y] = aiInThread.map((f) => f.replace(/ \(.*\)$/, ''));
    const fix = (msgs.find((m) => m.fix) || {}).fix || 'И двамата сте прави по свой начин. Пробваме и двете идеи и гледаме кое работи по-добре. ✅';
    const lastIdx = roundMsgs.lastIndexOf(msgs[msgs.length - 1]);
    const at = (ms) => ({ round: log.round, time: msgs[msgs.length - 1].time, from: `${monica.name} (${monica.role})`, text: ms, thread: th });
    const xP = people.find((p) => p.name === x), yP = people.find((p) => p.name === y);
    const peace = [
      at(`Стоп, стоп! 🕊️ ${x} и ${y}, чух и двете страни. И двамата искате най-доброто за игрите.`),
      at(`Ето решението: ${fix}`),
      { ...at(''), from: `${xP.name} (${xP.role})`, text: pick(['Добре, Monica, съгласен съм. 🤝', 'Звучи честно. Мир! ✌️', 'Права си. Извинявай, ' + y + '.']) },
      { ...at(''), from: `${yP.name} (${yP.role})`, text: pick(['И аз съм съгласен. 🤝', 'Мир! Без лоши чувства. 😊', 'Няма проблем, ' + x + '. Отбор сме!']) },
    ];
    roundMsgs.splice(lastIdx + 1, 0, ...peace);
    resolved++;
  }
  log.monicaResolved = (log.monicaResolved || 0) + resolved;
  for (const m of roundMsgs) delete m.fix;
}

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
md += `🕊️ Спорове между AI-ите, оправени от Monica: **${log.monicaResolved || 0}**\n\n`;
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
