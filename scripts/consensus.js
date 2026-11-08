#!/usr/bin/env node
// 🔍 Consensus — търсачът на грешки.
// Чете чата от ПОСЛЕДНИЯ кръг (+ находките на Janitor-Bot), намира кой е споменал
// грешка/бъг и търси в интернет какво е тя: Stack Overflow (Stack Exchange API) и
// MDN Web Docs. И двете са безплатни и не искат ключ.
// Резултатите отиват в employees/consensus.json; office-chat.js ги публикува в
// следващия кръг като отговори на Consensus. Дневник с линкове: CONSENSUS.md.
// Usage: node scripts/consensus.js   (Node 18+ заради вградения fetch)

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const EMP = path.join(ROOT, 'employees');
const CHAT = path.join(EMP, 'chat.json');
const JAN = path.join(EMP, 'janitor.json');
const OUT = path.join(EMP, 'consensus.json');
const PAGE = path.join(ROOT, 'CONSENSUS.md');

const MAX_SEARCHES = 2;               // нови търсения в интернет на пускане (пазим лимита на API-то)
const MAX_ANSWERS = 4;                // отговори в чата на пускане
const CACHE_DAYS = 7;                 // едно и също търсене се помни 7 дни
const TIMEOUT_MS = 8000;

// Какво е споменато (на български) -> какво да търсим (на английски)
const ERROR_MAP = [
  [/fps|пада|бавн|лаг/i, 'canvas low fps'],
  [/рекорд|localstorage|запазва/i, 'localStorage not saving'],
  [/колизи|хитбокс/i, 'canvas collision detection'],
  [/firefox|кеш|ctrl\+f5/i, 'javascript cache not updating'],
  [/тъч|touch|ipad/i, 'touchstart ipad canvas'],
  [/превод|английски вместо/i, 'html multilanguage javascript'],
  [/xss/i, 'prevent xss innerHTML'],
  [/глобални промен/i, 'avoid global variables javascript'],
  [/менюто на arcade|липсва в менюто|няма файл|счупен линк/i, 'github pages relative path 404'],
  [/зарежда/i, 'html5 canvas game not loading'],
];
// Това НЕ са грешки: задачи, одобрения, „няма бъгове“ и т.н.
const NOT_ERROR = /няма бъг|няма проблем|нова задача|започвам|одобрено|готово|тествах|прегледах|съвет:|целта за|факт:|бърза среща/i;
const ERROR_WORDS = /бъг|грешк|error|не работи|не зарежда|не се запазва|не реагира|счупен|бъгват|пада|липсва|crash|спешно/i;

const load = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const decode = (s) => String(s).replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));

async function getJSON(url) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': 'games-office-consensus-bot' } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
}

async function searchWeb(query) {
  const q = encodeURIComponent(query);
  const [so, mdn] = await Promise.allSettled([
    getJSON(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${q}&site=stackoverflow&pagesize=3`),
    getJSON(`https://developer.mozilla.org/api/v1/search?q=${q}&locale=en-US&size=2`),
  ]);
  const results = [];
  if (so.status === 'fulfilled') for (const it of so.value.items || []) {
    results.push({ source: 'Stack Overflow', title: decode(it.title), url: it.link, score: it.score, accepted: !!it.accepted_answer_id });
  }
  if (mdn.status === 'fulfilled') for (const d of (mdn.value.documents || []).slice(0, 2)) {
    results.push({ source: 'MDN Web Docs', title: d.title, url: 'https://developer.mozilla.org' + d.mdn_url, summary: d.summary });
  }
  if (!results.length) throw new Error('няма отговор от търсачките');
  return results;
}

// Кой спомена грешка в последния кръг?
function findErrorMentions() {
  const chat = load(CHAT, { messages: [] });
  const last = chat.round || 0;
  const found = [];
  for (const m of chat.messages.filter((x) => x.round === last)) {
    if (m.from.includes('Consensus') || NOT_ERROR.test(m.text) || !ERROR_WORDS.test(m.text)) continue;
    const hit = ERROR_MAP.find(([re]) => re.test(m.text));
    if (hit) found.push({ who: m.from, said: m.text, query: hit[1], round: last });
  }
  for (const f of load(JAN, {}).last_found || []) {
    const hit = ERROR_MAP.find(([re]) => re.test(f));
    if (hit) found.push({ who: '🧹 Janitor-Bot (Janitor)', said: f, query: hit[1], round: last });
  }
  // по едно на заявка — не търсим едно и също два пъти
  const seen = new Set();
  return found.filter((x) => !seen.has(x.query) && seen.add(x.query)).slice(0, MAX_ANSWERS);
}

(async () => {
  const state = load(OUT, { cache: {}, pending: [], log: [], searches_total: 0 });
  const mentions = findErrorMentions();
  let searches = 0;
  const now = Date.now();

  for (const m of mentions) {
    const c = state.cache[m.query];
    let results, fromCache = false, error = null;
    if (c && now - c.at < CACHE_DAYS * 864e5) { results = c.results; fromCache = true; }
    else if (searches < MAX_SEARCHES) {
      searches++;
      try { results = await searchWeb(m.query); state.cache[m.query] = { at: now, results }; state.searches_total++; }
      catch (e) { error = e.message; }
    } else continue; // лимитът за това пускане е изчерпан — ще го потърсим следващия път
    const answer = { ...m, at: new Date(now).toISOString(), fromCache, error, results: results || [] };
    state.pending.push(answer);
    state.log.push(answer);
  }

  state.pending = state.pending.slice(-MAX_ANSWERS);
  state.log = state.log.slice(-50);
  for (const [k, v] of Object.entries(state.cache)) if (now - v.at > CACHE_DAYS * 864e5) delete state.cache[k];
  fs.mkdirSync(EMP, { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(state, null, 1) + '\n');

  let md = `# 🔍 Consensus — дневник на търсенията\n\n`;
  md += `> Когато някой в офиса спомене грешка, Consensus търси в интернет (Stack Overflow + MDN) какво е тя. \`scripts/consensus.js\`\n\n`;
  md += `Търсения в интернет общо: **${state.searches_total}** · Запомнени търсения: **${Object.keys(state.cache).length}**\n\n`;
  for (const a of state.log.slice().reverse().slice(0, 15)) {
    md += `### ${a.who}: „${a.said}“\n\n🔎 Търсено: \`${a.query}\`${a.fromCache ? ' _(от паметта)_' : ''}\n\n`;
    if (a.error) md += `_Интернетът не отговори (${a.error}). Ще пробвам пак._\n\n`;
    for (const r of a.results.slice(0, 3)) md += `- [${r.title}](${r.url}) — ${r.source}${r.accepted ? ' ✅ приет отговор' : ''}${r.score != null ? ` · ${r.score} гласа` : ''}\n`;
    md += `\n`;
  }
  fs.writeFileSync(PAGE, md);
  console.log(`🔍 Consensus: ${mentions.length} споменати грешки, ${searches} нови търсения, ${state.pending.length} отговора чакат за чата.`);
})().catch((e) => { console.error('Consensus се спъна:', e.message); process.exit(0); });
