import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  connections: number[];
  energy: number;
  trail: { x: number; y: number; opacity: number }[];
}

const NeuralMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Advanced configuration
    const config = {
      // Particle system
      particles: {
        count: {
          layer1: 40,  // Primary layer
          layer2: 30   // Secondary layer for depth
        },
        size: {
          min: 1,
          max: 2
        },
        speed: {
          base: 0.3,
          variation: 0.2
        },
        trail: {
          length: 20,
          decay: 0.95,
          opacity: 0.3
        }
      },
      
      // Connection system
      connections: {
        maxDistance: 150,
        maxPerParticle: 5,
        minOpacity: 0.05,
        maxOpacity: 0.2
      },
      
      // Colors and effects
      colors: {
        primary: '#2E6FF3',    // Electric Blue
        secondary: '#7B5CFA',  // Electric Purple
        accent: '#2CCED9'      // Cyber Cyan
      },
      
      // Interaction
      interaction: {
        mouseRadius: 150,
        mouseForce: 0.15,
        mouseFadeTime: 100
      },
      
      // Performance
      performance: {
        connectionUpdateInterval: 50,  // Frames between connection updates
        cullingDistance: 100,         // Distance for smart culling
        maxFPS: 60
      }
    };

    // Initialize canvas with device pixel ratio
    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    // Particle initialization with dual-layer system
    const particles: Particle[] = [];
    const initParticles = () => {
      // Layer 1 - Primary particles
      for (let i = 0; i < config.particles.count.layer1; i++) {
        particles.push(createParticle(1));
      }
      
      // Layer 2 - Secondary particles for depth
      for (let i = 0; i < config.particles.count.layer2; i++) {
        particles.push(createParticle(0.7));
      }
    };

    const createParticle = (depthFactor: number = 1): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 100 * depthFactor,
      vx: (Math.random() - 0.5) * config.particles.speed.base,
      vy: (Math.random() - 0.5) * config.particles.speed.base,
      vz: (Math.random() - 0.5) * config.particles.speed.variation,
      radius: lerp(config.particles.size.min, config.particles.size.max, Math.random()),
      connections: [],
      energy: Math.random(),
      trail: []
    });

    // Utility functions
    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    // Mouse interaction state
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: number;

    // Smart connection management
    const updateConnections = () => {
      const spatialGrid: Map<string, number[]> = new Map();
      
      // Build spatial grid
      particles.forEach((particle, index) => {
        const gridX = Math.floor(particle.x / config.connections.maxDistance);
        const gridY = Math.floor(particle.y / config.connections.maxDistance);
        const key = `${gridX},${gridY}`;
        
        const cell = spatialGrid.get(key) || [];
        cell.push(index);
        spatialGrid.set(key, cell);
      });

      // Update connections using spatial grid
      particles.forEach((particle, i) => {
        const gridX = Math.floor(particle.x / config.connections.maxDistance);
        const gridY = Math.floor(particle.y / config.connections.maxDistance);
        
        const nearbyParticles: number[] = [];
        
        // Check neighboring cells
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${gridX + dx},${gridY + dy}`;
            const cell = spatialGrid.get(key) || [];
            nearbyParticles.push(...cell);
          }
        }

        // Find closest particles
        const connections = nearbyParticles
          .map(index => ({
            index,
            distance: Math.hypot(
              particles[index].x - particle.x,
              particles[index].y - particle.y,
              particles[index].z - particle.z
            )
          }))
          .filter(conn => conn.index !== i && conn.distance < config.connections.maxDistance)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, config.connections.maxPerParticle);

        particle.connections = connections.map(conn => conn.index);
      });
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = window.setTimeout(() => {
        isMouseMoving = false;
      }, config.interaction.mouseFadeTime);
    };

    // Advanced rendering with effects
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach((particle, i) => {
        // Mouse influence with quantum effect
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < config.interaction.mouseRadius) {
            const force = (1 - distance / config.interaction.mouseRadius) * config.interaction.mouseForce;
            particle.vx += (dx / distance) * force * (1 + particle.energy * 0.5);
            particle.vy += (dy / distance) * force * (1 + particle.energy * 0.5);
            particle.energy = Math.min(particle.energy + 0.1, 1);
          }
        }

        // Update position with z-axis movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Boundary behavior with energy preservation
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = particle.x < 0 ? 0 : canvas.width;
          particle.energy *= 0.9;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = particle.y < 0 ? 0 : canvas.height;
          particle.energy *= 0.9;
        }
        if (particle.z < 0 || particle.z > 100) {
          particle.vz *= -0.8;
          particle.z = particle.z < 0 ? 0 : 100;
        }

        // Velocity damping with energy preservation
        const damping = 0.99 - particle.energy * 0.01;
        particle.vx *= damping;
        particle.vy *= damping;
        particle.vz *= damping;
        particle.energy = Math.max(particle.energy - 0.01, 0);

        // Update particle trail
        particle.trail.unshift({ x: particle.x, y: particle.y, opacity: 1 });
        if (particle.trail.length > config.particles.trail.length) {
          particle.trail.pop();
        }

        // Draw trails with energy-based coloring
        if (particle.energy > 0.1) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          
          particle.trail.forEach((point, index) => {
            const opacity = point.opacity * config.particles.trail.opacity * particle.energy;
            point.opacity *= config.particles.trail.decay;

            ctx.strokeStyle = `rgba(46, 111, 243, ${opacity})`;
            ctx.lineTo(point.x, point.y);
          });
          
          ctx.stroke();
        }

        // Draw connections with depth effect
        particle.connections.forEach(connectionIndex => {
          const connectedParticle = particles[connectionIndex];
          const distance = Math.hypot(
            connectedParticle.x - particle.x,
            connectedParticle.y - particle.y,
            connectedParticle.z - particle.z
          );

          const depthFactor = (particle.z + connectedParticle.z) / 200;
          const opacity = clamp(
            lerp(config.connections.maxOpacity, config.connections.minOpacity, distance / config.connections.maxDistance) * depthFactor,
            config.connections.minOpacity,
            config.connections.maxOpacity
          );

          // Energy-based connection coloring
          const energyLevel = (particle.energy + connectedParticle.energy) / 2;
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            connectedParticle.x, connectedParticle.y
          );
          
          gradient.addColorStop(0, `rgba(46, 111, 243, ${opacity * (1 - energyLevel)})`);
          gradient.addColorStop(0.5, `rgba(123, 92, 250, ${opacity * energyLevel})`);
          gradient.addColorStop(1, `rgba(46, 111, 243, ${opacity * (1 - energyLevel)})`);

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = opacity * 2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(connectedParticle.x, connectedParticle.y);
          ctx.stroke();
        });

        // Draw particle with energy-based glow
        const glowRadius = particle.radius * (1 + particle.energy * 3);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowRadius * 4
        );
        
        gradient.addColorStop(0, `rgba(46, 111, 243, ${0.5 + particle.energy * 0.5})`);
        gradient.addColorStop(0.5, `rgba(123, 92, 250, ${0.2 * particle.energy})`);
        gradient.addColorStop(1, 'rgba(46, 111, 243, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, glowRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = config.colors.primary;
        ctx.arc(particle.x, particle.y, particle.radius * (1 + particle.energy), 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop with performance optimization
    let lastTime = 0;
    let connectionUpdateCounter = 0;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      
      if (deltaTime >= (1000 / config.performance.maxFPS)) {
        lastTime = timestamp;
        
        render();
        
        // Periodic connection updates for performance
        if (++connectionUpdateCounter >= config.performance.connectionUpdateInterval) {
          connectionUpdateCounter = 0;
          updateConnections();
        }
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };

    // Setup
    initCanvas();
    initParticles();
    updateConnections();
    
    window.addEventListener('resize', initCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', initCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ 
        opacity: 0.15,
        background: 'radial-gradient(circle at center, rgba(46, 111, 243, 0.05) 0%, rgba(123, 92, 250, 0.03) 30%, transparent 70%)'
      }}
    />
  );
};

export default NeuralMesh;