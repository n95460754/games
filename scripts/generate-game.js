#!/usr/bin/env node
// Generates one new mini-game in games/game-N.html and adds it to README.md.
// Runs every 5 minutes from .github/workflows/auto-game.yml (no Claude needed).
// Each game = random game type x random theme x random tuning, seeded by N.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GAMES_DIR = path.join(ROOT, 'games');
const README = path.join(ROOT, 'README.md');
const START = '<!-- AUTO-GAMES:START -->';
const END = '<!-- AUTO-GAMES:END -->';

fs.mkdirSync(GAMES_DIR, { recursive: true });
const nums = fs.readdirSync(GAMES_DIR)
  .map(f => /^game-(\d+)\.html$/.exec(f)).filter(Boolean).map(m => +m[1]);
const N = (nums.length ? Math.max(...nums) : 0) + 1;

// Seeded RNG (mulberry32) so game N is always the same game.
let seed = (N * 2654435761) >>> 0;
const rnd = () => { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const pick = a => a[Math.floor(rnd() * a.length)];
const range = (a, b) => +(a + rnd() * (b - a)).toFixed(2);

const THEMES = [
  { name: 'Neon',    emoji: '💜', bg: '#0d0d1a', field: '#141428', player: '#00e5ff', enemy: '#ff2e88', good: '#ffe600', text: '#ffffff' },
  { name: 'Lava',    emoji: '🔥', bg: '#1a0800', field: '#2b0f02', player: '#ffd54f', enemy: '#ff3d00', good: '#76ff03', text: '#ffe0b2' },
  { name: 'Ocean',   emoji: '🌊', bg: '#001424', field: '#00243d', player: '#4dd0e1', enemy: '#ff7043', good: '#c6ff00', text: '#e0f7fa' },
  { name: 'Forest',  emoji: '🌲', bg: '#07140a', field: '#0f2414', player: '#aeea00', enemy: '#8d6e63', good: '#ffca28', text: '#e8f5e9' },
  { name: 'Ice',     emoji: '❄️', bg: '#0a1626', field: '#13263d', player: '#ffffff', enemy: '#40c4ff', good: '#ff80ab', text: '#e1f5fe' },
  { name: 'Candy',   emoji: '🍬', bg: '#2a0f24', field: '#3d1535', player: '#ff80ab', enemy: '#7c4dff', good: '#69f0ae', text: '#fce4ec' },
  { name: 'Retro',   emoji: '👾', bg: '#000000', field: '#0a0a0a', player: '#33ff33', enemy: '#ff3333', good: '#ffff33', text: '#33ff33' },
  { name: 'Space',   emoji: '🚀', bg: '#02020a', field: '#090920', player: '#b388ff', enemy: '#ff6e40', good: '#18ffff', text: '#ede7f6' },
  { name: 'Desert',  emoji: '🏜️', bg: '#2a1c08', field: '#3d2a10', player: '#fff59d', enemy: '#bf360c', good: '#26c6da', text: '#fff8e1' },
  { name: 'Block',   emoji: '⛏️', bg: '#101a0c', field: '#1d2b16', player: '#5aa13a', enemy: '#7a7a7a', good: '#3ee0e0', text: '#f1f8e9' },
  { name: 'Toxic',   emoji: '☢️', bg: '#0a1400', field: '#142400', player: '#eeff41', enemy: '#d500f9', good: '#00e676', text: '#f4ff81' },
  { name: 'Sunset',  emoji: '🌇', bg: '#1f0a1f', field: '#33102b', player: '#ffab40', enemy: '#536dfe', good: '#ffff8d', text: '#fff3e0' },
];

// Each type: name, emoji, how to play (BG), and game code using the shared runtime.
// Runtime gives: W,H, ctx x, keys, ptr{x,y,down}, T (theme), P (params), score, end(), rect(), circle(), hit().
const TYPES = [
  { name: 'Dodge', emoji: '🧱', help: '← → или мишка/пръст. Избягвай блоковете!',
    params: () => ({ speed: range(2.5, 4.5), ramp: range(200, 400), size: range(30, 50) }),
    code: `
let p, en, f;
G.reset = () => { p = { x: W/2-20, y: H-50, w: P.size, h: 18 }; en = []; f = 0; };
G.update = () => {
  f++; if (keys.ArrowLeft) p.x -= 6; if (keys.ArrowRight) p.x += 6;
  if (ptr.moved) p.x = ptr.x - p.w/2; p.x = Math.max(0, Math.min(W-p.w, p.x));
  const sp = P.speed + score / P.ramp;
  if (f % Math.max(8, 38 - Math.floor(score/120)) === 0) { const w = 20 + Math.random()*50; en.push({ x: Math.random()*(W-w), y: -20, w, h: 20 }); }
  en.forEach(e => e.y += sp); en = en.filter(e => e.y < H);
  if (en.some(e => hit(e, p))) end(); score++;
};
G.draw = () => { rect(p, T.player); en.forEach(e => rect(e, T.enemy)); };` },

  { name: 'Catch', emoji: '🧺', help: '← → или мишка/пръст. Хващай ⭐, пази се от 💣. 3 живота.',
    params: () => ({ speed: range(2, 3.5), bombs: range(0.2, 0.4) }),
    code: `
let p, it, f, lives;
G.reset = () => { p = { x: W/2-35, y: H-40, w: 70, h: 14 }; it = []; f = 0; lives = 3; };
G.update = () => {
  f++; if (keys.ArrowLeft) p.x -= 7; if (keys.ArrowRight) p.x += 7;
  if (ptr.moved) p.x = ptr.x - p.w/2; p.x = Math.max(0, Math.min(W-p.w, p.x));
  if (f % Math.max(14, 40 - Math.floor(score/5)) === 0) it.push({ x: 15 + Math.random()*(W-30), y: -10, w: 18, h: 18, bad: Math.random() < P.bombs });
  const sp = P.speed + score / 40;
  for (const o of it) { o.y += sp;
    if (hit(o, p)) { o.dead = 1; if (o.bad) { lives--; if (lives <= 0) end(); } else score++; }
    else if (o.y > H) { o.dead = 1; if (!o.bad) { lives--; if (lives <= 0) end(); } } }
  it = it.filter(o => !o.dead);
};
G.draw = () => { rect(p, T.player); it.forEach(o => circle(o.x+9, o.y+9, 9, o.bad ? T.enemy : T.good));
  x.fillStyle = T.text; x.textAlign = 'right'; x.fillText('❤'.repeat(lives), W-10, 50); x.textAlign = 'left'; };` },

  { name: 'Flap', emoji: '🐦', help: 'Space / клик / докосване = подскок. Мини през пролуките!',
    params: () => ({ gap: range(120, 160), speed: range(2.2, 3.2), grav: range(0.32, 0.45) }),
    code: `
let b, pipes, f;
G.reset = () => { b = { x: 80, y: H/2, vy: 0 }; pipes = []; f = 0; };
G.tap = () => { b.vy = -6.8; };
G.update = () => {
  f++; if (keys[' '] || keys.ArrowUp) { if (!G.held) G.tap(); G.held = 1; } else G.held = 0;
  b.vy += P.grav; b.y += b.vy;
  if (f % 95 === 1) { const gy = 60 + Math.random()*(H-120-P.gap); pipes.push({ x: W, gy, done: 0 }); }
  const box = { x: b.x-11, y: b.y-11, w: 22, h: 22 };
  for (const q of pipes) { q.x -= P.speed + score*0.05;
    if (hit(box, { x: q.x, y: 0, w: 50, h: q.gy }) || hit(box, { x: q.x, y: q.gy+P.gap, w: 50, h: H })) end();
    if (!q.done && q.x + 50 < b.x) { q.done = 1; score++; } }
  pipes = pipes.filter(q => q.x > -60);
  if (b.y > H || b.y < 0) end();
};
G.draw = () => { pipes.forEach(q => { rect({ x: q.x, y: 0, w: 50, h: q.gy }, T.enemy); rect({ x: q.x, y: q.gy+P.gap, w: 50, h: H }, T.enemy); });
  circle(b.x, b.y, 12, T.player); };` },

  { name: 'Breaker', emoji: '🧱', help: '← → или мишка/пръст. Разбий всички тухли! Клик = старт.',
    params: () => ({ rows: Math.floor(range(4, 7)), speed: range(4, 5.5) }),
    code: `
let p, ball, bricks, lvl, lives;
function build() { bricks = []; for (let r = 0; r < P.rows + lvl; r++) for (let c = 0; c < 8; c++) bricks.push({ x: 8 + c*48, y: 50 + r*22, w: 44, h: 18 }); }
function serve() { ball = { x: W/2, y: H-60, vx: 0, vy: 0, stuck: 1 }; }
G.reset = () => { p = { x: W/2-40, y: H-30, w: 80, h: 12 }; lvl = 0; lives = 3; build(); serve(); };
G.tap = () => { if (ball.stuck) { ball.stuck = 0; const s = P.speed + lvl*0.4; ball.vx = s*(Math.random() < .5 ? -.6 : .6); ball.vy = -s; } };
G.update = () => {
  if (keys.ArrowLeft) p.x -= 8; if (keys.ArrowRight) p.x += 8; if (keys[' ']) G.tap();
  if (ptr.moved) p.x = ptr.x - p.w/2; p.x = Math.max(0, Math.min(W-p.w, p.x));
  if (ball.stuck) { ball.x = p.x + p.w/2; return; }
  ball.x += ball.vx; ball.y += ball.vy;
  if (ball.x < 6 || ball.x > W-6) ball.vx *= -1; if (ball.y < 6) ball.vy = Math.abs(ball.vy);
  const bb = { x: ball.x-6, y: ball.y-6, w: 12, h: 12 };
  if (ball.vy > 0 && hit(bb, p)) { ball.vy = -Math.abs(ball.vy); ball.vx = ((ball.x - p.x)/p.w - .5) * 10; }
  for (const k of bricks) if (!k.dead && hit(bb, k)) { k.dead = 1; ball.vy *= -1; score += 10; break; }
  bricks = bricks.filter(k => !k.dead);
  if (!bricks.length) { lvl++; build(); serve(); }
  if (ball.y > H) { lives--; if (lives <= 0) end(); else serve(); }
};
G.draw = () => { rect(p, T.player); bricks.forEach((k, i) => rect(k, i % 3 ? T.enemy : T.good)); circle(ball.x, ball.y, 6, T.text);
  x.fillStyle = T.text; x.textAlign = 'right'; x.fillText('❤'.repeat(lives) + '  Ниво ' + (lvl+1), W-10, 50); x.textAlign = 'left'; };` },

  { name: 'Snake', emoji: '🐍', help: 'Стрелки / WASD или плъзгане. Яж 🍎 и не се удряй!',
    params: () => ({ tick: Math.floor(range(5, 8)), walls: rnd() < 0.5 }),
    code: `
const S = 20, CW = W/S, CH = (H-40)/S; let sn, dir, nd, food, f;
function place() { do { food = { x: Math.floor(Math.random()*CW), y: Math.floor(Math.random()*CH) }; } while (sn.some(s => s.x === food.x && s.y === food.y)); }
G.reset = () => { sn = [{ x: 5, y: 10 }, { x: 4, y: 10 }, { x: 3, y: 10 }]; dir = nd = { x: 1, y: 0 }; f = 0; place(); };
G.key = k => { const m = { ArrowUp: [0,-1], w: [0,-1], ArrowDown: [0,1], s: [0,1], ArrowLeft: [-1,0], a: [-1,0], ArrowRight: [1,0], d: [1,0] }[k];
  if (m && (m[0] !== -dir.x || m[1] !== -dir.y)) nd = { x: m[0], y: m[1] }; };
G.swipe = (dx, dy) => G.key(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'ArrowRight' : 'ArrowLeft') : (dy > 0 ? 'ArrowDown' : 'ArrowUp'));
G.update = () => {
  if (++f % Math.max(3, P.tick - Math.floor(score/8))) return; dir = nd;
  let h = { x: sn[0].x + dir.x, y: sn[0].y + dir.y };
  if (P.walls) { if (h.x < 0 || h.y < 0 || h.x >= CW || h.y >= CH) return end(); }
  else { h.x = (h.x + CW) % CW; h.y = (h.y + CH) % CH; }
  if (sn.some(s => s.x === h.x && s.y === h.y)) return end();
  sn.unshift(h); if (h.x === food.x && h.y === food.y) { score++; place(); } else sn.pop();
};
G.draw = () => { if (P.walls) { x.strokeStyle = T.enemy; x.lineWidth = 2; x.strokeRect(1, 41, W-2, H-42); }
  rect({ x: food.x*S+3, y: 40+food.y*S+3, w: S-6, h: S-6 }, T.good);
  sn.forEach((s, i) => rect({ x: s.x*S+1, y: 40+s.y*S+1, w: S-2, h: S-2 }, i ? T.player : T.text)); };` },

  { name: 'Tap Rush', emoji: '🎯', help: 'Кликай/докосвай целите, преди да изчезнат! 30 секунди.',
    params: () => ({ life: range(1.2, 2), time: 30 }),
    code: `
let t, tg, f, miss;
G.reset = () => { t = P.time*60; tg = []; f = 0; miss = 0; };
G.click = (px, py) => { for (const o of tg) if (Math.hypot(px-o.x, py-o.y) < o.r) { o.dead = 1; score += o.gold ? 5 : 1; return; } miss++; score = Math.max(0, score-1); };
G.update = () => {
  f++; if (--t <= 0) return end();
  if (f % Math.max(15, 45 - Math.floor(score/4)) === 0) tg.push({ x: 40+Math.random()*(W-80), y: 80+Math.random()*(H-120), r: 28, age: 0, gold: Math.random() < .15 });
  tg.forEach(o => { o.age++; o.r = 28 * (1 - o.age/(P.life*60)); if (o.r <= 3) o.dead = 1; });
  tg = tg.filter(o => !o.dead);
};
G.draw = () => { tg.forEach(o => { circle(o.x, o.y, o.r, o.gold ? T.good : T.enemy); circle(o.x, o.y, o.r*.45, T.text); });
  x.fillStyle = T.text; x.textAlign = 'right'; x.fillText('⏱ ' + Math.ceil(t/60), W-10, 50); x.textAlign = 'left'; };` },

  { name: 'Runner', emoji: '🏃', help: 'Space / ↑ / клик = скок. Прескачай препятствията!',
    params: () => ({ speed: range(4, 5.5), grav: range(0.55, 0.75) }),
    code: `
const GY = H-60; let p, ob, f, nx;
G.reset = () => { p = { x: 60, y: GY-30, w: 26, h: 30, vy: 0 }; ob = []; f = 0; nx = 60; };
G.tap = () => { if (p.y >= GY-p.h-0.5) p.vy = -12; };
G.update = () => {
  f++; if (keys[' '] || keys.ArrowUp || keys.w) G.tap();
  p.vy += P.grav; p.y = Math.min(GY-p.h, p.y + p.vy); if (p.y >= GY-p.h) p.vy = 0;
  const sp = P.speed + score/400;
  if (--nx <= 0) { const h = 20 + Math.random()*35, fly = Math.random() < .25 && score > 300;
    ob.push({ x: W, y: fly ? GY-p.h-36 : GY-h, w: 18 + Math.random()*16, h: fly ? 18 : h }); nx = 45 + Math.random()*60; }
  ob.forEach(o => o.x -= sp); ob = ob.filter(o => o.x > -50);
  if (ob.some(o => hit(o, p))) end(); score++;
};
G.draw = () => { rect({ x: 0, y: GY, w: W, h: 3 }, T.text); rect(p, T.player); ob.forEach(o => rect(o, T.enemy)); };` },

  { name: 'Blaster', emoji: '🔫', help: '← → или мишка/пръст за движение. Стреля само! Не пускай враговете долу.',
    params: () => ({ speed: range(1.2, 2), rate: Math.floor(range(10, 16)) }),
    code: `
let p, sh, en, f, lives;
G.reset = () => { p = { x: W/2-18, y: H-40, w: 36, h: 20 }; sh = []; en = []; f = 0; lives = 3; };
G.update = () => {
  f++; if (keys.ArrowLeft) p.x -= 6; if (keys.ArrowRight) p.x += 6;
  if (ptr.moved) p.x = ptr.x - p.w/2; p.x = Math.max(0, Math.min(W-p.w, p.x));
  if (f % P.rate === 0) sh.push({ x: p.x+p.w/2-2, y: p.y, w: 4, h: 10 });
  if (f % Math.max(18, 60 - Math.floor(score/3)) === 0) { const tough = Math.random() < .2; en.push({ x: Math.random()*(W-30), y: -30, w: 30, h: 24, hp: tough ? 3 : 1, tough }); }
  sh.forEach(s => s.y -= 9); sh = sh.filter(s => s.y > -10);
  const sp = P.speed + score/60;
  for (const e of en) { e.y += sp;
    for (const s of sh) if (!s.dead && hit(s, e)) { s.dead = 1; if (--e.hp <= 0) { e.dead = 1; score += e.tough ? 3 : 1; } }
    if (hit(e, p)) end();
    if (e.y > H) { e.dead = 1; if (--lives <= 0) end(); } }
  sh = sh.filter(s => !s.dead); en = en.filter(e => !e.dead);
};
G.draw = () => { rect(p, T.player); rect({ x: p.x+p.w/2-4, y: p.y-8, w: 8, h: 8 }, T.player);
  sh.forEach(s => rect(s, T.good)); en.forEach(e => rect(e, e.tough ? T.good : T.enemy));
  x.fillStyle = T.text; x.textAlign = 'right'; x.fillText('❤'.repeat(lives), W-10, 50); x.textAlign = 'left'; };` },
];

const type = pick(TYPES);
const theme = pick(THEMES);
const params = type.params();
const title = `${theme.name} ${type.name} #${N}`;
const file = `game-${N}.html`;

const html = `<!DOCTYPE html>
<html lang="bg">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
  body { margin:0; background:${theme.bg}; color:${theme.text}; font-family:system-ui,sans-serif;
         display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; padding:8px; box-sizing:border-box; }
  h1 { margin:0 0 8px; font-size:24px; }
  canvas { background:${theme.field}; border:2px solid ${theme.player}55; border-radius:8px; touch-action:none; max-width:100%; height:auto; }
  p { opacity:.75; margin:8px 0 0; text-align:center; }
  a { color:${theme.player}; }
</style>
</head>
<body>
<h1>${type.emoji} ${title} ${theme.emoji}</h1>
<canvas id="c" width="400" height="500"></canvas>
<p>${type.help}<br>Space / клик след край = нова игра · <a href="../games.html">← Всички игри</a></p>
<script>
// Auto-generated game #${N} (type: ${type.name}, theme: ${theme.name}).
const c = document.getElementById('c'), x = c.getContext('2d'), W = c.width, H = c.height;
const T = ${JSON.stringify(theme)};
const P = ${JSON.stringify(params)};
const KEY = 'auto-game-${N}-best';
const G = {}, keys = {}, ptr = { x: W/2, y: H/2, moved: false };
let score = 0, best = 0, over = false, started = false;
try { best = +localStorage.getItem(KEY) || 0; } catch (e) {}
function end() { if (over) return; over = true; if (score > best) { best = score; try { localStorage.setItem(KEY, best); } catch (e) {} } }
function restart() { score = 0; over = false; started = true; G.reset(); }
function rect(r, col) { x.fillStyle = col; x.fillRect(r.x, r.y, r.w, r.h); }
function circle(cx, cy, r, col) { x.fillStyle = col; x.beginPath(); x.arc(cx, cy, Math.max(0, r), 0, 7); x.fill(); }
function hit(a, b) { return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y; }
function pos(e) { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height]; }
addEventListener('keydown', e => {
  if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) e.preventDefault();
  if (e.key === ' ' && (over || !started)) { restart(); return; }
  keys[e.key] = true; if (G.key && !over) G.key(e.key);
});
addEventListener('keyup', e => keys[e.key] = false);
let sx = 0, sy = 0;
c.addEventListener('pointermove', e => { [ptr.x, ptr.y] = pos(e); ptr.moved = true; });
c.addEventListener('pointerdown', e => {
  [ptr.x, ptr.y] = pos(e); sx = ptr.x; sy = ptr.y;
  if (over || !started) { restart(); return; }
  if (G.tap) G.tap(); if (G.click) G.click(ptr.x, ptr.y);
});
c.addEventListener('pointerup', e => { const [ux, uy] = pos(e); if (G.swipe && Math.hypot(ux-sx, uy-sy) > 25) G.swipe(ux-sx, uy-sy); });
${type.code}
G.reset();
function loop() {
  if (started && !over) G.update();
  x.clearRect(0, 0, W, H); G.draw();
  x.fillStyle = T.text; x.font = '18px system-ui';
  x.fillText('Точки: ' + score, 10, 25);
  x.textAlign = 'right'; x.fillText('Рекорд: ' + best, W - 10, 25); x.textAlign = 'left';
  if (over || !started) {
    x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(0, 0, W, H);
    x.fillStyle = T.text; x.textAlign = 'center';
    x.font = 'bold 32px system-ui'; x.fillText(over ? 'GAME OVER' : ${JSON.stringify(type.emoji + ' ' + type.name)}, W/2, 230);
    x.font = '18px system-ui'; x.fillText(over ? 'Space или клик = пак' : 'Space или клик = старт', W/2, 268);
    x.textAlign = 'left';
  }
  requestAnimationFrame(loop);
}
loop();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(GAMES_DIR, file), html);

// Update README: newest game on top inside the AUTO-GAMES block.
const date = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
const line = `- ${type.emoji} [${title}](games/${file}) — ${type.name} · ${theme.name} theme · added ${date}`;
let md = fs.readFileSync(README, 'utf8');
if (!md.includes(START)) {
  md = md.trimEnd() + `\n\n## 🤖 Auto Games\n\nA new mini-game is generated and added here automatically **every 5 minutes** by a GitHub Action ([\`scripts/generate-game.js\`](scripts/generate-game.js)).\n\n${START}\n${END}\n`;
}
const [head, rest] = md.split(START);
const [list, tail] = rest.split(END);
const items = list.split('\n').filter(l => l.startsWith('- '));
const count = items.length + 1;
md = `${head}${START}\n**${count} auto games so far.** Newest first:\n\n${[line, ...items].join('\n')}\n${END}${tail}`;
fs.writeFileSync(README, md);

console.log(`Created games/${file}: ${title}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${title}\n`);
