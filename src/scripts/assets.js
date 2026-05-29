// src/scripts/assets.js

export const Assets = {
  // Classic glowing candle
  candle: `
    <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff"/>
          <stop offset="40%" stop-color="#f9d77e"/>
          <stop offset="100%" stop-color="#ff8a5c" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M45,150 L45,80 L55,80 L55,150 Z" fill="#e0e0e0" />
      <path id="flame" d="M50,30 Q40,60 50,80 Q60,60 50,30 Z" fill="url(#flameGrad)">
        <animate attributeName="d" 
          values="M50,30 Q40,60 50,80 Q60,60 50,30 Z; M50,25 Q35,60 50,80 Q65,60 50,25 Z; M50,30 Q40,60 50,80 Q60,60 50,30 Z" 
          dur="2s" repeatCount="indefinite"/>
      </path>
    </svg>
  `,

  // Traditional Sri Lankan 'Atapattam' (Octagonal) Lantern
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
    </svg>
  `,

  // Distant Temple Silhouette (Stupa)
  templeSilhouette: `
    <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      <path d="M400,100 C300,100 250,250 200,300 L600,300 C550,250 500,100 400,100 Z" fill="#04070d"/>
      <rect x="390" y="50" width="20" height="50" fill="#04070d"/>
      <polygon points="395,50 405,50 400,10" fill="#04070d"/>
      <path d="M0,300 Q100,250 200,300 Z" fill="#03050a"/>
      <path d="M600,300 Q700,260 800,300 Z" fill="#03050a"/>
    </svg>
  `
};

export const Blessings = [
  "May your life be filled with peace, wisdom, and light. Happy Vesak.",
  "Radiate boundless love towards the entire world — above, below, and across.",
  "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened.",
  "May the soft glow of Vesak illuminate your path to true happiness.",
  "Let us walk the path of harmony and reflection under the serene Vesak moon."
];