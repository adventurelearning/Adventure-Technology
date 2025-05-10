import React from 'react';
import { motion } from 'framer-motion';

const EmbOffer = () => {
    const offers = [
        { name: "Firmware Development" },
        { name: "Board Support Packages (BSP)" },
        { name: "Device Driver Integration" },
        { name: "Middleware Development" },
        { name: "RTOS Porting & Optimization" },
        { name: "Embedded Linux & Bare Metal Systems" },
    ];

    return (
        <div className="bg-black py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Side: Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
                    >
                        Embedded Software <span className="block text-blue-400">Engineering</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        className="text-2xl text-gray-200"
                    >
                        Building Intelligent Firmware and System Software for Embedded Devices
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                    >
                        <button
                            className="text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white"
                        >
                            Consult with Us <span className="pl-3"><i className="bi bi-arrow-right"></i></span>
                        </button>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Our embedded software services cover everything from low-level firmware to high-performance real-time OS development and BSP customization. Whether it's bare-metal programming, device driver creation, or middleware integration, we help bring robust, reliable, and scalable solutions to life on your hardware.
                    </motion.p>
                </div>

                {/* Right Side: What We Offer Section */}
                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
                        className="text-2xl font-semibold text-white uppercase tracking-wider mb-8 border-b border-gray-700 pb-3"
                    >
                        What We Offer
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {offers.map((offer) => (
                            <motion.div
                                key={offer.name}
                                className="group p-0.5 rounded-lg bg-gradient-to-br from-black via-gray-900 to-cyan-950 border border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 1 }}
                            >
                                <div className="flex items-center gap-3 rounded-md px-4 py-3">
                                    <span className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors duration-200">
                                        {offer.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmbOffer;
