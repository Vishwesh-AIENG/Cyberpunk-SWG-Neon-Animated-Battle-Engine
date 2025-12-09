# Cyberpunk-SWG-Neon-Animated-Battle-Engine
A real-time cyberpunk combat simulator built with React, Vite, and Framer Motion. Features include GIF-powered sprite animations, glitch effects, neon borders, dynamic particle systems, sound cues, and a cutscene renderer that synchronizes visuals and audio. Designed and implemented at age 14 as a step for future foundations
🚀 CYBERPUNK SNAKE • WATER • GUN
Animated Neon Battle Engine — Built by a 14-year-old aspiring NVIDIA Intern
<p align="center">
  <img src="neon_banner.png" width="80%" alt="Cyberpunk SWG Neon Banner"/>
</p>
⚡ Tech Stack
<p align="center"> <img src="https://img.shields.io/badge/React-61DBFB?logo=react&style=for-the-badge"/> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&style=for-the-badge"/> <img src="https://img.shields.io/badge/Framer--Motion-FF3366?logo=framer&style=for-the-badge"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&style=for-the-badge"/> <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&style=for-the-badge"/> </p> <p align="center"> <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge"/> <img src="https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge"/> <img src="https://img.shields.io/badge/Made%20With-%E2%9A%A1%20Neon%20Energy-orange?style=for-the-badge"/> </p>
🎮 Overview
<p align="center">
  <img src="preview.gif" width="25%" alt="Cyberpunk SWG Gameplay Preview">
</p>
This project is a Cyberpunk-themed, animated Snake-Water-Gun battle engine featuring:

Full sprite-based GIF combat

Neon borders, glitch shaders, and particle VFX

Custom cutscene transitions

Sound effects for wins, losses, battles

Responsive game board

Hand-built UI with framer-motion animations

 Built entirely at age 14 — as part of a future NVIDIA intern portfolio.

because learning starts NOW.

** Features
 Cyberpunk Animated UI

Neon gradients, rotating VFX borders, motion blur, glitch effects, particles.

🐍, 💧 and ︻デ═一 GIF-Powered Combat

Sprites animate and glow inside the arena.

🎬 Cutscene Renderer

Player and CPU fighters slide into a VS arena

Sparks & glitch appear

Audio plays

After 1.4s → battle result

🎵 Sound Engine

intro.mp3

cutscene.mp3

win.mp3

loss.mp3

⚙ Smart Sprite Fallback

If a GIF fails, the engine auto-switches to emoji.

📱 Responsive Layout

Works on desktop and mobile.

🧩 Folder Structure
SWG_REACT_GAME
│
├── public
│   └── assets
│       ├── snake.gif
│       ├── water.gif
│       ├── gun.gif
│       ├── intro.mp3
│       ├── cutscene.mp3
│       ├── win.mp3
│       └── loss.mp3
│
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components (optional future folder)
│
├── package.json
├── vite.config.js
└── README.md
TO ACCESS OR PLAY THE GAME,GO TO 

https://vishwesh-aieng.github.io/Cyberpunk-SWG-Neon-Animated-Battle-Engine/

📦 Installation:                                                                                                                                                      
Clone the repo
git clone https://github.com/YOUR-USERNAME/SWG_REACT_GAME.git
cd SWG_REACT_GAME
Download from https://nodejs.org
 (LTS version recommended)
Install dependencies
npm install

Run development server
npm run dev

Build for production
npm run build

🖼 Cutscene Screenshots

Add your own screenshots here:

/public/screenshots/cutscene1.png
/public/screenshots/cutscene2.png

🧠 Code Snippet (Sprite Engine)
```jsx
// Code Snippet (Sprite Engine)
function Sprite({ which, big = false }) {
const choice = choices.find((c) => c.id === which);
return (
<div className={sprite-wrap ${big ? "big" : "small"}}>
<img
     src={choice.img}
     alt={choice.name}
     className="sprite-img neon-glow"
   />
<div className="sprite-label">{choice.name}</div>
</div>
);
}
```

Quick instructions


Open README.md in the GitHub web editor or in VS Code.


Find the broken single-line snippet you highlighted.


Delete the broken text and paste the fenced block above in its place.


Commit with a message like:


docs: fix README code block for Sprite component



Preview the README on GitHub — the snippet should now show as a highlighted multi-line JSX code block.



Extra tips


Use the jsx language tag (as above) so GitHub does JSX highlighting.


If you want to display inline < or { characters outside a code fence, escape them or wrap in a fenced block.


If you want a smaller inline snippet elsewhere, use single backticks: `const x = 1`.


Would you like me to scan the rest of the README for other formatting issues (bad links, missing images, bad fences) and produce a corrected file you can paste in one go?


🛠 Recommended Commit Naming Style
Type	Example	Meaning
feat:	feat: add neon glitch system	New feature
fix:	fix: GIF path resolution	Bug fix
ui:	ui: adjust particle intensity	UI/Styling change
perf:	perf: reduce animation lag	Performance improvement
refactor:	refactor: cleanup Sprite logic	Code improvement
docs:	docs: update README with badges	Documentation update
🌿 Recommended Branching Strategy
main        → always stable and deployable  
dev         → active development  
feature/*   → new features  
bugfix/*    → quick patches  
release/*   → bundle finished features


Example workflow:

git checkout -b feature/neon-borders
git commit -m "feat: add neon borders to GIFs"
git push

🌐 Deploying to GitHub Pages (Vite)
1. Install gh-pages
npm install gh-pages --save-dev

2. Add to package.json
"homepage": "https://YOUR-USERNAME.github.io/SWG_REACT_GAME",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}

3. Deploy
npm run build
npm run deploy

🚀 Deploying to Vercel (Recommended)
1. Install Vercel CLI
npm i -g vercel

2. Deploy
vercel


You get:

custom domain

HTTPS

CI auto-deploy

instant rebuilds

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
