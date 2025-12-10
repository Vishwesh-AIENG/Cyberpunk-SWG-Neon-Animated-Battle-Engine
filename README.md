# Cyberpunk-SWG-Neon-Animated-Battle-Engine

A cyberpunk-themed real-time animated battle engine
built with React, Vite, and Framer Motion.
Includes GIF-driven sprite rendering, neon/glitch VFX,
synchronized audio, and cinematic cutscenes.
Developed independently at age 14 as an early step toward:
Graphics, UI engineering, and Simulation Systems.

<p align="center"> <img src="neon_banner.png" width="80%" alt="Cyberpunk SWG Neon Banner"/> </p>
⚡ Tech Stack
<p align="center"> <img src="https://img.shields.io/badge/React-61DBFB?logo=react&style=for-the-badge"/> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&style=for-the-badge"/> <img src="https://img.shields.io/badge/Framer--Motion-FF3366?logo=framer&style=for-the-badge"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&style=for-the-badge"/> <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&style=for-the-badge"/> </p> <p align="center"> <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge"/> <img src="https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge"/> <img src="https://img.shields.io/badge/Built%20With-Neon%20Energy-orange?style=for-the-badge"/> </p>
🎮 Overview
<p align="center"> <img src="preview.gif" width="25%" alt="Cyberpunk SWG Gameplay Preview"> </p>

This project implements a compact cyberpunk battle simulator with:

GIF sprite-based fighters (snake.gif, water.gif, gun.gif)

Neon glow shaders, glitch pulses, and animated VFX

A cutscene engine that synchronizes movement, effects, and audio

Deterministic battle logic (win/loss/draw)

Framer Motion-driven UI transitions

Audio feedback (intro, cutscene, win, loss)

Fully deployable on GitHub Pages using Vite’s BASE_URL

Built to demonstrate strong foundations in UI animation, render pipelines, state management, and deployment workflows.

📂 Project Structure
Cyberpunk-SWG-Neon-Animated-Battle-Engine/
│
├── public/
│   └── assets/
│        ├── snake.gif
│        ├── water.gif
│        ├── gun.gif
│        ├── intro.mp3
│        ├── cutscene.mp3
│        ├── win.mp3
│        └── loss.mp3
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│
├── package.json
├── vite.config.js
└── README.md

🔧 Key Systems
1. Sprite Engine (GIF Rendering + Neon Effects)

Each sprite loads via:

const base = import.meta.env.BASE_URL;
img: `${base}assets/snake.gif`


Includes:

Load detection

Glitch-pulse animation

Emoji fallback

2. Cutscene Engine (Synchronized Motion & Audio)

Player/CPU slide-in

Flash + glitch effects

Timed audio cues

Result computation after 1.4s

3. Deterministic Battle Logic
if (player === cpu) return "draw";
if (
  (cpu === "snake" && player === "water") ||
  (cpu === "water" && player === "gun") ||
  (cpu === "gun" && player === "snake")
) return "loss";
return "win";

4. Audio Pipeline
new Audio(`${base}assets/cutscene.mp3`);
new Audio(`${base}assets/win.mp3`);


Autoplay handled via user-gesture triggers for mobile compatibility.

🚀 Live Demo

Play here:
https://vishwesh-aieng.github.io/Cyberpunk-SWG-Neon-Animated-Battle-Engine/

🛠 Installation
git clone https://github.com/Vishwesh-AIENG/Cyberpunk-SWG-Neon-Animated-Battle-Engine.git
cd Cyberpunk-SWG-Neon-Animated-Battle-Engine
npm install
npm run dev


Build:

npm run build

🌐 Deployment (GitHub Pages)
1. Vite configuration (matches this repo)
export default defineConfig({
  base: "/Cyberpunk-SWG-Neon-Animated-Battle-Engine/",
  plugins: [react()],
});

2. Deploy
npm run build
npm run deploy


Hosted automatically at:

https://vishwesh-aieng.github.io/Cyberpunk-SWG-Neon-Animated-Battle-Engine/

🧠 Why This Project Matters

This engine demonstrates:

Understanding of modern front-end stacks (React 19, Vite)

Mastery of animation systems (Framer Motion)

Ability to build stateful interactive simulations

Asset pipeline handling for GIFs and audio

Debugging & deployment across local and production environments

Complete GitHub Pages CI deployment knowledge

At age 14, I view this project as an important early step in my technical journey.

My goal is to build a strong foundation in software engineering, AI systems,
and experimental project development. I approach each project as an opportunity
to deepen my understanding of computational thinking, system design, and real-world problem-solving.
  My long-term ambition is to earn an internship—and eventually a full-time role—at NVIDIA,
contributing to teams working in AI, simulation, graphics, or software engineering.
Projects like this help me progress toward that path by developing essential skills needed!
