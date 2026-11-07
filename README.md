# ⛏️ My Minecraft: Block Games Collection

**60 block games** that run straight in your browser: 10 full games plus the **Block Arcade** with 50 mini-games. Built with plain HTML + JavaScript (and [Three.js](https://threejs.org/) for the 3D ones). No build step, no installs, no server.

> Moyata blokova igra: dig, build, explore, jump, solve and survive in a blocky world.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?logo=three.js&logoColor=white)
![Games](https://img.shields.io/badge/games-60-5aa13a)

## 🚀 Play

🎮 **Start here: open [`games.html`](games.html)**. It's a menu with every game.

- **Online:** turn on GitHub Pages (**Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**). After about a minute everything is at
  **https://n95460754.github.io/minecraft/games.html**
- **On your computer:** **Code → Download ZIP** (or `git clone https://github.com/n95460754/minecraft.git`), then open `games.html` in Chrome, Edge or Firefox.

Almost everything works **offline**. Only Block Parkour ∞ loads Three.js from the internet.

---

## 🎮 The 10 big games

| | Game | File | What you do |
|---|---|---|---|
| 🧱 | **My Minecraft** | `index.html` | Dig and build in a small 32×32 hilly world |
| 🌍 | **BlockForge** | `minecraft.html` | Big chunked world written in pure WebGL2 |
| 🗺️ | **New World** | `New World - Play.html` | Another endless block world to explore |
| 🏃 | **Block Parkour ∞** (Блоков паркур ∞) | `infinite-parkour.html` | Endless jumping path through 5 worlds |
| 🔥 | **Lava Floor** (Лава под краката) | `lava-floor.html` | Floors crumble under your feet. Be the last one standing vs bots |
| ⛏️ | **Deep Miner** (Дълбок миньор) | `deep-miner.html` | 2D mining: dig ores, sell them, upgrade, reach 250 m |
| 🏗️ | **Block Architect** (Блоков архитект) | `block-architect.html` | Rebuild the spinning model. 20 puzzle levels |
| 🛤️ | **Minecart Rush** (Вагонетка) 🆕 | `minecart-rush.html` | 3D endless runner on mine rails |
| 🌙 | **Night Defense** (Нощна защита) 🆕 | `night-defense.html` | Tower defense: protect the crystal for 20 waves |
| 🌾 | **Block Farm** (Блокова ферма) 🆕 | `block-farm.html` | Plant, water, harvest, sell and expand your farm |

### 🕹️ Controls

| Game | Controls |
|---|---|
| My Minecraft | Click to lock mouse · **WASD** move · **Space** jump · **Left click** dig · **Right click** build · **1–4** pick block |
| Block Parkour ∞ | **WASD / arrows** move · **Mouse** look · **Space** jump · **Shift** sprint · **F** auto-sprint · **C** checkpoint · **R** new game |
| Lava Floor | **WASD** move · **Space** jump · **Shift** sprint · **Mouse** look · **Esc** pause |
| Deep Miner | **A D / ← →** dig sideways · **S / ↓** dig down · **W / ↑** fly up (uses fuel) · **E** shop |
| Block Architect | **Left click** place · **Right click** remove · **Drag** rotate · **Wheel** zoom · **1–6** color · **H** hint |
| Minecart Rush | **A D / ← →** switch rail · **W / Space** jump · **S / ↓** duck · swipe on phones |
| Night Defense | Pick a tower, click grass to build · click a tower to upgrade or sell · **▶** start the wave · **⏩** speed |
| Block Farm | Pick a tool at the bottom, click the field · market and quests on the right |

### ✨ What's inside the new games

- **🛤️ Minecart Rush:** 3 lanes, low crates to jump, beams to duck under, ore walls to dodge, crystals to collect. It speeds up the farther you go, and the field of view widens with speed. Touch swipes work on phones.
- **🌙 Night Defense:** 4 towers. 🏹 Archer is fast. 💣 Cannon does splash damage. ❄️ Ice slows enemies. ⚡ Lightning chains between enemies. Each tower upgrades to level 3. Enemy types are normal, fast, tank, and a boss every 5 waves. It gets dark while a wave is running.
- **🌾 Block Farm:** 6 crops (wheat, carrot, potato, beet, pumpkin, melon). Plants grow only while the soil is wet. Sprinklers water a 3×3 area, the land can be expanded, there are 9 quests, and there's a day/night cycle. The game **auto-saves**.
- **🔥 Lava Floor:** 3 floors above lava, bot AI that jumps over holes, and harder rounds.
- **⛏️ Deep Miner:** 5 ores, a pickaxe/tank/bag/armor shop, lava pockets, fall damage and darkness deep down.
- **🏗️ Block Architect:** 12 hand-made levels plus 8 random challenges, with up to 3 ⭐ each.

---

## 🕹️ Block Arcade: 50 mini-games (`arcade/*.html`)

**Every mini-game is its own `.html` file** in the `arcade/` folder, for example `arcade/snake.html` or `arcade/nim.html`, so you can open or share any game directly. `arcade.html` is the menu for all 50, with category buttons, a search box and your high scores. Inside a game, press **Esc** to go back to the menu. Space or a click restarts.

### ⚡ Action
| # | Game | File | |
|---|---|---|---|
| 1 | 🐍 Block Snake (Блокова змия) | [`snake.html`](arcade/snake.html) | Eat apples and grow |
| 2 | 🧱 Ore Breaker (Рудотрошач) | [`breaker.html`](arcade/breaker.html) | Break ore blocks with a ball |
| 3 | 🛒 Ore Catcher (Ловец на руди) | [`catcher.html`](arcade/catcher.html) | Catch ore, avoid bombs |
| 4 | 🦇 Bat (Прилепче) | [`bat.html`](arcade/bat.html) | Fly through the cave |
| 5 | 🌋 Lava Rain (Лавов дъжд) | [`lavarain.html`](arcade/lavarain.html) | Survive falling lava |
| 6 | 👾 Invasion (Нашествие) | [`invaders.html`](arcade/invaders.html) | Shoot the slime waves |
| 7 | 🐔 Cross the Rails (Пресечи релсите) | [`crossing.html`](arcade/crossing.html) | Dodge carts, ride logs |
| 8 | 🏓 Block Tennis (Блоков тенис) | [`pong.html`](arcade/pong.html) | Beat the robot to 7 |
| 9 | ☄️ Meteor Miner (Метеоритен миньор) | [`meteors.html`](arcade/meteors.html) | Blast splitting rocks |
| 10 | 🏃 Block Runner (Блоков бегач) | [`runner.html`](arcade/runner.html) | Jump cacti, duck bats |

### 🧩 Puzzles
| # | Game | File | |
|---|---|---|---|
| 11 | 🟫 Trimino (Тримино) | [`trimino.html`](arcade/trimino.html) | Falling 3-block pieces |
| 12 | 💎 Match Three (Три в ред) | [`match3.html`](arcade/match3.html) | Swap gems |
| 13 | 💣 Sapper (Сапьор) | [`sapper.html`](arcade/sapper.html) | Find the safe blocks |
| 14 | 🃏 Memory (Памет) | [`memory.html`](arcade/memory.html) | Find the pairs |
| 15 | 🔢 Sliding Puzzle (Плъзгащ пъзел) | [`slide15.html`](arcade/slide15.html) | Order 1–15 |
| 16 | 🔦 Torches Out (Изгаси факлите) | [`lightsout.html`](arcade/lightsout.html) | Turn every torch off |
| 17 | 📦 Push the Crates (Бутай сандъците) | [`pushbox.html`](arcade/pushbox.html) | 6 crate-pushing levels |
| 18 | 🌀 Maze (Лабиринт) | [`maze.html`](arcade/maze.html) | Growing random mazes |
| 19 | 🌊 Flood (Наводнение) | [`flood.html`](arcade/flood.html) | Fill the board with one color |
| 20 | 🧊 Block Groups (Сборни блокове) | [`collapse.html`](arcade/collapse.html) | Clear groups of the same color |

### 🧠 Brain & Math
| # | Game | File | |
|---|---|---|---|
| 21 | ➕ Quick Math (Бърза сметка) | [`quickmath.html`](arcade/quickmath.html) | + − × ÷ against the clock |
| 22 | ⚖️ Scales (Везни) | [`compare.html`](arcade/compare.html) | Which side is bigger? |
| 23 | 👀 Quick Look (Бърз поглед) | [`countblocks.html`](arcade/countblocks.html) | Count the blocks in a flash |
| 24 | 🎵 Repeat (Повтори) | [`simon.html`](arcade/simon.html) | Remember the light sequence |
| 25 | ⚡ Reaction (Реакция) | [`reaction.html`](arcade/reaction.html) | Reaction time in ms |
| 26 | 🎯 Crosshair (Мерник) | [`aim.html`](arcade/aim.html) | Mouse aim trainer |
| 27 | 💾 Binary Code (Двоичен код) | [`binary.html`](arcade/binary.html) | Build numbers from bits |
| 28 | 🔢 Is It Prime? (Просто ли е?) | [`primes.html`](arcade/primes.html) | Prime or composite |
| 29 | 🍕 Fractions (Дроби) | [`fractions.html`](arcade/fractions.html) | Compare fractions |
| 30 | 🔮 Sequences (Редици) | [`sequence.html`](arcade/sequence.html) | Find the next number |

### 🎯 Skills
| # | Game | File | |
|---|---|---|---|
| 31 | 🔨 Whack the Slimes (Удари слузите) | [`whack.html`](arcade/whack.html) | Whack-a-mole |
| 32 | 🏗️ Tower Builder (Кулостроител) | [`stacker.html`](arcade/stacker.html) | Stack as high as you can |
| 33 | 🎶 Rhythm (Ритъм) | [`rhythm.html`](arcade/rhythm.html) | Hit notes with D F J K |
| 34 | 🛡️ Shield (Щит) | [`shield.html`](arcade/shield.html) | Block arrows around the crystal |
| 35 | ⛳ Mini Golf (Мини голф) | [`golf.html`](arcade/golf.html) | 9 holes, slingshot shots |
| 36 | 🎯 Catapult (Катапулт) | [`catapult.html`](arcade/catapult.html) | Angle + power + wind |
| 37 | ⛷️ Ski Run (Ски спускане) | [`ski.html`](arcade/ski.html) | Pass the gates, miss the trees |
| 38 | 🎣 Fishing (Риболов) | [`fishing.html`](arcade/fishing.html) | Hook and reel in fish |
| 39 | 🐝 Little Bee (Пчеличка) | [`bee.html`](arcade/bee.html) | Collect pollen, dodge wasps |
| 40 | ⛄ Snowball Fight (Снежна битка) | [`snowball.html`](arcade/snowball.html) | Hit the snowmen, not the dog |

### ♟️ Board & Sandbox
| # | Game | File | |
|---|---|---|---|
| 41 | ❌ Tic-Tac-Toe (Морски шах) | [`tictactoe.html`](arcade/tictactoe.html) | vs a minimax robot |
| 42 | 🔴 Four in a Row (Четири в ред) | [`connect4.html`](arcade/connect4.html) | vs the robot |
| 43 | 🪨 Nim (Ним) | [`nim.html`](arcade/nim.html) | Take the last block. The secret is XOR! |
| 44 | ⚫ Flip the Blocks (Обърни блоковете) | [`flipper.html`](arcade/flipper.html) | Surround and flip, 8×8 |
| 45 | 🎨 Pixel Canvas (Пикселно платно) | [`paint.html`](arcade/paint.html) | Draw with blocks |
| 46 | 🖼️ Nonogram (Нонограм) | [`nonogram.html`](arcade/nonogram.html) | Reveal the hidden picture |
| 47 | 🔢 Mini Sudoku (Мини судоку) | [`sudoku.html`](arcade/sudoku.html) | 4×4 sudoku |
| 48 | ⏳ Sandbox (Пясъчник) | [`sandbox.html`](arcade/sandbox.html) | Sand, water, lava, stone, wood, fire |
| 49 | 🚰 Plumbing (Водопровод) | [`pipes.html`](arcade/pipes.html) | Rotate pipes to connect the water |
| 50 | 🗡️ Cave Explorer (Пещерен изследовател) | [`dungeon.html`](arcade/dungeon.html) | Turn-based dungeon: gems, monsters, stairs |

All 50 pages share one small engine, `arcade/engine.js`. It handles the canvas, keyboard, mouse, touch swipes, sounds, the game-over screen and high scores (saved in `localStorage`). Each game file contains just its own `A.add({...})` object with `start`, `update`, `draw` and optional `key` / `click` functions.

**Make your own mini-game:** copy any file in `arcade/` (for example `snake.html`), change the code inside `A.add({...})`, and add a card for it to the list in `arcade.html`.

---

## 📁 Project structure

```
minecraft/
├── games.html              # 🎮 Main menu with all the games
├── index.html              # My Minecraft
├── minecraft.html          # BlockForge (WebGL2)
├── New World - Play.html   # New World
├── infinite-parkour.html   # Block Parkour ∞
├── lava-floor.html         # Lava Floor
├── deep-miner.html         # Deep Miner
├── block-architect.html    # Block Architect
├── minecart-rush.html      # Minecart Rush
├── night-defense.html      # Night Defense
├── block-farm.html         # Block Farm
├── arcade.html             # Block Arcade menu (links to the 50 games)
├── arcade/
│   ├── engine.js           # Shared engine for all mini-games
│   ├── snake.html          # 1. Block Snake
│   ├── breaker.html        # 2. Ore Breaker
│   ├── ...                 # one .html file per game
│   └── dungeon.html        # 50. Cave Explorer
├── test.html               # Quick Three.js/WebGL check
├── three.min.js            # Three.js r128 (MIT license)
├── package.json
└── README.md
```

## 🧠 How some of it works

- **Textures with no image files:** every block is painted with code on a tiny 16×16 canvas and drawn with `NearestFilter` for the pixel look.
- **Block Parkour ∞:** blocks live in a `Map` under `"x|y|z"` keys. It uses AABB collision, *coyote time* and a jump buffer.
- **Lava Floor:** each tile has a state (whole → cracking → falling → gone). Bots score nearby tiles and jump when the next one is missing.
- **Night Defense:** enemies walk along waypoints. Towers target the enemy farthest along the path. Lightning picks the nearest unhit enemy for each chain jump.
- **Push the Crates:** every level was checked with a breadth-first-search solver to make sure it can be solved.
- **Nim:** the robot plays the winning strategy, making the XOR of the piles equal 0 (with a little randomness so you can win).
- **Sandbox:** a 160×110 cellular automaton. Sand falls and slides, water flows sideways, lava + water = stone, and lava sets wood on fire.
- **Sounds:** all made live with the Web Audio API (`OscillatorNode`), with no sound files.

## 🛠️ Ideas for the future

- [ ] Collision in My Minecraft (reuse `collides()` from Block Parkour)
- [ ] Touch controls for the 3D games
- [ ] Local copy of Three.js r160 so Block Parkour works offline
- [ ] More arcade games: copy a file in `arcade/` and change it!

## 📜 License

The game code is by **[@n95460754](https://github.com/n95460754)**.
Three.js is © Three.js Authors, released under the [MIT License](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

*This is a fan project and is not affiliated with Mojang or Microsoft. "Minecraft" is a trademark of Mojang Studios.*
