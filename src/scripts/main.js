// src/scripts/main.js

import { Assets, Blessings } from './assets.js';
import { ParticleSystem } from './particles.js';

class VesakExperience {
  constructor() {
    this.currentScene = 0;
    this.scenes = ['scene-lanterns', 'scene-thoran', 'scene-temple'];
    
    this.dom = {
      intro: document.getElementById('intro-screen'),
      enterBtn: document.getElementById('enter-btn'),
      world: document.getElementById('immersive-world'),
      nextBtn: document.getElementById('next-scene-btn'),
      lanternContainer: document.getElementById('lantern-container'),
      thoranArt: document.getElementById('thoran-art-container'),
      templeContainer: document.getElementById('temple-container'),
      audio: document.getElementById('ambient-audio'),
      muteBtn: document.getElementById('mute-btn'),
      modal: document.getElementById('blessing-modal'),
      modalTitle: document.getElementById('modal-title'),
      modalText: document.getElementById('blessing-text'),
      closeModal: document.getElementById('close-modal')
    };

    this.init();
  }

  init() {
    document.getElementById('initial-candle').innerHTML = Assets.candle;
    
    gsap.to('#initial-candle', { opacity: 1, duration: 2, delay: 0.5 });
    gsap.to('.intro-title', { opacity: 1, duration: 1.5, y: -10, delay: 1 });
    gsap.to(this.dom.enterBtn, { opacity: 1, duration: 1, y: -5, delay: 1.5 });

    this.dom.enterBtn.addEventListener('click', () => this.startJourney());
    this.dom.nextBtn.addEventListener('click', () => this.goToNextScene());
    this.dom.closeModal.addEventListener('click', () => this.closeModal());
    this.dom.muteBtn.addEventListener('click', () => {
      this.dom.audio.muted = !this.dom.audio.muted;
      this.dom.muteBtn.style.color = this.dom.audio.muted ? 'var(--mist-gray)' : 'var(--warm-gold)';
    });
  }

  startJourney() {
    this.dom.audio.volume = 0.4;
    this.dom.audio.play().catch(() => console.log("Audio blocked"));

    gsap.to(this.dom.intro, { opacity: 0, duration: 1.5, onComplete: () => {
      this.dom.intro.style.display = 'none';
      gsap.set(this.dom.world, { opacity: 1, pointerEvents: 'all' });
      
      new ParticleSystem('ambient-particles');
      this.buildLanternScene();
      this.buildThoranScene();
      this.buildTempleScene();
      
      this.dom.nextBtn.classList.remove('hidden');
      gsap.from(this.dom.nextBtn, { opacity: 0, y: 20, duration: 2, delay: 3 });
    }});
  }

  buildLanternScene() {
    const count = window.innerWidth < 768 ? 6 : 10;
    for (let i = 0; i < count; i++) {
      const wrap = document.createElement('div');
      wrap.className = 'lantern-wrapper';
      wrap.style.left = `${Math.random() * 80 + 10}%`;
      wrap.style.top = `${Math.random() * 60}%`;
      
      const blessing = Blessings[Math.floor(Math.random() * Blessings.length)];
      wrap.innerHTML = Assets.getLantern(100, 140);
      wrap.addEventListener('click', () => this.showModal("A Vesak Blessing", blessing));
      
      this.dom.lanternContainer.appendChild(wrap);

      gsap.to(wrap, {
        y: `-=${Math.random() * 30 + 20}`,
        rotation: Math.random() * 10 - 5,
        duration: Math.random() * 4 + 4,
        yoyo: true, repeat: -1, ease: "sine.inOut"
      });
    }
  }

  buildThoranScene() {
    // We create 3 distinct Thoranas with different color palettes
    const palettes = [
      { c1: "#4db8ff", c2: "#99ccff", c3: "#fff" }, // Sapphire/Blue Theme
      { c1: "#f9d77e", c2: "#ff8a5c", c3: "#a2d5f2" }, // Classic Golden Theme (Center)
      { c1: "#ff9a9e", c2: "#fecfef", c3: "#fff" }  // Lotus Pink Theme
    ];

    palettes.forEach((colors, i) => {
      const t = document.createElement('div');
      t.className = 'thorana-item';
      
      // We scale the center one up slightly for depth
      if(i === 1) t.style.transform = "scale(1.15)";
      
      t.innerHTML = Assets.getThorana(colors.c1, colors.c2, colors.c3);
      this.dom.thoranArt.appendChild(t);
    });
  }

  buildTempleScene() {
    this.dom.templeContainer.innerHTML = Assets.stupa;
  }

  goToNextScene() {
    if (this.currentScene >= this.scenes.length - 1) return;

    const currentEl = document.getElementById(this.scenes[this.currentScene]);
    this.currentScene++;
    const nextEl = document.getElementById(this.scenes[this.currentScene]);

    gsap.to(currentEl, { 
      opacity: 0, 
      scale: 1.5, 
      translateZ: 200, 
      duration: 1.5, 
      ease: "power2.in",
      onComplete: () => currentEl.classList.remove('active-scene')
    });

    nextEl.classList.add('active-scene');
    gsap.fromTo(nextEl, 
      { opacity: 0, scale: 0.8, translateZ: -200 }, 
      { opacity: 1, scale: 1, translateZ: 0, duration: 2, ease: "power2.out", delay: 0.5 }
    );

    // Final Scene Sequence
    if (this.currentScene === this.scenes.length - 1) {
      gsap.to(this.dom.nextBtn, { opacity: 0, duration: 1, onComplete: () => this.dom.nextBtn.remove() });
      
      gsap.to('#final-blessing', { opacity: 1, duration: 3, delay: 2 });
      
      gsap.to('#sinhala-blessing', { 
        opacity: 1, 
        y: -10,
        duration: 3, 
        delay: 4, 
        ease: "power2.out"
      });
    }
  }

  showModal(title, text) {
    this.dom.modalTitle.innerText = title;
    this.dom.modalText.innerText = text;
    gsap.to(this.dom.modal, { opacity: 1, duration: 0.5, onStart: () => this.dom.modal.classList.add('active') });
    gsap.fromTo('.glass-panel', { y: 30, scale: 0.95 }, { y: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" });
  }

  closeModal() {
    gsap.to(this.dom.modal, { opacity: 0, duration: 0.4, onComplete: () => this.dom.modal.classList.remove('active') });
  }
}

document.addEventListener('DOMContentLoaded', () => new VesakExperience());