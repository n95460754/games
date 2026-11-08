# ⛏️ My Minecraft: Block Games Collection

**274 block games** that run straight in your browser: 10 full games plus the **Block Arcade** with 264 mini-games. Built with plain HTML + JavaScript (and [Three.js](https://threejs.org/) for the 3D ones). No build step, no installs, no server.

> Moyata blokova igra: dig, build, explore, jump, solve and survive in a blocky world.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?logo=three.js&logoColor=white)
![Games](https://img.shields.io/badge/games-274-5aa13a)

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

## 🕹️ Block Arcade: 264 mini-games (`arcade/*.html`)

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

All 264 pages share one small engine, `arcade/engine.js`. It handles the canvas, keyboard, mouse, touch swipes, sounds, the game-over screen and high scores (saved in `localStorage`). Each game file contains just its own `A.add({...})` object with `start`, `update`, `draw` and optional `key` / `click` functions.

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
│   ├── ...                 # games 51–263
│   └── calendar.html       # 264. Calendar Puzzles
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
**145 auto games so far.** Newest first:

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
