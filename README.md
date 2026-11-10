# ⛏️ My Minecraft: Block Games Collection

**385 block games** that run straight in your browser: 10 full games plus the **Block Arcade** with 375 mini-games. Built with plain HTML + JavaScript (and [Three.js](https://threejs.org/) for the 3D ones). No build step, no installs, no server.

> Moyata blokova igra: dig, build, explore, jump, solve and survive in a blocky world.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?logo=three.js&logoColor=white)
![Games](https://img.shields.io/badge/games-385-5aa13a)

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

## 🕹️ Block Arcade: 375 mini-games (`arcade/*.html`)

**Every mini-game is its own `.html` file** in the `arcade/` folder, for example `arcade/snake.html` or `arcade/nim.html`, so you can open or share any game directly. `arcade.html` is the menu for all 237, with category buttons, a search box and your high scores. Inside a game, press **Esc** to go back to the menu. Space or a click restarts.

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


### ⚡ Action 2
| # | Game | File | |
|---|---|---|---|
| 51 | 🚀 Jetpack (Реактивна раница) | [`jetpack.html`](arcade/jetpack.html) | Hold to fly, dodge lasers |
| 52 | 🕳️ Tunnel (Тунел) | [`tunnel.html`](arcade/tunnel.html) | Steer down a narrowing tunnel |
| 53 | 🏹 Archery (Стрелец с лък) | [`archery.html`](arcade/archery.html) | Arc shots at moving targets |
| 54 | 🔃 Gravity Flip (Гравитация) | [`gravity.html`](arcade/gravity.html) | Flip between floor and ceiling |
| 55 | 💥 Bomber (Бомбаджия) | [`bomber.html`](arcade/bomber.html) | Bomb crates and slimes in a maze |
| 56 | 🏰 Castle Defense (Защита на замъка) | [`castle.html`](arcade/castle.html) | Click attackers before they reach the wall |
| 57 | ⬆️ Bouncy Block (Подскачащ блок) | [`jumper.html`](arcade/jumper.html) | Bounce up endless platforms |
| 58 | 🌙 Moon Lander (Лунно кацане) | [`lander.html`](arcade/lander.html) | Land softly, save fuel |
| 59 | ⬇️ Fall Down (Надолу) | [`falldown.html`](arcade/falldown.html) | Drop through gaps, avoid the spikes |
| 60 | 🛡️ Tank Battle (Танкова битка) | [`tanks.html`](arcade/tanks.html) | Top-down tanks, bouncing shells |

### 🧩 Puzzles 2
| # | Game | File | |
|---|---|---|---|
| 61 | 🧊 Ice Slide (Ледена пързалка) | [`iceslide.html`](arcade/iceslide.html) | Slide until you hit a rock |
| 62 | 🔦 Mirrors (Огледала) | [`mirrors.html`](arcade/mirrors.html) | Rotate mirrors to guide the laser |
| 63 | 🧪 Color Tubes (Епруветки) | [`tubes.html`](arcade/tubes.html) | Sort the colors into tubes |
| 64 | 🗼 Tower of Hanoi (Ханойски кули) | [`hanoi.html`](arcade/hanoi.html) | Move the tower, small on big |
| 65 | ⛵ River Crossing (Пренеси през реката) | [`river.html`](arcade/river.html) | Wolf, goat and cabbage logic puzzle |
| 66 | 🔲 Remember the Pattern (Запомни шарката) | [`pattern.html`](arcade/pattern.html) | Repeat the lit blocks |
| 67 | ⚖️ The Heavy Block (Тежкият блок) | [`weigh.html`](arcade/weigh.html) | Find it in 2 weighings |
| 68 | 🧊 Cube Pile (Купчина кубчета) | [`cubes3d.html`](arcade/cubes3d.html) | Count the cubes in an isometric pile |
| 69 | 🤖 Program the Robot (Програмирай робота) | [`robot.html`](arcade/robot.html) | Write a ↑ ↺ ↻ program |
| 70 | 🔐 Cipher (Шифър) | [`caesar.html`](arcade/caesar.html) | Decode Caesar-shifted words |

### 🧠 Brain & Math 2
| # | Game | File | |
|---|---|---|---|
| 71 | 🟰 Equations (Уравнения) | [`equation.html`](arcade/equation.html) | Solve for x |
| 72 | 💯 Percent (Проценти) | [`percent.html`](arcade/percent.html) | X% of Y |
| 73 | 🏛️ Roman Numerals (Римски цифри) | [`roman.html`](arcade/roman.html) | Roman → Arabic |
| 74 | ² Squares & Roots (Квадрати и корени) | [`squares.html`](arcade/squares.html) | n² and √n |
| 75 | ➗ GCD & LCM (НОД и НОК) | [`gcd.html`](arcade/gcd.html) | Greatest divisor, least multiple |
| 76 | 📐 Angles (Ъгли) | [`angles.html`](arcade/angles.html) | Guess the degrees |
| 77 | ⬛ Area & Perimeter (Лице и периметър) | [`area.html`](arcade/area.html) | Of block shapes |
| 78 | 🪙 Coins (Монети) | [`coins.html`](arcade/coins.html) | Add up euro coins |
| 79 | 🔍 Divisibility (Делимост) | [`divisible.html`](arcade/divisible.html) | Divisible or not? |
| 80 | 🕒 Clock (Часовник) | [`clock.html`](arcade/clock.html) | Read the analog clock |

### 🎯 Skills 2
| # | Game | File | |
|---|---|---|---|
| 81 | 🤹 Juggler (Жонгльор) | [`juggle.html`](arcade/juggle.html) | Click blocks so they don't fall |
| 82 | 🎋 Balancing Act (Еквилибрист) | [`balance.html`](arcade/balance.html) | Keep a tall pole upright |
| 83 | 🐑 Sheepdog (Пастирско куче) | [`sheep.html`](arcade/sheep.html) | Herd sheep into the pen |
| 84 | 〰️ Don't Touch the Wire (Не пипай жицата) | [`wire.html`](arcade/wire.html) | Trace the path with the mouse |
| 85 | 🔪 Block Slicer (Блокосечене) | [`slicer.html`](arcade/slicer.html) | Swipe through flying blocks |
| 86 | 🪢 Jump Rope (Скачане на въже) | [`rope.html`](arcade/rope.html) | Jump at the right moment |
| 87 | 🔢 Counting Sheep (Броене на овце) | [`sheepcount.html`](arcade/sheepcount.html) | Count only the sheep |
| 88 | ⌨️ Fast Fingers (Бързи пръсти) | [`typing.html`](arcade/typing.html) | Hit the falling letters |
| 89 | 🏗️ Crane Claw (Кран) | [`claw.html`](arcade/claw.html) | Grab ore from the belt |
| 90 | 🚒 Firefighter (Пожарникар) | [`firefighter.html`](arcade/firefighter.html) | Spray water on the fires |

### ♟️ Board & Sandbox 2
| # | Game | File | |
|---|---|---|---|
| 91 | ⚪ Five in a Row (Пет в ред) | [`gomoku.html`](arcade/gomoku.html) | vs the robot, 13×13 |
| 92 | ▫️ Dots & Boxes (Квадратчета) | [`dotsboxes.html`](arcade/dotsboxes.html) | Close more boxes than the robot |
| 93 | ♞ Knight's Tour (Ходът на коня) | [`knight.html`](arcade/knight.html) | Visit every square once |
| 94 | 🚢 Sea Battle (Морски бой) | [`battleship.html`](arcade/battleship.html) | Sink the robot's fleet first |
| 95 | 🧬 Game of Life (Играта на живота) | [`life.html`](arcade/life.html) | Conway's cellular automaton |
| 96 | ⛏️ Builder 2D (Строител 2D) | [`builder2d.html`](arcade/builder2d.html) | Side-view block sandbox with sand and water |
| 97 | 🐜 Langton's Ant (Мравката на Лангтън) | [`langton.html`](arcade/langton.html) | Simple rules, chaotic patterns |
| 98 | 🎲 Dice (Зарове) | [`pig.html`](arcade/pig.html) | Roll or hold, first to 50 |
| 99 | 🃏 Higher or Lower (По-голямо/по-малко) | [`higherlower.html`](arcade/higherlower.html) | Guess the next card |
| 100 | 💎 Block Clicker (Блоков кликер) | [`clicker.html`](arcade/clicker.html) | Reach 100,000 blocks fast |


### ⚡ Action 3
| # | Game | File | |
|---|---|---|---|
| 101 | ⚽ Dodgeball (Избягвай топките) | [`dodgeball.html`](arcade/dodgeball.html) | Survive the bouncing balls |
| 102 | 🪐 Orbit Defense (Орбитална защита) | [`orbit.html`](arcade/orbit.html) | Turret around a planet vs meteors |
| 103 | 🎱 Flippers (Флипери) | [`flippers.html`](arcade/flippers.html) | Block pinball with bumpers |
| 104 | 🐍 Snakes for Two (Змии за двама) | [`snake2p.html`](arcade/snake2p.html) | 2 players on one keyboard: WASD vs arrows |
| 105 | 🐟 Hungry Fish (Гладна риба) | [`fishgrow.html`](arcade/fishgrow.html) | Eat smaller fish, grow, avoid bigger ones |

### 🧩 Puzzles 3
| # | Game | File | |
|---|---|---|---|
| 106 | 📍 Peg Solitaire (Солитер) | [`pegs.html`](arcade/pegs.html) | Jump pegs, leave just one |
| 107 | 0️⃣ Binary Sudoku (Двоично судоку) | [`binsudoku.html`](arcade/binsudoku.html) | 0s and 1s, never three in a row |
| 108 | 🚃 Free the Minecart (Освободи вагонетката) | [`unblock.html`](arcade/unblock.html) | Slide blocks to clear the exit |
| 109 | ✨ Magic Square (Магически квадрат) | [`magicsquare.html`](arcade/magicsquare.html) | Every row, column and diagonal = 15 |
| 110 | 🔎 Word Search (Търсачка на думи) | [`wordsearch.html`](arcade/wordsearch.html) | Find the hidden Bulgarian words |

### 🧠 Brain & Math 3
| # | Game | File | |
|---|---|---|---|
| 111 | ⛓️ Math Chain (Верига сметки) | [`chain.html`](arcade/chain.html) | Mental math, one step at a time |
| 112 | 📏 Units (Мерни единици) | [`units.html`](arcade/units.html) | m, cm, kg, g, h, min… |
| 113 | ➖ Negative Numbers (Отрицателни числа) | [`negatives.html`](arcade/negatives.html) | Math below zero |
| 114 | 🔋 Powers (Степени) | [`powers.html`](arcade/powers.html) | 2ⁿ, 3ⁿ, 10ⁿ |
| 115 | 👁️ By Eye (На око) | [`estimate.html`](arcade/estimate.html) | Estimate how many blocks |

### 🎯 Skills 3
| # | Game | File | |
|---|---|---|---|
| 116 | 🪂 Parachute (Парашутист) | [`parachute.html`](arcade/parachute.html) | Land on the target despite the wind |
| 117 | 🎳 Bowling (Боулинг) | [`bowling.html`](arcade/bowling.html) | Aim, power, knock down pins |
| 118 | 🏀 Basketball (Баскетбол) | [`basket.html`](arcade/basket.html) | Slingshot the ball into a moving hoop |
| 119 | ⏱️ Inner Clock (Вътрешен часовник) | [`innerclock.html`](arcade/innerclock.html) | Stop at exactly 10.00 s blind |
| 120 | 🌉 Stick Bridge (Мост с пръчка) | [`stickbridge.html`](arcade/stickbridge.html) | Grow a stick just long enough |

### ♟️ Board & Sandbox 3
| # | Game | File | |
|---|---|---|---|
| 121 | ⛀ Checkers (Дама) | [`checkers.html`](arcade/checkers.html) | vs the robot, mandatory captures, kings |
| 122 | 🥣 Kalah (Калах) | [`kalah.html`](arcade/kalah.html) | Ancient pebble-sowing game vs the robot |
| 123 | 🔐 Code Breaker (Разбий кода) | [`codebreak.html`](arcade/codebreak.html) | Guess the 4-color code in 10 tries |
| 124 | 🌳 Fractal Tree (Фрактално дърво) | [`fractal.html`](arcade/fractal.html) | Math art: angle, shrink, depth |
| 125 | 🗺️ World Generator (Генератор на светове) | [`worldgen.html`](arcade/worldgen.html) | Infinite noise map with biomes |

### 🧠 Brain & Math 4
| # | Game | File | |
|---|---|---|---|
| 126 | ✖️ Times Tables (Таблицата) | [`multtable.html`](arcade/multtable.html) | Multiplication up to 10×10 |
| 127 | ➗ Division (Деление) | [`division.html`](arcade/division.html) | Exact division |
| 128 | ❓ Missing Number (Липсващото число) | [`missing.html`](arcade/missing.html) | 7 + ? = 15 |
| 129 | ✌️ Double & Half (Двойно и половина) | [`doubling.html`](arcade/doubling.html) | Mental doubling and halving |
| 130 | 📊 Average (Средно аритметично) | [`average.html`](arcade/average.html) | Mean of several numbers |
| 131 | 🔺 Triangle Angles (Ъгли в триъгълник) | [`triangle.html`](arcade/triangle.html) | The angles add up to 180° |
| 132 | 🔟 Decimals (Десетични дроби) | [`decimals.html`](arcade/decimals.html) | Add and subtract with decimals |
| 133 | ⌛ Time Elapsed (Колко време мина) | [`timecalc.html`](arcade/timecalc.html) | Minutes between two times |
| 134 | 🚗 Speed & Distance (Скорост и път) | [`speed.html`](arcade/speed.html) | s = v · t word problems |
| 135 | 🛒 The Shop (Магазинът) | [`shop.html`](arcade/shop.html) | Add up the shopping bill |
| 136 | 🔷 Shapes (Фигури) | [`shapes.html`](arcade/shapes.html) | Name the polygon |
| 137 | 🎨 Color or Word? (Цвят или дума?) | [`stroop.html`](arcade/stroop.html) | The Stroop effect |
| 138 | 🙃 Odd One Out (Кое не е на място?) | [`oddone.html`](arcade/oddone.html) | Which one does not belong? |
| 139 | 🏙️ Capitals (Столици) | [`capitals.html`](arcade/capitals.html) | European capitals quiz |
| 140 | 🏳️ Flags (Знамена) | [`flags.html`](arcade/flags.html) | Guess the country by its flag |
| 141 | 🇬🇧 English Words (Английски думи) | [`english.html`](arcade/english.html) | Bulgarian → English |
| 142 | 🔬 Little Scientist (Малкият учен) | [`science.html`](arcade/science.html) | Nature and space quiz |
| 143 | 🇧🇬 Know Bulgaria? (Знаеш ли България?) | [`bulgaria.html`](arcade/bulgaria.html) | Bulgarian geography and history |
| 144 | 🧭 How Many Paths? (Колко пътя?) | [`pathcount.html`](arcade/pathcount.html) | Grid combinatorics |
| 145 | 📍 Number Line (Числова ос) | [`numberline.html`](arcade/numberline.html) | Click where the number is |

### ⚡ Action 4
| # | Game | File | |
|---|---|---|---|
| 146 | 🚁 Heli Rescue (Хеликоптер спасител) | [`helirescue.html`](arcade/helirescue.html) | Pick up people from rooftops |
| 147 | 👻 Gem Maze (Кристали в лабиринта) | [`gemchase.html`](arcade/gemchase.html) | Collect gems, flee the zombies |
| 148 | 🏎️ Highway (Магистрала) | [`carrace.html`](arcade/carrace.html) | Weave through traffic |
| 149 | 🎆 Missile Defense (Ракетна защита) | [`missiles.html`](arcade/missiles.html) | Protect the cities |
| 150 | 🪁 Kite (Хвърчило) | [`kite.html`](arcade/kite.html) | Keep the kite flying |
| 151 | 🥚 Eggs (Яйцата) | [`eggs.html`](arcade/eggs.html) | Catch eggs from four chutes |
| 152 | 🔥 Over the Lava (Над лавата) | [`lavahop.html`](arcade/lavahop.html) | Hop across moving blocks |
| 153 | 🎾 Squash (Скуош) | [`squash.html`](arcade/squash.html) | Keep the ball bouncing off the wall |
| 154 | ↗️ Zigzag (Зигзаг) | [`zigzag.html`](arcade/zigzag.html) | Switch direction, stay on the path |
| 155 | 🌈 Color Gate (Цветна врата) | [`colorgate.html`](arcade/colorgate.html) | Match the wall color |
| 156 | 🧟 Zombie Attack (Зомби атака) | [`zombies.html`](arcade/zombies.html) | Top-down survival shooter |
| 157 | 💪 Tug of War (Дърпане на въже) | [`tugofwar.html`](arcade/tugofwar.html) | 2 players: mash A vs L |
| 158 | 🏓 Tennis for Two (Тенис за двама) | [`pong2p.html`](arcade/pong2p.html) | 2 players: W/S vs ↑/↓ |
| 159 | 🏍️ Light Cycles (Светлинни мотори) | [`lightcycles.html`](arcade/lightcycles.html) | 2 players: trails you must not hit |
| 160 | 🏒 Air Hockey (Въздушен хокей) | [`airhockey.html`](arcade/airhockey.html) | Mouse vs the robot |
| 161 | 🧱 Don't Get Crushed (Не бъди смачкан) | [`crusher.html`](arcade/crusher.html) | Climb the falling blocks |
| 162 | 🕸️ Grappling Hook (Кука с въже) | [`swing.html`](arcade/swing.html) | Swing from hook to hook |
| 163 | ✈️ Sky Shooter (Небесен стрелец) | [`skyshooter.html`](arcade/skyshooter.html) | Side-scrolling shooter with power-ups |
| 164 | 🛸 Starship (Звезден кораб) | [`starship.html`](arcade/starship.html) | Vertical shooter with bosses |
| 165 | 💣 Minefield (Минно поле) | [`minefield.html`](arcade/minefield.html) | Cross by memory |

### 🧩 Puzzles 4
| # | Game | File | |
|---|---|---|---|
| 166 | 🔟 Make 10 (Сбор 10) | [`sumten.html`](arcade/sumten.html) | Click pairs that add to 10 |
| 167 | 🦋 Symmetry (Симетрия) | [`symmetry.html`](arcade/symmetry.html) | Complete the mirror image |
| 168 | 🗾 Color the Map (Оцвети картата) | [`colormap.html`](arcade/colormap.html) | Four-color map puzzle |
| 169 | ✏️ One Stroke (С една линия) | [`onestroke.html`](arcade/onestroke.html) | Visit every cell once |
| 170 | ⚙️ Gears (Зъбни колела) | [`gears.html`](arcade/gears.html) | Which way does the last gear turn? |
| 171 | ⚖️ Weights & Scales (Везни с тежести) | [`scales.html`](arcade/scales.html) | Algebra on a balance |
| 172 | 🔄 Rotated Shape (Завъртяна фигура) | [`rotation.html`](arcade/rotation.html) | Find the rotation, not the mirror |
| 173 | 🟪 Latin Square (Латински квадрат) | [`latin.html`](arcade/latin.html) | Each color once per row and column |
| 174 | ➕ Number Cross (Числов кръст) | [`numbercross.html`](arcade/numbercross.html) | Fill 1–9 to match the sums |
| 175 | 🏢 Skyscrapers (Небостъргачи) | [`skyscrapers.html`](arcade/skyscrapers.html) | How many towers can you see? |
| 176 | 🗝️ Maze with a Key (Лабиринт с ключ) | [`mazekey.html`](arcade/mazekey.html) | Get the key, open the door |
| 177 | 🧩 Picture Puzzle (Пъзел с картинка) | [`jigsaw.html`](arcade/jigsaw.html) | Swap tiles to fix the picture |
| 178 | 📥 Tilt the Box (Наклони кутията) | [`tiltbox.html`](arcade/tiltbox.html) | All blocks slide together |
| 179 | 🏠 One Line Drawing (Без да вдигаш молива) | [`euler.html`](arcade/euler.html) | Euler paths without lifting the pen |
| 180 | 🎯 Guess the Number (Познай числото) | [`guessnum.html`](arcade/guessnum.html) | Binary search 1–1000 |
| 181 | 🔤 Anagrams (Анаграми) | [`anagram.html`](arcade/anagram.html) | Unscramble the word |
| 182 | 🔥 Hot & Cold (Студено-топло) | [`hotcold.html`](arcade/hotcold.html) | Find treasure by distance |
| 183 | 🌈 Color Gradient (Цветна дъга) | [`gradient.html`](arcade/gradient.html) | Sort the shades |
| 184 | 💡 Logic Gates (Логически схеми) | [`logicgates.html`](arcade/logicgates.html) | AND, OR, XOR, NOT: light the lamp |
| 185 | 👑 Eight Queens (Осем царици) | [`queens.html`](arcade/queens.html) | No queen attacks another |

### 🎯 Skills 4
| # | Game | File | |
|---|---|---|---|
| 186 | 🔢 Connect in Order (Свържи по ред) | [`connectdots.html`](arcade/connectdots.html) | Click 1 to 25 fast |
| 187 | 🎯 Darts (Дартс) | [`darts.html`](arcade/darts.html) | The aim wobbles! |
| 188 | ⚽ Penalties (Дузпи) | [`penalty.html`](arcade/penalty.html) | Shoot and save |
| 189 | 🔍 Spot the Difference (Открий разликите) | [`spotdiff.html`](arcade/spotdiff.html) | Find 5 differences |
| 190 | 👆 Click Mania (Кликомания) | [`fastclick.html`](arcade/fastclick.html) | Clicks in 10 seconds |
| 191 | ⬆️ Lightning Arrows (Светкавица) | [`arrows.html`](arcade/arrows.html) | Press the arrow, or the opposite if it is red |
| 192 | 🕹️ Combo (Комбо) | [`combo.html`](arcade/combo.html) | Type the key sequence |
| 193 | 🪰 Catch the Fly (Хвани мухата) | [`catchfly.html`](arcade/catchfly.html) | Swat the speedy fly |
| 194 | 🥛 Pour Exactly (Налей точно) | [`pour.html`](arcade/pour.html) | Stop at the line |
| 195 | 🍬 Cut the Rope (Отрежи въжето) | [`cutrope.html`](arcade/cutrope.html) | Drop the candy in the basket |
| 196 | 🥁 Metronome (Метроном) | [`metronome.html`](arcade/metronome.html) | Keep the beat on your own |
| 197 | ⭕ Draw a Circle (Нарисувай кръг) | [`drawcircle.html`](arcade/drawcircle.html) | How perfect is your circle? |
| 198 | 📏 Measure by Eye (Отмери на око) | [`measure.html`](arcade/measure.html) | Match the length |
| 199 | 🅿️ Parking (Паркиране) | [`parking.html`](arcade/parking.html) | Park without a scratch |
| 200 | 🔴 Laser Ring (Лазерен кръг) | [`laserring.html`](arcade/laserring.html) | Dodge the rotating beams |
| 201 | 📌 Where Was It? (Къде беше?) | [`pinpoint.html`](arcade/pinpoint.html) | Remember and point |
| 202 | 🚦 Traffic Lights (Светофар) | [`traffic.html`](arcade/traffic.html) | Prevent crashes at the crossroads |
| 203 | 🥞 Pancakes (Палачинки) | [`pancakes.html`](arcade/pancakes.html) | Flip and serve on time |
| 204 | 🫥 Invisible Maze (Невидим лабиринт) | [`invismaze.html`](arcade/invismaze.html) | Memorize the path |
| 205 | 🔨 Strength Tester (Силомер) | [`strength.html`](arcade/strength.html) | Hit at the peak |

### ♟️ Board & Sandbox 4
| # | Game | File | |
|---|---|---|---|
| 206 | #️⃣ Ultimate Tic-Tac-Toe (Супер морски шах) | [`ultimate.html`](arcade/ultimate.html) | Tic-tac-toe inside tic-tac-toe |
| 207 | ⬡ Hex (Хекс) | [`hex.html`](arcade/hex.html) | Connect your two sides |
| 208 | 🎲 Snakes & Ladders (Змии и стълби) | [`snakesladders.html`](arcade/snakesladders.html) | Classic dice race to 100 |
| 209 | 🎱 Bingo (Бинго) | [`bingo.html`](arcade/bingo.html) | Mark numbers faster than the robot |
| 210 | 🖌️ Paint by Numbers (Оцвети по номера) | [`paintbynum.html`](arcade/paintbynum.html) | Pixel art by digits |
| 211 | 🔮 Kaleidoscope (Калейдоскоп) | [`kaleido.html`](arcade/kaleido.html) | Draw with 8-fold symmetry |
| 212 | 🌀 Spirograph (Спирограф) | [`spiro.html`](arcade/spiro.html) | Rolling-circle math art |
| 213 | 🐚 Mandelbrot (Манделброт) | [`mandelbrot.html`](arcade/mandelbrot.html) | Zoom into the infinite fractal |
| 214 | 🌍 Planet Gravity (Гравитация на планети) | [`planets.html`](arcade/planets.html) | Launch planets into orbit |
| 215 | 🎹 Piano (Пиано) | [`piano.html`](arcade/piano.html) | Play, record and replay |
| 216 | 🥁 Beat Machine (Ритъм машина) | [`drums.html`](arcade/drums.html) | 16-step drum sequencer |
| 217 | 🀱 Domino Effect (Домино ефект) | [`dominofall.html`](arcade/dominofall.html) | Set them up and push |
| 218 | 🐇 Ecosystem (Екосистема) | [`ecosystem.html`](arcade/ecosystem.html) | Rabbits, foxes and grass |
| 219 | 🐦 Flock of Birds (Ято птици) | [`flock.html`](arcade/flock.html) | Three simple rules = a flock |
| 220 | 🐠 Aquarium (Аквариум) | [`aquarium.html`](arcade/aquarium.html) | Keep the fish fed |
| 221 | 🏘️ Little Town (Градче) | [`isocity.html`](arcade/isocity.html) | Build an isometric town |
| 222 | 🖍️ Coloring Book (Книжка за оцветяване) | [`coloring.html`](arcade/coloring.html) | Paint-bucket fill |
| 223 | 📈 Dice Statistics (Хвърляне на зарове) | [`dicestats.html`](arcade/dicestats.html) | Law of large numbers, live |
| 224 | 🔵 Marble Run (Пързалка за топчета) | [`marbles.html`](arcade/marbles.html) | Draw ramps for falling marbles |
| 225 | 🐾 Block Pet (Блоков любимец) | [`blockpet.html`](arcade/blockpet.html) | Take care of your pet |
| 226 | 🪓 Timber! (Дървосекач) | [`timber.html`](arcade/timber.html) | Chop the tree, dodge the branches |
| 227 | 🔢 2048 Ore Merge (Сливане 2048) | [`merge2048.html`](arcade/merge2048.html) | Merge matching ores up to 2048 |
| 228 | 🧮 Remember the Number (Запомни числото) | [`digitspan.html`](arcade/digitspan.html) | Memorize ever longer numbers |
| 229 | 🚜 Land Grab (Завземи земя) | [`territory.html`](arcade/territory.html) | Fence off land, keep slimes off your trail |
| 230 | 🔗 Link the Pairs (Свържи двойките) | [`flowlink.html`](arcade/flowlink.html) | Connect matching ores and fill the grid |
| 231 | 📍 Coordinates (Координати) | [`coords.html`](arcade/coords.html) | Find points on the (x, y) grid |
| 232 | ⚪ Reversi (Реверси) | [`reversi.html`](arcade/reversi.html) | Flip the robot's coal blocks to gold |
| 233 | 🔺 Number Pyramid (Числова пирамида) | [`numpyramid.html`](arcade/numpyramid.html) | Each block is the sum of the two below |
| 234 | 📦 Ore Sorter (Сортирай рудите) | [`oresort.html`](arcade/oresort.html) | Sort falling ores into chests, TNT into lava |
| 235 | 🔮 Ore Pop (Пукни рудите) | [`orepop.html`](arcade/orepop.html) | Shoot ores and pop groups of 3 matching blocks |
| 236 | 🧱 Block Blast (Блоков взрив) | [`blockblast.html`](arcade/blockblast.html) | Fit shapes on an 8×8 board and clear full rows and columns |
| 237 | 🪓 Prime Factors (Прости множители) | [`factors.html`](arcade/factors.html) | Chop numbers into prime factors before time runs out |
| 238 | ⛏️ Pickaxe Throw (Хвърли кирката) | [`axethrow.html`](arcade/axethrow.html) | Stick pickaxes into a spinning log without hitting the others |
| 239 | 🟩 Slime Split (Раздели слузите) | [`slimesplit.html`](arcade/slimesplit.html) | Shoot a rope up and split bouncing slimes into smaller ones |
| 240 | ⛺ Tents (Палатки) | [`tents.html`](arcade/tents.html) | Place one tent next to every tree using the row and column numbers |
| 241 | 🔶 Pyramid Hop (Пирамидата) | [`cubehop.html`](arcade/cubehop.html) | Hop diagonally on a cube pyramid, color every top and dodge the slimes |
| 242 | 🔄 Twist Squares (Завърти квадратите) | [`twist.html`](arcade/twist.html) | Rotate 2×2 groups of blocks until every row is one color |
| 243 | 🎴 Make 24 (Направи 24) | [`make24.html`](arcade/make24.html) | Combine four numbers with + − × ÷ to make exactly 24 |
| 244 | ☄️ Space Rocks (Космически скали) | [`asteroids.html`](arcade/asteroids.html) | Spin your ship, thrust and blast drifting rocks that split into smaller pieces |
| 245 | 🌉 Bridges (Мостове) | [`hashi.html`](arcade/hashi.html) | Connect the islands with 1 or 2 bridges each so every number matches and nothing crosses |
| 246 | 🔢 Order the Numbers (Подреди числата) | [`ordernums.html`](arcade/ordernums.html) | Tap numbers from smallest to largest (or back): negatives, decimals, fractions and percents |
| 247 | 🛤️ Switchman (Стрелочник) | [`railswitch.html`](arcade/railswitch.html) | Flip three rail switches to send every colored minecart to the station with the same ore |
| 248 | 🏮 Cave Lanterns (Фенери в пещерата) | [`lanterns.html`](arcade/lanterns.html) | Light-Up logic puzzle: place lanterns to light the whole cave without two seeing each other |
| 249 | 🔽 Round It (Закръгли числото) | [`rounding.html`](arcade/rounding.html) | Steer the falling number block into the chest with the correctly rounded number |
| 250 | 🐛 Centipede (Стоножката) | [`centipede.html`](arcade/centipede.html) | Shoot the centipede crawling down between stones; hit segments turn to stone |
| 251 | 🔣 Inequalities (Неравенства) | [`futoshiki.html`](arcade/futoshiki.html) | Futoshiki: fill rows and columns with 1–N so every < and > sign is true |
| 252 | 🎱 Block Pool (Блоков билярд) | [`pool.html`](arcade/pool.html) | Aim, charge and pot the ore balls into the pockets with the cue ball |
| 253 | 💎 Falling Boulders (Падащи камъни) | [`boulderdash.html`](arcade/boulderdash.html) | Dig through dirt for diamonds, open the exit and don't get crushed by falling boulders; drop rocks on spiders |
| 254 | 🧱 Roll the Block (Търкаляй блока) | [`rollblock.html`](arcade/rollblock.html) | Roll a 1×1×2 block across floating tiles and stand it upright over the hole; avoid edges and fragile tiles |
| 255 | 🧮 Order of Operations (Ред на действията) | [`opsorder.html`](arcade/opsorder.html) | Solve expressions in the right order: brackets, then × and ÷, then + and − |
| 256 | 🫧 Ore Bubbles (Рудни мехури) | [`orebubbles.html`](arcade/orebubbles.html) | Aim and shoot ore blocks up; join 3+ of the same colour to pop them and drop hanging ores; the ceiling keeps sinking |
| 257 | 🔢 Build the Number (Строй числото) | [`placevalue.html`](arcade/placevalue.html) | Build numbers from hundreds plates, tens rods and ones cubes, including regrouping like "2 hundreds, 14 tens" |
| 258 | 🛒 Mine Cart Brake (Спри вагонетката) | [`cartbrake.html`](arcade/cartbrake.html) | Pull the brake once at the right moment so the cart stops as close to the cliff edge as possible; ice rails slide |
| 259 | ☕ Cocoa for Villagers (Какао за селяните) | [`cocoabar.html`](arcade/cocoabar.html) | Slide mugs of hot cocoa down four counters before the villagers reach you, and catch the empty mugs that slide back |
| 260 | 🟦 Rectangles (Правоъгълници) | [`shikaku.html`](arcade/shikaku.html) | Shikaku logic puzzle: split the grid into rectangles so each holds exactly one number equal to its area |
| 261 | 📊 Read the Chart (Чети графиката) | [`barchart.html`](arcade/barchart.html) | Read a bar chart made of ore blocks and answer questions: how many, how many more, how many together, which is most |
| 262 | 🏐 Block Volleyball (Блоков волейбол) | [`volley.html`](arcade/volley.html) | Slime-style volleyball against a robot: jump and bump the ball over the net; the robot gets faster every point you score |
| 263 | ⬛ No Repeats (Без повторения) | [`hitori.html`](arcade/hitori.html) | Hitori logic puzzle: blacken blocks so no number repeats in any row or column, black blocks never touch and white ones stay connected |
| 264 | 📅 Calendar Puzzles (Календарни задачи) | [`calendar.html`](arcade/calendar.html) | Calendar maths: which weekday comes after N days, how many days a month has, which month is next, which year is a leap year |
| 265 | 🛤️ Minecart Escape (Бягство с вагонетка) | [`minecart.html`](arcade/minecart.html) | Lane runner in a mine: switch between three rails, jump wooden fences, dodge stone and TNT and grab gold while the cart speeds up |
| 266 | 🀄 Three Tiles (Три плочки) | [`tiletrio.html`](arcade/tiletrio.html) | Tile-matching puzzle: take free tiles from a layered pile into a 7-slot tray; three of a kind vanish, a full tray ends the game |
| 267 | 🛠️ Crafting Recipes (Рецепти за изработване) | [`crafting.html`](arcade/crafting.html) | Crafting-table maths: how many materials for N pickaxes, how many torches from N coal, how many chests you can make and what is left over |
| 268 | 🪽 Elytra Flight (Полет с елитра) | [`elytra.html`](arcade/elytra.html) | Glide with elytra wings over blocky hills: hold to climb (and lose speed), let go to dive (and speed up); fly through gold rings for combos, grab fireworks and avoid towers |
| 269 | 📦 Fill the Box (Попълни кутията) | [`boxfill.html`](arcade/boxfill.html) | Packing puzzle: rotate and place block shapes so they fill the whole box exactly; every solved box adds points and time, and the boxes keep growing |
| 270 | 💎 Villager Trading (Търговия със селяни) | [`trading.html`](arcade/trading.html) | Emerald shopping maths: how many emeralds for N items, how much you get, change left over, two-step prices and which villager has the best deal |
| 271 | ❄️ Spleef (Спийф) | [`spleef.html`](arcade/spleef.html) | Snowy arena battle: walk on snow blocks that crumble behind you and dig the block under the mobs before they dig yours; win the round when every mob falls |
| 272 | ⛏️ Ore Lines (Рудни линии) | [`orelines.html`](arcade/orelines.html) | Lines-98 style puzzle: move ores along a free path and line up 5+ of the same ore to clear them; every move without a line adds 3 new ores |
| 273 | 🏠 Mob House (Колко са в къщата?) | [`mobhouse.html`](arcade/mobhouse.html) | Counting memory game: mobs walk in and out of a house, keep count in your head and type how many are inside; later levels mix mobs and you count only one kind |
| 274 | 🧗 Wall Jump (Стенен скок) | [`walljump.html`](arcade/walljump.html) | Climb a stone shaft above rising lava by jumping from wall to wall; dodge cactus blocks on the walls and bats in the middle, grab gold, and it keeps speeding up |
| 275 | 🐷 Trap the Pig (Огради прасето) | [`trappig.html`](arcade/trappig.html) | Circle-the-cat style puzzle on a staggered block meadow: place one fence per turn while the pig runs toward the edge; surround it before it escapes |
| 276 | 🔁 Mob Echo (Ехо от мобове) | [`mobecho.html`](arcade/mobecho.html) | N-back memory game: mobs appear one by one, say if the current mob is the same as the one 1, 2 or 3 steps ago; N grows every 8 correct answers |
| 277 | 🟣 Ender Pearl Jump (Ендър скок) | [`pearljump.html`](arcade/pearljump.html) | Slingshot-aim ender pearls to teleport from one floating island to the next; land in the centre for +3, grab gold in the air, islands shrink and wind starts blowing |
| 278 | 🔢 Number Mosaic (Числова мозайка) | [`mosaic.html`](arcade/mosaic.html) | Fill-a-pix logic puzzle: every number tells how many filled blocks are in the 3×3 square around it; reveal the hidden picture before time runs out, grids grow up to 9×9 |
| 279 | 🧭 Mind Walk (Мислена разходка) | [`mindwalk.html`](arcade/mindwalk.html) | Mental-map memory game: remember where Steve stands, follow the arrows in your head while he is hidden, then click the square where he ends up |
| 280 | 💥 TNT Chain (Верижен TNT) | [`tntchain.html`](arcade/tntchain.html) | Chain-reaction puzzle: click a TNT block and its blast (range = its number) sets off other TNT; obsidian stops the blast. Blow up every creeper within the click limit, saved clicks give bonus points |
| 281 | 🧮 Mob Algebra (Мобова алгебра) | [`picalgebra.html`](arcade/picalgebra.html) | Picture-equation puzzles: creepers, pigs, zombies and slimes each stand for a number; work them out from the clues and solve the last line (later levels add × and order of operations), on-screen keypad for touch |
| 282 | 🪣 Water Bucket Clutch (Водна кофа) | [`mlgwater.html`](arcade/mlgwater.html) | Timing game: Steve falls from the sky while the wind pushes him over hilly terrain; place water at the last moment to survive, the closer to the ground the more points, falls get faster every level |
| 283 | 🤼 Block Sumo (Блоково сумо) | [`sumo.html`](arcade/sumo.html) | Push bouncing slimes off a slippery ice island into the lava with moves and dashes; the island crumbles every wave |
| 284 | ➡️ Piston Launch (Буталата) | [`tapaway.html`](arcade/tapaway.html) | Tap pistons to launch them along their arrows; pick the right order so none of them crashes into another |
| 285 | ⚙️ Number Machine (Числова машина) | [`nummachine.html`](arcade/nummachine.html) | Find the secret rule from the examples (like ×2 +1) and predict what comes out, on-screen keypad for touch |
| 286 | 🔥 Ghast Deflect (Отбий огнената топка) | [`ghastpunch.html`](arcade/ghastpunch.html) | Nether action: ghasts shoot fireballs at Steve; swing the sword at the right moment to bat them back and knock the ghasts out of the sky, combos give bonus points |
| 287 | 🔄 Block Carousel (Въртележка от блокове) | [`loopover.html`](arcade/loopover.html) | Loopover-style puzzle: slide whole rows and columns (blocks wrap around the edges) until every row is one colour; grids grow from 4×4 to 5×5, fewer moves = more points |
| 288 | 🔨 Anvil Drop (Наковалня от небето) | [`anvildrop.html`](arcade/anvildrop.html) | Timing game: a crane swings an anvil over the road; drop it on zombies, baby zombies and golden zombies before they reach the village, but never on the villagers |
| 289 | 🐛 Silverfish Swarm (Сребърни рибки) | [`silverfish.html`](arcade/silverfish.html) | Stronghold survival: collect Eyes of Ender while silverfish crawl out of infested stone and chase you; swing the sword to sweep them away, they get faster and more numerous |
| 290 | 🔢 Number Path (Пътеката на числата) | [`numpath.html`](arcade/numpath.html) | Numbrix-style logic puzzle: draw one path from 1 through every block, stepping on each given number exactly when its turn comes; grids grow from 4×4 to 7×7 against the clock |
| 291 | 📦 Stacks of 64 (Стакове по 64) | [`stacks.html`](arcade/stacks.html) | Inventory maths: blocks stack by 64 (eggs and pearls by 16) — count full stacks, leftovers, slots needed and whole chests, on-screen keypad for touch |
| 292 | 🐉 Ender Dragon Fight (Битка с дракона) | [`dragonfight.html`](arcade/dragonfight.html) | Boss battle in the End: run left/right and shoot arrows up, smash the healing End Crystals on the obsidian pillars, dodge purple fireballs and bring down the dragon — each round has more crystals and a faster dragon |
| 293 | 🔥 Torches vs Mobs (Факли срещу мобове) | [`torchlight.html`](arcade/torchlight.html) | Light-level puzzle: place a limited number of torches (light spreads 3 blocks and goes around stone) so no dark tile is left for mobs to spawn; spare torches give bonus points and time |
| 294 | 🟪 Nether Portal (Портал към Недъра) | [`nethercoords.html`](arcade/nethercoords.html) | Nether maths: 1 Nether block = 8 Overworld blocks — divide or multiply by 8 to place linked portals, with distances, negative coordinates and rounding down; on-screen keypad for touch |
| 295 | 👻 Phantoms at Night (Фантоми в нощта) | [`phantoms.html`](arcade/phantoms.html) | Night-sky shooter: move left/right and fire arrows up at phantoms that glide and then dive-bomb you; diving ones are worth double, catch falling membranes for bonus points, 3 hearts |
| 296 | 🔴 Redstone Dust (Червен прах) | [`redstone.html`](arcade/redstone.html) | Wiring puzzle: draw redstone dust from the redstone block to every lamp with a limited amount of dust; the signal weakens by 1 per block (max 15) and walls block the way; solve fast for bonus time |
| 297 | 🎲 Diamond Chance (Шанс за диамант) | [`orechance.html`](arcade/orechance.html) | Probability quiz: count the ores in a chest and pick the chance of drawing one (as a fraction), the most/least likely ore, the chance of NOT drawing it, and dice questions; gets harder as you score |
| 298 | 🤿 Treasure Dive (Гмуркане за съкровища) | [`deepdive.html`](arcade/deepdive.html) | Underwater action: swim for gold, emeralds, seabed diamonds and chests while your air runs out — surface or swim through bubble vents to breathe, and dodge the puffing pufferfish; 3 hearts |
| 299 | 🌉 Speed Bridge (Бърз мост) | [`speedbridge.html`](arcade/speedbridge.html) | Timing game: your hero walks on his own over the void — place each block right at the edge for PERFECT (2 points), too early is a strike, too late and you fall; ready-made islands change the rhythm and the speed keeps rising |
| 300 | 🔆 Beacon Pyramid (Пирамида за маяк) | [`beacon.html`](arcade/beacon.html) | Square-number maths with the beacon pyramid: layers are 3×3, 5×5, 7×7, 9×9 — side lengths, blocks per layer, totals (9, 34, 83, 164), how many levels you can build, blocks still needed and stacks of 64 |
| 301 | ⛄ Snow Golem (Снежен голем) | [`snowgolem.html`](arcade/snowgolem.html) | 360° defence: aim with the mouse/finger (or turn with ← →) and throw snowballs at zombies, fast spiders, two-hit creepers and teleport-dashing endermen coming from every side of the village; shoot snowflakes for extra hearts, 5 hearts |
| 302 | 🐑 Wool Paint (Оцвети с вълна) | [`woolpaint.html`](arcade/woolpaint.html) | Sliding puzzle: the sheep slides until it hits a wall and dyes every tile it crosses — paint all the grass with wool; every level is generated to be solvable, finish within the move target for a bonus point |
| 303 | 🎨 Dye Mixer (Смеси боите) | [`dyemix.html`](arcade/dyemix.html) | Colour quiz with Minecraft dyes: red + yellow = orange, blue + white = light blue — guess the result, the missing dye, which flower or item gives a dye, and how many dyes you need for your wool |
| 304 | 🪄 Blaze Rods (Пръчки от блейз) | [`blazerods.html`](arcade/blazerods.html) | Nether-fortress dodger: run around the arena collecting blaze rods (golden ones +3) while more and more blazes fire aimed fireball volleys; dash sideways with Space, grab fire-resistance potions for 5 s of safety, 3 hearts |
| 305 | 🛤️ Rail Count (Релси по броя) | [`railcount.html`](arcade/railcount.html) | Logic puzzle ("Tracks"): lay one unbroken minecart track from the entrance to the exit — the numbers say how many rails are in each row and column; mark empty cells with ✕, grids grow from 5×5 to 8×8 |
| 306 | ♨️ Furnace Fuel (Гориво за пещта) | [`furnacefuel.html`](arcade/furnacefuel.html) | Division-with-remainder maths in the furnace: coal smelts 8, a blaze rod 12, a lava bucket 100, 2 planks 3 — how much fuel, how many seconds or minutes, what is left unsmelted, blast furnace speed; on-screen keypad for touch |
| 307 | 🛶 Ice Boat (Лодка по леда) | [`iceboat.html`](arcade/iceboat.html) | Drifty ice-racing: steer an oak boat across a frozen lake (keys or hold the mouse / finger), slide through the yellow flags for +1 point and extra time, grab emeralds for +2 and bounce off packed-ice blocks before the clock runs out |
| 308 | 🐑 Sheep Fence (Ограда за овцете) | [`fenceloop.html`](arcade/fenceloop.html) | Logic puzzle ("Slitherlink"): build one closed fence loop between the posts — each number says how many of the field's 4 sides are fenced; click/tap edges or "walk the pencil" with the arrow keys, grids grow from 4×4 to 7×7 and the sheep move in when you win |
| 309 | 🕵️ Logic Detective (Логически детектив) | [`logicgrid.html`](arcade/logicgrid.html) | Deduction puzzles: read clues like "Whoever has the wolf mines emeralds" and work out each miner's pet and ore; every puzzle has exactly one answer, 3 miners at first, then 4; 3-minute timer, +15 s per solve, −10 s for a wrong check |
| 310 | 🫧 Bubble Column (Воден асансьор) | [`bubblecol.html`](arcade/bubblecol.html) | Vertical dodger: ride a soul-sand bubble column upward, steer left/right (keys or hold the mouse / finger) through the gaps in magma-block rows, dodge bouncing pufferfish and grab green XP orbs; it gets faster the higher you go, 3 hearts |
| 311 | 🪣 Water Buckets (Кофи с вода) | [`jugs.html`](arcade/jugs.html) | The classic jug puzzle: measure exactly N litres using only fill, empty and pour between 2 (later 3) buckets; every level is generated and checked with a breadth-first search, solve it in the fewest moves for 3 stars, +40 s per level |
| 312 | 📸 Photo Safari (Фото сафари) | [`photosafari.html`](arcade/photosafari.html) | Camera skill game: chickens, pigs, creepers, bats, parrots and the rare mooshroom wander by — move the viewfinder (mouse, keys or tap) and snap them dead-centre for ×3 points; 12 shots of film and 90 seconds, each photo pops up as a little polaroid |
| 313 | 🕳️ Ender Hole (Ендър дупка) | [`endhole.html`](arcade/endhole.html) | Hole.io-style eater: steer an End-portal hole (keys, mouse or finger) and swallow everything smaller than it — flowers, chickens, pigs, cows, trees, hay bales, houses and towers; every bite makes the hole grow, 75 seconds |
| 314 | 🧶 Wool Roller (Вълнен валяк) | [`woolroll.html`](arcade/woolroll.html) | Sliding paint puzzle: the wool block rolls until it hits a wall and colours every floor tile it crosses — paint the whole floor; levels are generated from a guaranteed solution, match its move count for 3 stars, +20 s per level |
| 315 | 📦 Hopper Sort (Фуния за сортиране) | [`hoppersort.html`](arcade/hoppersort.html) | Fast sorting game: ores and food drop down a hopper — send each to the correct chest (←/→, or tap a side), drop TNT into the lava (↓); the chests sometimes swap sides and the hopper speeds up, 3 hearts |
| 316 | 🟩 Slime Merge (Сливане на слузи) | [`slimemerge.html`](arcade/slimemerge.html) | Suika-style physics puzzle: drop slimes into a box (keys, mouse or finger) — two equal slimes merge into a bigger one, from a tiny slime up to the crowned Giant Slime; don't let the pile stay above the red line |
| 317 | 🥊 Golem Punch (Юмрукът на голема) | [`golempunch.html`](arcade/golempunch.html) | Timing brawler: the Iron Golem guards the village — punch left or right (←/→ or tap a side) when a zombie, shielded pillager or fast spider is in the yellow zone; whiffing stuns you, and villagers must be let through for +3 |
| 318 | ➗ Missing Sign (Липсващият знак) | [`opsign.html`](arcade/opsign.html) | Which sign is missing: +, −, × or ÷? Pick the right redstone lamp; after 6 points two signs are missing and multiplication/division go first, 5 in a row = +5 seconds |
| 319 | 🍞 Village Bakery (Селската пекарна) | [`bakery.html`](arcade/bakery.html) | Tapper-style rush: villagers walk up 4 counters — switch counters (↑/↓ or tap) and slide bread to them before they reach you; feeding them far away gives +2, but bread that slides off an empty counter costs a heart |
| 320 | 🪞 Mirror Twins (Огледални близнаци) | [`twinmaze.html`](arcade/twinmaze.html) | Two-board puzzle: Steve and Alex move together, but Alex is mirrored (← for Steve is → for Alex) — use walls to line them up so both reach their beds at once; endless solver-checked levels with lava later on |
| 321 | 🔤 Number Words (Числа с думи) | [`numwords.html`](arcade/numwords.html) | Read a number written in Bulgarian words on a wooden sign ("триста и две") and pick it in digits — up to 100, then 1000, then thousands; tricky zeros, 5 in a row = +5 seconds |
| 322 | 🟪 Shulker Bullets (Шулкерски куршуми) | [`shulker.html`](arcade/shulker.html) | Dodge arena in the End: shulker boxes on the walls pop open and fire slow homing bullets — run with arrows/WASD or hold your finger, grab emeralds (+1) and trick two bullets into crashing into each other (+2); more shulkers wake up over time, 3 hearts |
| 323 | 🐑 Sheep Swap (Размяната на овцете) | [`sheepswap.html`](arcade/sheepswap.html) | The classic "frogs and toads" puzzle with sheep: white sheep only walk right, black only left, each can step into the gap or jump over one sheep — swap the two flocks; levels grow from 1+1 to 7+7 sheep, getting stuck costs a heart |
| 324 | ⭕ Venn Circles (Кръговете на Вен) | [`venn.html`](arcade/venn.html) | Two rules, two overlapping circles ("even" and "multiple of 3", "has a 7", "perfect square"…) — drop each number into left only, both, right only or outside; rules change every 6 numbers, 5 in a row = +5 seconds |
| 325 | 🪝 Ore Hook (Рудна кука) | [`orehook.html`](arcade/orehook.html) | Gold-miner style: the hook swings over the mine, throw it at the right moment to pull up gold, diamonds and mystery bags — big gold and stones are heavy and slow, TNT blows up everything nearby; reach the money goal before the 60 seconds run out to unlock the next level |
| 326 | ➕ Kakuro (Какуро) | [`kakuro.html`](arcade/kakuro.html) | A number crossword: fill the white blocks with digits 1–9 so every run adds up to its clue, with no repeated digit in a run; random puzzles from 3×3 up to 6×6, wrong sums turn red, every solved grid gives points and +40 seconds |
| 327 | ⚗️ Potion Ratios (Пропорции на отварите) | [`ratios.html`](arcade/ratios.html) | Ratios with Minecraft potions: the recipe is "2 sugar : 3 water" — how much is needed for 4 potions, if you have 8 sugar, or out of 25 ingredients in total? Pick 1 of 4 answers, 5 in a row = +5 seconds |
| 328 | 💥 Creeper Lure (Примами кийпърите) | [`creeperlure.html`](arcade/creeperlure.html) | Creepers chase you across the field and start hissing when they get close — run before they blow, and lure them into a crowd so one blast sets off the others in a chain reaction; longer chains give more points, 3 hearts |
| 329 | 🪢 Untangle (Разплети въжетата) | [`untangle.html`](arcade/untangle.html) | Ore blocks are tied together with ropes — drag them (or move them with the keyboard) until no rope crosses another; red ropes cross, green ones are free, each level has more blocks and gives +40 seconds |
| 330 | 🥌 Ice Curling (Кърлинг на леда) | [`curling.html`](arcade/curling.html) | Pull back like a slingshot (or hold Space for power) and slide block stones down the ice into the target; sweep the ice to make a stone go further and knock the red stones away — 5 rounds of 6 stones, the center is worth 10 points |
| 331 | ✂️ Sheep Shearer (Стригач на овце) | [`sheepshear.html`](arcade/sheepshear.html) | Run around the meadow and shear the sheep — they run away from you! White wool = 1, colored = 2, a golden sheep = 5 points and +5 seconds; shear quickly one after another for ×2 and ×3 combos, while wolves chase you and take your hearts |
| 332 | 🀄 Ore Dominoes (Рудно домино) | [`oredomino.html`](arcade/oredomino.html) | A "Dominosa" puzzle: split the grid of numbered ore blocks into dominoes so that every pair (0-0, 0-1 … 6-6) appears exactly once; a pair table shows what is used, grids grow from 4×5 to 7×8, solved levels give points and +60 seconds |
| 333 | 🎲 Cube Nets (Мрежа на куба) | [`cubenets.html`](arcade/cubenets.html) | Spatial thinking: does this net of 6 blocks fold into a cube — yes or no? Later also "which square ends up opposite the creeper?"; after each answer the opposite faces light up in matching colors, 3 in a row = +3 seconds |
| 334 | 👂 Warden Sneak (Тихо покрай Уордъна) | [`wardensneak.html`](arcade/wardensneak.html) | The Warden is blind but hears everything: sneak through a dark cave collecting echo shards. Walking fills the noise meter and sculk sensors make a lot of noise — unless you sneak (Shift / Space). A full meter makes the Warden charge; ancient chests give 3 points, 3 hearts |
| 335 | 🏝️ Ocean Islands (Острови в океана) | [`nurikabe.html`](arcade/nurikabe.html) | A "Nurikabe" logic puzzle: every number is a sand island with that many blocks — flood everything else with water so the sea is connected and there is no 2×2 pool; red marks show mistakes, grids grow from 5×5 to 9×9, each solved puzzle gives points and +45 seconds |
| 336 | 🚃 Speed, Time, Distance (Скорост, време, път) | [`cartspeed.html`](arcade/cartspeed.html) | Physics with minecarts: distance = speed × time. Find how many blocks a cart travels, how many seconds it takes or how fast it goes; later come minutes (1 min = 60 s) and chasing a zombie on the rails; 3 right in a row = +3 seconds |
| 337 | 🍞 Bread Courier (Хлебният куриер) | [`breadrun.html`](arcade/breadrun.html) | Ride a horse down the village road and throw bread left and right to the hungry villagers (houses with a 🍞 bubble) — a missed villager costs a heart; dodge rocks and walking zombies, grab wheat bales for +5 bread, 5 in a row gives double points |
| 338 | 🌋 Lava Tubes (Лавови тръби) | [`lavatubes.html`](arcade/lavatubes.html) | A "Thermometers" logic puzzle: lava fills each glass tube from its cauldron end with no gaps — match the numbers that say how many lava cells each row and column has; grids grow from 5×5 to 7×7, each solved puzzle gives points and +40 seconds |
| 339 | ⚪ Nine Men's Morris (Мелница) | [`morris.html`](arcade/morris.html) | The classic board game against a robot: place your 9 gold blocks, then slide them along the lines; 3 in a row = a mill and you remove a robot block, with 3 left you can fly; every win gives points and the robot gets smarter |
| 340 | 🦘 Charge Jump (Скок със засилка) | [`chargejump.html`](arcade/chargejump.html) | Hold Space or the mouse/finger to charge, release to jump to the next pillar of blocks; landing on the pillar = 1 point, right on the yellow center tile = 2 points and a growing combo, emeralds give +3; pillars get narrower and farther apart — fall in the water and it's over |
| 341 | 🔐 Diamond Vault (Диамантен трезор) | [`kakurasu.html`](arcade/kakurasu.html) | A "Kakurasu" logic puzzle: columns and rows have weights 1, 2, 3…; place diamonds so each row's number equals the sum of the column weights it uses (and the same for columns); green = exact, red = too much, grids grow from 4×4 to 7×7, each vault gives points and +40 seconds |
| 342 | ⛰️ Crumbling Island (Рушащият се остров) | [`isolation.html`](arcade/isolation.html) | The "Isolation" board game against a Creeper: step to a neighbouring block (diagonals too) and the block you leave falls into the lava; whoever has no move on their turn loses; every win gives points and the Creeper thinks more moves ahead |
| 343 | 🐢 Turtle Rescue (Спаси костенурките) | [`turtles.html`](arcade/turtles.html) | Baby turtles hatch on the beach and crawl to the sea; run around as Steve and swing your sword at the zombies and phantoms that try to eat them. Keyboard or click/tap to move. |
| 344 | 🟨 Block Regions (Блокови участъци) | [`fillomino.html`](arcade/fillomino.html) | A "Fillomino" logic puzzle: fill in numbers so every group of equal touching numbers N has exactly N blocks, and equal groups never touch. 4 puzzles, faster = more points. |
| 345 | 🏘️ Building Views (Изгледи на постройката) | [`views.html`](arcade/views.html) | Spatial thinking: look at a building made of cubes and pick how it looks from the front, from the right or from above. 60 seconds. |
| 346 | 📿 Ore Serpent (Рудната змия) | [`orechain.html`](arcade/orechain.html) | A Zuma-style shooter: a chain of ore blocks crawls along a spiral toward the lava. Shoot ores from the dispenser in the middle — 3 or more of the same touching vanish, and gaps that close with matching colours make combo chains. Mouse/touch to aim and shoot, or arrows + Space. |
| 347 | 👁️ Eyes of Ender (Очите на Ендър) | [`endereyes.html`](arcade/endereyes.html) | A "Star Battle" logic puzzle: place exactly one Eye of Ender in every row, every column and every biome, and no two eyes may touch, not even diagonally. 6 puzzles from 5×5 to 8×8, each with a unique solution; speed gives a bonus, hints cost points. |
| 348 | 🔥 Keep the Fires (Пази огньовете) | [`campfires.html`](arcade/campfires.html) | Night falls and mobs lurk in the dark: run Steve between up to 6 campfires and throw on logs before any burns out. Rain clouds drift over and put fires out faster. Click/tap a fire or press 1–6; 3 hearts, score = seconds survived. |
| 349 | 🔱 Trident Throw (Тризъбецът) | [`trident.html`](arcade/trident.html) | Steve is stranded on a tiny island and drowned zombies swim in from every side. Aim with the mouse (or ← →) and throw the trident — it pierces several mobs and comes back on its own thanks to Loyalty. Guardians take 3 hits; don't hit the pufferfish! 3 hearts. |
| 350 | 🌾 Water the Farm (Напои нивата) | [`irrigate.html`](arcade/irrigate.html) | A flowing-water puzzle: water falls down and spreads 3 blocks sideways when it lands. Place a few cobblestone blocks so the water touches every farmland without washing away any torch. 8 levels, each checked to be solvable with exactly the blocks you get. |
| 351 | 📦 Block Volume (Обем в блокове) | [`volume.html`](arcade/volume.html) | Length × width × height: how many blocks are in the building? Then pools that are only partly full, hollow towers with 1-block walls, rows of identical houses and boxes with no labels where you count the edges yourself. 4 answers, 90 seconds. |
| 352 | 🐺 Wolf and Sheep (Вълкът и овцете) | [`wolfsheep.html`](arcade/wolfsheep.html) | The old board game on a checkerboard: your 4 sheep step only forward diagonally, the wolf goes any diagonal way. Trap the wolf so it can't move before it sneaks behind your line. Every win makes the wolf think further ahead. |
| 353 | 🟩 Sweep Line (Метящата линия) | [`sweepline.html`](arcade/sweepline.html) | 2×2 blocks of grass and brick fall and split as they land. Make 2×2 squares of one colour — they light up and the sweep line moving across the board erases them. 16+ blocks in one sweep = combo. Keyboard, mouse drag or touch. |
| 354 | 🗺️ Map Scale (Мащаб на картата) | [`mapscale.html`](arcade/mapscale.html) | Count the gravel blocks on a blocky map and use the scale (1 block = 50 m) to find the real distance. Then reverse questions, scales like 1 : 1000, walking time and kilometres. 4 answers, 90 seconds. |
| 355 | 📦 Air Drop (Доставка от въздуха) | [`airdrop.html`](arcade/airdrop.html) | Fly a blocky airship over the sea and drop food crates onto the villagers' rafts before they float away. The wind pushes the crates and later seagulls knock them aside. Land in the middle of a raft for +2. Keyboard, mouse or touch drag. |
| 356 | 💎 Gem Caves (Диаманти в пещерите) | [`gemcaves.html`](arcade/gemcaves.html) | A logic puzzle like Star Battle: put exactly one diamond in every row, every column and every coloured cave, and two diamonds may never touch, not even diagonally. Boards grow from 5×5 to 8×8; each solved cave gives +30 seconds. |
| 357 | 🧰 Chest Shuffle (Следи сандъка) | [`chestshuffle.html`](arcade/chestshuffle.html) | The cups-and-ball game with chests: a diamond goes into one chest, then the chests swap places faster and faster. Follow it with your eyes and pick the right one. Later come 4 and 5 chests and double swaps. 3 hearts. |
| 358 | 🌩️ Lightning Rod (Гръмоотвод) | [`lightningrod.html`](arcade/lightningrod.html) | A thunderstorm over the village! A cloud glows yellow where lightning will strike — run along the rooftops with a copper lightning rod and catch the bolt before it sets a house on fire. Golden bolts give 3 points, 5 catches in a row give a bonus, and later two bolts come at once. 5 hearts. |
| 359 | 🧮 KenKen (Калкудоку) | [`kenken.html`](arcade/kenken.html) | Like sudoku with sums: fill the grid so every row and column has 1…N once, and the numbers in each coloured ore vein must make its clue (6+, 2÷, 12×, 1−). Starts with 3×3, then 4×4 and 5×5. Every solved puzzle gives points and +25 seconds. |
| 360 | 🎲 Dice General (Генерал със зарове) | [`yahtzee.html`](arcade/yahtzee.html) | The classic 5-dice game (Yahtzee / Генерал) for one player: roll up to 3 times, hold the dice you like and write the score in one of 13 rows — full house, straights, four of a kind and the 50-point General. 63+ in the top part gives a +35 bonus. |
| 361 | 🐬 Dolphin Dash (Делфинът скачач) | [`dolphin.html`](arcade/dolphin.html) | Hold to dive deep, let go and the water throws the blocky dolphin high above the waves. Catch fish under water and in the air, dive under boats and dodge jellyfish and seagulls. A very high jump gives +2. 3 hearts. |
| 362 | ⛵ Hidden Fleet (Скритата флотилия) | [`bimaru.html`](arcade/bimaru.html) | A logic puzzle like Bimaru (battleship solitaire): the numbers say how many boat squares are in each row and column. Boats are straight and never touch, not even diagonally. Boards grow from 6×6 to 8×8; each solved fleet gives +45 seconds. |
| 363 | 🔪 Fair Half (Раздели наравно) | [`halfcut.html`](arcade/halfcut.html) | Cut a blocky cake, cheese, melon or loaf into two equal halves with one straight line (drag with the mouse or finger, or turn the knife with the arrows). The area is measured exactly: 50/50 ±1% = 10 points. Shapes get bigger and stranger, and time is short. 3 hearts. |
| 364 | 🪨 Color Driller (Цветният сондаж) | [`driller.html`](arcade/driller.html) | Dig down through a shaft of colored blocks like Mr. Driller: one pickaxe hit removes the whole group of touching same-color blocks. Unsupported groups wobble and fall — don't stand under them! Grab O₂ bottles before your air runs out; brown blocks need 5 hits and steal air. Score = depth + blocks. |
| 365 | 🧊 Golem Ricochet (Рикошет на големите) | [`ricochet.html`](arcade/ricochet.html) | A Ricochet Robots-style puzzle: three blocky golems slide on ice until they hit a wall or another golem. Get the golem of the diamond's color onto the diamond, using the other golems as stoppers. Every puzzle is checked with a BFS search, so it shows the fewest moves possible. Undo, timer, harder puzzles as you go. |
| 366 | 🎲 Ludo (Не се сърди, човече) | [`ludo.html`](arcade/ludo.html) | The classic race game for four: you (red) vs three robots. Roll a 6 to leave home, roll 6 again for a bonus throw, knock opponents back to their yard (except on the star start squares) and bring all 4 pieces home first. Click a glowing piece or press 1–4. |
| 367 | 🐔 Chicken Jockeys (Пилешки рицари) | [`jockey.html`](arcade/jockey.html) | Joust-style air duel: ride a flapping chicken over a lava lake and charge zombie, skeleton and wither-skeleton jockeys — whoever is higher when you collide wins. Beaten riders drop eggs: grab them (mid-air catches score triple) before they hatch into faster foes; waves keep growing, 3 lives |
| 368 | ⛏️ Ore Chambers (Рудни камери) | [`orechambers.html`](arcade/orechambers.html) | A "Suguru" logic puzzle: a chamber of N blocks holds the numbers 1…N once each, and equal numbers may never touch, not even diagonally. Puzzles are generated in the browser with a unique solution, from 5×5 to 7×7; every solved cave gives points and +60 seconds, hints cost points |
| 369 | 📊 Mob Statistics (Статистика с мобове) | [`mobstats.html`](arcade/mobstats.html) | Data-handling maths: block columns show how many mobs came each night — find the mode, the median, the range and the mean. Starts with mode and range, adds median and mean as you score; 90 seconds |
| 370 | 🌪️ Wind Arena (Вятърна арена) | [`windarena.html`](arcade/windarena.html) | Survive on a floating grass island while Breezes circle around and fire wind charges that shove you toward the edge. Collect golden trial keys (+10), watch out for cracking edge blocks that fall into the void; more Breezes join as you score. Keyboard or hold the mouse/finger to run, 3 lives |
| 371 | 🪵 One Stick Fix (Поправи с една клечка) | [`stickfix.html`](arcade/stickfix.html) | Matchstick maths: an equation built from wooden sticks (like digital-clock digits) is wrong — pick up exactly one stick and put it somewhere else to make it true. Sticks can move inside digits or turn + into − and back; any correct fix counts. Puzzles are generated in the browser and grow to two-digit numbers; 120 seconds, +8 per fix |
| 372 | 🔦 Ore Probe (Сонда за руди) | [`oreprobe.html`](arcade/oreprobe.html) | A "Black Box" deduction puzzle: diamonds hide in a dark 8×8 cave. Shine beams in from the edge — H means the beam hit a diamond, R means it bounced back, matching numbers show where it came out (diamonds diagonally ahead bend the beam). Mark the diamonds and check; fewer beams and correct guesses score more, 5 caves |
| 373 | 🐗 Hoglin Rush (Бягай от хоглините) | [`hoglinrun.html`](arcade/hoglinrun.html) | Collect gold nuggets on the netherrack while hoglins appear at the edges, aim at you (a flashing red line shows their path) and charge in a straight line — sidestep in time! More hoglins join as your score grows; a warped fungus gives +5 and scares them all away. Keyboard or hold the mouse/finger to run, 3 lives |
| 374 | ❓ Hidden Digit (Скритата цифра) | [`hiddendigit.html`](arcade/hiddendigit.html) | Column arithmetic (addition, subtraction, then multiplication) with one digit hidden under a gold block — work out which digit 0–9 it is. Type it or tap the digit row; numbers grow as you score, every 5 in a row gives +5 seconds, a mistake costs 5 seconds; 90 seconds |
| 375 | 🖌️ Archaeology Brush (Археология с четка) | [`brushdig.html`](arcade/brushdig.html) | Hold to brush suspicious sand off an 8×6 dig site. Empty cells show how many pot shards are around them (like Minesweeper) so you can track down the buried pot — but once a shard appears, stop brushing or it cracks! 2 points per shard, +5 for a perfect pot; 120 seconds |

All 375 pages share one small engine, `arcade/engine.js`. It handles the canvas, keyboard, mouse, touch swipes, sounds, the game-over screen and high scores (saved in `localStorage`). Each game file contains just its own `A.add({...})` object with `start`, `update`, `draw` and optional `key` / `click` functions.

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
│   ├── dungeon.html        # 50. Cave Explorer
│   ├── ...                 # games 51–374
│   └── brushdig.html       # 375. Archaeology Brush
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
- **Robot programming, Tower of Hanoi, Game of Life, Langton's Ant:** little lessons in coding and math, hidden inside games.
- **Ice Slide, Program the Robot:** levels are generated randomly and checked with breadth-first search (BFS), so every level can be solved.
- **Snakes for Two:** the first 2-player game: two people on one keyboard.
- **Free the Minecart:** each puzzle starts solved and is scrambled with random legal moves, so it can always be solved.
- **Kalah, Checkers, Code Breaker:** the robot plays real strategies (greedy simulation, mandatory captures, bulls & cows feedback).
- **Four 2-player games:** Snakes for Two, Tug of War, Tennis for Two and Light Cycles are played by two people on one keyboard.
- **Quizzes:** capitals, flags, English words, science and Bulgaria use a shared `quizGame` template in the engine. A new quiz is just a list of questions!
- **One Line Drawing:** every figure was checked to have 0 or 2 points with an odd number of lines (Euler's rule), so it can really be drawn in one stroke.
- **Math art:** Mandelbrot, Spirograph, Fractal Tree and Kaleidoscope draw beautiful pictures from short formulas.
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

## 👥 Contributors

- **[@n95460754](https://github.com/n95460754)** — project owner and game creator.
- **ChatGPT (OpenAI)** — AI assistant; helped configure the GitHub Actions automation and README updates.

## 🤖 Auto Games

A new mini-game is generated and added here automatically **every 5 minutes** by a GitHub Action ([`scripts/generate-game.js`](scripts/generate-game.js)).

<!-- AUTO-GAMES:START -->
**640 auto games so far.** Newest first:

- 🏃 [Forest Runner #640](games/game-640.html) — Runner · Forest theme · added 2026-11-10 04:25 UTC
- 🎯 [Space Tap Rush #639](games/game-639.html) — Tap Rush · Space theme · added 2026-11-10 04:20 UTC
- 🧱 [Ocean Breaker #638](games/game-638.html) — Breaker · Ocean theme · added 2026-11-10 04:15 UTC
- 🏃 [Sunset Runner #637](games/game-637.html) — Runner · Sunset theme · added 2026-11-10 04:10 UTC
- 🐦 [Space Flap #636](games/game-636.html) — Flap · Space theme · added 2026-11-10 04:05 UTC
- 🧱 [Forest Breaker #635](games/game-635.html) — Breaker · Forest theme · added 2026-11-10 04:00 UTC
- 🏃 [Retro Runner #634](games/game-634.html) — Runner · Retro theme · added 2026-11-10 03:55 UTC
- 🧱 [Ocean Dodge #633](games/game-633.html) — Dodge · Ocean theme · added 2026-11-10 03:50 UTC
- 🐍 [Desert Snake #632](games/game-632.html) — Snake · Desert theme · added 2026-11-10 03:45 UTC
- 🔫 [Toxic Blaster #631](games/game-631.html) — Blaster · Toxic theme · added 2026-11-10 03:40 UTC
- 🐦 [Space Flap #630](games/game-630.html) — Flap · Space theme · added 2026-11-10 03:35 UTC
- 🐍 [Desert Snake #629](games/game-629.html) — Snake · Desert theme · added 2026-11-10 03:30 UTC
- 🧱 [Candy Breaker #628](games/game-628.html) — Breaker · Candy theme · added 2026-11-10 03:24 UTC
- 🎯 [Retro Tap Rush #627](games/game-627.html) — Tap Rush · Retro theme · added 2026-11-10 03:19 UTC
- 🧱 [Ocean Dodge #626](games/game-626.html) — Dodge · Ocean theme · added 2026-11-10 03:14 UTC
- 🎯 [Toxic Tap Rush #625](games/game-625.html) — Tap Rush · Toxic theme · added 2026-11-10 03:09 UTC
- 🔫 [Candy Blaster #624](games/game-624.html) — Blaster · Candy theme · added 2026-11-10 03:04 UTC
- 🎯 [Neon Tap Rush #623](games/game-623.html) — Tap Rush · Neon theme · added 2026-11-10 02:59 UTC
- 🧱 [Ice Breaker #622](games/game-622.html) — Breaker · Ice theme · added 2026-11-10 02:54 UTC
- 🐦 [Ice Flap #621](games/game-621.html) — Flap · Ice theme · added 2026-11-10 02:49 UTC
- 🐦 [Sunset Flap #620](games/game-620.html) — Flap · Sunset theme · added 2026-11-10 02:44 UTC
- 🔫 [Block Blaster #619](games/game-619.html) — Blaster · Block theme · added 2026-11-10 02:39 UTC
- 🎯 [Desert Tap Rush #618](games/game-618.html) — Tap Rush · Desert theme · added 2026-11-10 02:34 UTC
- 🔫 [Candy Blaster #617](games/game-617.html) — Blaster · Candy theme · added 2026-11-10 02:29 UTC
- 🐍 [Sunset Snake #616](games/game-616.html) — Snake · Sunset theme · added 2026-11-10 02:24 UTC
- 🧱 [Block Breaker #615](games/game-615.html) — Breaker · Block theme · added 2026-11-10 02:19 UTC
- 🐍 [Ice Snake #614](games/game-614.html) — Snake · Ice theme · added 2026-11-10 02:14 UTC
- 🧺 [Block Catch #613](games/game-613.html) — Catch · Block theme · added 2026-11-10 02:09 UTC
- 🧱 [Toxic Dodge #612](games/game-612.html) — Dodge · Toxic theme · added 2026-11-10 02:04 UTC
- 🏃 [Ice Runner #611](games/game-611.html) — Runner · Ice theme · added 2026-11-10 01:59 UTC
- 🐦 [Toxic Flap #610](games/game-610.html) — Flap · Toxic theme · added 2026-11-10 01:54 UTC
- 🐍 [Forest Snake #609](games/game-609.html) — Snake · Forest theme · added 2026-11-10 01:49 UTC
- 🧱 [Desert Breaker #608](games/game-608.html) — Breaker · Desert theme · added 2026-11-10 01:44 UTC
- 🧺 [Retro Catch #607](games/game-607.html) — Catch · Retro theme · added 2026-11-10 01:39 UTC
- 🔫 [Ocean Blaster #606](games/game-606.html) — Blaster · Ocean theme · added 2026-11-10 01:34 UTC
- 🔫 [Ocean Blaster #605](games/game-605.html) — Blaster · Ocean theme · added 2026-11-10 01:29 UTC
- 🐦 [Retro Flap #604](games/game-604.html) — Flap · Retro theme · added 2026-11-10 01:24 UTC
- 🔫 [Ice Blaster #603](games/game-603.html) — Blaster · Ice theme · added 2026-11-10 01:19 UTC
- 🧺 [Sunset Catch #602](games/game-602.html) — Catch · Sunset theme · added 2026-11-10 01:14 UTC
- 🐍 [Ocean Snake #601](games/game-601.html) — Snake · Ocean theme · added 2026-11-10 01:09 UTC
- 🎯 [Candy Tap Rush #600](games/game-600.html) — Tap Rush · Candy theme · added 2026-11-10 01:04 UTC
- 🧺 [Space Catch #599](games/game-599.html) — Catch · Space theme · added 2026-11-10 00:59 UTC
- 🎯 [Desert Tap Rush #598](games/game-598.html) — Tap Rush · Desert theme · added 2026-11-10 00:54 UTC
- 🧱 [Candy Dodge #597](games/game-597.html) — Dodge · Candy theme · added 2026-11-10 00:49 UTC
- 🎯 [Toxic Tap Rush #596](games/game-596.html) — Tap Rush · Toxic theme · added 2026-11-10 00:43 UTC
- 🧱 [Space Breaker #595](games/game-595.html) — Breaker · Space theme · added 2026-11-10 00:38 UTC
- 🧱 [Ocean Breaker #594](games/game-594.html) — Breaker · Ocean theme · added 2026-11-10 00:33 UTC
- 🐍 [Neon Snake #593](games/game-593.html) — Snake · Neon theme · added 2026-11-10 00:28 UTC
- 🎯 [Lava Tap Rush #592](games/game-592.html) — Tap Rush · Lava theme · added 2026-11-10 00:23 UTC
- 🐍 [Neon Snake #591](games/game-591.html) — Snake · Neon theme · added 2026-11-10 00:18 UTC
- 🎯 [Sunset Tap Rush #590](games/game-590.html) — Tap Rush · Sunset theme · added 2026-11-10 00:13 UTC
- 🧱 [Block Breaker #589](games/game-589.html) — Breaker · Block theme · added 2026-11-10 00:08 UTC
- 🐦 [Lava Flap #588](games/game-588.html) — Flap · Lava theme · added 2026-11-10 00:03 UTC
- 🔫 [Lava Blaster #587](games/game-587.html) — Blaster · Lava theme · added 2026-11-09 23:58 UTC
- 🐍 [Retro Snake #586](games/game-586.html) — Snake · Retro theme · added 2026-11-09 23:53 UTC
- 🐦 [Desert Flap #585](games/game-585.html) — Flap · Desert theme · added 2026-11-09 23:48 UTC
- 🐦 [Neon Flap #584](games/game-584.html) — Flap · Neon theme · added 2026-11-09 23:43 UTC
- 🐍 [Neon Snake #583](games/game-583.html) — Snake · Neon theme · added 2026-11-09 23:38 UTC
- 🧺 [Candy Catch #582](games/game-582.html) — Catch · Candy theme · added 2026-11-09 23:33 UTC
- 🧱 [Ice Dodge #581](games/game-581.html) — Dodge · Ice theme · added 2026-11-09 23:28 UTC
- 🐦 [Neon Flap #580](games/game-580.html) — Flap · Neon theme · added 2026-11-09 23:23 UTC
- 🔫 [Forest Blaster #579](games/game-579.html) — Blaster · Forest theme · added 2026-11-09 23:18 UTC
- 🐦 [Sunset Flap #578](games/game-578.html) — Flap · Sunset theme · added 2026-11-09 23:13 UTC
- 🏃 [Neon Runner #577](games/game-577.html) — Runner · Neon theme · added 2026-11-09 23:08 UTC
- 🐍 [Block Snake #576](games/game-576.html) — Snake · Block theme · added 2026-11-09 23:03 UTC
- 🐦 [Sunset Flap #575](games/game-575.html) — Flap · Sunset theme · added 2026-11-09 22:58 UTC
- 🐍 [Lava Snake #574](games/game-574.html) — Snake · Lava theme · added 2026-11-09 22:53 UTC
- 🧱 [Ocean Breaker #573](games/game-573.html) — Breaker · Ocean theme · added 2026-11-09 22:48 UTC
- 🧺 [Candy Catch #572](games/game-572.html) — Catch · Candy theme · added 2026-11-09 22:43 UTC
- 🧱 [Ice Dodge #571](games/game-571.html) — Dodge · Ice theme · added 2026-11-09 22:38 UTC
- 🧱 [Ocean Breaker #570](games/game-570.html) — Breaker · Ocean theme · added 2026-11-09 22:33 UTC
- 🧺 [Ice Catch #569](games/game-569.html) — Catch · Ice theme · added 2026-11-09 22:28 UTC
- 🧱 [Desert Breaker #568](games/game-568.html) — Breaker · Desert theme · added 2026-11-09 22:23 UTC
- 🏃 [Forest Runner #567](games/game-567.html) — Runner · Forest theme · added 2026-11-09 22:18 UTC
- 🧺 [Candy Catch #566](games/game-566.html) — Catch · Candy theme · added 2026-11-09 22:13 UTC
- 🎯 [Forest Tap Rush #565](games/game-565.html) — Tap Rush · Forest theme · added 2026-11-09 22:08 UTC
- 🏃 [Candy Runner #564](games/game-564.html) — Runner · Candy theme · added 2026-11-09 22:02 UTC
- 🧺 [Neon Catch #563](games/game-563.html) — Catch · Neon theme · added 2026-11-09 21:57 UTC
- 🐦 [Ocean Flap #562](games/game-562.html) — Flap · Ocean theme · added 2026-11-09 21:52 UTC
- 🎯 [Ice Tap Rush #561](games/game-561.html) — Tap Rush · Ice theme · added 2026-11-09 21:47 UTC
- 🧺 [Ice Catch #560](games/game-560.html) — Catch · Ice theme · added 2026-11-09 21:42 UTC
- 🧱 [Desert Breaker #559](games/game-559.html) — Breaker · Desert theme · added 2026-11-09 21:37 UTC
- 🔫 [Ocean Blaster #558](games/game-558.html) — Blaster · Ocean theme · added 2026-11-09 21:32 UTC
- 🧱 [Neon Breaker #557](games/game-557.html) — Breaker · Neon theme · added 2026-11-09 21:27 UTC
- 🏃 [Neon Runner #556](games/game-556.html) — Runner · Neon theme · added 2026-11-09 21:22 UTC
- 🐦 [Space Flap #555](games/game-555.html) — Flap · Space theme · added 2026-11-09 21:17 UTC
- 🔫 [Forest Blaster #554](games/game-554.html) — Blaster · Forest theme · added 2026-11-09 21:12 UTC
- 🐍 [Forest Snake #553](games/game-553.html) — Snake · Forest theme · added 2026-11-09 21:07 UTC
- 🔫 [Neon Blaster #552](games/game-552.html) — Blaster · Neon theme · added 2026-11-09 21:02 UTC
- 🔫 [Ocean Blaster #551](games/game-551.html) — Blaster · Ocean theme · added 2026-11-09 20:57 UTC
- 🔫 [Ocean Blaster #550](games/game-550.html) — Blaster · Ocean theme · added 2026-11-09 20:52 UTC
- 🧱 [Block Dodge #549](games/game-549.html) — Dodge · Block theme · added 2026-11-09 20:47 UTC
- 🏃 [Block Runner #548](games/game-548.html) — Runner · Block theme · added 2026-11-09 20:42 UTC
- 🎯 [Candy Tap Rush #547](games/game-547.html) — Tap Rush · Candy theme · added 2026-11-09 20:37 UTC
- 🧱 [Desert Breaker #546](games/game-546.html) — Breaker · Desert theme · added 2026-11-09 20:32 UTC
- 🧱 [Forest Breaker #545](games/game-545.html) — Breaker · Forest theme · added 2026-11-09 20:27 UTC
- 🐍 [Neon Snake #544](games/game-544.html) — Snake · Neon theme · added 2026-11-09 20:22 UTC
- 🎯 [Toxic Tap Rush #543](games/game-543.html) — Tap Rush · Toxic theme · added 2026-11-09 20:17 UTC
- 🐦 [Space Flap #542](games/game-542.html) — Flap · Space theme · added 2026-11-09 20:12 UTC
- 🧱 [Sunset Dodge #541](games/game-541.html) — Dodge · Sunset theme · added 2026-11-09 20:07 UTC
- 🧱 [Space Breaker #540](games/game-540.html) — Breaker · Space theme · added 2026-11-09 20:02 UTC
- 🎯 [Ice Tap Rush #539](games/game-539.html) — Tap Rush · Ice theme · added 2026-11-09 19:57 UTC
- 🏃 [Ocean Runner #538](games/game-538.html) — Runner · Ocean theme · added 2026-11-09 19:52 UTC
- 🐍 [Sunset Snake #537](games/game-537.html) — Snake · Sunset theme · added 2026-11-09 19:47 UTC
- 🧺 [Neon Catch #536](games/game-536.html) — Catch · Neon theme · added 2026-11-09 19:42 UTC
- 🔫 [Desert Blaster #535](games/game-535.html) — Blaster · Desert theme · added 2026-11-09 19:37 UTC
- 🐦 [Candy Flap #534](games/game-534.html) — Flap · Candy theme · added 2026-11-09 19:32 UTC
- 🏃 [Retro Runner #533](games/game-533.html) — Runner · Retro theme · added 2026-11-09 19:27 UTC
- 🎯 [Lava Tap Rush #532](games/game-532.html) — Tap Rush · Lava theme · added 2026-11-09 19:21 UTC
- 🧱 [Toxic Breaker #531](games/game-531.html) — Breaker · Toxic theme · added 2026-11-09 19:16 UTC
- 🐦 [Ice Flap #530](games/game-530.html) — Flap · Ice theme · added 2026-11-09 19:11 UTC
- 🧺 [Space Catch #529](games/game-529.html) — Catch · Space theme · added 2026-11-09 19:06 UTC
- 🐦 [Block Flap #528](games/game-528.html) — Flap · Block theme · added 2026-11-09 19:01 UTC
- 🧱 [Desert Dodge #527](games/game-527.html) — Dodge · Desert theme · added 2026-11-09 18:56 UTC
- 🧱 [Candy Dodge #526](games/game-526.html) — Dodge · Candy theme · added 2026-11-09 18:51 UTC
- 🐍 [Lava Snake #525](games/game-525.html) — Snake · Lava theme · added 2026-11-09 18:46 UTC
- 🐍 [Forest Snake #524](games/game-524.html) — Snake · Forest theme · added 2026-11-09 18:41 UTC
- 🏃 [Neon Runner #523](games/game-523.html) — Runner · Neon theme · added 2026-11-09 18:36 UTC
- 🏃 [Lava Runner #522](games/game-522.html) — Runner · Lava theme · added 2026-11-09 18:31 UTC
- 🏃 [Neon Runner #521](games/game-521.html) — Runner · Neon theme · added 2026-11-09 18:26 UTC
- 🧺 [Neon Catch #520](games/game-520.html) — Catch · Neon theme · added 2026-11-09 18:21 UTC
- 🔫 [Lava Blaster #519](games/game-519.html) — Blaster · Lava theme · added 2026-11-09 18:16 UTC
- 🧱 [Ice Breaker #518](games/game-518.html) — Breaker · Ice theme · added 2026-11-09 18:11 UTC
- 🧱 [Desert Breaker #517](games/game-517.html) — Breaker · Desert theme · added 2026-11-09 18:06 UTC
- 🔫 [Candy Blaster #516](games/game-516.html) — Blaster · Candy theme · added 2026-11-09 18:01 UTC
- 🧱 [Sunset Dodge #515](games/game-515.html) — Dodge · Sunset theme · added 2026-11-09 17:56 UTC
- 🧱 [Block Dodge #514](games/game-514.html) — Dodge · Block theme · added 2026-11-09 17:51 UTC
- 🔫 [Space Blaster #513](games/game-513.html) — Blaster · Space theme · added 2026-11-09 17:46 UTC
- 🐦 [Lava Flap #512](games/game-512.html) — Flap · Lava theme · added 2026-11-09 17:41 UTC
- 🏃 [Toxic Runner #511](games/game-511.html) — Runner · Toxic theme · added 2026-11-09 17:35 UTC
- 🎯 [Candy Tap Rush #510](games/game-510.html) — Tap Rush · Candy theme · added 2026-11-09 17:30 UTC
- 🏃 [Ice Runner #509](games/game-509.html) — Runner · Ice theme · added 2026-11-09 17:25 UTC
- 🧺 [Neon Catch #508](games/game-508.html) — Catch · Neon theme · added 2026-11-09 17:20 UTC
- 🔫 [Desert Blaster #507](games/game-507.html) — Blaster · Desert theme · added 2026-11-09 17:15 UTC
- 🏃 [Lava Runner #506](games/game-506.html) — Runner · Lava theme · added 2026-11-09 17:10 UTC
- 🎯 [Toxic Tap Rush #505](games/game-505.html) — Tap Rush · Toxic theme · added 2026-11-09 17:05 UTC
- 🔫 [Block Blaster #504](games/game-504.html) — Blaster · Block theme · added 2026-11-09 17:00 UTC
- 🧱 [Sunset Dodge #503](games/game-503.html) — Dodge · Sunset theme · added 2026-11-09 16:55 UTC
- 🐍 [Block Snake #502](games/game-502.html) — Snake · Block theme · added 2026-11-09 16:50 UTC
- 🧺 [Candy Catch #501](games/game-501.html) — Catch · Candy theme · added 2026-11-09 16:45 UTC
- 🐍 [Forest Snake #500](games/game-500.html) — Snake · Forest theme · added 2026-11-09 16:40 UTC
- 🐦 [Ocean Flap #499](games/game-499.html) — Flap · Ocean theme · added 2026-11-09 16:35 UTC
- 🏃 [Retro Runner #498](games/game-498.html) — Runner · Retro theme · added 2026-11-09 16:30 UTC
- 🧱 [Candy Dodge #497](games/game-497.html) — Dodge · Candy theme · added 2026-11-09 16:25 UTC
- 🧱 [Candy Breaker #496](games/game-496.html) — Breaker · Candy theme · added 2026-11-09 16:20 UTC
- 🏃 [Sunset Runner #495](games/game-495.html) — Runner · Sunset theme · added 2026-11-09 16:15 UTC
- 🧱 [Toxic Dodge #494](games/game-494.html) — Dodge · Toxic theme · added 2026-11-09 16:10 UTC
- 🧺 [Toxic Catch #493](games/game-493.html) — Catch · Toxic theme · added 2026-11-09 16:05 UTC
- 🧱 [Space Dodge #492](games/game-492.html) — Dodge · Space theme · added 2026-11-09 16:00 UTC
- 🎯 [Ice Tap Rush #491](games/game-491.html) — Tap Rush · Ice theme · added 2026-11-09 15:55 UTC
- 🧱 [Ice Dodge #490](games/game-490.html) — Dodge · Ice theme · added 2026-11-09 15:50 UTC
- 🐍 [Retro Snake #489](games/game-489.html) — Snake · Retro theme · added 2026-11-09 15:45 UTC
- 🧺 [Toxic Catch #488](games/game-488.html) — Catch · Toxic theme · added 2026-11-09 15:40 UTC
- 🔫 [Sunset Blaster #487](games/game-487.html) — Blaster · Sunset theme · added 2026-11-09 15:35 UTC
- 🎯 [Desert Tap Rush #486](games/game-486.html) — Tap Rush · Desert theme · added 2026-11-09 15:30 UTC
- 🧱 [Block Dodge #485](games/game-485.html) — Dodge · Block theme · added 2026-11-09 15:24 UTC
- 🏃 [Desert Runner #484](games/game-484.html) — Runner · Desert theme · added 2026-11-09 15:19 UTC
- 🎯 [Toxic Tap Rush #483](games/game-483.html) — Tap Rush · Toxic theme · added 2026-11-09 15:14 UTC
- 🐦 [Space Flap #482](games/game-482.html) — Flap · Space theme · added 2026-11-09 15:09 UTC
- 🏃 [Sunset Runner #481](games/game-481.html) — Runner · Sunset theme · added 2026-11-09 15:04 UTC
- 🐦 [Toxic Flap #480](games/game-480.html) — Flap · Toxic theme · added 2026-11-09 14:59 UTC
- 🏃 [Desert Runner #479](games/game-479.html) — Runner · Desert theme · added 2026-11-09 14:54 UTC
- 🧱 [Lava Breaker #478](games/game-478.html) — Breaker · Lava theme · added 2026-11-09 14:49 UTC
- 🎯 [Ocean Tap Rush #477](games/game-477.html) — Tap Rush · Ocean theme · added 2026-11-09 14:44 UTC
- 🐍 [Ocean Snake #476](games/game-476.html) — Snake · Ocean theme · added 2026-11-09 14:39 UTC
- 🎯 [Lava Tap Rush #475](games/game-475.html) — Tap Rush · Lava theme · added 2026-11-09 14:34 UTC
- 🔫 [Candy Blaster #474](games/game-474.html) — Blaster · Candy theme · added 2026-11-09 14:29 UTC
- 🧱 [Lava Dodge #473](games/game-473.html) — Dodge · Lava theme · added 2026-11-09 14:24 UTC
- 🎯 [Lava Tap Rush #472](games/game-472.html) — Tap Rush · Lava theme · added 2026-11-09 14:19 UTC
- 🏃 [Lava Runner #471](games/game-471.html) — Runner · Lava theme · added 2026-11-09 14:14 UTC
- 🎯 [Retro Tap Rush #470](games/game-470.html) — Tap Rush · Retro theme · added 2026-11-09 14:09 UTC
- 🐦 [Retro Flap #469](games/game-469.html) — Flap · Retro theme · added 2026-11-09 14:04 UTC
- 🧺 [Ice Catch #468](games/game-468.html) — Catch · Ice theme · added 2026-11-09 13:59 UTC
- 🐍 [Desert Snake #467](games/game-467.html) — Snake · Desert theme · added 2026-11-09 13:54 UTC
- 🏃 [Block Runner #466](games/game-466.html) — Runner · Block theme · added 2026-11-09 13:49 UTC
- 🐍 [Ocean Snake #465](games/game-465.html) — Snake · Ocean theme · added 2026-11-09 13:44 UTC
- 🧱 [Retro Breaker #464](games/game-464.html) — Breaker · Retro theme · added 2026-11-09 13:38 UTC
- 🧺 [Candy Catch #463](games/game-463.html) — Catch · Candy theme · added 2026-11-09 13:33 UTC
- 🐍 [Retro Snake #462](games/game-462.html) — Snake · Retro theme · added 2026-11-09 13:28 UTC
- 🐦 [Retro Flap #461](games/game-461.html) — Flap · Retro theme · added 2026-11-09 13:23 UTC
- 🐦 [Ocean Flap #460](games/game-460.html) — Flap · Ocean theme · added 2026-11-09 13:18 UTC
- 🧱 [Candy Dodge #459](games/game-459.html) — Dodge · Candy theme · added 2026-11-09 13:13 UTC
- 🏃 [Sunset Runner #458](games/game-458.html) — Runner · Sunset theme · added 2026-11-09 13:08 UTC
- 🐍 [Sunset Snake #457](games/game-457.html) — Snake · Sunset theme · added 2026-11-09 13:03 UTC
- 🎯 [Block Tap Rush #456](games/game-456.html) — Tap Rush · Block theme · added 2026-11-09 12:58 UTC
- 🧺 [Lava Catch #455](games/game-455.html) — Catch · Lava theme · added 2026-11-09 12:53 UTC
- 🧱 [Ice Breaker #454](games/game-454.html) — Breaker · Ice theme · added 2026-11-09 12:48 UTC
- 🔫 [Candy Blaster #453](games/game-453.html) — Blaster · Candy theme · added 2026-11-09 12:43 UTC
- 🐍 [Desert Snake #452](games/game-452.html) — Snake · Desert theme · added 2026-11-09 12:38 UTC
- 🔫 [Desert Blaster #451](games/game-451.html) — Blaster · Desert theme · added 2026-11-09 12:33 UTC
- 🧺 [Forest Catch #450](games/game-450.html) — Catch · Forest theme · added 2026-11-09 12:28 UTC
- 🔫 [Lava Blaster #449](games/game-449.html) — Blaster · Lava theme · added 2026-11-09 12:23 UTC
- 🧱 [Lava Dodge #448](games/game-448.html) — Dodge · Lava theme · added 2026-11-09 12:18 UTC
- 🧱 [Forest Dodge #447](games/game-447.html) — Dodge · Forest theme · added 2026-11-09 12:13 UTC
- 🏃 [Neon Runner #446](games/game-446.html) — Runner · Neon theme · added 2026-11-09 12:08 UTC
- 🧱 [Block Dodge #445](games/game-445.html) — Dodge · Block theme · added 2026-11-09 12:03 UTC
- 🏃 [Ocean Runner #444](games/game-444.html) — Runner · Ocean theme · added 2026-11-09 11:58 UTC
- 🎯 [Forest Tap Rush #443](games/game-443.html) — Tap Rush · Forest theme · added 2026-11-09 11:53 UTC
- 🧱 [Neon Dodge #442](games/game-442.html) — Dodge · Neon theme · added 2026-11-09 11:48 UTC
- 🏃 [Ice Runner #441](games/game-441.html) — Runner · Ice theme · added 2026-11-09 11:43 UTC
- 🧱 [Block Breaker #440](games/game-440.html) — Breaker · Block theme · added 2026-11-09 11:38 UTC
- 🐦 [Space Flap #439](games/game-439.html) — Flap · Space theme · added 2026-11-09 11:33 UTC
- 🎯 [Desert Tap Rush #438](games/game-438.html) — Tap Rush · Desert theme · added 2026-11-09 11:28 UTC
- 🐍 [Retro Snake #437](games/game-437.html) — Snake · Retro theme · added 2026-11-09 11:23 UTC
- 🧱 [Ocean Breaker #436](games/game-436.html) — Breaker · Ocean theme · added 2026-11-09 11:18 UTC
- 🧱 [Candy Breaker #435](games/game-435.html) — Breaker · Candy theme · added 2026-11-09 11:13 UTC
- 🐍 [Retro Snake #434](games/game-434.html) — Snake · Retro theme · added 2026-11-09 11:08 UTC
- 🧱 [Toxic Breaker #433](games/game-433.html) — Breaker · Toxic theme · added 2026-11-09 11:03 UTC
- 🧺 [Lava Catch #432](games/game-432.html) — Catch · Lava theme · added 2026-11-09 10:58 UTC
- 🧱 [Retro Breaker #431](games/game-431.html) — Breaker · Retro theme · added 2026-11-09 10:53 UTC
- 🏃 [Sunset Runner #430](games/game-430.html) — Runner · Sunset theme · added 2026-11-09 10:47 UTC
- 🐦 [Lava Flap #429](games/game-429.html) — Flap · Lava theme · added 2026-11-09 10:42 UTC
- 🐍 [Ice Snake #428](games/game-428.html) — Snake · Ice theme · added 2026-11-09 10:37 UTC
- 🏃 [Ocean Runner #427](games/game-427.html) — Runner · Ocean theme · added 2026-11-09 10:32 UTC
- 🏃 [Lava Runner #426](games/game-426.html) — Runner · Lava theme · added 2026-11-09 10:27 UTC
- 🎯 [Ocean Tap Rush #425](games/game-425.html) — Tap Rush · Ocean theme · added 2026-11-09 10:22 UTC
- 🎯 [Desert Tap Rush #424](games/game-424.html) — Tap Rush · Desert theme · added 2026-11-09 10:17 UTC
- 🧺 [Neon Catch #423](games/game-423.html) — Catch · Neon theme · added 2026-11-09 10:12 UTC
- 🔫 [Neon Blaster #422](games/game-422.html) — Blaster · Neon theme · added 2026-11-09 10:07 UTC
- 🐍 [Lava Snake #421](games/game-421.html) — Snake · Lava theme · added 2026-11-09 10:02 UTC
- 🧱 [Ice Dodge #420](games/game-420.html) — Dodge · Ice theme · added 2026-11-09 09:57 UTC
- 🔫 [Block Blaster #419](games/game-419.html) — Blaster · Block theme · added 2026-11-09 09:52 UTC
- 🏃 [Space Runner #418](games/game-418.html) — Runner · Space theme · added 2026-11-09 09:47 UTC
- 🧱 [Sunset Dodge #417](games/game-417.html) — Dodge · Sunset theme · added 2026-11-09 09:42 UTC
- 🔫 [Neon Blaster #416](games/game-416.html) — Blaster · Neon theme · added 2026-11-09 09:37 UTC
- 🧱 [Space Dodge #415](games/game-415.html) — Dodge · Space theme · added 2026-11-09 09:32 UTC
- 🐦 [Space Flap #414](games/game-414.html) — Flap · Space theme · added 2026-11-09 09:27 UTC
- 🐦 [Candy Flap #413](games/game-413.html) — Flap · Candy theme · added 2026-11-09 09:22 UTC
- 🐍 [Ocean Snake #412](games/game-412.html) — Snake · Ocean theme · added 2026-11-09 09:17 UTC
- 🐦 [Toxic Flap #411](games/game-411.html) — Flap · Toxic theme · added 2026-11-09 09:12 UTC
- 🐍 [Toxic Snake #410](games/game-410.html) — Snake · Toxic theme · added 2026-11-09 09:07 UTC
- 🧱 [Lava Breaker #409](games/game-409.html) — Breaker · Lava theme · added 2026-11-09 09:02 UTC
- 🔫 [Ice Blaster #408](games/game-408.html) — Blaster · Ice theme · added 2026-11-09 08:57 UTC
- 🏃 [Forest Runner #407](games/game-407.html) — Runner · Forest theme · added 2026-11-09 08:52 UTC
- 🐍 [Sunset Snake #406](games/game-406.html) — Snake · Sunset theme · added 2026-11-09 08:47 UTC
- 🧺 [Block Catch #405](games/game-405.html) — Catch · Block theme · added 2026-11-09 08:42 UTC
- 🏃 [Ice Runner #404](games/game-404.html) — Runner · Ice theme · added 2026-11-09 08:37 UTC
- 🧺 [Candy Catch #403](games/game-403.html) — Catch · Candy theme · added 2026-11-09 08:32 UTC
- 🧱 [Lava Breaker #402](games/game-402.html) — Breaker · Lava theme · added 2026-11-09 08:27 UTC
- 🐍 [Neon Snake #401](games/game-401.html) — Snake · Neon theme · added 2026-11-09 08:22 UTC
- 🐦 [Ocean Flap #400](games/game-400.html) — Flap · Ocean theme · added 2026-11-09 08:17 UTC
- 🧱 [Space Dodge #399](games/game-399.html) — Dodge · Space theme · added 2026-11-09 08:12 UTC
- 🏃 [Ocean Runner #398](games/game-398.html) — Runner · Ocean theme · added 2026-11-09 08:06 UTC
- 🧺 [Sunset Catch #397](games/game-397.html) — Catch · Sunset theme · added 2026-11-09 08:01 UTC
- 🐦 [Ice Flap #396](games/game-396.html) — Flap · Ice theme · added 2026-11-09 07:56 UTC
- 🏃 [Forest Runner #395](games/game-395.html) — Runner · Forest theme · added 2026-11-09 07:51 UTC
- 🧺 [Desert Catch #394](games/game-394.html) — Catch · Desert theme · added 2026-11-09 07:46 UTC
- 🔫 [Forest Blaster #393](games/game-393.html) — Blaster · Forest theme · added 2026-11-09 07:41 UTC
- 🐦 [Forest Flap #392](games/game-392.html) — Flap · Forest theme · added 2026-11-09 07:36 UTC
- 🐦 [Sunset Flap #391](games/game-391.html) — Flap · Sunset theme · added 2026-11-09 07:31 UTC
- 🧺 [Ocean Catch #390](games/game-390.html) — Catch · Ocean theme · added 2026-11-09 07:26 UTC
- 🏃 [Desert Runner #389](games/game-389.html) — Runner · Desert theme · added 2026-11-09 07:21 UTC
- 🐍 [Retro Snake #388](games/game-388.html) — Snake · Retro theme · added 2026-11-09 07:16 UTC
- 🎯 [Retro Tap Rush #387](games/game-387.html) — Tap Rush · Retro theme · added 2026-11-09 07:11 UTC
- 🐍 [Desert Snake #386](games/game-386.html) — Snake · Desert theme · added 2026-11-09 07:06 UTC
- 🧱 [Forest Breaker #385](games/game-385.html) — Breaker · Forest theme · added 2026-11-09 07:01 UTC
- 🐦 [Neon Flap #384](games/game-384.html) — Flap · Neon theme · added 2026-11-09 06:56 UTC
- 🧱 [Toxic Breaker #383](games/game-383.html) — Breaker · Toxic theme · added 2026-11-09 06:51 UTC
- 🎯 [Neon Tap Rush #382](games/game-382.html) — Tap Rush · Neon theme · added 2026-11-09 06:46 UTC
- 🏃 [Forest Runner #381](games/game-381.html) — Runner · Forest theme · added 2026-11-09 06:41 UTC
- 🐦 [Neon Flap #380](games/game-380.html) — Flap · Neon theme · added 2026-11-09 06:36 UTC
- 🧱 [Lava Dodge #379](games/game-379.html) — Dodge · Lava theme · added 2026-11-09 06:31 UTC
- 🏃 [Toxic Runner #378](games/game-378.html) — Runner · Toxic theme · added 2026-11-09 06:26 UTC
- 🎯 [Forest Tap Rush #377](games/game-377.html) — Tap Rush · Forest theme · added 2026-11-09 06:21 UTC
- 🔫 [Desert Blaster #376](games/game-376.html) — Blaster · Desert theme · added 2026-11-09 06:16 UTC
- 🐦 [Forest Flap #375](games/game-375.html) — Flap · Forest theme · added 2026-11-09 06:10 UTC
- 🔫 [Neon Blaster #374](games/game-374.html) — Blaster · Neon theme · added 2026-11-09 06:05 UTC
- 🧱 [Block Dodge #373](games/game-373.html) — Dodge · Block theme · added 2026-11-09 06:00 UTC
- 🎯 [Neon Tap Rush #372](games/game-372.html) — Tap Rush · Neon theme · added 2026-11-09 05:55 UTC
- 🐦 [Space Flap #371](games/game-371.html) — Flap · Space theme · added 2026-11-09 05:50 UTC
- 🏃 [Space Runner #370](games/game-370.html) — Runner · Space theme · added 2026-11-09 05:45 UTC
- 🔫 [Neon Blaster #369](games/game-369.html) — Blaster · Neon theme · added 2026-11-09 05:40 UTC
- 🧺 [Space Catch #368](games/game-368.html) — Catch · Space theme · added 2026-11-09 05:35 UTC
- 🧱 [Lava Dodge #367](games/game-367.html) — Dodge · Lava theme · added 2026-11-09 05:30 UTC
- 🧱 [Retro Breaker #366](games/game-366.html) — Breaker · Retro theme · added 2026-11-09 05:25 UTC
- 🔫 [Ocean Blaster #365](games/game-365.html) — Blaster · Ocean theme · added 2026-11-09 05:20 UTC
- 🐦 [Toxic Flap #364](games/game-364.html) — Flap · Toxic theme · added 2026-11-09 05:15 UTC
- 🧺 [Space Catch #363](games/game-363.html) — Catch · Space theme · added 2026-11-09 05:10 UTC
- 🧺 [Block Catch #362](games/game-362.html) — Catch · Block theme · added 2026-11-09 05:05 UTC
- 🐍 [Space Snake #361](games/game-361.html) — Snake · Space theme · added 2026-11-09 05:00 UTC
- 🧱 [Retro Dodge #360](games/game-360.html) — Dodge · Retro theme · added 2026-11-09 04:55 UTC
- 🧺 [Sunset Catch #359](games/game-359.html) — Catch · Sunset theme · added 2026-11-09 04:50 UTC
- 🏃 [Candy Runner #358](games/game-358.html) — Runner · Candy theme · added 2026-11-09 04:45 UTC
- 🧱 [Sunset Breaker #357](games/game-357.html) — Breaker · Sunset theme · added 2026-11-09 04:40 UTC
- 🏃 [Candy Runner #356](games/game-356.html) — Runner · Candy theme · added 2026-11-09 04:35 UTC
- 🎯 [Block Tap Rush #355](games/game-355.html) — Tap Rush · Block theme · added 2026-11-09 04:30 UTC
- 🏃 [Space Runner #354](games/game-354.html) — Runner · Space theme · added 2026-11-09 04:25 UTC
- 🎯 [Neon Tap Rush #353](games/game-353.html) — Tap Rush · Neon theme · added 2026-11-09 04:20 UTC
- 🧱 [Desert Dodge #352](games/game-352.html) — Dodge · Desert theme · added 2026-11-09 04:15 UTC
- 🎯 [Ocean Tap Rush #351](games/game-351.html) — Tap Rush · Ocean theme · added 2026-11-09 04:10 UTC
- 🧺 [Forest Catch #350](games/game-350.html) — Catch · Forest theme · added 2026-11-09 04:05 UTC
- 🧱 [Desert Dodge #349](games/game-349.html) — Dodge · Desert theme · added 2026-11-09 04:00 UTC
- 🔫 [Lava Blaster #348](games/game-348.html) — Blaster · Lava theme · added 2026-11-09 03:55 UTC
- 🧺 [Neon Catch #347](games/game-347.html) — Catch · Neon theme · added 2026-11-09 03:50 UTC
- 🏃 [Desert Runner #346](games/game-346.html) — Runner · Desert theme · added 2026-11-09 03:45 UTC
- 🔫 [Retro Blaster #345](games/game-345.html) — Blaster · Retro theme · added 2026-11-09 03:40 UTC
- 🐍 [Block Snake #344](games/game-344.html) — Snake · Block theme · added 2026-11-09 03:35 UTC
- 🏃 [Candy Runner #343](games/game-343.html) — Runner · Candy theme · added 2026-11-09 03:30 UTC
- 🧱 [Block Dodge #342](games/game-342.html) — Dodge · Block theme · added 2026-11-09 03:25 UTC
- 🧺 [Sunset Catch #341](games/game-341.html) — Catch · Sunset theme · added 2026-11-09 03:20 UTC
- 🏃 [Forest Runner #340](games/game-340.html) — Runner · Forest theme · added 2026-11-09 03:14 UTC
- 🏃 [Neon Runner #339](games/game-339.html) — Runner · Neon theme · added 2026-11-09 03:09 UTC
- 🐍 [Candy Snake #338](games/game-338.html) — Snake · Candy theme · added 2026-11-09 03:04 UTC
- 🧱 [Toxic Breaker #337](games/game-337.html) — Breaker · Toxic theme · added 2026-11-09 02:59 UTC
- 🐦 [Block Flap #336](games/game-336.html) — Flap · Block theme · added 2026-11-09 02:54 UTC
- 🏃 [Ice Runner #335](games/game-335.html) — Runner · Ice theme · added 2026-11-09 02:49 UTC
- 🧱 [Neon Dodge #334](games/game-334.html) — Dodge · Neon theme · added 2026-11-09 02:44 UTC
- 🔫 [Toxic Blaster #333](games/game-333.html) — Blaster · Toxic theme · added 2026-11-09 02:39 UTC
- 🏃 [Retro Runner #332](games/game-332.html) — Runner · Retro theme · added 2026-11-09 02:34 UTC
- 🐦 [Lava Flap #331](games/game-331.html) — Flap · Lava theme · added 2026-11-09 02:29 UTC
- 🏃 [Ice Runner #330](games/game-330.html) — Runner · Ice theme · added 2026-11-09 02:24 UTC
- 🔫 [Lava Blaster #329](games/game-329.html) — Blaster · Lava theme · added 2026-11-09 02:19 UTC
- 🧱 [Space Dodge #328](games/game-328.html) — Dodge · Space theme · added 2026-11-09 02:14 UTC
- 🔫 [Neon Blaster #327](games/game-327.html) — Blaster · Neon theme · added 2026-11-09 02:09 UTC
- 🧺 [Neon Catch #326](games/game-326.html) — Catch · Neon theme · added 2026-11-09 02:04 UTC
- 🧺 [Candy Catch #325](games/game-325.html) — Catch · Candy theme · added 2026-11-09 01:59 UTC
- 🐍 [Space Snake #324](games/game-324.html) — Snake · Space theme · added 2026-11-09 01:54 UTC
- 🧱 [Neon Dodge #323](games/game-323.html) — Dodge · Neon theme · added 2026-11-09 01:49 UTC
- 🧺 [Space Catch #322](games/game-322.html) — Catch · Space theme · added 2026-11-09 01:44 UTC
- 🧱 [Sunset Breaker #321](games/game-321.html) — Breaker · Sunset theme · added 2026-11-09 01:39 UTC
- 🏃 [Lava Runner #320](games/game-320.html) — Runner · Lava theme · added 2026-11-09 01:34 UTC
- 🐦 [Block Flap #319](games/game-319.html) — Flap · Block theme · added 2026-11-09 01:29 UTC
- 🐦 [Forest Flap #318](games/game-318.html) — Flap · Forest theme · added 2026-11-09 01:24 UTC
- 🐍 [Forest Snake #317](games/game-317.html) — Snake · Forest theme · added 2026-11-09 01:19 UTC
- 🎯 [Sunset Tap Rush #316](games/game-316.html) — Tap Rush · Sunset theme · added 2026-11-09 01:14 UTC
- 🧱 [Forest Breaker #315](games/game-315.html) — Breaker · Forest theme · added 2026-11-09 01:09 UTC
- 🧱 [Block Dodge #314](games/game-314.html) — Dodge · Block theme · added 2026-11-09 01:04 UTC
- 🧺 [Sunset Catch #313](games/game-313.html) — Catch · Sunset theme · added 2026-11-09 00:59 UTC
- 🧱 [Forest Breaker #312](games/game-312.html) — Breaker · Forest theme · added 2026-11-09 00:54 UTC
- 🐍 [Retro Snake #311](games/game-311.html) — Snake · Retro theme · added 2026-11-09 00:48 UTC
- 🐦 [Sunset Flap #310](games/game-310.html) — Flap · Sunset theme · added 2026-11-09 00:43 UTC
- 🏃 [Lava Runner #309](games/game-309.html) — Runner · Lava theme · added 2026-11-09 00:38 UTC
- 🧱 [Sunset Breaker #308](games/game-308.html) — Breaker · Sunset theme · added 2026-11-09 00:33 UTC
- 🧺 [Candy Catch #307](games/game-307.html) — Catch · Candy theme · added 2026-11-09 00:28 UTC
- 🧱 [Neon Dodge #306](games/game-306.html) — Dodge · Neon theme · added 2026-11-09 00:23 UTC
- 🧱 [Forest Breaker #305](games/game-305.html) — Breaker · Forest theme · added 2026-11-09 00:18 UTC
- 🎯 [Lava Tap Rush #304](games/game-304.html) — Tap Rush · Lava theme · added 2026-11-09 00:13 UTC
- 🔫 [Block Blaster #303](games/game-303.html) — Blaster · Block theme · added 2026-11-09 00:08 UTC
- 🔫 [Desert Blaster #302](games/game-302.html) — Blaster · Desert theme · added 2026-11-09 00:03 UTC
- 🎯 [Space Tap Rush #301](games/game-301.html) — Tap Rush · Space theme · added 2026-11-08 23:58 UTC
- 🧱 [Sunset Dodge #300](games/game-300.html) — Dodge · Sunset theme · added 2026-11-08 23:53 UTC
- 🐦 [Ice Flap #299](games/game-299.html) — Flap · Ice theme · added 2026-11-08 23:48 UTC
- 🐦 [Forest Flap #298](games/game-298.html) — Flap · Forest theme · added 2026-11-08 23:43 UTC
- 🔫 [Candy Blaster #297](games/game-297.html) — Blaster · Candy theme · added 2026-11-08 23:38 UTC
- 🔫 [Neon Blaster #296](games/game-296.html) — Blaster · Neon theme · added 2026-11-08 23:33 UTC
- 🎯 [Sunset Tap Rush #295](games/game-295.html) — Tap Rush · Sunset theme · added 2026-11-08 23:28 UTC
- 🎯 [Ocean Tap Rush #294](games/game-294.html) — Tap Rush · Ocean theme · added 2026-11-08 23:23 UTC
- 🐍 [Sunset Snake #293](games/game-293.html) — Snake · Sunset theme · added 2026-11-08 23:18 UTC
- 🐦 [Neon Flap #292](games/game-292.html) — Flap · Neon theme · added 2026-11-08 23:13 UTC
- 🐍 [Block Snake #291](games/game-291.html) — Snake · Block theme · added 2026-11-08 23:08 UTC
- 🧺 [Ice Catch #290](games/game-290.html) — Catch · Ice theme · added 2026-11-08 23:03 UTC
- 🔫 [Sunset Blaster #289](games/game-289.html) — Blaster · Sunset theme · added 2026-11-08 22:58 UTC
- 🐦 [Ice Flap #288](games/game-288.html) — Flap · Ice theme · added 2026-11-08 22:53 UTC
- 🎯 [Toxic Tap Rush #287](games/game-287.html) — Tap Rush · Toxic theme · added 2026-11-08 22:48 UTC
- 🎯 [Block Tap Rush #286](games/game-286.html) — Tap Rush · Block theme · added 2026-11-08 22:43 UTC
- 🧱 [Space Breaker #285](games/game-285.html) — Breaker · Space theme · added 2026-11-08 22:38 UTC
- 🧱 [Toxic Dodge #284](games/game-284.html) — Dodge · Toxic theme · added 2026-11-08 22:33 UTC
- 🧱 [Retro Breaker #283](games/game-283.html) — Breaker · Retro theme · added 2026-11-08 22:28 UTC
- 🎯 [Sunset Tap Rush #282](games/game-282.html) — Tap Rush · Sunset theme · added 2026-11-08 22:23 UTC
- 🧱 [Sunset Breaker #281](games/game-281.html) — Breaker · Sunset theme · added 2026-11-08 22:18 UTC
- 🧱 [Neon Dodge #280](games/game-280.html) — Dodge · Neon theme · added 2026-11-08 22:13 UTC
- 🐦 [Forest Flap #279](games/game-279.html) — Flap · Forest theme · added 2026-11-08 22:08 UTC
- 🎯 [Ocean Tap Rush #278](games/game-278.html) — Tap Rush · Ocean theme · added 2026-11-08 22:03 UTC
- 🔫 [Lava Blaster #277](games/game-277.html) — Blaster · Lava theme · added 2026-11-08 21:58 UTC
- 🧱 [Retro Breaker #276](games/game-276.html) — Breaker · Retro theme · added 2026-11-08 21:53 UTC
- 🎯 [Forest Tap Rush #275](games/game-275.html) — Tap Rush · Forest theme · added 2026-11-08 21:48 UTC
- 🎯 [Candy Tap Rush #274](games/game-274.html) — Tap Rush · Candy theme · added 2026-11-08 21:43 UTC
- 🏃 [Ice Runner #273](games/game-273.html) — Runner · Ice theme · added 2026-11-08 21:38 UTC
- 🐦 [Sunset Flap #272](games/game-272.html) — Flap · Sunset theme · added 2026-11-08 21:32 UTC
- 🏃 [Retro Runner #271](games/game-271.html) — Runner · Retro theme · added 2026-11-08 21:27 UTC
- 🐍 [Neon Snake #270](games/game-270.html) — Snake · Neon theme · added 2026-11-08 21:22 UTC
- 🧱 [Space Dodge #269](games/game-269.html) — Dodge · Space theme · added 2026-11-08 21:17 UTC
- 🧱 [Candy Dodge #268](games/game-268.html) — Dodge · Candy theme · added 2026-11-08 21:12 UTC
- 🐦 [Lava Flap #267](games/game-267.html) — Flap · Lava theme · added 2026-11-08 21:07 UTC
- 🏃 [Block Runner #266](games/game-266.html) — Runner · Block theme · added 2026-11-08 21:02 UTC
- 🐦 [Space Flap #265](games/game-265.html) — Flap · Space theme · added 2026-11-08 20:57 UTC
- 🏃 [Block Runner #264](games/game-264.html) — Runner · Block theme · added 2026-11-08 20:52 UTC
- 🧱 [Sunset Dodge #263](games/game-263.html) — Dodge · Sunset theme · added 2026-11-08 20:47 UTC
- 🐦 [Sunset Flap #262](games/game-262.html) — Flap · Sunset theme · added 2026-11-08 20:42 UTC
- 🐍 [Ocean Snake #261](games/game-261.html) — Snake · Ocean theme · added 2026-11-08 20:37 UTC
- 🧺 [Neon Catch #260](games/game-260.html) — Catch · Neon theme · added 2026-11-08 20:32 UTC
- 🐦 [Neon Flap #259](games/game-259.html) — Flap · Neon theme · added 2026-11-08 20:27 UTC
- 🐍 [Forest Snake #258](games/game-258.html) — Snake · Forest theme · added 2026-11-08 20:22 UTC
- 🎯 [Lava Tap Rush #257](games/game-257.html) — Tap Rush · Lava theme · added 2026-11-08 20:17 UTC
- 🧱 [Sunset Breaker #256](games/game-256.html) — Breaker · Sunset theme · added 2026-11-08 20:12 UTC
- 🎯 [Ocean Tap Rush #255](games/game-255.html) — Tap Rush · Ocean theme · added 2026-11-08 20:07 UTC
- 🏃 [Neon Runner #254](games/game-254.html) — Runner · Neon theme · added 2026-11-08 20:02 UTC
- 🔫 [Lava Blaster #253](games/game-253.html) — Blaster · Lava theme · added 2026-11-08 19:57 UTC
- 🎯 [Lava Tap Rush #252](games/game-252.html) — Tap Rush · Lava theme · added 2026-11-08 19:52 UTC
- 🧱 [Lava Dodge #251](games/game-251.html) — Dodge · Lava theme · added 2026-11-08 19:47 UTC
- 🔫 [Desert Blaster #250](games/game-250.html) — Blaster · Desert theme · added 2026-11-08 19:42 UTC
- 🧺 [Desert Catch #249](games/game-249.html) — Catch · Desert theme · added 2026-11-08 19:37 UTC
- 🧱 [Space Dodge #248](games/game-248.html) — Dodge · Space theme · added 2026-11-08 19:32 UTC
- 🐍 [Block Snake #247](games/game-247.html) — Snake · Block theme · added 2026-11-08 19:27 UTC
- 🔫 [Toxic Blaster #246](games/game-246.html) — Blaster · Toxic theme · added 2026-11-08 19:22 UTC
- 🐍 [Sunset Snake #245](games/game-245.html) — Snake · Sunset theme · added 2026-11-08 19:17 UTC
- 🧺 [Sunset Catch #244](games/game-244.html) — Catch · Sunset theme · added 2026-11-08 19:11 UTC
- 🐦 [Desert Flap #243](games/game-243.html) — Flap · Desert theme · added 2026-11-08 19:06 UTC
- 🐍 [Block Snake #242](games/game-242.html) — Snake · Block theme · added 2026-11-08 19:01 UTC
- 🎯 [Lava Tap Rush #241](games/game-241.html) — Tap Rush · Lava theme · added 2026-11-08 18:56 UTC
- 🧱 [Ice Dodge #240](games/game-240.html) — Dodge · Ice theme · added 2026-11-08 18:51 UTC
- 🧺 [Neon Catch #239](games/game-239.html) — Catch · Neon theme · added 2026-11-08 18:46 UTC
- 🐦 [Neon Flap #238](games/game-238.html) — Flap · Neon theme · added 2026-11-08 18:41 UTC
- 🐍 [Toxic Snake #237](games/game-237.html) — Snake · Toxic theme · added 2026-11-08 18:36 UTC
- 🐍 [Candy Snake #236](games/game-236.html) — Snake · Candy theme · added 2026-11-08 18:31 UTC
- 🐦 [Ocean Flap #235](games/game-235.html) — Flap · Ocean theme · added 2026-11-08 18:26 UTC
- 🏃 [Neon Runner #234](games/game-234.html) — Runner · Neon theme · added 2026-11-08 18:21 UTC
- 🐍 [Neon Snake #233](games/game-233.html) — Snake · Neon theme · added 2026-11-08 18:16 UTC
- 🐍 [Space Snake #232](games/game-232.html) — Snake · Space theme · added 2026-11-08 18:11 UTC
- 🐦 [Ocean Flap #231](games/game-231.html) — Flap · Ocean theme · added 2026-11-08 18:06 UTC
- 🧱 [Desert Breaker #230](games/game-230.html) — Breaker · Desert theme · added 2026-11-08 18:01 UTC
- 🔫 [Ice Blaster #229](games/game-229.html) — Blaster · Ice theme · added 2026-11-08 17:56 UTC
- 🧱 [Sunset Dodge #228](games/game-228.html) — Dodge · Sunset theme · added 2026-11-08 17:51 UTC
- 🔫 [Ocean Blaster #227](games/game-227.html) — Blaster · Ocean theme · added 2026-11-08 17:46 UTC
- 🎯 [Forest Tap Rush #226](games/game-226.html) — Tap Rush · Forest theme · added 2026-11-08 17:41 UTC
- 🧱 [Neon Breaker #225](games/game-225.html) — Breaker · Neon theme · added 2026-11-08 17:36 UTC
- 🧺 [Retro Catch #224](games/game-224.html) — Catch · Retro theme · added 2026-11-08 17:31 UTC
- 🧱 [Sunset Dodge #223](games/game-223.html) — Dodge · Sunset theme · added 2026-11-08 17:26 UTC
- 🏃 [Ocean Runner #222](games/game-222.html) — Runner · Ocean theme · added 2026-11-08 17:21 UTC
- 🧱 [Space Dodge #221](games/game-221.html) — Dodge · Space theme · added 2026-11-08 17:16 UTC
- 🧱 [Lava Breaker #220](games/game-220.html) — Breaker · Lava theme · added 2026-11-08 17:11 UTC
- 🐍 [Desert Snake #219](games/game-219.html) — Snake · Desert theme · added 2026-11-08 17:06 UTC
- 🐦 [Ocean Flap #218](games/game-218.html) — Flap · Ocean theme · added 2026-11-08 17:01 UTC
- 🎯 [Sunset Tap Rush #217](games/game-217.html) — Tap Rush · Sunset theme · added 2026-11-08 16:56 UTC
- 🧺 [Space Catch #216](games/game-216.html) — Catch · Space theme · added 2026-11-08 16:51 UTC
- 🧱 [Candy Breaker #215](games/game-215.html) — Breaker · Candy theme · added 2026-11-08 16:46 UTC
- 🧱 [Space Dodge #214](games/game-214.html) — Dodge · Space theme · added 2026-11-08 16:41 UTC
- 🏃 [Ice Runner #213](games/game-213.html) — Runner · Ice theme · added 2026-11-08 16:36 UTC
- 🐦 [Sunset Flap #212](games/game-212.html) — Flap · Sunset theme · added 2026-11-08 16:31 UTC
- 🔫 [Neon Blaster #211](games/game-211.html) — Blaster · Neon theme · added 2026-11-08 16:26 UTC
- 🐍 [Retro Snake #210](games/game-210.html) — Snake · Retro theme · added 2026-11-08 16:21 UTC
- 🧺 [Ice Catch #209](games/game-209.html) — Catch · Ice theme · added 2026-11-08 16:15 UTC
- 🐍 [Retro Snake #208](games/game-208.html) — Snake · Retro theme · added 2026-11-08 16:10 UTC
- 🎯 [Lava Tap Rush #207](games/game-207.html) — Tap Rush · Lava theme · added 2026-11-08 16:05 UTC
- 🎯 [Ocean Tap Rush #206](games/game-206.html) — Tap Rush · Ocean theme · added 2026-11-08 16:00 UTC
- 🎯 [Ocean Tap Rush #205](games/game-205.html) — Tap Rush · Ocean theme · added 2026-11-08 15:55 UTC
- 🐦 [Ocean Flap #204](games/game-204.html) — Flap · Ocean theme · added 2026-11-08 15:50 UTC
- 🎯 [Block Tap Rush #203](games/game-203.html) — Tap Rush · Block theme · added 2026-11-08 15:45 UTC
- 🐦 [Desert Flap #202](games/game-202.html) — Flap · Desert theme · added 2026-11-08 15:40 UTC
- 🏃 [Space Runner #201](games/game-201.html) — Runner · Space theme · added 2026-11-08 15:35 UTC
- 🐍 [Ocean Snake #200](games/game-200.html) — Snake · Ocean theme · added 2026-11-08 15:30 UTC
- 🏃 [Forest Runner #199](games/game-199.html) — Runner · Forest theme · added 2026-11-08 15:25 UTC
- 🏃 [Toxic Runner #198](games/game-198.html) — Runner · Toxic theme · added 2026-11-08 15:20 UTC
- 🎯 [Block Tap Rush #197](games/game-197.html) — Tap Rush · Block theme · added 2026-11-08 15:15 UTC
- 🐦 [Desert Flap #196](games/game-196.html) — Flap · Desert theme · added 2026-11-08 15:10 UTC
- 🧺 [Ocean Catch #195](games/game-195.html) — Catch · Ocean theme · added 2026-11-08 15:05 UTC
- 🧱 [Space Breaker #194](games/game-194.html) — Breaker · Space theme · added 2026-11-08 15:00 UTC
- 🐦 [Toxic Flap #193](games/game-193.html) — Flap · Toxic theme · added 2026-11-08 14:55 UTC
- 🧺 [Ice Catch #192](games/game-192.html) — Catch · Ice theme · added 2026-11-08 14:50 UTC
- 🧱 [Toxic Dodge #191](games/game-191.html) — Dodge · Toxic theme · added 2026-11-08 14:45 UTC
- 🐍 [Toxic Snake #190](games/game-190.html) — Snake · Toxic theme · added 2026-11-08 14:40 UTC
- 🔫 [Forest Blaster #189](games/game-189.html) — Blaster · Forest theme · added 2026-11-08 14:35 UTC
- 🧱 [Retro Dodge #188](games/game-188.html) — Dodge · Retro theme · added 2026-11-08 14:30 UTC
- 🔫 [Neon Blaster #187](games/game-187.html) — Blaster · Neon theme · added 2026-11-08 14:25 UTC
- 🐦 [Toxic Flap #186](games/game-186.html) — Flap · Toxic theme · added 2026-11-08 14:20 UTC
- 🧱 [Ocean Breaker #185](games/game-185.html) — Breaker · Ocean theme · added 2026-11-08 14:15 UTC
- 🧱 [Candy Dodge #184](games/game-184.html) — Dodge · Candy theme · added 2026-11-08 14:10 UTC
- 🐦 [Neon Flap #183](games/game-183.html) — Flap · Neon theme · added 2026-11-08 14:05 UTC
- 🧱 [Forest Dodge #182](games/game-182.html) — Dodge · Forest theme · added 2026-11-08 14:00 UTC
- 🎯 [Space Tap Rush #181](games/game-181.html) — Tap Rush · Space theme · added 2026-11-08 13:55 UTC
- 🔫 [Toxic Blaster #180](games/game-180.html) — Blaster · Toxic theme · added 2026-11-08 13:50 UTC
- 🎯 [Retro Tap Rush #179](games/game-179.html) — Tap Rush · Retro theme · added 2026-11-08 13:45 UTC
- 🏃 [Toxic Runner #178](games/game-178.html) — Runner · Toxic theme · added 2026-11-08 13:40 UTC
- 🐍 [Candy Snake #177](games/game-177.html) — Snake · Candy theme · added 2026-11-08 13:35 UTC
- 🧱 [Ocean Dodge #176](games/game-176.html) — Dodge · Ocean theme · added 2026-11-08 13:29 UTC
- 🔫 [Toxic Blaster #175](games/game-175.html) — Blaster · Toxic theme · added 2026-11-08 13:24 UTC
- 🔫 [Toxic Blaster #174](games/game-174.html) — Blaster · Toxic theme · added 2026-11-08 13:19 UTC
- 🧺 [Block Catch #173](games/game-173.html) — Catch · Block theme · added 2026-11-08 13:14 UTC
- 🧺 [Lava Catch #172](games/game-172.html) — Catch · Lava theme · added 2026-11-08 13:09 UTC
- 🧺 [Neon Catch #171](games/game-171.html) — Catch · Neon theme · added 2026-11-08 13:04 UTC
- 🏃 [Ocean Runner #170](games/game-170.html) — Runner · Ocean theme · added 2026-11-08 12:59 UTC
- 🧱 [Lava Dodge #169](games/game-169.html) — Dodge · Lava theme · added 2026-11-08 12:54 UTC
- 🔫 [Toxic Blaster #168](games/game-168.html) — Blaster · Toxic theme · added 2026-11-08 12:49 UTC
- 🎯 [Block Tap Rush #167](games/game-167.html) — Tap Rush · Block theme · added 2026-11-08 12:44 UTC
- 🐍 [Forest Snake #166](games/game-166.html) — Snake · Forest theme · added 2026-11-08 12:39 UTC
- 🐦 [Toxic Flap #165](games/game-165.html) — Flap · Toxic theme · added 2026-11-08 12:34 UTC
- 🧱 [Forest Dodge #164](games/game-164.html) — Dodge · Forest theme · added 2026-11-08 12:29 UTC
- 🐍 [Toxic Snake #163](games/game-163.html) — Snake · Toxic theme · added 2026-11-08 12:24 UTC
- 🎯 [Candy Tap Rush #162](games/game-162.html) — Tap Rush · Candy theme · added 2026-11-08 12:19 UTC
- 🐦 [Lava Flap #161](games/game-161.html) — Flap · Lava theme · added 2026-11-08 12:14 UTC
- 🧺 [Forest Catch #160](games/game-160.html) — Catch · Forest theme · added 2026-11-08 12:09 UTC
- 🧱 [Candy Breaker #159](games/game-159.html) — Breaker · Candy theme · added 2026-11-08 12:04 UTC
- 🧱 [Sunset Breaker #158](games/game-158.html) — Breaker · Sunset theme · added 2026-11-08 11:59 UTC
- 🎯 [Sunset Tap Rush #157](games/game-157.html) — Tap Rush · Sunset theme · added 2026-11-08 11:54 UTC
- 🏃 [Sunset Runner #156](games/game-156.html) — Runner · Sunset theme · added 2026-11-08 11:49 UTC
- 🎯 [Ocean Tap Rush #155](games/game-155.html) — Tap Rush · Ocean theme · added 2026-11-08 11:44 UTC
- 🐦 [Block Flap #154](games/game-154.html) — Flap · Block theme · added 2026-11-08 11:39 UTC
- 🧱 [Forest Breaker #153](games/game-153.html) — Breaker · Forest theme · added 2026-11-08 11:34 UTC
- 🐦 [Sunset Flap #152](games/game-152.html) — Flap · Sunset theme · added 2026-11-08 11:29 UTC
- 🐍 [Sunset Snake #151](games/game-151.html) — Snake · Sunset theme · added 2026-11-08 11:24 UTC
- 🏃 [Block Runner #150](games/game-150.html) — Runner · Block theme · added 2026-11-08 11:19 UTC
- 🧺 [Space Catch #149](games/game-149.html) — Catch · Space theme · added 2026-11-08 11:14 UTC
- 🧺 [Desert Catch #148](games/game-148.html) — Catch · Desert theme · added 2026-11-08 11:09 UTC
- 🧱 [Desert Breaker #147](games/game-147.html) — Breaker · Desert theme · added 2026-11-08 11:04 UTC
- 🧱 [Sunset Breaker #146](games/game-146.html) — Breaker · Sunset theme · added 2026-11-08 10:59 UTC
- 🎯 [Toxic Tap Rush #145](games/game-145.html) — Tap Rush · Toxic theme · added 2026-11-08 10:54 UTC
- 🐍 [Ocean Snake #144](games/game-144.html) — Snake · Ocean theme · added 2026-11-08 10:49 UTC
- 🔫 [Neon Blaster #143](games/game-143.html) — Blaster · Neon theme · added 2026-11-08 10:44 UTC
- 🐍 [Sunset Snake #142](games/game-142.html) — Snake · Sunset theme · added 2026-11-08 10:39 UTC
- 🎯 [Lava Tap Rush #141](games/game-141.html) — Tap Rush · Lava theme · added 2026-11-08 10:34 UTC
- 🧱 [Ocean Breaker #140](games/game-140.html) — Breaker · Ocean theme · added 2026-11-08 10:29 UTC
- 🎯 [Toxic Tap Rush #139](games/game-139.html) — Tap Rush · Toxic theme · added 2026-11-08 10:24 UTC
- 🐍 [Toxic Snake #138](games/game-138.html) — Snake · Toxic theme · added 2026-11-08 10:19 UTC
- 🏃 [Lava Runner #137](games/game-137.html) — Runner · Lava theme · added 2026-11-08 10:14 UTC
- 🧱 [Candy Dodge #136](games/game-136.html) — Dodge · Candy theme · added 2026-11-08 10:09 UTC
- 🏃 [Neon Runner #135](games/game-135.html) — Runner · Neon theme · added 2026-11-08 10:04 UTC
- 🧱 [Ice Breaker #134](games/game-134.html) — Breaker · Ice theme · added 2026-11-08 09:58 UTC
- 🧱 [Space Breaker #133](games/game-133.html) — Breaker · Space theme · added 2026-11-08 09:53 UTC
- 🎯 [Ocean Tap Rush #132](games/game-132.html) — Tap Rush · Ocean theme · added 2026-11-08 09:48 UTC
- 🎯 [Forest Tap Rush #131](games/game-131.html) — Tap Rush · Forest theme · added 2026-11-08 09:43 UTC
- 🎯 [Retro Tap Rush #130](games/game-130.html) — Tap Rush · Retro theme · added 2026-11-08 09:38 UTC
- 🧱 [Ocean Breaker #129](games/game-129.html) — Breaker · Ocean theme · added 2026-11-08 09:33 UTC
- 🔫 [Ice Blaster #128](games/game-128.html) — Blaster · Ice theme · added 2026-11-08 09:28 UTC
- 🎯 [Toxic Tap Rush #127](games/game-127.html) — Tap Rush · Toxic theme · added 2026-11-08 09:23 UTC
- 🎯 [Retro Tap Rush #126](games/game-126.html) — Tap Rush · Retro theme · added 2026-11-08 09:18 UTC
- 🧱 [Desert Breaker #125](games/game-125.html) — Breaker · Desert theme · added 2026-11-08 09:13 UTC
- 🧱 [Sunset Breaker #124](games/game-124.html) — Breaker · Sunset theme · added 2026-11-08 09:08 UTC
- 🧱 [Lava Dodge #123](games/game-123.html) — Dodge · Lava theme · added 2026-11-08 09:02 UTC
- 🧱 [Candy Dodge #122](games/game-122.html) — Dodge · Candy theme · added 2026-11-08 08:57 UTC
- 🐍 [Block Snake #121](games/game-121.html) — Snake · Block theme · added 2026-11-08 08:52 UTC
- 🧱 [Toxic Breaker #120](games/game-120.html) — Breaker · Toxic theme · added 2026-11-08 08:47 UTC
- 🧱 [Retro Breaker #119](games/game-119.html) — Breaker · Retro theme · added 2026-11-08 08:42 UTC
- 🧱 [Block Dodge #118](games/game-118.html) — Dodge · Block theme · added 2026-11-08 08:37 UTC
- 🔫 [Space Blaster #117](games/game-117.html) — Blaster · Space theme · added 2026-11-08 08:32 UTC
- 🎯 [Ice Tap Rush #116](games/game-116.html) — Tap Rush · Ice theme · added 2026-11-08 08:27 UTC
- 🎯 [Ice Tap Rush #115](games/game-115.html) — Tap Rush · Ice theme · added 2026-11-08 08:22 UTC
- 🔫 [Block Blaster #114](games/game-114.html) — Blaster · Block theme · added 2026-11-08 08:17 UTC
- 🧱 [Toxic Dodge #113](games/game-113.html) — Dodge · Toxic theme · added 2026-11-08 08:12 UTC
- 🐦 [Block Flap #112](games/game-112.html) — Flap · Block theme · added 2026-11-08 08:07 UTC
- 🐍 [Block Snake #111](games/game-111.html) — Snake · Block theme · added 2026-11-08 08:02 UTC
- 🐍 [Ocean Snake #110](games/game-110.html) — Snake · Ocean theme · added 2026-11-08 07:57 UTC
- 🏃 [Forest Runner #109](games/game-109.html) — Runner · Forest theme · added 2026-11-08 07:52 UTC
- 🎯 [Toxic Tap Rush #108](games/game-108.html) — Tap Rush · Toxic theme · added 2026-11-08 07:47 UTC
- 🧱 [Lava Breaker #107](games/game-107.html) — Breaker · Lava theme · added 2026-11-08 07:42 UTC
- 🏃 [Toxic Runner #106](games/game-106.html) — Runner · Toxic theme · added 2026-11-08 07:37 UTC
- 🏃 [Sunset Runner #105](games/game-105.html) — Runner · Sunset theme · added 2026-11-08 07:32 UTC
- 🐍 [Lava Snake #104](games/game-104.html) — Snake · Lava theme · added 2026-11-08 07:27 UTC
- 🧱 [Ice Breaker #103](games/game-103.html) — Breaker · Ice theme · added 2026-11-08 07:22 UTC
- 🐦 [Toxic Flap #102](games/game-102.html) — Flap · Toxic theme · added 2026-11-08 07:17 UTC
- 🐍 [Neon Snake #101](games/game-101.html) — Snake · Neon theme · added 2026-11-08 07:12 UTC
- 🎯 [Desert Tap Rush #100](games/game-100.html) — Tap Rush · Desert theme · added 2026-11-08 07:07 UTC
- 🎯 [Forest Tap Rush #99](games/game-99.html) — Tap Rush · Forest theme · added 2026-11-08 07:02 UTC
- 🎯 [Neon Tap Rush #98](games/game-98.html) — Tap Rush · Neon theme · added 2026-11-08 06:57 UTC
- 🧺 [Sunset Catch #97](games/game-97.html) — Catch · Sunset theme · added 2026-11-08 06:52 UTC
- 🧱 [Ice Breaker #96](games/game-96.html) — Breaker · Ice theme · added 2026-11-08 06:47 UTC
- 🐍 [Forest Snake #95](games/game-95.html) — Snake · Forest theme · added 2026-11-08 06:42 UTC
- 🐍 [Forest Snake #94](games/game-94.html) — Snake · Forest theme · added 2026-11-08 06:37 UTC
- 🎯 [Neon Tap Rush #93](games/game-93.html) — Tap Rush · Neon theme · added 2026-11-08 06:32 UTC
- 🧱 [Lava Breaker #92](games/game-92.html) — Breaker · Lava theme · added 2026-11-08 06:27 UTC
- 🎯 [Sunset Tap Rush #91](games/game-91.html) — Tap Rush · Sunset theme · added 2026-11-08 06:22 UTC
- 🐦 [Block Flap #90](games/game-90.html) — Flap · Block theme · added 2026-11-08 06:17 UTC
- 🏃 [Neon Runner #89](games/game-89.html) — Runner · Neon theme · added 2026-11-08 06:12 UTC
- 🔫 [Desert Blaster #88](games/game-88.html) — Blaster · Desert theme · added 2026-11-08 06:07 UTC
- 🐦 [Candy Flap #87](games/game-87.html) — Flap · Candy theme · added 2026-11-08 06:02 UTC
- 🐦 [Desert Flap #86](games/game-86.html) — Flap · Desert theme · added 2026-11-08 05:57 UTC
- 🧱 [Sunset Breaker #85](games/game-85.html) — Breaker · Sunset theme · added 2026-11-08 05:52 UTC
- 🏃 [Ice Runner #84](games/game-84.html) — Runner · Ice theme · added 2026-11-08 05:47 UTC
- 🧱 [Retro Breaker #83](games/game-83.html) — Breaker · Retro theme · added 2026-11-08 05:42 UTC
- 🐍 [Sunset Snake #82](games/game-82.html) — Snake · Sunset theme · added 2026-11-08 05:37 UTC
- 🎯 [Retro Tap Rush #81](games/game-81.html) — Tap Rush · Retro theme · added 2026-11-08 05:32 UTC
- 🔫 [Ocean Blaster #80](games/game-80.html) — Blaster · Ocean theme · added 2026-11-08 05:27 UTC
- 🐍 [Sunset Snake #79](games/game-79.html) — Snake · Sunset theme · added 2026-11-08 05:22 UTC
- 🔫 [Toxic Blaster #78](games/game-78.html) — Blaster · Toxic theme · added 2026-11-08 05:17 UTC
- 🧱 [Space Dodge #77](games/game-77.html) — Dodge · Space theme · added 2026-11-08 05:11 UTC
- 🔫 [Retro Blaster #76](games/game-76.html) — Blaster · Retro theme · added 2026-11-08 05:06 UTC
- 🐦 [Block Flap #75](games/game-75.html) — Flap · Block theme · added 2026-11-08 05:01 UTC
- 🐦 [Forest Flap #74](games/game-74.html) — Flap · Forest theme · added 2026-11-08 04:56 UTC
- 🐦 [Lava Flap #73](games/game-73.html) — Flap · Lava theme · added 2026-11-08 04:51 UTC
- 🐍 [Forest Snake #72](games/game-72.html) — Snake · Forest theme · added 2026-11-08 04:46 UTC
- 🧺 [Toxic Catch #71](games/game-71.html) — Catch · Toxic theme · added 2026-11-08 04:41 UTC
- 🔫 [Candy Blaster #70](games/game-70.html) — Blaster · Candy theme · added 2026-11-08 04:36 UTC
- 🎯 [Space Tap Rush #69](games/game-69.html) — Tap Rush · Space theme · added 2026-11-08 04:31 UTC
- 🔫 [Neon Blaster #68](games/game-68.html) — Blaster · Neon theme · added 2026-11-08 04:26 UTC
- 🧱 [Lava Breaker #67](games/game-67.html) — Breaker · Lava theme · added 2026-11-08 04:21 UTC
- 🏃 [Desert Runner #66](games/game-66.html) — Runner · Desert theme · added 2026-11-08 04:16 UTC
- 🧱 [Forest Dodge #65](games/game-65.html) — Dodge · Forest theme · added 2026-11-08 04:11 UTC
- 🐍 [Candy Snake #64](games/game-64.html) — Snake · Candy theme · added 2026-11-08 04:06 UTC
- 🔫 [Block Blaster #63](games/game-63.html) — Blaster · Block theme · added 2026-11-08 04:01 UTC
- 🧺 [Neon Catch #62](games/game-62.html) — Catch · Neon theme · added 2026-11-08 03:56 UTC
- 🧱 [Desert Dodge #61](games/game-61.html) — Dodge · Desert theme · added 2026-11-08 03:51 UTC
- 🔫 [Ocean Blaster #60](games/game-60.html) — Blaster · Ocean theme · added 2026-11-08 03:46 UTC
- 🐦 [Neon Flap #59](games/game-59.html) — Flap · Neon theme · added 2026-11-08 03:41 UTC
- 🐦 [Candy Flap #58](games/game-58.html) — Flap · Candy theme · added 2026-11-08 03:36 UTC
- 🏃 [Retro Runner #57](games/game-57.html) — Runner · Retro theme · added 2026-11-08 03:31 UTC
- 🐍 [Lava Snake #56](games/game-56.html) — Snake · Lava theme · added 2026-11-08 03:26 UTC
- 🐍 [Neon Snake #55](games/game-55.html) — Snake · Neon theme · added 2026-11-08 03:21 UTC
- 🧱 [Candy Breaker #54](games/game-54.html) — Breaker · Candy theme · added 2026-11-08 03:16 UTC
- 🔫 [Ice Blaster #53](games/game-53.html) — Blaster · Ice theme · added 2026-11-08 03:11 UTC
- 🐦 [Neon Flap #52](games/game-52.html) — Flap · Neon theme · added 2026-11-08 03:06 UTC
- 🎯 [Ocean Tap Rush #51](games/game-51.html) — Tap Rush · Ocean theme · added 2026-11-08 03:01 UTC
- 🐍 [Forest Snake #50](games/game-50.html) — Snake · Forest theme · added 2026-11-08 02:56 UTC
- 🎯 [Neon Tap Rush #49](games/game-49.html) — Tap Rush · Neon theme · added 2026-11-08 02:51 UTC
- 🧱 [Retro Breaker #48](games/game-48.html) — Breaker · Retro theme · added 2026-11-08 02:46 UTC
- 🎯 [Block Tap Rush #47](games/game-47.html) — Tap Rush · Block theme · added 2026-11-08 02:41 UTC
- 🧱 [Desert Breaker #46](games/game-46.html) — Breaker · Desert theme · added 2026-11-08 02:36 UTC
- 🧱 [Ice Dodge #45](games/game-45.html) — Dodge · Ice theme · added 2026-11-08 02:31 UTC
- 🔫 [Lava Blaster #44](games/game-44.html) — Blaster · Lava theme · added 2026-11-08 02:25 UTC
- 🧱 [Forest Breaker #43](games/game-43.html) — Breaker · Forest theme · added 2026-11-08 02:20 UTC
- 🐦 [Candy Flap #42](games/game-42.html) — Flap · Candy theme · added 2026-11-08 02:15 UTC
- 🔫 [Neon Blaster #41](games/game-41.html) — Blaster · Neon theme · added 2026-11-08 02:10 UTC
- 🧱 [Sunset Dodge #40](games/game-40.html) — Dodge · Sunset theme · added 2026-11-08 02:05 UTC
- 🧱 [Sunset Breaker #39](games/game-39.html) — Breaker · Sunset theme · added 2026-11-08 02:00 UTC
- 🔫 [Toxic Blaster #38](games/game-38.html) — Blaster · Toxic theme · added 2026-11-08 01:55 UTC
- 🔫 [Retro Blaster #37](games/game-37.html) — Blaster · Retro theme · added 2026-11-08 01:50 UTC
- 🐦 [Toxic Flap #36](games/game-36.html) — Flap · Toxic theme · added 2026-11-08 01:45 UTC
- 🧱 [Forest Breaker #35](games/game-35.html) — Breaker · Forest theme · added 2026-11-08 01:40 UTC
- 🧱 [Space Breaker #34](games/game-34.html) — Breaker · Space theme · added 2026-11-08 01:35 UTC
- 🧺 [Ice Catch #33](games/game-33.html) — Catch · Ice theme · added 2026-11-08 01:30 UTC
- 🔫 [Ice Blaster #32](games/game-32.html) — Blaster · Ice theme · added 2026-11-08 01:25 UTC
- 🎯 [Lava Tap Rush #31](games/game-31.html) — Tap Rush · Lava theme · added 2026-11-08 01:20 UTC
- 🐦 [Ice Flap #30](games/game-30.html) — Flap · Ice theme · added 2026-11-08 01:15 UTC
- 🐦 [Sunset Flap #29](games/game-29.html) — Flap · Sunset theme · added 2026-11-08 01:10 UTC
- 🐍 [Ice Snake #28](games/game-28.html) — Snake · Ice theme · added 2026-11-08 01:05 UTC
- 🏃 [Retro Runner #27](games/game-27.html) — Runner · Retro theme · added 2026-11-08 01:00 UTC
- 🏃 [Candy Runner #26](games/game-26.html) — Runner · Candy theme · added 2026-11-08 00:55 UTC
- 🐦 [Toxic Flap #25](games/game-25.html) — Flap · Toxic theme · added 2026-11-08 00:50 UTC
- 🔫 [Retro Blaster #24](games/game-24.html) — Blaster · Retro theme · added 2026-11-08 00:45 UTC
- 🐍 [Block Snake #23](games/game-23.html) — Snake · Block theme · added 2026-11-08 00:40 UTC
- 🎯 [Block Tap Rush #22](games/game-22.html) — Tap Rush · Block theme · added 2026-11-08 00:35 UTC
- 🧺 [Ocean Catch #21](games/game-21.html) — Catch · Ocean theme · added 2026-11-08 00:30 UTC
- 🐦 [Retro Flap #20](games/game-20.html) — Flap · Retro theme · added 2026-11-08 00:25 UTC
- 🔫 [Ocean Blaster #19](games/game-19.html) — Blaster · Ocean theme · added 2026-11-08 00:20 UTC
- 🎯 [Toxic Tap Rush #18](games/game-18.html) — Tap Rush · Toxic theme · added 2026-11-08 00:15 UTC
- 🧺 [Candy Catch #17](games/game-17.html) — Catch · Candy theme · added 2026-11-08 00:10 UTC
- 🧱 [Space Breaker #16](games/game-16.html) — Breaker · Space theme · added 2026-11-08 00:05 UTC
- 🧱 [Toxic Dodge #15](games/game-15.html) — Dodge · Toxic theme · added 2026-11-08 00:00 UTC
- 🎯 [Forest Tap Rush #14](games/game-14.html) — Tap Rush · Forest theme · added 2026-11-07 23:55 UTC
- 🐍 [Desert Snake #13](games/game-13.html) — Snake · Desert theme · added 2026-11-07 23:50 UTC
- 🧺 [Forest Catch #12](games/game-12.html) — Catch · Forest theme · added 2026-11-07 23:45 UTC
- 🔫 [Ocean Blaster #11](games/game-11.html) — Blaster · Ocean theme · added 2026-11-07 23:40 UTC
- 🏃 [Lava Runner #10](games/game-10.html) — Runner · Lava theme · added 2026-11-07 23:35 UTC
- 🎯 [Desert Tap Rush #9](games/game-9.html) — Tap Rush · Desert theme · added 2026-11-07 23:30 UTC
- 🎯 [Lava Tap Rush #8](games/game-8.html) — Tap Rush · Lava theme · added 2026-11-07 23:25 UTC
- 🔫 [Neon Blaster #7](games/game-7.html) — Blaster · Neon theme · added 2026-11-07 23:20 UTC
- 🧺 [Ice Catch #6](games/game-6.html) — Catch · Ice theme · added 2026-11-07 23:15 UTC
- 🧺 [Toxic Catch #5](games/game-5.html) — Catch · Toxic theme · added 2026-11-07 23:10 UTC
- 🏃 [Block Runner #4](games/game-4.html) — Runner · Block theme · added 2026-11-07 23:04 UTC
- 🐦 [Ice Flap #3](games/game-3.html) — Flap · Ice theme · added 2026-11-07 22:59 UTC
- 🏃 [Retro Runner #2](games/game-2.html) — Runner · Retro theme · added 2026-11-07 21:48 UTC
- 🧱 [Dodge Run #1](games/game-1.html) — added 2026-11-07
<!-- AUTO-GAMES:END -->
