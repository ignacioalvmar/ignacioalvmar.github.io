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
      <div class="hero-greeting">
        <span class="greeting-text">Hi there, I'm</span>
      </div>
      <h1 class="hero-name">Ignacio Alvarez</h1>
      <p class="hero-tagline">Shaping the Future of Mobility with Human-Centered AI</p>
      
      <div class="hero-description">
        <p>I bring dreams to reality. For over 15 years, I've turned concepts into production-ready intelligent systems at Intel and BMW, shaping the transportation industry. Now, as a research professor, I'm pioneering the next wave of human-centric AI that will define the future of mobility. This site is an exploration of a journey at the intersection of AI, automotive, and user experience.</p>
      </div>
    </div>

    <div class="hero-visual">
      <div class="visual-container">
        <!-- Dynamic Neural Network Canvas -->
        <canvas id="neuralCanvas" class="neural-canvas"></canvas>
        
        <!-- Overlay Elements for Depth -->
        <div class="neural-overlay">
          <div class="connection-paths"></div>
          <div class="data-flow-lines"></div>
          <div class="traffic-indicators"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
/* Hero Container */
.hero-container {
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}



/* Hero Content */
.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;
  background: transparent;
}

.hero-text {
  z-index: 2;
  background: transparent;
}

.hero-greeting {
  margin-bottom: 0.5rem;
  background: transparent;
}

.greeting-text {
  font-size: 1.1rem;
  color: #3498db;
  font-weight: 500;
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.2s;
}

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
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
  background: transparent;
}

.hero-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ecf0f1;
  margin: 0;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  z-index: 1;
  background: transparent;
}

.visual-container {
  position: relative;
  width: 100%;
  height: 500px;
  background: #1a1a1a;
  transition: background 0.3s ease;
}

/* Theme-responsive visual container background */
.hero-container.light-mode .visual-container {
  background: #ffffff;
}

/* Dynamic Neural Network */
.neural-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure canvas is behind other elements */
  background: transparent;
  cursor: crosshair;
}

/* Canvas theme responsiveness - fully transparent */
.hero-container.light-mode .neural-canvas,
.hero-container.dark-mode .neural-canvas {
  background: transparent;
}

.neural-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensure overlay is above canvas */
  pointer-events: none; /* Allow clicks to pass through */
}

.connection-paths, .data-flow-lines, .traffic-indicators {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.connection-paths {
  background: rgba(52, 152, 219, 0.05);
  opacity: 0.5;
  animation: connectionFlow 4s ease-in-out infinite;
}

.data-flow-lines {
  background: rgba(52, 152, 219, 0.08);
  opacity: 0.5;
  animation: dataStreamFlow 10s ease-in-out infinite;
}

 .traffic-indicators {
   background: rgba(52, 152, 219, 0.1);
   opacity: 0.5;
   animation: trafficFlow 8s ease-in-out infinite;
 }

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes connectionFlow {
  0%, 100% {
    opacity: 0.3;
    transform: scaleX(0.8);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.2);
  }
}

@keyframes dataStreamFlow {
  0%, 100% {
    transform: translateX(-100px) scaleX(0.6);
    opacity: 0.2;
  }
  25% {
    transform: translateX(-50px) scaleX(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translateX(0px) scaleX(1.4);
    opacity: 0.8;
  }
  75% {
    transform: translateX(50px) scaleX(0.8);
    opacity: 0.5;
  }
}

@keyframes trafficFlow {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(0px);
  }
  25% {
    opacity: 0.6;
    transform: translateY(-5px);
  }
  50% {
    opacity: 0.9;
    transform: translateY(-10px);
  }
  75% {
    opacity: 0.6;
    transform: translateY(-5px);
  }
}

/* Dark Mode Styles */
.hero-container.dark-mode {
  background: #121212;
}

.hero-container.dark-mode .visual-container {
  background: #121212;
}

.hero-container.light-mode {
  background: #ffffff;
  color: #2c3e50;
}





.hero-container.light-mode .hero-description p {
  color: #34495e;
}

.hero-container.light-mode .visual-container {
  background: #ffffff;
}

/* Light theme name visibility fix */
.hero-container.light-mode .hero-name {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 6rem 1rem 1rem;
    text-align: center;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
  
  .nav-content {
    padding: 1rem;
  }
  
  .nav-menu {
    display: none;
  }
  
  .visual-container {
    height: 300px;
  }
  
  .neural-canvas {
    transform: scale(0.7);
  }
  
  .neural-overlay {
    transform: scale(0.7);
  }
  
  .vehicle-outline {
    width: 80px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }
  
  .hero-tagline {
    font-size: 1rem;
  }
  
  .hero-content {
    padding: 5rem 1rem 1rem;
  }
}
</style>

<script>
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const heroContainer = document.querySelector('.hero-container');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (currentTheme === 'light') {
    heroContainer.classList.add('light-mode');
    heroContainer.classList.remove('dark-mode');
  } else {
    heroContainer.classList.add('dark-mode');
    heroContainer.classList.remove('light-mode');
  }
  
  // Listen for theme changes from main navigation
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      const newTheme = e.newValue;
      if (newTheme === 'light') {
        heroContainer.classList.add('light-mode');
        heroContainer.classList.remove('dark-mode');
      } else {
        heroContainer.classList.add('dark-mode');
        heroContainer.classList.remove('light-mode');
      }
    }
  });

  // Initialize Neural Network Animation
  initNeuralNetwork();
  
  // Parallax effect for visual elements
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.neural-overlay > *');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.3 + (index * 0.05);
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
});

// Neural Network Animation System
function initNeuralNetwork() {
  const canvas = document.getElementById('neuralCanvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Neural Network Configuration
  const config = {
    neuronCount: 35,
    connectionDistance: 150, // Increased for more distant connections
    neuronSize: { min: 4, max: 10 },
    connectionOpacity: 0.6,
    trafficSpeed: 0.6, // Reduced for slower, more realistic traffic flow
    spawnRate: 0.03,
    maxConnections: 6, // Increased maximum connections per neuron
    gridSize: 80, // Grid cell size for road network
    roadWidth: 2, // Width of road connections
    connectionColors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'], // Different colors for connections
    connectionLifespan: { min: 80, max: 200 }, // Random lifespan for connections
    connectionUpdateInterval: 2000 // Update connections every 2 seconds
  };
  
  // Neuron class
  class Neuron {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.targetX = x;
      this.targetY = y;
      this.size = Math.random() * (config.neuronSize.max - config.neuronSize.min) + config.neuronSize.min;
      this.connections = [];
      this.life = 1;
      this.maxLife = Math.random() * 300 + 200;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.05 + 0.02;
      this.speed = Math.random() * 0.8 + 0.5;
      this.direction = Math.floor(Math.random() * 4); // 0: right, 1: down, 2: left, 3: up
      this.gridX = Math.floor(x / config.gridSize);
      this.gridY = Math.floor(y / config.gridSize);
    }
    
    update() {
      // Grid-based movement along road network
      this.moveAlongGrid();
      
      // Update life cycle
      this.life++;
      this.phase += this.pulseSpeed;
      
      // Remove old neurons
      if (this.life > this.maxLife) {
        return false;
      }
      
      return true;
    }
    
         moveAlongGrid() {
       // Move towards target position
       const dx = this.targetX - this.x;
       const dy = this.targetY - this.y;
       
       if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
         // Reached target, set new target
         this.setNewTarget();
       }
       
       // Move towards target with slower, more realistic traffic speed
       if (dx !== 0) {
         this.x += Math.sign(dx) * this.speed * config.trafficSpeed * 0.5; // Additional slowdown factor
       }
       if (dy !== 0) {
         this.y += Math.sign(dy) * this.speed * config.trafficSpeed * 0.5; // Additional slowdown factor
       }
       
       // Update grid position
       this.gridX = Math.floor(this.x / config.gridSize);
       this.gridY = Math.floor(this.y / config.gridSize);
     }
    
    setNewTarget() {
      // Set new target along grid lines (road network)
      const directions = [
        [1, 0],   // right
        [0, 1],   // down
        [-1, 0],  // left
        [0, -1]   // up
      ];
      
      // Choose a random direction
      this.direction = Math.floor(Math.random() * 4);
      const [dirX, dirY] = directions[this.direction];
      
      // Calculate new target within grid bounds
      let newGridX = this.gridX + dirX;
      let newGridY = this.gridY + dirY;
      
      // Keep within canvas bounds
      const maxGridX = Math.floor(canvas.width / config.gridSize);
      const maxGridY = Math.floor(canvas.height / config.gridSize);
      
      if (newGridX < 0 || newGridX > maxGridX) {
        newGridX = this.gridX - dirX; // Reverse direction
      }
      if (newGridY < 0 || newGridY > maxGridY) {
        newGridY = this.gridY - dirY; // Reverse direction
      }
      
      // Set target to center of grid cell
      this.targetX = (newGridX + 0.5) * config.gridSize;
      this.targetY = (newGridY + 0.5) * config.gridSize;
    }
    
    draw() {
      const alpha = Math.sin(this.phase) * 0.3 + 0.7;
      const scale = Math.sin(this.phase * 2) * 0.2 + 0.8;
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(this.x, this.y);
      ctx.scale(scale, scale);
      
      // Draw neuron with glow effect
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#3498db';
      ctx.fill();
      
      // Glow effect
      ctx.shadowColor = '#3498db';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }
  
  // Connection class for traffic flow
  class Connection {
    constructor(from, to) {
      this.from = from;
      this.to = to;
      this.progress = 0;
      this.speed = Math.random() * 0.012 + 0.006; // Slightly slower for traffic flow
      this.width = Math.random() * 3 + 2;
      this.life = 0;
      this.maxLife = Math.random() * (config.connectionLifespan.max - config.connectionLifespan.min) + config.connectionLifespan.min;
      this.color = config.connectionColors[Math.floor(Math.random() * config.connectionColors.length)];
      this.isActive = true;
      this.creationTime = Date.now();
    }
    
    update() {
      this.progress += this.speed;
      this.life++;
      
      if (this.progress >= 1 || this.life > this.maxLife) {
        return false;
      }
      
      return true;
    }
    
    draw() {
      // Draw connection line with road-like appearance
      ctx.save();
      ctx.globalAlpha = config.connectionOpacity;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = config.roadWidth;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(this.from.x, this.from.y);
      ctx.lineTo(this.to.x, this.to.y);
      ctx.stroke();
      
      // Draw moving traffic particle
      const x = this.from.x + (this.to.x - this.from.x) * this.progress;
      const y = this.from.y + (this.to.y - this.from.y) * this.progress;
      
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(x, y, this.width, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect to moving particle
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(x, y, this.width * 0.6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }
  
  // Traffic flow class
  class TrafficFlow {
    constructor() {
      this.particles = [];
      this.connections = [];
    }
    
    addParticle(x, y) {
      this.particles.push(new Neuron(x, y));
    }
    
         update() {
       // Update neurons
       this.particles = this.particles.filter(neuron => neuron.update());
       
       // Spawn new neurons
       if (Math.random() < config.spawnRate) {
         const x = Math.random() * canvas.width;
         const y = Math.random() * canvas.height;
         this.addParticle(x, y);
       }
       
       // Randomly remove some connections for dynamic effect
       this.connections = this.connections.filter(conn => {
         // 5% chance per frame for each connection to disappear
         if (Math.random() < 0.05) {
           return false;
         }
         return conn.update();
       });
       
       // Create connections between nearby neurons
       this.createConnections();
     }
    
    createConnections() {
      // Clear existing connections periodically
      if (Date.now() % config.connectionUpdateInterval < 16) { // Check every frame if it's time to update
        this.connections = [];
        this.particles.forEach(neuron => neuron.connections = []);
      }
      
      for (let i = 0; i < this.particles.length; i++) {
        const neuron = this.particles[i];
        
        // Create more diverse connections - both nearby and distant
        const connectionCount = Math.floor(Math.random() * 3) + 4; // 4-6 connections per neuron
        
        for (let j = 0; j < connectionCount; j++) {
          let target;
          
          // 60% chance to connect to nearby neurons, 40% chance to distant ones
          if (Math.random() < 0.6) {
            // Find nearby neurons
            target = this.findNearestNeuron(neuron, config.connectionDistance);
          } else {
            // Find distant neurons
            target = this.findDistantNeuron(neuron, config.connectionDistance * 1.5);
          }
          
          if (target && target !== neuron && 
              neuron.connections.length < config.maxConnections &&
              target.connections.length < config.maxConnections) {
            
            // Create connection
            const connection = new Connection(neuron, target);
            this.connections.push(connection);
            neuron.connections.push(connection);
            target.connections.push(connection);
          }
        }
      }
    }
    
    findNearestNeuron(neuron, maxDistance) {
      let nearest = null;
      let minDistance = maxDistance;
      
      for (let other of this.particles) {
        if (other === neuron) continue;
        
        const distance = Math.sqrt(
          Math.pow(neuron.x - other.x, 2) + 
          Math.pow(neuron.y - other.y, 2)
        );
        
        if (distance < minDistance && other.connections.length < config.maxConnections) {
          minDistance = distance;
          nearest = other;
        }
      }
      
      return nearest;
    }
    
    findDistantNeuron(neuron, minDistance) {
      const candidates = [];
      
      for (let other of this.particles) {
        if (other === neuron) continue;
        
        const distance = Math.sqrt(
          Math.pow(neuron.x - other.x, 2) + 
          Math.pow(neuron.y - other.y, 2)
        );
        
        if (distance >= minDistance && other.connections.length < config.maxConnections) {
          candidates.push(other);
        }
      }
      
      return candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : null;
    }
    
    draw() {
      // Clear canvas with transparent background (no fade effect)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines for road network visualization (optional)
      this.drawGridLines();
      
      // Draw connections first (roads)
      this.connections.forEach(conn => conn.draw());
      
      // Draw neurons on top (vehicles)
      this.particles.forEach(neuron => neuron.draw());
    }
    
    drawGridLines() {
      // Draw subtle grid lines to show road network structure
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      ctx.restore();
    }
  }
  
  // Initialize traffic flow
  const trafficFlow = new TrafficFlow();
  
  // Add initial neurons positioned on grid intersections
  for (let i = 0; i < config.neuronCount; i++) {
    const gridX = Math.floor(Math.random() * (canvas.width / config.gridSize));
    const gridY = Math.floor(Math.random() * (canvas.height / config.gridSize));
    const x = (gridX + 0.5) * config.gridSize;
    const y = (gridY + 0.5) * config.gridSize;
    trafficFlow.addParticle(x, y);
  }
  
  // Animation loop
  function animate() {
    trafficFlow.update();
    trafficFlow.draw();
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Interactive mouse effects
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Add neurons on mouse movement
    if (Math.random() < 0.1) {
      trafficFlow.addParticle(x, y);
    }
  });
  
  // Touch support for mobile
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    if (Math.random() < 0.05) {
      trafficFlow.addParticle(x, y);
    }
  });
}
</script>