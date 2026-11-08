#!/usr/bin/env node
// Office Chat: служителите от employees/employees.json си пишат съобщения.
// Всяко пускане генерира няколко кратки разговора (нишки) за реални игри от /arcade.
// Usage: node scripts/office-chat.js [threads]

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DB = path.join(ROOT, 'employees', 'employees.json');
const LOG = path.join(ROOT, 'employees', 'chat.json');
const PAGE = path.join(ROOT, 'OFFICE_CHAT.md');
const KEEP = 300;   // колко съобщения пазим в chat.json
const SHOW = 60;    // колко показваме в OFFICE_CHAT.md

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const chance = (p) => Math.random() < p;
const fill = (tpl, v) => tpl.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? `{${k}}`);

// Реални игри от /arcade (заглавието от <title>)
function loadGames() {
  const dir = path.join(ROOT, 'arcade');
  let files = [];
  try { files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')); } catch {}
  const sample = files.sort(() => Math.random() - 0.5).slice(0, 12);
  const games = sample.map((f) => {
    const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/<title>([^<]+)<\/title>/i);
    return { file: `arcade/${f}`, title: (m ? m[1] : f).trim() };
  });
  return games.length ? games : [{ file: 'index.html', title: 'Block World' }];
}

const WELCOME = [
  ['{boss}', 'Добре дошъл в екипа, {new}! Ти си нашият нов {role}. 🎉'],
  ['{new}', 'Благодаря, {boss}! Нямам търпение да почна. Откъде да започна?'],
  ['{boss}', 'Разгледай {game} — това ти е първата мисия.'],
  ['{mate}', 'Ей, {new}, добре дошъл! Съвет: кафемашината е на 3-ти етаж, а бъговете — навсякъде. ☕'],
];

const TASKS = [
  [
    ['{boss}', '{a}, можеш ли да провериш защо FPS-ът пада в {game}?'],
    ['{a}', 'Видях го. В draw() има цикъл, който рисува всичко всеки кадър. Ще го оптимизирам.'],
    ['{b}', 'Като свършиш, ми пиши — ще го тествам на телефон. 📱'],
    ['{a}', 'Готово, {b}! Пробвай сега.'],
    ['{b}', 'Стабилни 60 FPS. GG! ✅'],
  ],
  [
    ['{a}', '{b}, в {game} рекордът не се запазва след презареждане. И при теб ли е така?'],
    ['{b}', 'Да! Мисля, че е от localStorage ключа. Ще погледна engine.js.'],
    ['{boss}', 'Приоритет №1, хора. Играчите обичат рекордите си. 🏆'],
    ['{b}', 'Оправено — ключът беше с грешно име.'],
  ],
  [
    ['{a}', 'Имам идея за {game}: да добавим бонус ниво с двойни точки!'],
    ['{b}', 'Звучи як. Аз мога да направя звука с Web Audio — едно 8-bit „пиу-пиу". 🔊'],
    ['{boss}', 'Одобрявам. Направете прототип до петък.'],
  ],
  [
    ['{b}', 'Някой да е виждал, че в {game} се вижда текст на английски вместо на български?'],
    ['{a}', 'Видях го. Ще добавя превода — проектът е двуезичен все пак.'],
    ['{b}', 'Мерси! 🇧🇬'],
  ],
  [
    ['{a}', 'Тъкмо направих speedrun на {game} за 47 секунди. Някой да ме бие? ⏱️'],
    ['{b}', '47? Аз съм на 39. 😎'],
    ['{a}', 'Невъзможно! Покажи запис!'],
    ['{boss}', 'Хора... това брои ли се за тестване? 😅'],
    ['{b}', 'Разбира се, шефе. Много сериозно тестване.'],
  ],
  [
    ['{a}', 'Тъчът в {game} не реагира на iPad. Някой с идея?'],
    ['{b}', 'Сигурно липсва preventDefault на touchstart. Енджинът го има, провери дали играта ползва A.add.'],
    ['{a}', 'Точно това беше! Благодаря, {b}! 🙌'],
  ],
];

const CEO_LINES = [
  'Браво на всички! Компанията вече има {n} служители. 🚀',
  'Отличен напредък. Следващата цел: още по-бързи игри и нула бъгове.',
  'Видях работата по {game}. Впечатлен съм! 👔',
  'Напомняне: в петък има пица за целия екип. 🍕',
];

function load(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function run(threads) {
  const db = load(DB, { employees: [] });
  const staff = db.employees;
  const log = load(LOG, { messages: [], welcomed: [] });
  if (staff.length < 2) { console.log('Твърде малко служители за разговор.'); return log; }
  const games = loadGames();
  const now = Date.now();
  let t = 0;
  const post = (from, text, thread) =>
    log.messages.push({ time: new Date(now + (t++) * 37000).toISOString(), from, text, thread });
  const label = (e) => `${e.name} (${e.role})`;

  // 1) Посрещане на новите служители
  const fresh = staff.filter((e) => !log.welcomed.includes(e.id)).slice(-3);
  for (const e of fresh) {
    const mate = pick(staff.filter((x) => x.id !== e.id));
    const v = { boss: e.manager, new: e.name, role: e.role_bg, mate: mate.name, game: pick(games).title };
    const thread = `Добре дошъл, ${e.name}`;
    for (const [who, txt] of WELCOME) {
      const from = who === '{new}' ? label(e) : who === '{mate}' ? label(mate) : e.manager;
      post(from, fill(txt, v), thread);
    }
    log.welcomed.push(e.id);
  }

  // 2) Работни разговори между колеги
  for (let i = 0; i < threads; i++) {
    const a = pick(staff);
    const b = pick(staff.filter((x) => x.id !== a.id));
    const game = pick(games);
    const v = { a: a.name, b: b.name, boss: a.manager, game: game.title };
    const thread = `${game.title} (${game.file})`;
    for (const [who, txt] of pick(TASKS)) {
      const from = who === '{a}' ? label(a) : who === '{b}' ? label(b) : a.manager;
      post(from, fill(txt, v), thread);
    }
  }

  // 3) Понякога CEO-то се включва
  if (chance(0.4)) post('👔 CEO-Bot', fill(pick(CEO_LINES), { n: staff.length, game: pick(games).title }), 'Обява от CEO');

  log.messages = log.messages.slice(-KEEP);
  log.welcomed = log.welcomed.slice(-1000);
  return log;
}

function render(log) {
  const msgs = log.messages.slice(-SHOW);
  let md = `# 💬 Office Chat / Чат в офиса\n\n`;
  md += `> Служителите на CEO-Bot си говорят тук. Автоматично от \`scripts/office-chat.js\`. Последните ${msgs.length} съобщения.\n\n`;
  let cur = null;
  for (const m of msgs) {
    if (m.thread !== cur) { cur = m.thread; md += `\n### 🧵 ${cur}\n\n`; }
    md += `- \`${m.time.slice(11, 16)}\` **${m.from}:** ${m.text}\n`;
  }
  return md + '\n';
}

const threads = Math.max(1, parseInt(process.argv[2] || '2', 10));
const log = run(threads);
fs.mkdirSync(path.dirname(LOG), { recursive: true });
fs.writeFileSync(LOG, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(PAGE, render(log));
console.log(`💬 Общо съобщения в лога: ${log.messages.length}`);
