# ⛏️ My Minecraft

Seven block games that run straight in your browser. Built with plain HTML + JavaScript and [Three.js](https://threejs.org/), with no build step, no installs and no server.

> Moyata blokova igra: dig, build, explore and jump through an endless blocky world.

| Game | File | What you do |
|---|---|---|
| ⛏️ **My Minecraft** | `index.html` | Dig and build in a small hilly world |
| 🏃 **Block Parkour ∞** (Блоков Паркур ∞) | `infinite-parkour.html` | Jump along an endless path through 5 worlds |
| 🌍 **BlockForge** | `minecraft.html` | Big chunked world, written in pure WebGL2 |
| 🗺️ **New World** | `New World - Play.html` | Another endless block world to explore |
| 🔥 **Lava Floor** (Лава под краката) 🆕 | `lava-floor.html` | Blocks crumble under your feet. Be the last one standing vs bots |
| ⛏️ **Deep Miner** (Дълбок миньор) 🆕 | `deep-miner.html` | 2D mining: dig ores, sell them, buy upgrades, reach 250 m |
| 🏗️ **Block Architect** (Блоков архитект) 🆕 | `block-architect.html` | Rebuild the spinning model block by block. 20 puzzle levels |

🎮 **Open `games.html`** for a menu with all the games.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?logo=three.js&logoColor=white)

---

# ⛏️ Game 1: My Minecraft

## 🎮 Features

- **32 × 32 world with hills**, generated with sine/cosine "noise"
- **Layered terrain**: grass on top, dirt under it, stone deeper down, and water in the low spots
- **Pixel-art textures** drawn with code on a canvas (no image files), using `NearestFilter` for the classic blocky look
- **Dig and build**: remove blocks or place new ones right where you're looking
- **Hotbar** with 4 blocks: grass, dirt, stone, wood
- **First-person camera** with mouse look (Pointer Lock), WASD movement, jumping and gravity
- **Sky and fog** for a sense of depth

## 🕹️ Controls

| Action | Key / Mouse |
|---|---|
| Lock the mouse / start playing | **Click** on the screen |
| Move | **W A S D** |
| Jump | **Space** |
| Dig (remove block) | **Left mouse button** |
| Build (place block) | **Right mouse button** |
| Pick a block | **1** grass · **2** dirt · **3** stone · **4** wood |
| Release the mouse | **Esc** |

---

# 🏃 Game 2: Block Parkour ∞

An endless parkour run. The path keeps generating in front of you and gets harder the farther you go. How far can you get?

## 🎮 Features

- **Endless path**: new blocks generate ahead of you and old ones disappear behind you
- **Difficulty that grows**: jumps get longer as you go (it reaches full difficulty at block 250)
- **5 zones** that change every 60 blocks, each with its own blocks, sky color and lighting:
  🌳 Green Plains → 🏜️ Golden Desert → ❄️ Ice Peaks → 🔥 Fire Abyss → 🌌 End of the World
- **Special blocks**
  - 🟨 **Gold**: a checkpoint (a 3×3 platform every 25 blocks)
  - 🟩 **Slime**: super jump high up to the next block
  - 🧊 **Ice**: slippery, so you slide!
- **Real physics**: collision with blocks, gravity, sprint, *coyote time* and a jump buffer (jumps feel fair even if you press Space a little early or late)
- **Helpers**: a shadow under you shows where you'll land, and a glowing frame marks the next block
- **Effects**: real-time shadows, moving clouds, head bob while walking, and the field of view widens when you sprint
- **Retro sounds** made with the Web Audio API (no sound files)
- **HUD**: blocks passed, falls, time, and your **best record**, saved in `localStorage`
- **Textures for 17 block types**, all drawn with code

## 🕹️ Controls

| Action | Key |
|---|---|
| Start / continue | **Click** on the menu |
| Move | **W A S D** or the **arrow keys** |
| Look around | **Mouse** |
| Jump | **Space** |
| Sprint | **Shift** |
| Auto-sprint on/off | **F** |
| Back to the last checkpoint | **C** |
| New game | **R** |
| Pause | **Esc** |

> If you fall about 14 blocks below the last block you landed on, you go back to the last checkpoint.

> ℹ️ This game loads Three.js **r160** from the jsDelivr CDN, so it needs an **internet connection**.

---

# 🔥 Game 3: Lava Floor (Лава под краката)

Three floors of blocks hang above a lake of lava. Every block anyone steps on crumbles after a moment, so you have to keep moving. Bots run around and break the floor too. Be the last one alive to win the round; each round adds a bot and makes blocks crumble faster.

| Action | Key |
|---|---|
| Move | **W A S D** |
| Jump | **Space** |
| Sprint | **Shift** |
| Look | **Mouse** |
| Pause | **Esc** |

- Bot AI picks safe blocks nearby and jumps over holes
- 1.5 s of safe time at the start of each round
- Best round saved in `localStorage`

# ⛏️ Game 4: Deep Miner (Дълбок миньор)

A 2D side-view mining game drawn on a canvas. Dig down, fill your bag with ore (coal, iron, gold, crystal, ruby), fly back up and sell it in the shop. Upgrade your pickaxe, fuel tank, bag and armor, then reach the **Ancient Heart** 250 m down.

| Action | Key |
|---|---|
| Dig / move sideways | **A D** or **← →** |
| Dig down | **S** or **↓** |
| Fly up (uses fuel) | **W**, **↑** or **Space** |
| Shop (at the surface) | **E** |

- Hard rock and crystal need pickaxe level 3, ruby needs level 4
- Lava pockets and long falls hurt your armor
- It gets darker the deeper you go; only your lamp lights the way

# 🏗️ Game 5: Block Architect (Блоков архитект)

A 3D spatial puzzle. A model spins in the corner; build an exact copy on the 5×5 plate with the same blocks in the same places and colors. 12 hand-made levels (tower, bridge, tree, pyramid, house, arch, castle…) plus 8 random challenges.

| Action | Mouse / Key |
|---|---|
| Place block | **Left click** |
| Remove block | **Right click** (or Shift + click) |
| Rotate camera | **Drag** |
| Zoom | **Mouse wheel** |
| Pick color | **1–6** |
| Ghost hint (costs a ⭐) | **H** |

- Up to 3 ⭐ for speed, few moves and no hints
- Progress and stars saved in `localStorage`

All three new games use the local `three.min.js` or a plain canvas, so they work **offline**.

---

## 🚀 How to play

### Option 1: Run it locally
1. Download the repo (**Code → Download ZIP**) or clone it:
   ```bash
   git clone https://github.com/n95460754/minecraft.git
   ```
2. Open the game you want in Chrome, Edge or Firefox:
   - `index.html` for **My Minecraft** (works **offline**, because `three.min.js` is in the repo)
   - `infinite-parkour.html` for **Block Parkour ∞** (needs internet for Three.js)

### Option 2: Play online with GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under *Source*, choose **Deploy from a branch**, then pick `main` and `/ (root)`, and click **Save**.
3. After about a minute both games are live:
   - ⛏️ **https://n95460754.github.io/minecraft/**
   - 🏃 **https://n95460754.github.io/minecraft/infinite-parkour.html**
   - 🎮 **https://n95460754.github.io/minecraft/games.html** (all games)

## 📁 Project structure

```
minecraft/
├── index.html              # Game 1: My Minecraft (world, dig/build, hotbar)
├── infinite-parkour.html   # Game 2: Block Parkour ∞ (endless path, zones, physics, sounds)
├── lava-floor.html         # Game 3: Lava Floor (crumbling floors, bots)
├── deep-miner.html         # Game 4: Deep Miner (2D mining, shop, upgrades)
├── block-architect.html    # Game 5: Block Architect (3D build puzzles)
├── minecraft.html          # BlockForge (WebGL2 chunked world)
├── New World - Play.html   # New World (endless world)
├── games.html              # Menu with all the games
├── test.html               # Quick check that Three.js/WebGL works (a spinning green cube)
├── three.min.js            # Three.js r128 (3D engine, MIT license), used by index.html
├── package.json            # Project info
└── README.md
```

## 🧠 How it works

### ⛏️ My Minecraft
1. **Scene**: `THREE.Scene` + `PerspectiveCamera` + `WebGLRenderer`, lit by ambient light and a directional "sun".
2. **Textures**: `makeTexture()` paints a 16×16 canvas in a base color, then adds 24 random darker pixels.
3. **World**: for each `(x, z)`, height is `floor(sin(x·0.3)·1.5 + cos(z·0.3)·1.5 + 2)`, and the column fills with stone → dirt → grass.
4. **Dig/build**: a `Raycaster` shoots from the center of the screen. Left click removes the hit block. Right click adds a block on the face you hit (`position + face.normal`).
5. **Game loop**: `requestAnimationFrame` updates where you look, moves you, applies gravity, and renders each frame.

### 🏃 Block Parkour ∞
1. **World as a map**: every block is stored in a `Map` under the key `"x|y|z"`, so checking whether a spot is solid is instant.
2. **Path generator**: `genNext()` picks the next jump (up, flat or down, plus its length and side step) based on the difficulty `d = min(1, i / 250)`. Every 25th step becomes a gold checkpoint, and after a slime block the next block is placed high up.
3. **Only what's needed**: there are always about 40 blocks ahead of you, and blocks far behind you are deleted.
4. **Collision (AABB)**: the player is a 0.6 × 1.8 × 0.6 box. `moveAxis()` moves along X, Z and Y one at a time and pushes you back out of any block you hit. Fast movement is split into small steps so you can't pass through blocks.
5. **Game feel**: *coyote time* (0.1 s) lets you jump just after leaving an edge, the *jump buffer* (0.12 s) remembers a Space press that came too early, and ice uses a much lower grip value, so you slide.
6. **Sound**: `beep()` builds each sound from an oscillator and a gain node with the Web Audio API.

## 🛠️ Ideas for the future

**My Minecraft**
- [ ] Collision with blocks (right now the player floats at a fixed height `y = 8`). The `collides()` code from Block Parkour can be reused here!
- [ ] Bigger world with real Perlin/Simplex noise
- [ ] Trees and more block types (sand, leaves, glass)
- [ ] Save the world to `localStorage`
- [ ] Faster rendering with `InstancedMesh` (one mesh for thousands of blocks)
- [ ] Crosshair in the center of the screen

**Block Parkour ∞**
- [ ] Moving blocks and blocks that fall when you step on them
- [ ] Ladders and walls you have to climb
- [ ] A timer for speedruns to the first checkpoints
- [ ] Touch controls for phones
- [ ] Add a local copy of Three.js r160 so it works offline too

## 📜 License

The game code is by **[@n95460754](https://github.com/n95460754)**.
Three.js is © Three.js Authors, released under the [MIT License](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

*This is a fan project and is not affiliated with Mojang or Microsoft. "Minecraft" is a trademark of Mojang Studios.*
