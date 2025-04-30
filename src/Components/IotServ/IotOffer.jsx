import React from 'react';
import { motion } from 'framer-motion';


const IotOffer = () => {
    const offers = [
        { name: "Custom Web Application Development" },
        { name: "E-commerce Web Development" },
        { name: "Responsive Web Design & Development" },
        { name: "API Development & Integration" },
        { name: "Cloud-Based Web Applications" },
        { name: "Maintenance & Support" },
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
                        Web App <span className="block text-blue-400">Development</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        className="text-2xl text-gray-200"
                    >
                        Transform Your Ideas into <span className="block ">Dynamic Web Applications</span>
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                    >
                        <button
                            variant="default"
                            size="lg"
                            className=" text-white
                                     px-8 py-3 rounded-full shadow-lg hover:shadow-xl
                                     transition-all duration-300 hover:scale-105
                                     border-2 border-white
                                    "
                        >
                            Get Started Today <span className="pl-3"><i className="bi bi-arrow-right"></i></span>
                        </button>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Web app development is at the core of modern business operations, helping companies
                        reach customers, streamline processes, and enhance user experiences. Whether you need a
                        custom-built solution, a complex enterprise app, or an e-commerce platform, our team is
                        here to provide tailored, scalable, and secure web app development services.
                    </motion.p>
                </div>

                {/* Right Side: What We Do Section */}
                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
                        className="text-2xl font-semibold text-white uppercase tracking-wider mb-8 border-b border-gray-700 pb-3"
                    >
                        What We Do in Web App Development
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {offers.map((offer) => (
                            <motion.div
                                key={offer.name}
                                className="group p-0.5 rounded-lg bg-gradient-to-br from-black via-gray-900 to-cyan-950
                                          border border-gray-700 transition-all duration-300
                                          hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
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

export default IotOffer;

