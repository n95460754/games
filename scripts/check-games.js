#!/usr/bin/env node
// Game health check: opens every game in headless Chromium and looks for problems.
// Usage: node scripts/check-games.js            (writes check-report.md, exit 1 if problems)
// Needs Playwright with Chromium. Used by .github/workflows/check-games.yml and the hourly Claude fixer.
const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const NEWEST_AUTO = 10;            // auto games come from the same templates, so check only the newest ones
const PARALLEL = 4;
const problems = [];               // { file, what }
const add = (file, what) => problems.push({ file, what });

// ---------- static checks ----------
const rootPages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
const arcadePages = fs.readdirSync(path.join(ROOT, 'arcade')).filter(f => f.endsWith('.html'));
const autoPages = fs.existsSync(path.join(ROOT, 'games'))
  ? fs.readdirSync(path.join(ROOT, 'games')).filter(f => /^game-\d+\.html$/.test(f))
      .sort((a, b) => parseInt(b.slice(5)) - parseInt(a.slice(5)))
  : [];

// 1) every arcade game is in the arcade.html menu, and every menu id has a file
const menu = fs.readFileSync(path.join(ROOT, 'arcade.html'), 'utf8');
const ids = new Set([...menu.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]));
for (const f of arcadePages) if (!ids.has(f.replace(/\.html$/, ''))) add(`arcade/${f}`, 'not listed in the arcade.html menu');
for (const id of ids) if (!arcadePages.includes(id + '.html')) add('arcade.html', `menu entry "${id}" has no file arcade/${id}.html`);

// 2) local links in README.md, games.html and arcade.html point to files that exist
function checkLinks(file, re) {
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  for (const m of text.matchAll(re)) {
    let link = m[1].split('#')[0].split('?')[0];
    if (!link || /^(https?:|mailto:|data:|javascript:)/.test(link)) continue;
    link = decodeURIComponent(link);
    if (!fs.existsSync(path.join(ROOT, path.dirname(file), link))) add(file, `broken link: ${m[1]}`);
  }
}
checkLinks('README.md', /\]\(([^)\s]+)\)/g);
checkLinks('games.html', /href="([^"]+)"/g);
checkLinks('arcade.html', /href="([^"]+)"/g);

// ---------- browser checks ----------
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

async function checkPage(browser, base, rel) {
  const page = await browser.newPage();
  const errs = new Set();
  page.on('pageerror', e => errs.add('JS error: ' + e.message.split('\n')[0]));
  page.on('console', m => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errs.add('console error: ' + m.text().slice(0, 200)); });
  page.on('response', r => { if (r.status() === 404 && r.url().startsWith(base) && !r.url().endsWith('favicon.ico')) errs.add('missing file: ' + r.url().slice(base.length)); });
  try {
    await page.goto(base + encodeURI(rel), { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(700);
    // try to start/play the game a little
    await page.mouse.click(400, 300).catch(() => {});
    for (const k of [' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', ' ']) { await page.keyboard.press(k).catch(() => {}); await page.waitForTimeout(80); }
    await page.waitForTimeout(500);
  } catch (e) { errs.add('could not load: ' + e.message.split('\n')[0]); }
  await page.close();
  for (const e of errs) add(rel, e);
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const pages = [
    ...rootPages.filter(f => f !== 'test.html'),
    ...arcadePages.map(f => 'arcade/' + f),
    ...autoPages.slice(0, NEWEST_AUTO).map(f => 'games/' + f),
  ];
  let i = 0;
  await Promise.all(Array.from({ length: PARALLEL }, async () => {
    while (i < pages.length) await checkPage(browser, base, pages[i++]);
  }));
  await browser.close();
  server.close();

  let md = `## 🔍 Game check report\n\nChecked **${pages.length}** pages on ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.\n\n`;
  if (!problems.length) md += '✅ No problems found.\n';
  else {
    md += `❌ **${problems.length} problem(s):**\n\n| File | Problem |\n|---|---|\n`;
    for (const p of problems) md += `| \`${p.file}\` | ${p.what.replace(/\|/g, '\\|')} |\n`;
  }
  fs.writeFileSync(path.join(ROOT, 'check-report.md'), md);
  console.log(md);
  process.exit(problems.length ? 1 : 0);
})();
