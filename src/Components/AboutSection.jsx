import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers, FiGlobe, FiCode } from 'react-icons/fi';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('mission');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const tabContent = {
        mission: {
            title: "Our Mission",
            content: "To push boundaries through technology that solves real problems. We build solutions that matter.",
            icon: <FiAward className="text-blue-400 text-3xl mb-4" />
        },
        vision: {
            title: "Our Vision",
            content: "A world where technology enhances every human experience without complexity.",
            icon: <FiGlobe className="text-blue-400 text-3xl mb-4" />
        },
        values: {
            title: "Our Values",
            content: "Innovation with purpose. Collaboration without ego. Excellence in execution.",
            icon: <FiUsers className="text-blue-400 text-3xl mb-4" />
        }
    };

    return (
        <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">


            <div className="max-w-7xl mx-auto relative z-10 space-y-20">
                {/* Main content with image on left and text on right */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1]">
                            <img
                                src="https://img.freepik.com/free-photo/group-business-executives-discussing-laptop-their-des_1170-1978.jpg?t=st=1746601281~exp=1746604881~hmac=9f95f44d9b88c49bf845df9eb6a9d5ee80a45215513fa5258602a6ba44af7f04&w=740"
                                alt="Team working together"
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 0.3 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute bottom-8 left-8 text-white"
                            >
                                <h3 className="text-3xl font-bold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                                        Join Our Team
                                    </span>
                                </h3>
                                <p className="text-blue-200 mt-2">Where innovation meets collaboration</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <span className="text-lg font-medium text-blue-400 bg-blue-900/30 px-3 py-1.5 rounded-full inline-flex items-center">
                                <FiCode className="mr-2" /> About Us
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            We Build {"  "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                The Future
                            </span>

                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-gray-300 leading-relaxed">
                                At Adventure Technology, we're not just a tech company—we're your partners in digital transformation.
                                Our journey began with a shared belief in the power of technology to shape a better future.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                Today, we specialize in delivering innovative and scalable solutions to help businesses of all sizes
                                thrive in an ever-evolving digital landscape.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg transition-all flex items-center"
                                >
                                    View Open Positions <FiArrowRight className="ml-2" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border border-gray-600 hover:border-gray-500 text-white px-8 py-3.5 rounded-lg font-medium shadow-sm transition-all"
                                >
                                    Our Culture
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;