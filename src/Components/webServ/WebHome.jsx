import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WebHome = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();

        const particles = [];
        const calculateParticlesNumber = () => {
            let baseParticles = (window.innerWidth * window.innerHeight) / 6000;
            // Adjust particle count for very small screens
            if (window.innerWidth < 600) {
                baseParticles = (window.innerWidth * window.innerHeight) / 4000;
            }
            return baseParticles;
        };
        let numParticles = calculateParticlesNumber();

        // Function to generate a random number within a range
        function randomRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Function to generate a random color
        function randomColor() {
            const colors = ['#ffffff', '#d3d3d3', '#a9a9a9', '#808080', '#4682b4', '#6495ed', '#9370db', '#dda0dd'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        const createParticles = () => {
            particles.length = 0;
            numParticles = calculateParticlesNumber();
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: randomRange(0.5, 2.5), // Increased size range
                    color: randomColor(),
                    opacity: randomRange(0.2, 0.8), // Increased opacity range
                    speedX: randomRange(-0.2, 0.2), // Increased speed
                    speedY: randomRange(-0.2, 0.2),
                    trail: [],       // Array to store particle's past positions for the trail
                    trailLength: 10, // Length of the trail
                });
            }
        };

        createParticles();

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

                // Store the current position in the trail
                particle.trail.push({ x: particle.x, y: particle.y });
                // Keep the trail at the desired length
                if (particle.trail.length > particle.trailLength) {
                    particle.trail.shift();
                }

                // Draw particle with trail
                for (let i = 0; i < particle.trail.length; i++) {
                    const point = particle.trail[i];
                    const opacityFactor = i / particle.trailLength; // Fade out the trail
                    const sizeFactor = 0.7 + (i / particle.trailLength) * 0.6; // Size decreases
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, particle.size * sizeFactor, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color;
                    ctx.globalAlpha = particle.opacity * (0.4 + opacityFactor * 0.6); // Make trail more visible
                    ctx.fill();
                    ctx.closePath();
                }

                // Draw the main particle
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
            setCanvasSize();
            createParticles();
            animate();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }} />
            <div className="relative z-10 flex flex-col items-center justify-center h-3/4 md:h-full px-6 sm:px-12">
                <div className="text-start md:text-center space-y-6 sm:space-y-8 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                        className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                        Web App Development for Secure, Scalable, and
                        <span className="block mt-2 sm:mt-3 text-gray-300 font-medium">
                            Powerful Digital Solutions
                        </span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                        className="text-lg sm:text-xl text-gray-400 mx-auto mt-6 sm:mt-8"
                    >
                        We specialize in developing cutting-edge, scalable, and secure web applications that drive your business forward.
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                        className="mt-8 sm:mt-10"
                    >
                        <Link to="/Contact">
                        <button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-sky-700 via-blue-600 to-blue-800 text-white text-lg sm:text-xl px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Get a Free Consultation
                        </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WebHome;

