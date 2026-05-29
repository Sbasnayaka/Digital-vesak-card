// src/scripts/main.js

import { Assets, Blessings, JatakaStory } from './assets.js';
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
      thoranButtons: document.getElementById('thoran-story-buttons'),
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
    // Inject the massive glowing SVG
    this.dom.thoranArt.innerHTML = Assets.getThorana();

    // Create the story buttons below it
    JatakaStory.forEach((part, index) => {
      const btn = document.createElement('button');
      btn.className = 'story-btn';
      btn.innerText = `View Part ${index + 1}`;
      btn.addEventListener('click', () => this.showModal(`Part ${index + 1}: ${part.title}`, part.text));
      this.dom.thoranButtons.appendChild(btn);
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

    // Final Scene Sequence (English -> Sinhala)
    if (this.currentScene === this.scenes.length - 1) {
      gsap.to(this.dom.nextBtn, { opacity: 0, duration: 1, onComplete: () => this.dom.nextBtn.remove() });
      
      // Fade in English Blessing
      gsap.to('#final-blessing', { opacity: 1, duration: 3, delay: 2 });
      
      // Fade in Sinhala Blessing majestically
      gsap.to('#sinhala-blessing', { 
        opacity: 1, 
        y: -10,
        duration: 3, 
        delay: 4, // Comes in after the English text
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