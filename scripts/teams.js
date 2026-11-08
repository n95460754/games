// Отбори и задачи.
// 🛠️ Team Dev        — Dev-Bot: QA-Tester-Bot, UX-UI-Bot, Sound-Engineer-Bot
// ⚙️ Team DevOps     — DevOps-Master-Bot: Community-Manager-Bot, SecOps-Bot
// 🎮 Team Gameplay   — Game-Physics-Bot: Level-Designer-Bot, AI-Trainer-Bot, Easter-Egg-Hunter-Bot
// 🚀 Team Release    — Release-Manager-Bot: Build-Master-Bot, Performance-Optimizer-Bot, Refactoring-Bot, Bug-Hunter-Bot
// 🌍 Team Experience — Accessibility-Bot: Localization-Bot, Documentation-Bot, UI-Animation-Bot, Asset-Manager-Bot
// 📊 Team Data       — Data-Analyst-Bot: Database-Admin-Bot, API-Integration-Bot, Growth-Hacker-Bot
// 🔮 Team Future Lab — Chief-Visionary-Bot: Metaverse-Architect-Bot, Crypto-Tokenomics-Bot
// ПРАВИЛО: всеки нов служител влиза в отбора на своя отдел (teamFor).
// Ако някой ден се добави отдел без отбор, teamFor хвърля грешка и HR-Bot спира,
// вместо да наеме служител без отбор.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TASKS = path.join(ROOT, 'employees', 'tasks.json');
const PAGE = path.join(ROOT, 'TEAMS.md');

const TEAMS = {
  'Team Dev': {
    emoji: '🛠️',
    leader: 'Dev-Bot',
    members: ['QA-Tester-Bot', 'UX-UI-Bot', 'Sound-Engineer-Bot'],
    departments: ['Engineering', 'Quality', 'Design', 'Audio'],
    reviewer: 'QA-Tester-Bot', // QA проверява всяка задача преди Dev-Bot да я одобри
  },
  'Team DevOps': {
    emoji: '⚙️',
    leader: 'DevOps-Master-Bot',
    members: ['Community-Manager-Bot', 'SecOps-Bot'],
    departments: ['Operations', 'Community', 'Security'],
    reviewer: 'DevOps-Master-Bot',
  },
  // ---- Нови отбори (лидерите и членовете са избрани от Claude) ----
  'Team Gameplay': {
    emoji: '🎮',
    leader: 'Game-Physics-Bot',          // физиката е сърцето на всяка игра
    members: ['Level-Designer-Bot', 'AI-Trainer-Bot', 'Easter-Egg-Hunter-Bot'],
    departments: ['Gameplay'],
    reviewer: 'Level-Designer-Bot',      // пробва всяко ниво преди одобрение
  },
  'Team Release': {
    emoji: '🚀',
    leader: 'Release-Manager-Bot',       // решава кога нещо е готово за играчите
    members: ['Build-Master-Bot', 'Performance-Optimizer-Bot', 'Refactoring-Bot', 'Bug-Hunter-Bot'],
    departments: ['Release'],
    reviewer: 'Bug-Hunter-Bot',          // нищо не излиза без лов на бъгове
  },
  'Team Experience': {
    emoji: '🌍',
    leader: 'Accessibility-Bot',         // игрите трябва да са за ВСИЧКИ
    members: ['Localization-Bot', 'Documentation-Bot', 'UI-Animation-Bot', 'Asset-Manager-Bot'],
    departments: ['Experience'],
    reviewer: 'Accessibility-Bot',
  },
  'Team Data': {
    emoji: '📊',
    leader: 'Data-Analyst-Bot',          // знае кои игри се играят най-много
    members: ['Database-Admin-Bot', 'API-Integration-Bot', 'Growth-Hacker-Bot'],
    departments: ['Data'],
    reviewer: 'Database-Admin-Bot',
  },
  'Team Future Lab': {
    emoji: '🔮',
    leader: 'Chief-Visionary-Bot',       // мечтае за следващата голяма игра
    members: ['Metaverse-Architect-Bot', 'Crypto-Tokenomics-Bot'],
    departments: ['Innovation'],
    reviewer: 'Chief-Visionary-Bot',
  },
};

// Всички ботове-шефове: отдел + длъжност (за чата и задачите)
const BOTS = {
  'Dev-Bot': ['Engineering', 'Head of Engineering'], 'QA-Tester-Bot': ['Quality', 'Head of Quality'],
  'UX-UI-Bot': ['Design', 'Head of Design'], 'Sound-Engineer-Bot': ['Audio', 'Head of Audio'],
  'SecOps-Bot': ['Security', 'Head of Security'], 'DevOps-Master-Bot': ['Operations', 'Head of Operations'],
  'Community-Manager-Bot': ['Community', 'Head of Community'],
  'Game-Physics-Bot': ['Gameplay', 'Physics Lead'], 'Level-Designer-Bot': ['Gameplay', 'Level Designer'],
  'AI-Trainer-Bot': ['Gameplay', 'NPC AI Trainer'], 'Easter-Egg-Hunter-Bot': ['Gameplay', 'Secrets Designer'],
  'Release-Manager-Bot': ['Release', 'Release Manager'], 'Build-Master-Bot': ['Release', 'Build Master'],
  'Performance-Optimizer-Bot': ['Release', 'Performance Optimizer'], 'Refactoring-Bot': ['Release', 'Refactoring Expert'],
  'Bug-Hunter-Bot': ['Release', 'Bug Hunter'],
  'Accessibility-Bot': ['Experience', 'Accessibility Lead'], 'Localization-Bot': ['Experience', 'Localization Expert'],
  'Documentation-Bot': ['Experience', 'Docs Writer'], 'UI-Animation-Bot': ['Experience', 'UI Animator'],
  'Asset-Manager-Bot': ['Experience', 'Asset Manager'],
  'Data-Analyst-Bot': ['Data', 'Data Analyst'], 'Database-Admin-Bot': ['Data', 'Database Admin'],
  'API-Integration-Bot': ['Data', 'API Engineer'], 'Growth-Hacker-Bot': ['Data', 'Growth Hacker'],
  'Chief-Visionary-Bot': ['Innovation', 'Chief Visionary'], 'Metaverse-Architect-Bot': ['Innovation', 'Metaverse Architect'],
  'Crypto-Tokenomics-Bot': ['Innovation', 'Tokenomics Designer'],
};

function teamFor(department) {
  for (const [name, t] of Object.entries(TEAMS)) if (t.departments.includes(department)) return name;
  throw new Error(`Отдел "${department}" няма отбор! Добави го в TEAMS в scripts/teams.js.`);
}

// Задачи по отдел — {game} се заменя с истинска игра от /arcade
const TASK_TEMPLATES = {
  Engineering: ['Оптимизирай draw() в {game} до 60 FPS', 'Оправи колизиите в {game}', 'Добави бонус ниво в {game}', 'Махни глобалните променливи от {game}'],
  Quality: ['Тествай {game} на телефон', 'Провери дали рекордът в {game} се пази', 'Направи regression тест на {game}', 'Пробвай {game} на Firefox и Edge'],
  Design: ['Нарисувай нови спрайтове за {game}', 'Направи тъмна тема за {game}', 'Подобри менюто на {game}', 'Добави анимация при победа в {game}'],
  Audio: ['Направи 8-bit звук за скок в {game}', 'Добави фонова мелодия в {game}', 'Направи звук при game over в {game}'],
  Operations: ['Ускори зареждането на {game}', 'Провери пътищата на {game} в GitHub Pages', 'Намали размера на {game}'],
  Community: ['Преведи {game} на английски', 'Напиши туториал за {game}', 'Събери отзиви от играчите за {game}'],
  Gameplay: ['Направи гравитацията в {game} по-реалистична', 'Добави по-умни врагове в {game}', 'Скрий тайно ниво в {game} 🥚', 'Направи ново трудно ниво за {game}'],
  Release: ['Подготви {game} за пускане', 'Направи {game} да зарежда под 1 секунда', 'Почисти стария код в {game}', 'Хвани последните бъгове в {game}'],
  Experience: ['Направи {game} удобна за далтонисти', 'Добави управление само с клавиатура в {game}', 'Напиши инструкции за {game}', 'Добави плавни анимации в менюто на {game}'],
  Data: ['Преброй колко пъти се играе {game}', 'Провери кои нива в {game} са най-трудни', 'Подреди рекордите на {game} в класация'],
  Innovation: ['Измисли 3D версия на {game}', 'Измисли мултиплейър режим за {game}', 'Измисли система от значки за {game} 🏅'],
  Security: ['Провери {game} за XSS', 'Добави анти-чийт за рекордите в {game}', 'Провери дали {game} не зарежда външни скриптове'],
};
const HEAD_DEPT = Object.fromEntries(Object.entries(BOTS).map(([k, [d]]) => [k, d]));

const NEW_PER_RUN = 3;   // нови задачи на отбор при всяко пускане
const MAX_OPEN = 15;     // максимум отворени задачи на отбор
const KEEP_DONE = 100;
const STATUS = { todo: '📝 За правене', doing: '🔨 В процес', review: '🔍 За ревю', done: '✅ Готово' };

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const load = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };

// Членове на отбор: шефовете в отбора + всички служители от отделите на отбора
function roster(teamName, people) {
  const t = TEAMS[teamName];
  return people.filter((p) => t.members.includes(p.key) || (p.key.startsWith('EMP-') && p.team === teamName));
}

function runTeamTasks({ people, games, post, round }) {
  const board = load(TASKS, { next: 1, tasks: [] });
  const by = (k) => people.find((p) => p.key === k);
  const now = new Date().toISOString();

  for (const [teamName, t] of Object.entries(TEAMS)) {
    const leader = by(t.leader);
    const reviewer = by(t.reviewer);
    const team = roster(teamName, people);
    const th = `${t.emoji} ${teamName} (лидер: ${t.leader})`;

    // 1) Задачите напредват с една стъпка
    for (const task of board.tasks.filter((x) => x.team === teamName && x.status !== 'done')) {
      const who = by(task.assignee);
      if (!who) continue;
      if (task.status === 'todo') {
        post(who, `${task.id}: Започвам „${task.title}“. 🔨`, th);
        task.status = 'doing';
      } else if (task.status === 'doing') {
        post(who, `${task.id}: Готово! ${reviewer.key === who.key ? t.leader : reviewer.name}, прегледай го, моля. 🔍`, th);
        task.status = 'review';
      } else if (task.status === 'review') {
        if (reviewer.key !== leader.key && reviewer.key !== who.key) post(reviewer, `${task.id}: Тествах го — няма бъгове. ✅`, th);
        post(leader, `${task.id}: Одобрено! Браво, ${who.name}. 🎉`, th);
        task.status = 'done';
        task.done_round = round;
      }
      task.updated = now;
    }

    // 2) Лидерът раздава нови задачи на свободните хора от отбора
    const open = board.tasks.filter((x) => x.team === teamName && x.status !== 'done');
    const busy = new Set(open.map((x) => x.assignee));
    const free = team.filter((p) => !busy.has(p.key));
    const n = Math.min(NEW_PER_RUN, MAX_OPEN - open.length, free.length);
    for (let i = 0; i < n; i++) {
      const who = free.splice(Math.floor(Math.random() * free.length), 1)[0];
      const dept = who.department || HEAD_DEPT[who.key];
      const title = pick(TASK_TEMPLATES[dept] || TASK_TEMPLATES.Engineering).replace('{game}', pick(games));
      const id = `TASK-${String(board.next++).padStart(4, '0')}`;
      board.tasks.push({ id, team: teamName, title, assignee: who.key, assignee_name: who.name, status: 'todo', created_round: round, created: now, updated: now });
      post(leader, `${who.name}, нова задача за теб — ${id}: „${title}“. 📋`, th);
      post(who, pick(['Разбрано, шефе! 💪', 'Веднага се захващам!', 'Приемам мисията! 🎮', 'Ок, ще го направя.']), th);
    }
  }

  // Пазим всички отворени + последните KEEP_DONE готови
  const done = board.tasks.filter((x) => x.status === 'done').slice(-KEEP_DONE);
  board.tasks = board.tasks.filter((x) => x.status !== 'done').concat(done);
  fs.writeFileSync(TASKS, JSON.stringify(board, null, 1) + '\n');
  fs.writeFileSync(PAGE, renderTeams(board, people));
  return board;
}

function renderTeams(board, people) {
  let md = `# 👥 Отбори / Teams\n\n`;
  md += `> Автоматично от \`scripts/teams.js\`. Правило: всеки нов служител влиза в отбора на своя отдел.\n\n`;
  md += `🤖 Мениджър: **github-actions[bot]** → ✨ Старши мениджър: **Gemini** → 👑 CEO: **Claude**\n\n`;
  for (const [teamName, t] of Object.entries(TEAMS)) {
    const team = roster(teamName, people);
    const emps = team.filter((p) => p.key.startsWith('EMP-'));
    const tasks = board.tasks.filter((x) => x.team === teamName);
    md += `## ${t.emoji} ${teamName}\n\n`;
    md += `- **Лидер:** ${t.leader}\n- **В отбора:** ${t.members.join(', ')}\n`;
    md += `- **Отдели:** ${t.departments.join(', ')}\n- **Служители:** ${emps.length}\n`;
    md += `- **Задачи:** ${tasks.filter((x) => x.status !== 'done').length} отворени, ${tasks.filter((x) => x.status === 'done').length} готови\n\n`;
    const rows = tasks.filter((x) => x.status !== 'done').concat(tasks.filter((x) => x.status === 'done').slice(-5));
    if (rows.length) {
      md += `| Задача | Какво | Кой | Статус |\n|---|---|---|---|\n`;
      for (const x of rows) md += `| ${x.id} | ${x.title} | ${x.assignee_name} | ${STATUS[x.status]} |\n`;
      md += `\n`;
    }
    if (emps.length) {
      md += `<details><summary>Всички ${emps.length} служители в ${teamName}</summary>\n\n`;
      md += emps.map((e) => `${e.name} (${e.role}, ${e.department})`).join(' · ') + `\n\n</details>\n\n`;
    }
  }
  return md;
}

module.exports = { TEAMS, BOTS, teamFor, runTeamTasks };
