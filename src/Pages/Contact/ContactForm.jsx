import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Particle animation component (unchanged)
const Particles = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        class Particle {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.opacity = 0;
                this.fadeInSpeed = 0.02;
                this.velocity = {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2,
                };
            }

            draw() {
                if (this.opacity > 0) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.opacity;
                    ctx.fill();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            }

            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x;
                }
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y;
                }

                if (this.opacity < 1) {
                    this.opacity += this.fadeInSpeed;
                }
                this.draw();
            }
        }

        const initParticles = () => {
            particles.current = [];
            const numParticles = Math.min(300, window.innerWidth * 0.4);
            for (let i = 0; i < numParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 2 + 1;
                const color = `rgba(100, 100, 100, ${Math.random() * 0.3 + 0.1})`;
                particles.current.push(new Particle(x, y, radius, color));
            }
        };
        initParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.current.forEach(particle => particle.update());
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
};

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',      
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="bg-gradient-to-b from-blue-900 via-black to-blue-900 min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            <Particles />
            
            <div className="w-full max-w-6xl rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <motion.div 
                    className="p-8 md:p-12 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                        Ready to turn your project idea into <span className="text-blue-400">reality</span>?
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-8">
                        Get In Touch With Us
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Discovery Call",
                                description: "We'll discuss your vision and requirements in detail."
                            },
                            {
                                title: "Custom Proposal",
                                description: "You'll receive a tailored scope, timeline, and technology overview."
                            },
                            {
                                title: "Development Start",
                                description: "We finalize the plan and begin bringing your idea to life."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            >
                                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 group-hover:bg-blue-500 transition-colors">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>                            
                        ))}
                    </div>     
                                   
                </motion.div>

                {/* Right Form */}
                <motion.div 
                    className="p-8 md:p-12 flex items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 w-full max-w-lg">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                <p className="text-gray-400">We've received your message and will get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <>
                                <motion.h3
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-2xl font-bold text-white mb-6 text-center"
                                >
                                    Tell Us About Your Project
                                </motion.h3>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {[
                                        { id: 'name', type: 'text', placeholder: 'John Doe', icon: 'user' },
                                        { id: 'email', type: 'email', placeholder: 'john@example.com', icon: 'mail' },
                                        { id: 'phone', type: 'tel', placeholder: '+91 ', icon: 'phone' },                                       
                                    ].map(({ id, type, placeholder, icon }, i) => (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        {icon === 'user' && (
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        )}
                                                        {icon === 'mail' && (
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        )}
                                                        {icon === 'phone' && (
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        )}                                                       
                                                    </svg>
                                                </div>
                                                <input
                                                    type={type}
                                                    id={id}
                                                    name={id}
                                                    value={formData[id]}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                    placeholder={placeholder}
                                                    required={id !== 'company'}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                    >
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Describe your project in detail..."
                                            required
                                        ></textarea>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.4 }}
                                        className="flex items-center space-x-4"
                                    >
                                        <label className="flex items-center text-sm text-gray-400">
                                            <input 
                                                type="checkbox" 
                                                required 
                                                className="mr-2 rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500" 
                                            /> 
                                            I agree to the privacy policy
                                        </label>
                                    </motion.div>

                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1.6 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Send Message
                                    </motion.button>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactForm;