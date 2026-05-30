(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const n={candle:`
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
    </svg>`,getLantern:(i=120,t=160)=>`
    <svg width="${i}" height="${t}" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`,getThorana:(i="#f9d77e",t="#ff8a5c",s="#a2d5f2")=>`
    <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <style>
        .t-spin-fast { transform-origin: 400px 300px; animation: t-spin 5s linear infinite; }
        .t-spin-slow-rev { transform-origin: 400px 300px; animation: t-spin 8s linear infinite reverse; }
        .t-spin-med { transform-origin: 400px 300px; animation: t-spin 3s linear infinite; }
        .t-pulse { animation: t-pulse 1s alternate infinite; transform-origin: center; }
        @keyframes t-spin { 100% { transform: rotate(360deg); } }
        @keyframes t-pulse { 0% { opacity: 0.6; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1.02); } }
      </style>
      
      <defs>
        <radialGradient id="tGlow-${i.replace("#","")}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="${i}" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="${t}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="400" cy="300" r="150" fill="url(#tGlow-${i.replace("#","")})" class="t-pulse" />

      <circle cx="400" cy="300" r="280" stroke="${i}" stroke-width="12" stroke-dasharray="20 20" fill="none" class="t-spin-fast" filter="drop-shadow(0 0 10px ${i})"/>
      <circle cx="400" cy="300" r="260" stroke="${t}" stroke-width="8" stroke-dasharray="10 30" fill="none" class="t-spin-slow-rev" filter="drop-shadow(0 0 10px ${t})"/>
      <circle cx="400" cy="300" r="230" stroke="#fff" stroke-width="15" stroke-dasharray="5 15" fill="none" class="t-spin-med" filter="drop-shadow(0 0 15px #fff)"/>
      <circle cx="400" cy="300" r="200" stroke="${i}" stroke-width="6" stroke-dasharray="40 10" fill="none" class="t-spin-slow-rev" filter="drop-shadow(0 0 8px ${i})"/>
      <circle cx="400" cy="300" r="160" stroke="${s}" stroke-width="10" stroke-dasharray="15 15" fill="none" class="t-spin-fast" filter="drop-shadow(0 0 10px ${s})"/>

      <path d="M 120 300 Q 50 400 100 550" fill="none" stroke="${i}" stroke-width="8" stroke-dasharray="10 20" class="t-spin-slow-rev" />
      <path d="M 140 300 Q 80 400 130 550" fill="none" stroke="${t}" stroke-width="5" stroke-dasharray="5 10" class="t-spin-fast" />
      <path d="M 680 300 Q 750 400 700 550" fill="none" stroke="${i}" stroke-width="8" stroke-dasharray="10 20" class="t-spin-slow-rev" />
      <path d="M 660 300 Q 720 400 670 550" fill="none" stroke="${t}" stroke-width="5" stroke-dasharray="5 10" class="t-spin-fast" />

      <path d="M 400 350 Q 370 270 400 200 Q 430 270 400 350 Z" fill="#fff" class="t-pulse"/>
      <path d="M 400 350 Q 320 300 330 230 Q 370 280 400 350 Z" fill="${i}" class="t-pulse"/>
      <path d="M 400 350 Q 480 300 470 230 Q 430 280 400 350 Z" fill="${i}" class="t-pulse"/>
      
      <rect x="350" y="550" width="100" height="50" fill="#03060a" stroke="${i}" stroke-width="2"/>
    </svg>
  `,stupa:`
    <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="15" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M400,100 C250,100 200,300 150,400 L650,400 C600,300 550,100 400,100 Z" fill="#03060a" stroke="rgba(249, 215, 126, 0.2)" stroke-width="2"/>
      <rect x="385" y="40" width="30" height="60" fill="#03060a" stroke="rgba(249, 215, 126, 0.2)"/>
      <polygon points="390,40 410,40 400,0" fill="rgba(249, 215, 126, 0.8)" filter="url(#glow)"/>
      <path d="M0,400 Q200,350 400,400 Q600,350 800,400" fill="none" stroke="rgba(249,215,126,0.1)" stroke-width="1"/>
    </svg>`},l=["May your life be filled with peace, wisdom, and light.","Radiate boundless love towards the entire world.","Thousands of candles can be lighted from a single candle.","Health is the greatest gift, contentment the greatest wealth.","Peace comes from within. Do not seek it without."];class d{constructor(t){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d",{alpha:!1}),this.particles=[],this.width=window.innerWidth,this.height=window.innerHeight,this.init(),window.addEventListener("resize",()=>this.resize())}init(){this.resize();const t=this.width<768?50:150;for(let s=0;s<t;s++)this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,radius:Math.random()*2+.5,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5-.2,alpha:Math.random()*.5+.1,pulse:Math.random()*.02});this.animate()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height}animate(){this.ctx.fillStyle="rgba(6, 11, 20, 0.2)",this.ctx.fillRect(0,0,this.width,this.height),this.particles.forEach(t=>{t.x+=t.vx,t.y+=t.vy,t.alpha+=t.pulse,(t.alpha>.8||t.alpha<.1)&&(t.pulse*=-1),t.y<0&&(t.y=this.height),t.x<0&&(t.x=this.width),t.x>this.width&&(t.x=0),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fillStyle=`rgba(249, 215, 126, ${t.alpha})`,this.ctx.shadowBlur=10,this.ctx.shadowColor="#f9d77e",this.ctx.fill()}),requestAnimationFrame(()=>this.animate())}}class c{constructor(){this.currentScene=0,this.scenes=["scene-lanterns","scene-thoran","scene-temple"],this.dom={intro:document.getElementById("intro-screen"),enterBtn:document.getElementById("enter-btn"),world:document.getElementById("immersive-world"),nextBtn:document.getElementById("next-scene-btn"),lanternContainer:document.getElementById("lantern-container"),thoranArt:document.getElementById("thoran-art-container"),templeContainer:document.getElementById("temple-container"),audio:document.getElementById("ambient-audio"),muteBtn:document.getElementById("mute-btn"),modal:document.getElementById("blessing-modal"),modalTitle:document.getElementById("modal-title"),modalText:document.getElementById("blessing-text"),closeModal:document.getElementById("close-modal")},this.init()}init(){document.getElementById("initial-candle").innerHTML=n.candle,gsap.to("#initial-candle",{opacity:1,duration:2,delay:.5}),gsap.to(".intro-title",{opacity:1,duration:1.5,y:-10,delay:1}),gsap.to(this.dom.enterBtn,{opacity:1,duration:1,y:-5,delay:1.5}),this.dom.enterBtn.addEventListener("click",()=>this.startJourney()),this.dom.nextBtn.addEventListener("click",()=>this.goToNextScene()),this.dom.closeModal.addEventListener("click",()=>this.closeModal()),this.dom.muteBtn.addEventListener("click",()=>{this.dom.audio.muted=!this.dom.audio.muted,this.dom.muteBtn.style.color=this.dom.audio.muted?"var(--mist-gray)":"var(--warm-gold)"})}startJourney(){this.dom.audio.volume=.4,this.dom.audio.play().catch(()=>console.log("Audio blocked")),gsap.to(this.dom.intro,{opacity:0,duration:1.5,onComplete:()=>{this.dom.intro.style.display="none",gsap.set(this.dom.world,{opacity:1,pointerEvents:"all"}),new d("ambient-particles"),this.buildLanternScene(),this.buildThoranScene(),this.buildTempleScene(),this.dom.nextBtn.classList.remove("hidden"),gsap.from(this.dom.nextBtn,{opacity:0,y:20,duration:2,delay:3})}})}buildLanternScene(){const t=window.innerWidth<768?6:10;for(let s=0;s<t;s++){const o=document.createElement("div");o.className="lantern-wrapper",o.style.left=`${Math.random()*80+10}%`,o.style.top=`${Math.random()*60}%`;const e=l[Math.floor(Math.random()*l.length)];o.innerHTML=n.getLantern(100,140),o.addEventListener("click",()=>this.showModal("A Vesak Blessing",e)),this.dom.lanternContainer.appendChild(o),gsap.to(o,{y:`-=${Math.random()*30+20}`,rotation:Math.random()*10-5,duration:Math.random()*4+4,yoyo:!0,repeat:-1,ease:"sine.inOut"})}}buildThoranScene(){[{c1:"#4db8ff",c2:"#99ccff",c3:"#fff"},{c1:"#f9d77e",c2:"#ff8a5c",c3:"#a2d5f2"},{c1:"#ff9a9e",c2:"#fecfef",c3:"#fff"}].forEach((s,o)=>{const e=document.createElement("div");e.className="thorana-item",o===1&&(e.style.transform="scale(1.15)"),e.innerHTML=n.getThorana(s.c1,s.c2,s.c3),this.dom.thoranArt.appendChild(e)})}buildTempleScene(){this.dom.templeContainer.innerHTML=n.stupa}goToNextScene(){if(this.currentScene>=this.scenes.length-1)return;const t=document.getElementById(this.scenes[this.currentScene]);this.currentScene++;const s=document.getElementById(this.scenes[this.currentScene]);gsap.to(t,{opacity:0,scale:1.5,translateZ:200,duration:1.5,ease:"power2.in",onComplete:()=>t.classList.remove("active-scene")}),s.classList.add("active-scene"),gsap.fromTo(s,{opacity:0,scale:.8,translateZ:-200},{opacity:1,scale:1,translateZ:0,duration:2,ease:"power2.out",delay:.5}),this.currentScene===this.scenes.length-1&&(gsap.to(this.dom.nextBtn,{opacity:0,duration:1,onComplete:()=>this.dom.nextBtn.remove()}),gsap.to("#final-blessing",{opacity:1,duration:3,delay:2}),gsap.to("#sinhala-blessing",{opacity:1,y:-10,duration:3,delay:4,ease:"power2.out"}))}showModal(t,s){this.dom.modalTitle.innerText=t,this.dom.modalText.innerText=s,gsap.to(this.dom.modal,{opacity:1,duration:.5,onStart:()=>this.dom.modal.classList.add("active")}),gsap.fromTo(".glass-panel",{y:30,scale:.95},{y:0,scale:1,duration:.5,ease:"back.out(1.5)"})}closeModal(){gsap.to(this.dom.modal,{opacity:0,duration:.4,onComplete:()=>this.dom.modal.classList.remove("active")})}}document.addEventListener("DOMContentLoaded",()=>new c);
