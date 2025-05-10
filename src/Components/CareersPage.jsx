import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CareerPage = () => {

   

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits = [
        "Competitive salary and benefits package",
        "Opportunity for growth and career development",
        "Work with a talented team on exciting projects",
        "Flexible work environment and remote options",
        "Medical insurance for the whole family"
    ];

    return (
        <div className="min-h-screen bg-black  px-4 md:px-6 lg:px-8 relative overflow-hidden gap-8">
            {/* Background pattern elements - You can add these back if needed */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main content with image on left and text on right */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
                            <img
                                src="https://img.freepik.com/free-photo/friends-study-session-learning-showing-peace-sign_23-2149265835.jpg?t=st=1746533622~exp=1746537222~hmac=6bc30a1472c0f9724a6fc573d121e5ddba0e181c1227c6995dac1a99eaa267a9&w=996"
                                alt="Team working together"
                                className="w-full h-auto object-cover  hover:grayscale-0 transition-all duration-500"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 "
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute bottom-8 left-8 text-white"
                            >
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Join Our Team
                                </h3>
                                <p className="text-blue-200">Where innovation meets collaboration</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div                           
                        >
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-3xl md:text-4xl font-semibold text-white mb-6"
                            >
                                Be a part of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-100">Something Great</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-lg text-gray-300 mb-8"
                            >
                                Welcome to our Career Page! We're looking for talented individuals passionate about building software and joining our dynamic team.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                                    <span>Why Join Us?</span>
                                    <motion.span
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                                        className="ml-2 text-blue-400"
                                    >
                                        ✨
                                    </motion.span>
                                </h2>

                                <ul className="space-y-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                            className="flex items-start group"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-900 transition-all"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-blue-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </motion.div>
                                            <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{benefit}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                           
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md  transition-all"
                                    >
                                        View Open Positions
                                    </motion.button>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gray-700/60 border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-gray-700 transition-all"
                                    >
                                        Learn About Our Culture
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional animated elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="mt-16 text-center"
                >                   
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className="inline-block text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                        Contact our recruitment team →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default CareerPage;