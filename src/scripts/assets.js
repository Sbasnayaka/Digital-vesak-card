// src/scripts/assets.js

export const Assets = {
  candle: `
    <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff"/><stop offset="40%" stop-color="#f9d77e"/><stop offset="100%" stop-color="#ff8a5c" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M45,150 L45,80 L55,80 L55,150 Z" fill="#e0e0e0" />
      <path d="M50,30 Q40,60 50,80 Q60,60 50,30 Z" fill="url(#flameGrad)">
        <animate attributeName="d" values="M50,30 Q40,60 50,80 Q60,60 50,30 Z; M50,25 Q35,60 50,80 Q65,60 50,25 Z; M50,30 Q40,60 50,80 Q60,60 50,30 Z" dur="2s" repeatCount="indefinite"/>
      </path>
    </svg>`,

  getLantern: (width = 120, height = 160) => `
    <svg width="${width}" height="${height}" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#f9d77e" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ff8a5c" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      <line x1="60" y1="0" x2="60" y2="30" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="60" y1="30" x2="30" y2="50" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <line x1="60" y1="30" x2="90" y2="50" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <polygon points="40,50 80,50 100,80 80,110 40,110 20,80" fill="url(#lanternGlow)" stroke="#f9d77e" stroke-width="1.5"/>
      <polygon points="50,55 70,55 85,80 70,105 50,105 35,80" fill="rgba(255, 255, 255, 0.4)" stroke="#f9d77e" stroke-width="0.5"/>
      <line x1="40" y1="110" x2="35" y2="150" stroke="rgba(249, 215, 126, 0.6)" stroke-width="1.5"/>
      <line x1="60" y1="110" x2="60" y2="155" stroke="rgba(249, 215, 126, 0.6)" stroke-width="1.5"/>
      <line x1="80" y1="110" x2="85" y2="150" stroke="rgba(249, 215, 126, 0.6)" stroke-width="1.5"/>
    </svg>`,

  // The Grand Digital Thorana Structure with Chasing Lights
  getThorana: () => `
    <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <style>
        .t-spin-fast { transform-origin: 400px 300px; animation: t-spin 5s linear infinite; }
        .t-spin-slow-rev { transform-origin: 400px 300px; animation: t-spin 8s linear infinite reverse; }
        .t-spin-med { transform-origin: 400px 300px; animation: t-spin 3s linear infinite; }
        .t-pulse { animation: t-pulse 1s alternate infinite; transform-origin: center; }
        .t-flash { animation: t-flash 0.5s steps(2) infinite; }
        
        @keyframes t-spin { 100% { transform: rotate(360deg); } }
        @keyframes t-pulse { 0% { opacity: 0.6; filter: drop-shadow(0 0 10px #f9d77e); transform: scale(0.98); } 100% { opacity: 1; filter: drop-shadow(0 0 30px #fff); transform: scale(1.02); } }
        @keyframes t-flash { 0% { opacity: 0.2; } 100% { opacity: 1; } }
      </style>
      
      <defs>
        <radialGradient id="tGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="#f9d77e" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#ff8a5c" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Center Ambient Glow -->
      <circle cx="400" cy="300" r="150" fill="url(#tGlow)" class="t-pulse" />

      <!-- Concentric Chasing LED Rings (The hallmark of a Thorana) -->
      <circle cx="400" cy="300" r="280" stroke="#f9d77e" stroke-width="12" stroke-dasharray="20 20" fill="none" class="t-spin-fast" filter="drop-shadow(0 0 10px #f9d77e)"/>
      <circle cx="400" cy="300" r="260" stroke="#ff8a5c" stroke-width="8" stroke-dasharray="10 30" fill="none" class="t-spin-slow-rev" filter="drop-shadow(0 0 10px #ff8a5c)"/>
      <circle cx="400" cy="300" r="230" stroke="#fff" stroke-width="15" stroke-dasharray="5 15" fill="none" class="t-spin-med" filter="drop-shadow(0 0 15px #fff)"/>
      <circle cx="400" cy="300" r="200" stroke="#f9d77e" stroke-width="6" stroke-dasharray="40 10" fill="none" class="t-spin-slow-rev" filter="drop-shadow(0 0 8px #f9d77e)"/>
      <circle cx="400" cy="300" r="160" stroke="#a2d5f2" stroke-width="10" stroke-dasharray="15 15" fill="none" class="t-spin-fast" filter="drop-shadow(0 0 10px #a2d5f2)"/>

      <!-- Thorana Wings (Side Structures) -->
      <!-- Left Wing Cascades -->
      <path d="M 120 300 Q 50 400 100 550" fill="none" stroke="#f9d77e" stroke-width="8" stroke-dasharray="10 20" class="t-spin-slow-rev" />
      <path d="M 140 300 Q 80 400 130 550" fill="none" stroke="#ff8a5c" stroke-width="5" stroke-dasharray="5 10" class="t-spin-fast" />
      
      <!-- Right Wing Cascades -->
      <path d="M 680 300 Q 750 400 700 550" fill="none" stroke="#f9d77e" stroke-width="8" stroke-dasharray="10 20" class="t-spin-slow-rev" />
      <path d="M 660 300 Q 720 400 670 550" fill="none" stroke="#ff8a5c" stroke-width="5" stroke-dasharray="5 10" class="t-spin-fast" />

      <!-- Center Lotus Silhouette -->
      <path d="M 400 350 Q 370 270 400 200 Q 430 270 400 350 Z" fill="#fff" class="t-pulse"/>
      <path d="M 400 350 Q 320 300 330 230 Q 370 280 400 350 Z" fill="#f9d77e" class="t-pulse"/>
      <path d="M 400 350 Q 480 300 470 230 Q 430 280 400 350 Z" fill="#f9d77e" class="t-pulse"/>
      
      <!-- Base Structure Lines -->
      <rect x="350" y="550" width="100" height="50" fill="#03060a" stroke="#f9d77e" stroke-width="2"/>
    </svg>
  `,

  stupa: `
    <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="15" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M400,100 C250,100 200,300 150,400 L650,400 C600,300 550,100 400,100 Z" fill="#03060a" stroke="rgba(249, 215, 126, 0.2)" stroke-width="2"/>
      <rect x="385" y="40" width="30" height="60" fill="#03060a" stroke="rgba(249, 215, 126, 0.2)"/>
      <polygon points="390,40 410,40 400,0" fill="rgba(249, 215, 126, 0.8)" filter="url(#glow)"/>
      <path d="M0,400 Q200,350 400,400 Q600,350 800,400" fill="none" stroke="rgba(249,215,126,0.1)" stroke-width="1"/>
    </svg>`
};

export const Blessings = [
  "May your life be filled with peace, wisdom, and light.",
  "Radiate boundless love towards the entire world.",
  "Thousands of candles can be lighted from a single candle.",
  "Health is the greatest gift, contentment the greatest wealth.",
  "Peace comes from within. Do not seek it without."
];

export const JatakaStory = [
  { title: "The Promise", text: "Long ago, a monkey, a jackal, an otter, and a rabbit promised to practice charity on the full moon day. They each gathered food to offer to any beggar they met." },
  { title: "The Sacrifice", text: "When a beggar approached the rabbit, he had nothing but grass. True to his vow of absolute charity, he offered his own body by jumping into the beggar's fire." },
  { title: "The Mark on the Moon", text: "Moved by his ultimate compassion, the deity cooled the fire instantly and drew the rabbit's image on the moon, ensuring his sacrifice would illuminate the night sky forever." }
];