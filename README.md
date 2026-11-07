# ⛏️ My Minecraft

A tiny Minecraft-style voxel game that runs straight in your browser. Built with plain HTML + JavaScript and [Three.js](https://threejs.org/), with no build step, no installs and no server.

> Moyata blokova igra: dig, build and explore a little blocky world.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?logo=three.js&logoColor=white)

---

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

## 🚀 How to play

### Option 1: Run it locally
1. Download the repo (**Code → Download ZIP**) or clone it:
   ```bash
   git clone https://github.com/n95460754/minecraft.git
   ```
2. Open `index.html` in Chrome, Edge or Firefox.

`three.min.js` is already in the repo, so the game works even **offline**.

### Option 2: Play online with GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under *Source*, choose **Deploy from a branch**, then pick `main` and `/ (root)`, and click **Save**.
3. After about a minute the game is live at:
   **https://n95460754.github.io/minecraft/**

## 📁 Project structure

```
minecraft/
├── index.html     # The game: world, controls, hotbar, game loop
├── test.html      # Quick check that Three.js/WebGL works (a spinning green cube)
├── three.min.js   # Three.js r128 (3D engine, MIT license)
├── package.json   # Project info
└── README.md
```

## 🧠 How it works

1. **Scene**: `THREE.Scene` + `PerspectiveCamera` + `WebGLRenderer`, lit by ambient light and a directional "sun".
2. **Textures**: `makeTexture()` paints a 16×16 canvas in a base color, then adds 24 random darker pixels.
3. **World**: for each `(x, z)`, height is `floor(sin(x·0.3)·1.5 + cos(z·0.3)·1.5 + 2)`, and the column fills with stone → dirt → grass.
4. **Dig/build**: a `Raycaster` shoots from the center of the screen. Left click removes the hit block. Right click adds a block on the face you hit (`position + face.normal`).
5. **Game loop**: `requestAnimationFrame` updates where you look, moves you, applies gravity, and renders each frame.

## 🛠️ Ideas for the future

- [ ] Collision with blocks (right now the player floats at a fixed height `y = 8`)
- [ ] Bigger world with real Perlin/Simplex noise
- [ ] Trees and more block types (sand, leaves, glass)
- [ ] Save the world to `localStorage`
- [ ] Faster rendering with `InstancedMesh` (one mesh for thousands of blocks)
- [ ] Crosshair in the center of the screen
- [ ] Day/night cycle

## 📜 License

The game code is by **[@n95460754](https://github.com/n95460754)**.
`three.min.js` is © Three.js Authors, released under the [MIT License](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

*This is a fan project and is not affiliated with Mojang or Microsoft. "Minecraft" is a trademark of Mojang Studios.*
