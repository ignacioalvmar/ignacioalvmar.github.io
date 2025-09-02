---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- Hero Section -->
<div class="hero-container">

  <!-- Hero Content -->
  <div class="hero-content">
    <div class="hero-text">
      <!-- <h1 class="hero-name">Ignacio Alvarez</h1> -->
      <p class="hero-tagline">Shaping the Future of Mobility with Human-Centered AI</p>
      
      <p class="hero-description">
        For over 15 years, I have turned idea concepts into production-ready intelligent systems at Intel and BMW.
        As a research professor, I am now pioneering the next wave of human-centric AI to build a safer, more intelligent mobility future.
        This site is an exploration of that journey at the intersection of AI, automotive, and user experience.
      </p>
      <p class="signature">Prof. Dr. Alvarez</p>
    </div>

    <div class="hero-visual">
      <div class="visual-container">
        <!-- Theme-based background image -->
        <img id="themeImage" class="theme-image" src="{{ '/images/Human_centered-Intelligent_Systems-dark.png' | relative_url }}" alt="Human-centered Intelligent Systems" />
        
        <!-- Toggle button for neural canvas -->
        <button id="neuralToggle" class="neural-toggle" title="Toggle Neural Network Visualization">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            <path d="M12 1a11 11 0 1 0 11 11"/>
          </svg>
        </button>
        
        <!-- Neural canvas (hidden by default) -->
        <div id="neuralCanvasContainer" class="neural-canvas-container" style="display: none;">
          <canvas id="neuralCanvas" class="neural-canvas"></canvas>
          <div class="neural-overlay">
            <div class="connection-paths"></div>
            <div class="data-flow-lines"></div>
            <div class="traffic-indicators"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
/* Hero Container: transparent so it inherits the site theme (light/dark) */
.hero-container {
  min-height: 100vh;
  background: transparent;
  color: inherit;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Layout */
.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  min-height: 100vh;
  background: transparent;
}

.hero-text { z-index: 2; }

.hero-name {
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.4s;
  line-height: 1.1;
}

.hero-tagline {
  font-size: 1.2rem;
  color: #3498db;
  font-weight: 500;
  margin: 0 0 1.5rem 0;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.6s;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: inherit;
  margin: 0;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

/* Signature styling */
.signature {
  font-family: 'Brush Script MT', 'Lucida Handwriting', 'Segoe Script', cursive;
  font-size: 1.8rem;
  font-weight: 400;
  color: #3498db;
  margin: 1.5rem 0 0 0;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 1s;
  transform: rotate(-2deg);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  letter-spacing: 1px;
}

/* Visual area */
.hero-visual { position: relative; z-index: 1; }

.visual-container {
  position: relative;
  width: 100%;
  height: 500px;
  background: transparent;
  transition: background 0.3s ease;
  overflow: hidden;
  border-radius: 12px;
}

/* Theme-based image */
.theme-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  transition: opacity 0.3s ease;
}

/* Neural canvas container */
.neural-canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* Toggle button */
.neural-toggle {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

.neural-toggle:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.neural-toggle:active {
  transform: scale(0.95);
}

/* Dark theme toggle button */
html[data-theme="dark"] .neural-toggle {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

html[data-theme="dark"] .neural-toggle:hover {
  background: rgba(0, 0, 0, 0.9);
}

/* Canvas */
.neural-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: transparent;
  cursor: crosshair;
}

/* Subtle overlays (kept faint) */
.neural-overlay, .connection-paths, .data-flow-lines, .traffic-indicators {
  position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;
}
.connection-paths { background: rgba(52,152,219,0.02); }
.data-flow-lines   { background: rgba(52,152,219,0.03); }
.traffic-indicators{ background: rgba(52,152,219,0.04); }

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Light theme name visibility fix */
html[data-theme="light"] .hero-name {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 6rem 1rem 1rem;
    text-align: center;
  }
  .hero-name { font-size: 2.5rem; }
  .visual-container { height: 300px; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 2rem; }
  .hero-tagline { font-size: 1rem; }
  .hero-content { padding: 5rem 1rem 1rem; }
}
</style>

<script>
// Theme management and image switching
document.addEventListener('DOMContentLoaded', function() {
  // Get the current theme from localStorage or default to 'dark'
  let currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Check if the theme is already set on the document element (from other scripts)
  const existingTheme = document.documentElement.getAttribute('data-theme');
  if (existingTheme) {
    currentTheme = existingTheme;
  } else {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
  
  // Set the appropriate image based on theme - with a small delay to ensure DOM is ready
  setTimeout(() => {
    updateThemeImage(currentTheme);
  }, 10);
  
  // Listen for theme changes via storage events (cross-tab)
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      const newTheme = e.newValue || 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateThemeImage(newTheme);
    }
  });
  
  // Listen for theme changes via DOM attribute changes (same-tab)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        updateThemeImage(newTheme);
      }
    });
  });
  
  // Start observing the document element for attribute changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  
  // Also check for theme changes periodically as a fallback
  let lastTheme = currentTheme;
  setInterval(function() {
    const currentStoredTheme = localStorage.getItem('theme') || 'dark';
    if (currentStoredTheme !== lastTheme) {
      lastTheme = currentStoredTheme;
      document.documentElement.setAttribute('data-theme', currentStoredTheme);
      updateThemeImage(currentStoredTheme);
    }
  }, 100);
  
  // Additional check after a longer delay to catch any late theme initialization
  setTimeout(() => {
    const finalTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
    updateThemeImage(finalTheme);
  }, 200);
  
  // Toggle button functionality
  const toggleButton = document.getElementById('neuralToggle');
  const neuralContainer = document.getElementById('neuralCanvasContainer');
  const themeImage = document.getElementById('themeImage');
  
  if (toggleButton && neuralContainer && themeImage) {
    toggleButton.addEventListener('click', function() {
      const isVisible = neuralContainer.style.display !== 'none';
      
      if (isVisible) {
        // Hide neural canvas, show image
        neuralContainer.style.display = 'none';
        themeImage.style.opacity = '1';
        toggleButton.title = 'Show Neural Network Visualization';
      } else {
        // Show neural canvas, fade image
        neuralContainer.style.display = 'block';
        themeImage.style.opacity = '0.3';
        toggleButton.title = 'Hide Neural Network Visualization';
        
        // Initialize neural network if not already done
        if (!window.neuralNetworkInitialized) {
          setTimeout(() => {
            try {
              initNeuralNetwork();
              window.neuralNetworkInitialized = true;
            } catch (error) {
              console.error('Error initializing neural network:', error);
            }
          }, 100);
        }
      }
    });
  }
});

function updateThemeImage(theme) {
  const themeImage = document.getElementById('themeImage');
  if (themeImage) {
    // Get the base URL for the site (works with GitHub Pages)
    const baseUrl = window.location.pathname.includes('/ignacioalvmar.github.io') 
      ? '/ignacioalvmar.github.io' 
      : '';
    
    const imagePath = theme === 'light' 
      ? `${baseUrl}/images/Human_centered-Intelligent_Systems-light.png`
      : `${baseUrl}/images/Human_centered-Intelligent_Systems-dark.png`;
    
    // Only update if the path is different to avoid unnecessary reloads
    if (themeImage.src !== window.location.origin + imagePath) {
      themeImage.src = imagePath;
    }
  }
}

// ==============================
//  LANE-BASED HUMAN SILHOUETTE
// ==============================
function waitForCanvas() {
  return new Promise((resolve) => {
    const checkCanvas = () => {
      const canvas = document.getElementById('neuralCanvas');
      if (canvas) {
        resolve(canvas);
      } else {
        setTimeout(checkCanvas, 100);
      }
    };
    checkCanvas();
  });
}

async function initNeuralNetwork() {
  // Wait for canvas to be available
  const canvas = await waitForCanvas();
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Could not get 2D context!');
    return;
  }

  // Rebuild network on resize so it fills the canvas perfectly
  let raf;
  function resizeCanvas() {
    const container = canvas.parentElement;
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      canvas.width = containerWidth;
      canvas.height = containerHeight;
      
      // Check if canvas has valid dimensions
      if (canvas.width === 0 || canvas.height === 0) {
        canvas.width = 500;
        canvas.height = 500;
      }
    } else {
      canvas.width = 500;
      canvas.height = 500;
    }
    buildAndStart();
  }
  window.addEventListener('resize', resizeCanvas);

  // ---- Geometry helpers (Catmull–Rom) ----
  function catmullRom(p0,p1,p2,p3,t){
    const t2=t*t, t3=t2*t;
    return [
      0.5*( (2*p1[0]) + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3 ),
      0.5*( (2*p1[1]) + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3 )
    ];
  }
  function tangentCR(p0,p1,p2,p3,t){
    const t2=t*t;
    return [
      0.5*( (-p0[0]+p2[0]) + 2*(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t + 3*(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t2 ),
      0.5*( (-p0[1]+p2[1]) + 2*(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t + 3*(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t2 )
    ];
  }
  function norm(v){ const m=Math.hypot(v[0],v[1])||1; return [v[0]/m, v[1]/m]; }
  function perp(v){ return [-v[1], v[0]]; }

  // Higher sampling for crisp facial features
  function buildPath(points, samples = 900){
    const pts = [points[0], ...points, points[points.length-1], points[points.length-1]];
    const pos=[], nor=[];
    for(let i=1;i<pts.length-2;i++){
      const localSamples = Math.max(24, Math.round(samples/(points.length-1)));
      for(let s=0;s<localSamples;s++){
        const t=s/(localSamples-1);
        const p = catmullRom(pts[i-1],pts[i],pts[i+1],pts[i+2],t);
        const tg = tangentCR(pts[i-1],pts[i],pts[i+1],pts[i+2],t);
        const n = perp(norm(tg));
        pos.push(p); nor.push(n);
      }
    }
    const segLen=[0]; let acc=0;
    for(let i=1;i<pos.length;i++){
      acc += Math.hypot(pos[i][0]-pos[i-1][0], pos[i][1]-pos[i-1][1]);
      segLen.push(acc);
    }
    return {pos,nor,len:acc,segLen};
  }

  class Road {
    constructor(points){
      this.path = buildPath(points);
      this.lanes = Array.from({length: config.lanesPerRoad}, (_,i)=> i - (config.lanesPerRoad-1)/2);
    }
    sample(s, laneOffset){
      const {pos,nor,segLen,len} = this.path;
      s = ((s % len)+len)%len;
      let lo=0, hi=segLen.length-1;
      while(lo<hi){
        const mid=(lo+hi)>>1;
        if(segLen[mid]<s) lo=mid+1; else hi=mid;
      }
      const i=Math.max(1,lo);
      const t=(s-segLen[i-1])/(segLen[i]-segLen[i-1] || 1);
      const x = pos[i-1][0]*(1-t)+pos[i][0]*t;
      const y = pos[i-1][1]*(1-t)+pos[i][1]*t;
      const nx = nor[i-1][0]*(1-t)+nor[i][0]*t;
      const ny = nor[i-1][1]*(1-t)+nor[i][1]*t;
      return { x: x + nx * laneOffset * config.laneWidth, y: y + ny * laneOffset * config.laneWidth, nx, ny };
    }
  }

  class Vehicle {
    constructor(road){
      this.road = road;
      this.s = Math.random() * road.path.len;
      this.lane = road.lanes[Math.floor(Math.random()*road.lanes.length)];
      this.targetLane = this.lane;
      this.laneChangeT = 0;
      this.speed = config.baseSpeed * (0.85 + Math.random()*0.3);
    }
    update(vehicles){
      const ahead = this.findAhead(vehicles);
      let speed = this.speed;
      if (ahead && ahead.dist < config.minGap) speed *= 0.6;
      this.s += speed;

      if (this.laneChangeT === 0 && Math.random() < config.laneChangeProb){
        const options = this.road.lanes.filter(L => L!==this.lane);
        const to = this.pickFreeLane(options, vehicles);
        if (to != null){ this.targetLane = to; this.laneChangeT = 0.0001; }
      }
      if (this.laneChangeT > 0){
        this.laneChangeT += 1/config.laneChangeDuration;
        if (this.laneChangeT >= 1){ this.lane = this.targetLane; this.laneChangeT = 0; }
      }
    }
    laneOffset(){
      if (this.laneChangeT===0) return this.lane;
      const t=this.laneChangeT, tt=t*t, ttt=tt*t;
      const ease = 3*tt - 2*ttt;
      return this.lane*(1-ease) + this.targetLane*ease;
    }
    findAhead(vehicles){
      let best=null;
      for(const v of vehicles){
        if (v===this) continue;
        if (Math.abs(v.laneOffset()-this.laneOffset())>0.5) continue;
        const d = (v.s - this.s + v.road.path.len) % v.road.path.len;
        if (d>0 && d< (best?.dist ?? 1e9)) best={v, dist:d};
      }
      return best;
    }
    pickFreeLane(lanes, vehicles){
      const shuffled=[...lanes].sort(()=>Math.random()-0.5);
      for (const L of shuffled){
        const crowded = vehicles.some(v =>
          Math.abs(v.laneOffset()-L)<0.2 &&
          (Math.abs(((v.s - this.s + v.road.path.len)%v.road.path.len)) < config.minGap)
        );
        if (!crowded) return L;
      }
      return null;
    }
    draw(ctx){
      const p = this.road.sample(this.s, this.laneOffset());
      ctx.save();
      ctx.globalAlpha = 0.95;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI*2);
      ctx.fillStyle = '#3498db';
      ctx.shadowColor = '#3498db';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    }
  }

  class NetworkSim {
    constructor(canvas, config, roadsNormalized){
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      // Scale normalized points (0..1) to canvas pixels
      const W = canvas.width, H = canvas.height;
      const scale = (npts)=> npts.map(([nx,ny])=>[nx*W, ny*H]);

      this.roads = roadsNormalized.map(r => new Road(scale(r.points)));

      // Distribute vehicles across roads (most on the outer silhouette)
      this.vehicles = [];
      const weights = [0.48, 0.20, 0.12, 0.12, 0.08]; // outer, cheek, brow, neck, shoulder
      const counts = this.roads.map((_,i)=> Math.max(2, Math.round(config.neuronCount*(weights[i]||0))));
      for (let i=0;i<this.roads.length;i++){
        for (let k=0;k<counts[i];k++) this.vehicles.push(new Vehicle(this.roads[i]));
      }

      // Pulse animation system
      this.pulses = [];
      this.pulseRadius = 0;
      this.pulseSpeed = 2;
      this.pulseMaxRadius = 100;
    }

    // Add a new pulse at click position
    addPulse(x, y) {
      this.pulses.push({
        x: x,
        y: y,
        radius: 0,
        maxRadius: this.pulseMaxRadius,
        speed: this.pulseSpeed,
        connections: this.findPulseConnections(x, y)
      });
    }

    // Find vehicles that can be connected in a pulse
    findPulseConnections(centerX, centerY) {
      const connections = [];
      const maxDistance = this.pulseMaxRadius;
      
      for (let i = 0; i < this.vehicles.length; i++) {
        for (let j = i + 1; j < this.vehicles.length; j++) {
          const v1 = this.vehicles[i];
          const v2 = this.vehicles[j];
          
          const p1 = v1.road.sample(v1.s, v1.laneOffset());
          const p2 = v2.road.sample(v2.s, v2.laneOffset());
          
          const dist1 = Math.hypot(p1.x - centerX, p1.y - centerY);
          const dist2 = Math.hypot(p2.x - centerX, p2.y - centerY);
          
          // Only connect vehicles within pulse range
          if (dist1 <= maxDistance && dist2 <= maxDistance) {
            const vehicleDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (vehicleDist <= 150) { // Max connection distance between vehicles
              connections.push({
                v1: v1, v2: v2,
                p1: p1, p2: p2,
                dist1: dist1, dist2: dist2,
                vehicleDist: vehicleDist
              });
            }
          }
        }
      }
      
      return connections;
    }

    update(){ 
      for(const v of this.vehicles) v.update(this.vehicles); 
      
      // Update pulses
      for (let i = this.pulses.length - 1; i >= 0; i--) {
        const pulse = this.pulses[i];
        pulse.radius += pulse.speed;
        
        // Remove expired pulses
        if (pulse.radius >= pulse.maxRadius) {
          this.pulses.splice(i, 1);
        }
      }
    }

    drawRoads(){
      const ctx=this.ctx;
      this.roads.forEach((r,ri)=>{
        for (const L of r.lanes){
          ctx.save();
          ctx.globalAlpha = ri===0 ? 0.14 : 0.09;  // outer a tad stronger
          ctx.lineWidth = 1;
          ctx.beginPath();
          const steps = 240;
          for(let i=0;i<=steps;i++){
            const s = r.path.len * (i/steps);
            const p = r.sample(s, L);
            if (i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y);
          }
          ctx.strokeStyle = '#3498db';
          ctx.stroke();
          ctx.restore();
        }
      });
    }

    drawConnections(){
      const ctx=this.ctx;
      ctx.save();
      ctx.globalAlpha = config.connectionOpacity;
      ctx.lineWidth = config.roadWidth;
      ctx.strokeStyle = '#2ecc71';
      for(const v of this.vehicles){
        const ahead = v.findAhead(this.vehicles);
        if (!ahead || ahead.dist>110) continue;
        const a = v.road.sample(v.s, v.laneOffset());
        const b = ahead.v.road.sample(ahead.v.s, ahead.v.laneOffset());
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
      ctx.restore();
    }

    drawPulses() {
      const ctx = this.ctx;
      
      for (const pulse of this.pulses) {
        // Draw pulse circle
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - pulse.radius / pulse.maxRadius) * 0.3;
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Draw pulse connections
        for (const conn of pulse.connections) {
          const fadeStart = 20; // Start fading after 20px
          const fadeEnd = pulse.maxRadius;
          
          let alpha = 1;
          if (pulse.radius > fadeStart) {
            alpha = Math.max(0, 1 - (pulse.radius - fadeStart) / (fadeEnd - fadeStart));
          }
          
          if (alpha > 0) {
            ctx.save();
            ctx.globalAlpha = alpha * 0.8;
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#900dd6';
            ctx.beginPath();
            ctx.moveTo(conn.p1.x, conn.p1.y);
            ctx.lineTo(conn.p2.x, conn.p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    draw(){
      const {ctx, canvas} = this;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      this.drawRoads();
      this.drawConnections();
      this.drawPulses(); // Draw pulses after regular connections
      for(const v of this.vehicles) v.draw(ctx);
    }
  }

  // Visual & motion config (tighter lanes, subtle connectors)
  const config = {
    neuronCount: 30,
    baseSpeed: 0.5,
    connectionOpacity: 0.3,
    roadWidth: 2.5,
    laneWidth: 14,
    lanesPerRoad: 3,
    laneChangeProb: 0.002,
    laneChangeDuration: 90,
    minGap: 26
  };

  // ===== HUMAN PROFILE ROADS (normalized 0..1) =====

  // Convert the flat array of coordinates into proper road objects
  const coordinates = [[0.5283203125, 0.08723958333333333], [0.453125, 0.09440104166666667], [0.392578125, 0.11067708333333333], [0.337890625, 0.138671875], [0.2998046875, 0.17317708333333334], [0.283203125, 0.19791666666666666], [0.2744140625, 0.21875], [0.26953125, 0.24674479166666666], [0.2705078125, 0.2630208333333333], [0.2763671875, 0.2858072916666667], [0.287109375, 0.3072916666666667], [0.326171875, 0.3509114583333333], [0.3447265625, 0.3815104166666667], [0.34765625, 0.416015625], [0.337890625, 0.4459635416666667], [0.30859375, 0.4850260416666667], [0.271484375, 0.5123697916666666], [0.2255859375, 0.53515625], [0.1220703125, 0.5774739583333334], [0.083984375, 0.6028645833333334], [0.0634765625, 0.626953125], [0.056640625, 0.6458333333333334], [0.056640625, 0.6653645833333334], [0.0615234375, 0.681640625], [0.078125, 0.7076822916666666], [0.1044921875, 0.7311197916666666], [0.1328125, 0.7486979166666666], [0.1728515625, 0.7662760416666666], [0.2236328125, 0.78125], [0.3115234375, 0.7981770833333334], [0.3310546875, 0.8053385416666666], [0.341796875, 0.8157552083333334], [0.3369140625, 0.8248697916666666], [0.3134765625, 0.8359375], [0.1640625, 0.8802083333333334], [0.1103515625, 0.904296875], [0.1220703125, 0.9088541666666666], [0.1533203125, 0.8938802083333334], [0.1982421875, 0.8782552083333334], [0.322265625, 0.8430989583333334], [0.349609375, 0.8287760416666666], [0.39453125, 0.8125], [0.4052734375, 0.8040364583333334], [0.4111328125, 0.7936197916666666], [0.408203125, 0.7779947916666666], [0.3896484375, 0.765625], [0.248046875, 0.736328125], [0.216796875, 0.7265625], [0.185546875, 0.7096354166666666], [0.166015625, 0.6920572916666666], [0.1572265625, 0.6731770833333334], [0.1611328125, 0.6529947916666666], [0.177734375, 0.6341145833333334], [0.216796875, 0.61328125], [0.3349609375, 0.5859375], [0.4033203125, 0.55859375], [0.4365234375, 0.53515625], [0.466796875, 0.5006510416666666], [0.48046875, 0.470703125], [0.486328125, 0.4329427083333333], [0.515625, 0.45703125], [0.5849609375, 0.4850260416666667], [0.5576171875, 0.4928385416666667], [0.5361328125, 0.5078125], [0.517578125, 0.5319010416666666], [0.5087890625, 0.5533854166666666], [0.5068359375, 0.580078125], [0.5107421875, 0.59375], [0.5400390625, 0.6295572916666666], [0.5400390625, 0.6360677083333334], [0.521484375, 0.640625], [0.484375, 0.640625], [0.376953125, 0.6321614583333334], [0.3076171875, 0.6354166666666666], [0.2802734375, 0.6412760416666666], [0.2548828125, 0.6516927083333334], [0.2431640625, 0.6634114583333334], [0.2412109375, 0.6764322916666666], [0.2470703125, 0.6875], [0.255859375, 0.6940104166666666], [0.263671875, 0.689453125], [0.25390625, 0.6764322916666666], [0.25390625, 0.66796875], [0.259765625, 0.6608072916666666], [0.2841796875, 0.6490885416666666], [0.32421875, 0.6419270833333334], [0.388671875, 0.6412760416666666], [0.48828125, 0.6497395833333334], [0.5400390625, 0.6471354166666666], [0.552734375, 0.6399739583333334], [0.5546875, 0.62890625], [0.5263671875, 0.5963541666666666], [0.5205078125, 0.5813802083333334], [0.51953125, 0.5657552083333334], [0.5283203125, 0.5377604166666666], [0.5478515625, 0.5123697916666666], [0.5703125, 0.498046875], [0.607421875, 0.4908854166666667], [0.677734375, 0.5006510416666666], [0.7041015625, 0.4986979166666667], [0.72265625, 0.4876302083333333], [0.7333984375, 0.4661458333333333], [0.7353515625, 0.455078125], [0.7255859375, 0.4524739583333333], [0.716796875, 0.4791666666666667], [0.7080078125, 0.4876302083333333], [0.6982421875, 0.4915364583333333], [0.673828125, 0.4928385416666667], [0.6416015625, 0.486328125], [0.6552734375, 0.4772135416666667], [0.6650390625, 0.458984375], [0.6826171875, 0.3912760416666667], [0.685546875, 0.3645833333333333], [0.681640625, 0.341796875], [0.666015625, 0.302734375], [0.6708984375, 0.26953125], [0.6689453125, 0.23958333333333334], [0.6552734375, 0.208984375], [0.6376953125, 0.18880208333333334], [0.60546875, 0.16536458333333334], [0.5810546875, 0.15364583333333334], [0.546875, 0.142578125], [0.521484375, 0.13802083333333334], [0.453125, 0.13802083333333334], [0.4169921875, 0.14518229166666666], [0.3896484375, 0.154296875], [0.3671875, 0.16536458333333334], [0.3388671875, 0.185546875], [0.3203125, 0.20703125], [0.310546875, 0.2265625], [0.306640625, 0.24283854166666666], [0.30859375, 0.2740885416666667], [0.318359375, 0.2981770833333333], [0.3359375, 0.3209635416666667], [0.341796875, 0.3151041666666667], [0.3271484375, 0.2955729166666667], [0.31640625, 0.2643229166666667], [0.3154296875, 0.24674479166666666], [0.3193359375, 0.22721354166666666], [0.3271484375, 0.2109375], [0.345703125, 0.19010416666666666], [0.3701171875, 0.17252604166666666], [0.3955078125, 0.16015625], [0.4248046875, 0.15104166666666666], [0.4677734375, 0.14388020833333334], [0.5048828125, 0.14322916666666666], [0.5361328125, 0.14713541666666666], [0.572265625, 0.15755208333333334], [0.5947265625, 0.16796875], [0.6220703125, 0.18619791666666666], [0.640625, 0.20377604166666666], [0.6533203125, 0.22200520833333334], [0.658203125, 0.236328125], [0.6611328125, 0.2669270833333333], [0.65625, 0.3053385416666667], [0.6708984375, 0.3385416666666667], [0.6748046875, 0.3567708333333333], [0.671875, 0.3912760416666667], [0.6513671875, 0.466796875], [0.6357421875, 0.48046875], [0.623046875, 0.4837239583333333], [0.61328125, 0.482421875], [0.544921875, 0.4596354166666667], [0.5244140625, 0.4498697916666667], [0.50390625, 0.4348958333333333], [0.4814453125, 0.4049479166666667], [0.4658203125, 0.376953125], [0.4375, 0.3580729166666667], [0.423828125, 0.3359375], [0.4208984375, 0.3248697916666667], [0.4228515625, 0.2936197916666667], [0.431640625, 0.2766927083333333], [0.447265625, 0.2643229166666667], [0.466796875, 0.265625], [0.486328125, 0.2799479166666667], [0.494140625, 0.2981770833333333], [0.49609375, 0.32421875], [0.5, 0.3359375], [0.5166015625, 0.3580729166666667], [0.53515625, 0.37109375], [0.5810546875, 0.392578125], [0.6142578125, 0.4153645833333333], [0.6240234375, 0.4342447916666667], [0.6220703125, 0.4498697916666667], [0.619140625, 0.45703125], [0.6142578125, 0.4576822916666667], [0.5849609375, 0.4479166666666667], [0.544921875, 0.431640625], [0.51953125, 0.4140625], [0.4990234375, 0.37109375], [0.4677734375, 0.3509114583333333], [0.455078125, 0.3346354166666667], [0.4501953125, 0.3203125], [0.4501953125, 0.30859375], [0.4521484375, 0.3001302083333333], [0.4599609375, 0.2916666666666667], [0.462890625, 0.2975260416666667], [0.46484375, 0.328125], [0.4765625, 0.3268229166666667], [0.47265625, 0.291015625], [0.466796875, 0.283203125], [0.455078125, 0.2819010416666667], [0.4453125, 0.2903645833333333], [0.4404296875, 0.3033854166666667], [0.439453125, 0.3216145833333333], [0.4443359375, 0.337890625], [0.4609375, 0.3587239583333333], [0.490234375, 0.3782552083333333], [0.501953125, 0.4088541666666667], [0.5126953125, 0.4231770833333333], [0.552734375, 0.4459635416666667], [0.6142578125, 0.466796875], [0.625, 0.4654947916666667], [0.630859375, 0.4609375], [0.63671875, 0.4427083333333333], [0.634765625, 0.4231770833333333], [0.62109375, 0.4055989583333333], [0.5888671875, 0.384765625], [0.5458984375, 0.3645833333333333], [0.5224609375, 0.3463541666666667], [0.5107421875, 0.326171875], [0.50390625, 0.2858072916666667], [0.490234375, 0.2669270833333333], [0.4638671875, 0.2552083333333333], [0.439453125, 0.2571614583333333], [0.4248046875, 0.2662760416666667], [0.4150390625, 0.2786458333333333], [0.408203125, 0.2975260416666667], [0.4072265625, 0.3209635416666667], [0.41796875, 0.3528645833333333], [0.4267578125, 0.36328125], [0.45703125, 0.384765625], [0.4697265625, 0.4134114583333333], [0.4716796875, 0.443359375], [0.46875, 0.4641927083333333], [0.462890625, 0.4817708333333333], [0.44921875, 0.5045572916666666], [0.4296875, 0.5260416666666666], [0.4111328125, 0.541015625], [0.3671875, 0.5651041666666666], [0.3251953125, 0.5794270833333334], [0.2275390625, 0.6002604166666666], [0.1875, 0.6158854166666666], [0.158203125, 0.6373697916666666], [0.14453125, 0.6627604166666666], [0.14453125, 0.6770833333333334], [0.154296875, 0.6966145833333334], [0.1689453125, 0.7109375], [0.1962890625, 0.728515625], [0.2548828125, 0.7473958333333334], [0.3818359375, 0.7727864583333334], [0.396484375, 0.7825520833333334], [0.396484375, 0.7955729166666666], [0.390625, 0.802734375], [0.3798828125, 0.80859375], [0.3779296875, 0.7942708333333334], [0.3642578125, 0.7838541666666666], [0.197265625, 0.74609375], [0.154296875, 0.7259114583333334], [0.12109375, 0.69921875], [0.1083984375, 0.6770833333333334], [0.10546875, 0.65625], [0.11328125, 0.6354166666666666], [0.13671875, 0.6119791666666666], [0.1806640625, 0.5891927083333334], [0.2685546875, 0.5631510416666666], [0.3271484375, 0.541015625], [0.3671875, 0.5169270833333334], [0.40234375, 0.4817708333333333], [0.4130859375, 0.462890625], [0.4208984375, 0.4381510416666667], [0.4228515625, 0.396484375], [0.40234375, 0.3307291666666667], [0.396484375, 0.2838541666666667], [0.404296875, 0.2571614583333333], [0.42578125, 0.23828125], [0.4443359375, 0.232421875], [0.4716796875, 0.232421875], [0.4873046875, 0.236328125], [0.505859375, 0.24739583333333334], [0.5244140625, 0.2708333333333333], [0.533203125, 0.3190104166666667], [0.5439453125, 0.3391927083333333], [0.560546875, 0.3528645833333333], [0.6083984375, 0.3763020833333333], [0.6435546875, 0.4016927083333333], [0.6484375, 0.3802083333333333], [0.6474609375, 0.3548177083333333], [0.642578125, 0.33984375], [0.6298828125, 0.318359375], [0.6240234375, 0.298828125], [0.6298828125, 0.26953125], [0.6298828125, 0.25], [0.6220703125, 0.22786458333333334], [0.60546875, 0.20638020833333334], [0.564453125, 0.17838541666666666], [0.5380859375, 0.16861979166666666], [0.509765625, 0.16276041666666666], [0.4453125, 0.16341145833333334], [0.3955078125, 0.17838541666666666], [0.369140625, 0.19401041666666666], [0.3525390625, 0.208984375], [0.33984375, 0.22916666666666666], [0.3349609375, 0.25], [0.3359375, 0.267578125], [0.345703125, 0.2936197916666667], [0.3583984375, 0.3118489583333333], [0.3935546875, 0.3502604166666667], [0.40625, 0.3821614583333333], [0.41015625, 0.4075520833333333], [0.4091796875, 0.4296875], [0.4033203125, 0.4537760416666667], [0.39453125, 0.4720052083333333], [0.3837890625, 0.4869791666666667], [0.3623046875, 0.5071614583333334], [0.314453125, 0.5364583333333334], [0.2578125, 0.5572916666666666], [0.1796875, 0.580078125], [0.13671875, 0.6002604166666666], [0.109375, 0.6223958333333334], [0.09765625, 0.640625], [0.09375, 0.6569010416666666], [0.095703125, 0.6731770833333334], [0.1044921875, 0.6927083333333334], [0.1240234375, 0.7141927083333334], [0.1494140625, 0.7317708333333334], [0.181640625, 0.7467447916666666], [0.216796875, 0.7584635416666666], [0.3515625, 0.7884114583333334], [0.365234375, 0.7975260416666666], [0.36328125, 0.8151041666666666], [0.3564453125, 0.818359375], [0.3486328125, 0.8040364583333334], [0.322265625, 0.7916666666666666], [0.2236328125, 0.771484375], [0.1796875, 0.7584635416666666], [0.1396484375, 0.7408854166666666], [0.1103515625, 0.7220052083333334], [0.091796875, 0.7057291666666666], [0.080078125, 0.6907552083333334], [0.0703125, 0.6673177083333334], [0.0712890625, 0.6399739583333334], [0.0849609375, 0.6171875], [0.103515625, 0.6009114583333334], [0.1337890625, 0.58203125], [0.2431640625, 0.5377604166666666], [0.294921875, 0.5091145833333334], [0.330078125, 0.478515625], [0.3447265625, 0.458984375], [0.3564453125, 0.4361979166666667], [0.361328125, 0.4153645833333333], [0.361328125, 0.3938802083333333], [0.35546875, 0.3723958333333333], [0.341796875, 0.3502604166666667], [0.3115234375, 0.3203125], [0.298828125, 0.302734375], [0.2880859375, 0.2805989583333333], [0.283203125, 0.2578125], [0.2841796875, 0.232421875], [0.291015625, 0.21028645833333334], [0.3037109375, 0.189453125], [0.326171875, 0.16731770833333334], [0.3525390625, 0.14973958333333334], [0.3916015625, 0.13151041666666666], [0.43359375, 0.11979166666666667], [0.4814453125, 0.11328125], [0.5244140625, 0.11328125], [0.568359375, 0.11848958333333333], [0.607421875, 0.12825520833333334], [0.64453125, 0.142578125], [0.69140625, 0.171875], [0.7216796875, 0.205078125], [0.7333984375, 0.228515625], [0.73828125, 0.24609375], [0.7373046875, 0.298828125], [0.74609375, 0.31640625], [0.765625, 0.337890625], [0.77734375, 0.3567708333333333], [0.7783203125, 0.3671875], [0.775390625, 0.3756510416666667], [0.74609375, 0.3984375], [0.732421875, 0.431640625], [0.7421875, 0.43359375], [0.7578125, 0.4016927083333333], [0.78125, 0.3860677083333333], [0.7890625, 0.3763020833333333], [0.7890625, 0.3522135416666667], [0.755859375, 0.3092447916666667], [0.7509765625, 0.2981770833333333], [0.7529296875, 0.24869791666666666], [0.740234375, 0.21158854166666666], [0.7109375, 0.17447916666666666], [0.6650390625, 0.14192708333333334], [0.6298828125, 0.12565104166666666], [0.599609375, 0.11588541666666667], [0.556640625, 0.107421875], [0.51953125, 0.10481770833333333], [0.4814453125, 0.10611979166666667], [0.4365234375, 0.11263020833333333], [0.359375, 0.13736979166666666], [0.412109375, 0.11393229166666667], [0.4580078125, 0.10286458333333333], [0.498046875, 0.09765625], [0.56640625, 0.09700520833333333], [0.6298828125, 0.107421875], [0.681640625, 0.12565104166666666], [0.7294921875, 0.154296875], [0.7548828125, 0.1783854166666666], [0.779296875, 0.21809895833333334], [0.7890625, 0.2545572916666667], [0.7890625, 0.271484375], [0.783203125, 0.2897135416666667], [0.7841796875, 0.3053385416666667], [0.7900390625, 0.3177083333333333], [0.8154296875, 0.3483072916666667], [0.8203125, 0.3600260416666667], [0.81640625, 0.3763020833333333], [0.783203125, 0.3977864583333333], [0.7744140625, 0.408203125], [0.7548828125, 0.474609375], [0.7451171875, 0.490234375], [0.7265625, 0.5013020833333334], [0.705078125, 0.5065104166666666], [0.6826171875, 0.5071614583333334], [0.6259765625, 0.5013020833333334], [0.6005859375, 0.509765625], [0.58203125, 0.5260416666666666], [0.564453125, 0.5540364583333334], [0.5595703125, 0.5748697916666666], [0.564453125, 0.595703125], [0.578125, 0.611328125], [0.599609375, 0.625], [0.7236328125, 0.6627604166666666], [0.7568359375, 0.677734375], [0.783203125, 0.6946614583333334], [0.8017578125, 0.7122395833333334], [0.8193359375, 0.7389322916666666], [0.830078125, 0.7799479166666666], [0.830078125, 0.8235677083333334], [0.8427734375, 0.8235677083333334], [0.84375, 0.78125], [0.8369140625, 0.7473958333333334], [0.82421875, 0.7220052083333334], [0.80078125, 0.6940104166666666], [0.771484375, 0.673828125], [0.7255859375, 0.6529947916666666], [0.6328125, 0.626953125], [0.6015625, 0.6145833333333334], [0.5859375, 0.603515625], [0.576171875, 0.5911458333333334], [0.572265625, 0.5807291666666666], [0.5732421875, 0.5638020833333334], [0.5830078125, 0.5423177083333334], [0.599609375, 0.5227864583333334], [0.615234375, 0.5130208333333334], [0.6279296875, 0.5104166666666666], [0.5986328125, 0.5475260416666666], [0.5908203125, 0.564453125], [0.58984375, 0.5716145833333334], [0.59375, 0.583984375], [0.6103515625, 0.5983072916666666], [0.638671875, 0.609375], [0.7353515625, 0.6354166666666666], [0.7431640625, 0.630859375], [0.6484375, 0.603515625], [0.615234375, 0.58984375], [0.6025390625, 0.5748697916666666], [0.6025390625, 0.5625], [0.6103515625, 0.5475260416666666], [0.6181640625, 0.5638020833333334], [0.6357421875, 0.5755208333333334], [0.771484375, 0.61328125], [0.826171875, 0.63671875], [0.865234375, 0.6673177083333334], [0.8857421875, 0.6966145833333334], [0.8955078125, 0.720703125], [0.9033203125, 0.7526041666666666], [0.908203125, 0.8235677083333334], [0.9208984375, 0.8235677083333334], [0.91796875, 0.7630208333333334], [0.9091796875, 0.7200520833333334], [0.8916015625, 0.6822916666666666], [0.869140625, 0.6555989583333334], [0.8369140625, 0.6321614583333334], [0.7978515625, 0.61328125], [0.640625, 0.5670572916666666], [0.6298828125, 0.5592447916666666], [0.623046875, 0.544921875], [0.625, 0.529296875], [0.630859375, 0.5221354166666666], [0.6455078125, 0.513671875], [0.7109375, 0.5149739583333334], [0.7333984375, 0.5091145833333334], [0.751953125, 0.4986979166666667], [0.7666015625, 0.478515625], [0.7861328125, 0.4114583333333333], [0.7939453125, 0.4029947916666667], [0.822265625, 0.3860677083333333], [0.83203125, 0.373046875], [0.8330078125, 0.3580729166666667], [0.830078125, 0.3489583333333333], [0.8017578125, 0.3125], [0.796875, 0.3014322916666667], [0.796875, 0.2884114583333333], [0.8017578125, 0.2727864583333333], [0.8017578125, 0.248046875], [0.796875, 0.22786458333333334], [0.7861328125, 0.203125], [0.7685546875, 0.17643229166666666], [0.7451171875, 0.15299479166666666], [0.6923828125, 0.11979166666666667], [0.666015625, 0.10872395833333333], [0.6201171875, 0.095703125], [0.5771484375, 0.08919270833333333], [0.5380859375, 0.08723958333333333]];



  // Split the coordinates into multiple road paths to create a more complex network
  // This creates multiple overlapping paths that will form the neural network effect
  const roadsNormalized = [
    { points: coordinates.slice(0, Math.floor(coordinates.length * 0.4)) },        // Main outer path
    { points: coordinates.slice(Math.floor(coordinates.length * 0.2), Math.floor(coordinates.length * 0.6)) },  // Middle path
    { points: coordinates.slice(Math.floor(coordinates.length * 0.4), Math.floor(coordinates.length * 0.8)) },  // Inner path
    { points: coordinates.slice(Math.floor(coordinates.length * 0.6), Math.floor(coordinates.length * 1.0)) },  // Core path
    { points: coordinates.slice(Math.floor(coordinates.length * 0.1), Math.floor(coordinates.length * 0.3)) }   // Additional detail path
  ];
  


  let sim;
  function buildAndStart(){
    if (raf) cancelAnimationFrame(raf);
    sim = new NetworkSim(canvas, config, roadsNormalized);
    (function animate(){
      sim.update();
      sim.draw();
      raf = requestAnimationFrame(animate);
    })();
  }

  // Interactivity: hover near a vehicle to nudge a lane change
  canvas.addEventListener('mousemove', (e)=>{
    if (!sim) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const v = sim.vehicles.find(v=>{
      const p = v.road.sample(v.s, v.laneOffset());
      return Math.hypot(p.x-x,p.y-y) < 30;
    });
    if (v && v.laneChangeT===0){
      const others = v.road.lanes.filter(L=>L!==v.lane);
      if (others.length){
        v.targetLane = others[Math.floor(Math.random()*others.length)];
        v.laneChangeT = 0.0001;
      }
    }
  }, {passive:true});

  // Click to create pulse animation
  canvas.addEventListener('click', (e)=>{
    if (!sim) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sim.addPulse(x, y);
  });

  // Initial build
  resizeCanvas();
}

// Boot - Neural network initialization is now handled by the toggle button
// The neural network will only be initialized when the user clicks the toggle button


</script>
