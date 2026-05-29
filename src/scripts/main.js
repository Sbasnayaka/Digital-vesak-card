// src/scripts/main.js

import { Assets, Blessings } from './assets.js';
import { ParticleSystem } from './particles.js';

class VesakExperience {
  constructor() {
    this.dom = {
      intro: document.getElementById('intro-screen'),
      candle: document.getElementById('initial-candle'),
      enterBtn: document.getElementById('enter-btn'),
      world: document.getElementById('immersive-world'),
      lanternContainer: document.getElementById('lantern-container'),
      templeLayer: document.getElementById('temple-layer'),
      parallaxLayers: document.querySelectorAll('.layer'),
      audio: document.getElementById('ambient-audio'),
      muteBtn: document.getElementById('mute-btn'),
      modal: document.getElementById('blessing-modal'),
      blessingText: document.getElementById('blessing-text'),
      closeModal: document.getElementById('close-modal')
    };

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isEntered = false;

    this.init();
  }

  init() {
    // Inject SVGs
    this.dom.candle.innerHTML = Assets.candle;
    this.dom.templeLayer.innerHTML = Assets.templeSilhouette;

    // Intro Animation Sequence
    const tl = gsap.timeline();
    tl.to(this.dom.candle, { opacity: 1, duration: 2, ease: "power2.inOut", delay: 0.5 })
      .to('.intro-title', { opacity: 1, duration: 1.5, y: -10, ease: "power2.out" })
      .to(this.dom.enterBtn, { opacity: 1, duration: 1, y: -5, ease: "power2.out" });

    // Event Listeners
    this.dom.enterBtn.addEventListener('click', () => this.enterWorld());
    this.dom.muteBtn.addEventListener('click', () => this.toggleAudio());
    this.dom.closeModal.addEventListener('click', () => this.closeModal());
  }

  enterWorld() {
    this.isEntered = true;
    
    // Attempt Audio Play
    this.dom.audio.volume = 0.4;
    this.dom.audio.play().catch(e => console.log("Audio autoplay blocked", e));

    // Transition Timeline
    const tl = gsap.timeline();
    tl.to(this.dom.intro, { opacity: 0, duration: 1.5, ease: "power2.inOut", onComplete: () => this.dom.intro.style.display = 'none' })
      .set(this.dom.world, { opacity: 1, pointerEvents: 'all' })
      .add(() => {
        new ParticleSystem('ambient-particles');
        this.spawnLanterns();
        this.generateThoranLights();
        this.initParallax();
      })
      .from('.layer-temple', { y: 50, opacity: 0, duration: 3, ease: "power3.out" })
      .from('.lantern-wrapper', { y: '100vh', opacity: 0, duration: 4, stagger: 0.2, ease: "power2.out" }, "-=2");
  }

  spawnLanterns() {
    const count = window.innerWidth < 768 ? 6 : 12;
    
    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'lantern-wrapper';
      
      // Random positioning
      const left = Math.random() * 90;
      const top = Math.random() * 60 + 10;
      const scale = Math.random() * 0.5 + 0.5; // Depth simulation
      
      wrapper.style.left = `${left}%`;
      wrapper.style.top = `${top}%`;
      wrapper.style.transform = `scale(${scale})`;
      
      // Assign random blessing
      const blessing = Blessings[Math.floor(Math.random() * Blessings.length)];
      wrapper.dataset.blessing = blessing;

      wrapper.innerHTML = Assets.getLantern(100 * scale, 140 * scale);
      
      wrapper.addEventListener('click', () => this.showBlessing(blessing));

      this.dom.lanternContainer.appendChild(wrapper);

      // Continuous floating animation
      gsap.to(wrapper, {
        y: `-=${Math.random() * 30 + 20}`,
        x: `+=${Math.random() * 20 - 10}`,
        rotation: Math.random() * 10 - 5,
        duration: Math.random() * 4 + 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }
  }

  generateThoranLights() {
    const container = document.getElementById('thoran-lights');
    // Simplified geometric thoran backdrop representation
    for(let i=0; i<30; i++) {
      const light = document.createElement('div');
      light.className = 'thoran-light';
      light.style.left = `${Math.random() * 100}%`;
      light.style.top = `${Math.random() * 100}%`;
      container.appendChild(light);

      // Chasing light effect
      gsap.to(light, {
        opacity: 0.2,
        duration: Math.random() * 1 + 0.5,
        yoyo: true,
        repeat: -1,
        ease: "steps(2)",
        delay: Math.random() * 2
      });
    }
  }

  initParallax() {
    window.addEventListener('mousemove', (e) => {
      // Normalize mouse coordinates to -1 to 1
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    // Smooth interpolation (Lerp) for cinematic camera feel
    gsap.ticker.add(() => {
      if(!this.isEntered) return;
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

      this.dom.parallaxLayers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth'));
        const moveX = this.mouse.x * (depth * 30);
        const moveY = this.mouse.y * (depth * 15);
        gsap.set(layer, { x: moveX, y: moveY });
      });
    });
  }

  showBlessing(text) {
    this.dom.blessingText.innerText = text;
    gsap.to(this.dom.modal, { opacity: 1, duration: 0.5, ease: "power2.out", onStart: () => this.dom.modal.classList.add('active') });
    
    // Small modal enter animation
    gsap.fromTo('.glass-panel', 
      { y: 30, scale: 0.95 }, 
      { y: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
    );
  }

  closeModal() {
    gsap.to(this.dom.modal, { 
      opacity: 0, 
      duration: 0.4, 
      ease: "power2.in", 
      onComplete: () => this.dom.modal.classList.remove('active') 
    });
  }

  toggleAudio() {
    if (this.dom.audio.muted) {
      this.dom.audio.muted = false;
      this.dom.muteBtn.style.color = 'var(--warm-gold)';
    } else {
      this.dom.audio.muted = true;
      this.dom.muteBtn.style.color = 'var(--mist-gray)';
    }
  }
}

// Boot up experience when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new VesakExperience();
});