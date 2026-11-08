// 🕵️ Sider AI — проверява дали ВСЕКИ работник работи.
// При всяко пускане: преброява всички служители и ботове в отборите, вижда кой
// няма отворена задача и казва на един AI (сменят се по ред) да оправи работата.
// AI-ят раздава задачи, а Sider проверява ОТНОВО и докладва истинския резултат.
// Отчет: SIDER.md + employees/sider.json.

const fs = require('fs');
const path = require('path');
const { findIdle, giveWork } = require('./teams');

const ROOT = path.join(__dirname, '..');
const STATE = path.join(ROOT, 'employees', 'sider.json');
const PAGE = path.join(ROOT, 'SIDER.md');

const SIDER = { key: 'Sider-AI', name: '🕵️ Sider AI', role: 'Work Inspector', department: 'Executive' };
// AI-ите, които Sider вика да оправят работата (по ред, всеки кръг друг)
const FIXERS = ['Claude-CEO', 'Copilot', 'Perplexity', 'ChatGPT', 'Gemini', 'Brave-AI'];

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const load = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const names = (list, max = 8) => list.slice(0, max).map((p) => p.name).join(', ') + (list.length > max ? ` и още ${list.length - max}` : '');

function inspect({ people, games, post, round }) {
  const state = load(STATE, { runs: 0, fixed_total: 0, history: [] });
  const by = (k) => people.find((p) => p.key === k);
  const sider = by(SIDER.key);
  const th = '🕵️ Sider AI проверява кой работи';

  const before = findIdle(people);
  const total = before.all.length;
  let fixerKey = null, given = 0;

  if (!before.idle.length) {
    post(sider, `Проверих всички ${total} работници: всички работят! ✅`, th);
  } else {
    fixerKey = FIXERS[round % FIXERS.length];
    const fixer = by(fixerKey);
    post(sider, `Проверих всички ${total} работници: ${total - before.idle.length} работят, но ${before.idle.length} нямат задача: ${names(before.idle)}. ⚠️`, th);
    post(sider, `${fixer.name}, моля оправи работата им. 🙏`, th);
    given = giveWork({ people, games, round, idle: before.idle, fixer: fixerKey });
    post(fixer, `Веднага! Дадох задача на ${given} ${given === 1 ? 'човек' : 'души'}. ${pick(['Всички на работа! 💪', 'Никой не остава без мисия. 🎮', 'Готово, проверявай. ✅'])}`, th);
  }

  // Втора проверка — за да е сигурно, че наистина е оправено
  const after = findIdle(people);
  if (before.idle.length) {
    post(sider, after.idle.length
      ? `Проверих пак: ${after.idle.length} все още нямат задача (${names(after.idle, 5)}). Ще ги хвана следващия кръг. 🔁`
      : `Проверих пак: всички ${total} работят! ✅ Браво, ${by(fixerKey).name}.`, th);
  }

  state.runs++;
  state.fixed_total += given;
  state.last = { round, at: new Date().toISOString(), workers: total, idle_before: before.idle.length, idle_after: after.idle.length, fixer: fixerKey, given };
  state.history = (state.history || []).concat([state.last]).slice(-30);
  fs.writeFileSync(STATE, JSON.stringify(state, null, 1) + '\n');

  let md = `# 🕵️ Sider AI — кой работи\n\n`;
  md += `> При всяко пускане Sider AI проверява дали всеки служител и бот в отборите има задача. Ако някой няма, казва на AI да го оправи. \`scripts/sider.js\`\n\n`;
  md += `| Работници | Работят сега | Без задача сега | Проверки | Раздадени задачи от AI (общо) |\n|---|---|---|---|---|\n`;
  md += `| ${total} | ${total - after.idle.length} | ${after.idle.length} | ${state.runs} | ${state.fixed_total} |\n\n`;
  md += `## Последни проверки\n\n| Кръг | Без задача преди | AI, който оправи | Раздадени | Без задача след |\n|---|---|---|---|---|\n`;
  for (const h of state.history.slice().reverse().slice(0, 15)) {
    md += `| #${h.round} | ${h.idle_before} | ${h.fixer || '—'} | ${h.given} | ${h.idle_after === 0 ? '0 ✅' : h.idle_after} |\n`;
  }
  fs.writeFileSync(PAGE, md);
  return after.idle.length;
}

module.exports = { SIDER, inspect };
