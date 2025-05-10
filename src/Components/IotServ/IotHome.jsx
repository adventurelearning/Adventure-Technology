import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const IotHome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = (window.innerWidth * window.innerHeight) / 4500;

    // Function to generate a random number within a range
    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to generate a random color
    function randomColor() {
      const colors = ['#ffffff', '#d3d3d3', '#a9a9a9', '#808080', '#4682b4', '#6495ed'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: randomRange(1, 2),
        color: randomColor(),
        opacity: randomRange(0.3, 0.7),
        speedX: randomRange(-0.1, 0.1),
        speedY: randomRange(-0.1, 0.1),
      });
    }

    // Particle animation function
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.closePath();
      });
    }

    animate();

    // Handle window resize to adjust canvas and particles
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-initialize particles
      particles.length = 0;
      const newNumParticles = (window.innerWidth * window.innerHeight) / 2000;
      for (let i = 0; i < newNumParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: randomRange(1, 2),
          color: randomColor(),
          opacity: randomRange(0.3, 0.7),
          speedX: randomRange(-0.1, 0.1),
          speedY: randomRange(-0.1, 0.1),
        });
      }
      animate();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full  bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }} />
      <div className="relative z-10 flex flex-col items-center justify-center  px-6 sm:px-12 mt-12">
        <div className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white tracking-tight mt-15">
            IoT Development for Connected and
            <span className="block mt-4">
              Intelligent Ecosystems
            </span>
          </h1>
          <h3 className="text-lg  text-gray-300 mx-auto mt-10 ">
            We build secure, scalable IoT solutions that connect devices and streamline operations
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-37 mb-10"
          >
            <button
              variant="default"
              className="bg-gradient-to-r from-blue-900 to-blue-950 text-white text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Start Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default IotHome;
