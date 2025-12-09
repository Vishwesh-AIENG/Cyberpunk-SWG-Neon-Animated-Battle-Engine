import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

/* Choices with GIF paths + emoji fallback */
const choices = [
  { id: "snake", name: "Snake", label: "🐍", img: "/assets/snake.gif" },
  { id: "water", name: "Water", label: "💧", img: "/assets/water.gif" },
  { id: "gun", name: "Gun", label: "︻デ═一", img: "/assets/gun.gif" },
];

function decideResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (computer === "snake" && player === "water") ||
    (computer === "water" && player === "gun") ||
    (computer === "gun" && player === "snake")
  ) {
    return "loss";
  }
  return "win";
}

/* Sprite component: GIF with neon border + pulse + glitch on appear, fallback to emoji */
function Sprite({ which, big = false }) {
  const choice = choices.find((c) => c.id === which) || choices[0];
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // play a quick glitch when the image loads
    if (loaded) {
      setGlitch(true);
      const t = setTimeout(() => setGlitch(false), 600);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  const sizeClass = big ? "sprite-wrap big" : "sprite-wrap small";

  return (
    <div className={sizeClass} aria-hidden>
      {/* neon border layers handled by CSS pseudo-elements on .sprite-wrap */}
      {!errored && (
        <img
          ref={imgRef}
          src={choice.img}
          alt={choice.name}
          className={`sprite-img ${loaded ? "visible" : "hidden"} ${
            glitch ? "glitch" : ""
          }`}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setErrored(true);
            e.target.style.display = "none";
          }}
          draggable={false}
        />
      )}

      {/* fallback emoji (also used while GIF loads) */}
      <div
        className={`sprite-fallback ${loaded && !errored ? "fallback-hidden" : ""}`}
      >
        <span className="sprite-emoji">{choice.label}</span>
      </div>
    </div>
  );
}

function Sparkles({ count = 10 }) {
  return (
    <div className="sparkles" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="sparkle-dot"
          initial={{ opacity: 1, scale: 0 }}
          animate={{
            opacity: 0,
            scale: 1.8,
            x: (i - count / 2) * 18 + Math.random() * 40,
            y: -Math.random() * 120,
          }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("intro"); // intro or playing
  const [score, setScore] = useState({ Wins: 0, Losses: 0, Draws: 0 });
  const [resultText, setResultText] = useState("");
  const [cutscene, setCutscene] = useState(false);
  const [playerPick, setPlayerPick] = useState(null);
  const [cpuPick, setCpuPick] = useState(null);
  const [showBurst, setShowBurst] = useState(false);

  // audio refs (optional files in public/assets)
  const introRef = useRef(null);
  const cutRef = useRef(null);
  const winRef = useRef(null);
  const lossRef = useRef(null);

  useEffect(() => {
    if (phase === "intro" && introRef.current) {
      try { introRef.current.currentTime = 0; introRef.current.play(); } catch {}
    }
  }, [phase]);

  function startGame() {
    setPhase("playing");
    setResultText("");
    setPlayerPick(null);
    setCpuPick(null);
    if (cutRef.current) try { cutRef.current.currentTime = 0; cutRef.current.play(); } catch {}
  }

  function play(choiceId) {
    setPlayerPick(choiceId);
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)].id;
    setCpuPick(cpuChoice);
    setCutscene(true);

    if (cutRef.current) try { cutRef.current.currentTime = 0; cutRef.current.play(); } catch {}

    setTimeout(() => {
      const res = decideResult(choiceId, cpuChoice);
      let msg = "";
      if (res === "draw") {
        msg = "It's a Draw!";
        setScore((s) => ({ ...s, Draws: s.Draws + 1 }));
      } else if (res === "loss") {
        msg = "You Lost!";
        setScore((s) => ({ ...s, Losses: s.Losses + 1 }));
        if (lossRef.current) try { lossRef.current.currentTime = 0; lossRef.current.play(); } catch {}
      } else {
        msg = "You Won!";
        setScore((s) => ({ ...s, Wins: s.Wins + 1 }));
        if (winRef.current) try { winRef.current.currentTime = 0; winRef.current.play(); } catch {}
      }
      setResultText(`CPU: ${cpuChoice.toUpperCase()}  •  YOU: ${choiceId.toUpperCase()}  \n${msg}`);
      setCutscene(false);
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 900);
    }, 1400);
  }

  function resetScoreboard() {
    setScore({ Wins: 0, Losses: 0, Draws: 0 });
    setResultText("Scoreboard Reset! Play again.");
    setPlayerPick(null);
    setCpuPick(null);
  }

  return (
    <div className="cp-app-root">
      <audio ref={introRef} src="/assets/intro.mp3" preload="auto" />
      <audio ref={cutRef} src="/assets/cutscene.mp3" preload="auto" />
      <audio ref={winRef} src="/assets/win.mp3" preload="auto" />
      <audio ref={lossRef} src="/assets/loss.mp3" preload="auto" />

      <div className="bg-particles" aria-hidden>
        {Array.from({ length: 22 }).map((_, i) => <div key={i} className={`bg-dot d${i%10}`} />)}
      </div>

      <div className="ui-container">
        <AnimatePresence>
          {phase === "intro" && (
            <motion.div className="intro-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1 className="intro-title">CYBERPUNK <span>SWG</span></h1>
              <p className="intro-sub">A neon demo by a 14-year-old aspiring NVIDIA intern</p>
              <motion.button className="start-btn" whileTap={{ scale: 0.96 }} onClick={startGame}>PRESS START</motion.button>
              <div className="intro-note">Built with React · Vite · Framer Motion</div>
            </motion.div>
          )}
        </AnimatePresence>

        {phase === "playing" && (
          <motion.div className="game-shell" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="panel panel-left">
              <h2 className="title-small">SNAKE • WATER • GUN</h2>
              <p className="muted">Cyberpunk demo · animated UI</p>
              <div className="score-card">
                <div className="score-row"><span>Wins</span><strong>{score.Wins}</strong></div>
                <div className="score-row"><span>Losses</span><strong>{score.Losses}</strong></div>
                <div className="score-row"><span>Draws</span><strong>{score.Draws}</strong></div>
              </div>
              <div className="left-controls">
                <button className="btn pill" onClick={() => { setPlayerPick(null); setCpuPick(null); setResultText(""); }}>Play Again</button>
                <button className="btn pill danger" onClick={resetScoreboard}>Reset Scoreboard</button>
              </div>
            </div>

            <div className="panel panel-main">
              <AnimatePresence>
                {cutscene && (
                  <motion.div className="cutscene-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div className="cutscene-row" initial={{ scale: 0.85 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 60 }}>
                      <div className="cut-chunk"><Sprite which={playerPick || "snake"} big /><div className="cut-label">YOU</div></div>
                      <div className="cut-vs">VS</div>
                      <div className="cut-chunk"><Sprite which={cpuPick || "water"} big /><div className="cut-label">CPU</div></div>
                    </motion.div>
                    <div className="cut-text">Initiating Sequence…</div>
                    <Sparkles count={12} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="center-block">
                <div className="result-box">
                  <div className="result-header">{resultText ? "Result" : "Awaiting move"}</div>
                  <div className="result-body">{resultText || "Pick Snake, Water or Gun to begin."}</div>
                </div>

                <div className="choices-row">
                  {choices.map((c) => (
                    <motion.button key={c.id} className="choice" onClick={() => play(c.id)} whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }}>
                      <div className="choice-emoji">{c.label}</div>
                      <div className="choice-name">{c.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="panel-right">
                <div className="preview-card">
                  <div className="preview-title">COMPUTER</div>
                  <div className="preview-emoji"><Sprite which={cpuPick || "water"} /></div>
                </div>
              </div>

              <AnimatePresence>
                {showBurst && (
                  <motion.div className="result-burst" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {Array.from({ length: 18 }).map((_, i) => (
                      <motion.div key={i} className="burst-dot"
                        initial={{ x: 0, y: 0, scale: 0.45, opacity: 1 }}
                        animate={{ x: (Math.random()-0.5)*360, y: (Math.random()-0.5)*220, scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.9 }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>

      <div className="footer-badge">Made by • 14yr • Aspiring NVIDIA Intern</div>
    </div>
  );
}
