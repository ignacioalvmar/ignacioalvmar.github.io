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
      <h1 class="hero-name">Ignacio Alvarez</h1>
      <p class="hero-tagline">Shaping the Future of Mobility with Human-Centered AI</p>
      
        <p class="hero-description">For over 15 years, I have turned idea concepts into production-ready intelligent systems at Intel and BMW. As a research professor, I am now pioneering the next wave of human-centric AI to build a safer, more intelligent mobility future. This site is an exploration of that journey at the intersection of AI, automotive, and user experience.</p>
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
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  min-height: 100vh;
  background: transparent;
}

.hero-text {
  z-index: 2;
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
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ecf0f1;
  margin: 0;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  z-index: 1;
}

.visual-container {
  position: relative;
  width: 100%;
  height: 500px;
  background: #1a1a1a;
  transition: background 0.3s ease;
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





.hero-container.light-mode .hero-description {
  color: #34495e;
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
  console.log('DOM loaded, initializing...');
  
  const heroContainer = document.querySelector('.hero-container');
  if (!heroContainer) {
    console.error('Hero container not found!');
    return;
  }
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  console.log('Current theme:', currentTheme);
  
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
      console.log('Theme changed to:', newTheme);
      if (newTheme === 'light') {
        heroContainer.classList.add('light-mode');
        heroContainer.classList.remove('dark-mode');
      } else {
        heroContainer.classList.add('dark-mode');
        heroContainer.classList.remove('light-mode');
      }
    }
  });

  // Initialize Neural Network Animation with retry mechanism
  let initAttempts = 0;
  const maxAttempts = 3;
  
  function tryInitNeuralNetwork() {
    try {
      console.log(`Attempt ${initAttempts + 1} to initialize neural network...`);
      initNeuralNetwork();
    } catch (error) {
      console.error('Failed to initialize neural network:', error);
      initAttempts++;
      
      if (initAttempts < maxAttempts) {
        console.log(`Retrying in 1 second... (${initAttempts}/${maxAttempts})`);
        setTimeout(tryInitNeuralNetwork, 1000);
      } else {
        console.error('Failed to initialize neural network after', maxAttempts, 'attempts');
        // Show fallback content
        showFallbackContent();
      }
    }
  }
  
  // Start initialization after a short delay
  setTimeout(tryInitNeuralNetwork, 500);
  
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

// Fallback content if neural network fails to load
function showFallbackContent() {
  const canvas = document.getElementById('neuralCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Draw a simple fallback pattern
      ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw some simple geometric shapes
      ctx.strokeStyle = 'rgba(52, 152, 219, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 5; i++) {
        const x = (i + 1) * canvas.width / 6;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let i = 0; i < 5; i++) {
        const y = (i + 1) * canvas.height / 6;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }
}

// Neural Network Animation System
function initNeuralNetwork() {
  console.log('Initializing neural network...');
  
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) {
    console.error('Canvas element not found!');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Could not get 2D context!');
    return;
  }
  
  console.log('Canvas and context initialized successfully');
  
  // Set canvas size
  function resizeCanvas() {
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
    }
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Neural Network Configuration
  const config = {
    neuronCount: 35,
    connectionDistance: 150,
    neuronSize: { min: 4, max: 10 },
    connectionOpacity: 0.8, // Increased for better visibility
    trafficSpeed: 0.6,
    spawnRate: 0.03,
    maxConnections: 6,
    gridSize: 80,
    roadWidth: 3, // Increased for better visibility
    connectionColors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'],
    connectionLifespan: { min: 80, max: 200 },
    connectionUpdateInterval: 2000
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
      this.direction = Math.floor(Math.random() * 4);
      this.gridX = Math.floor(x / config.gridSize);
      this.gridY = Math.floor(y / config.gridSize);
    }
    
    update() {
      this.moveAlongGrid();
      this.life++;
      this.phase += this.pulseSpeed;
      
      if (this.life > this.maxLife) {
        return false;
      }
      
      return true;
    }
    
    moveAlongGrid() {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        this.setNewTarget();
      }
      
      if (dx !== 0) {
        this.x += Math.sign(dx) * this.speed * config.trafficSpeed * 0.5;
      }
      if (dy !== 0) {
        this.y += Math.sign(dy) * this.speed * config.trafficSpeed * 0.5;
      }
      
      this.gridX = Math.floor(this.x / config.gridSize);
      this.gridY = Math.floor(this.y / config.gridSize);
    }
    
    setNewTarget() {
      const directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1]
      ];
      
      this.direction = Math.floor(Math.random() * 4);
      const [dirX, dirY] = directions[this.direction];
      
      let newGridX = this.gridX + dirX;
      let newGridY = this.gridY + dirY;
      
      const maxGridX = Math.floor(canvas.width / config.gridSize);
      const maxGridY = Math.floor(canvas.height / config.gridSize);
      
      if (newGridX < 0 || newGridX > maxGridX) {
        newGridX = this.gridX - dirX;
      }
      if (newGridY < 0 || newGridY > maxGridY) {
        newGridY = this.gridY - dirY;
      }
      
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
      
      // Draw neuron with stronger glow effect
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#3498db';
      ctx.fill();
      
      // Enhanced glow effect
      ctx.shadowColor = '#3498db';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
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
      this.speed = Math.random() * 0.012 + 0.006;
      this.width = Math.random() * 4 + 3; // Increased size
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
      
      ctx.globalAlpha = 1.0; // Full opacity for particles
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(x, y, this.width, 0, Math.PI * 2);
      ctx.fill();
      
      // Enhanced glow effect to moving particle
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(x, y, this.width * 0.7, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }
  
  // Traffic flow class
  class TrafficFlow {
    constructor() {
      this.particles = [];
      this.connections = [];
      this.lastUpdate = Date.now();
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
        if (Math.random() < 0.03) { // Reduced from 0.05 for more stable connections
          return false;
        }
        return conn.update();
      });
      
      // Create connections between nearby neurons
      this.createConnections();
    }
    
    createConnections() {
      // Clear existing connections periodically
      const now = Date.now();
      if (now - this.lastUpdate > config.connectionUpdateInterval) {
        this.connections = [];
        this.particles.forEach(neuron => neuron.connections = []);
        this.lastUpdate = now;
      }
      
      for (let i = 0; i < this.particles.length; i++) {
        const neuron = this.particles[i];
        
        const connectionCount = Math.floor(Math.random() * 3) + 4;
        
        for (let j = 0; j < connectionCount; j++) {
          let target;
          
          if (Math.random() < 0.6) {
            target = this.findNearestNeuron(neuron, config.connectionDistance);
          } else {
            target = this.findDistantNeuron(neuron, config.connectionDistance * 1.5);
          }
          
          if (target && target !== neuron && 
              neuron.connections.length < config.maxConnections &&
              target.connections.length < config.maxConnections) {
            
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
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines for road network visualization
      this.drawGridLines();
      
      // Draw connections first (roads)
      this.connections.forEach(conn => conn.draw());
      
      // Draw neurons on top (vehicles)
      this.particles.forEach(neuron => neuron.draw());
    }
    
    drawGridLines() {
      ctx.save();
      ctx.globalAlpha = 0.15; // Slightly more visible
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 0.8;
      
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
  
  console.log(`Initialized ${config.neuronCount} neurons`);
  
  // Animation loop with error handling
  function animate() {
    try {
      trafficFlow.update();
      trafficFlow.draw();
      requestAnimationFrame(animate);
    } catch (error) {
      console.error('Animation error:', error);
      // Restart animation after a short delay
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 100);
    }
  }
  
  // Test canvas functionality
  function testCanvas() {
    try {
      ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
      ctx.fillRect(10, 10, 50, 50);
      console.log('Canvas test successful - basic drawing works');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } catch (error) {
      console.error('Canvas test failed:', error);
    }
  }
  
  // Test canvas before starting animation
  testCanvas();
  
  // Start animation with a small delay to ensure everything is ready
  setTimeout(() => {
    console.log('Starting animation loop...');
    animate();
  }, 100);
  
  // Interactive mouse effects
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
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
  
  console.log('Neural network initialization complete');
}
</script>