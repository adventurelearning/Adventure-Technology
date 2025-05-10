import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const DataOffer = () => {
    const offers = [
        { name: "Data Analysis & Visualization" },
        { name: "Predictive Modeling & Forecasting" },
        { name: "Data Cleaning & Preprocessing" },
        { name: "Business Intelligence Solutions" },
        { name: "Machine Learning & AI Model Development" },
        { name: "Custom Data Dashboards & Reports" },
    ];

    return (
        <div className="bg-black py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side: Text Content */}
                <div className="text-start md:text-left md:w-1/2 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
                    >
                        Data Science & <span className="block text-blue-400">Analytics</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        className="text-2xl text-gray-200"
                    >
                        Unlock Insights and Make Data-Driven Decisions
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                    >
                         <Link to="/Contact">
                            <button
                                className="text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl
                                       transition-all duration-300 hover:scale-105
                                       border-2 border-white"
                            >
                                Start Your Project <span className="pl-3"><i className="bi bi-arrow-right"></i></span>
                            </button>
                        </Link>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Data science and analytics play a critical role in transforming raw data into actionable insights. Whether you need to analyze large datasets, build predictive models, or create custom dashboards, our team is ready to help you leverage the power of data to drive your business forward.
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
                        What We Do in Data Science & Analytics
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

export default DataOffer;
