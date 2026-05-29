// src/scripts/particles.js

export class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.particles = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    this.init();
    window.addEventListener('resize', () => this.resize());
  }

  init() {
    this.resize();
    // Reduce particles on mobile for performance
    const count = this.width < 768 ? 50 : 150;
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2, // Drift upward naturally
        alpha: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * 0.02
      });
    }
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  animate() {
    // Cinematic trail effect
    this.ctx.fillStyle = 'rgba(6, 11, 20, 0.2)'; 
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      // Gentle pulsing effect
      p.alpha += p.pulse;
      if (p.alpha > 0.8 || p.alpha < 0.1) p.pulse *= -1;

      // Wrap around edges
      if (p.y < 0) p.y = this.height;
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(249, 215, 126, ${p.alpha})`;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#f9d77e';
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}