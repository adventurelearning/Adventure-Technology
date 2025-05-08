import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiUsers } from 'react-icons/fi';

const AboutMission = () => {
    const [activeTab, setActiveTab] = useState('mission');
    
    const tabContent = {
        mission: {
            title: "Our Mission",
            content: "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe technology should work for people, not the other way around.",
            icon: <FiAward className="text-blue-400 text-4xl" />
        },
        vision: {
            title: "Our Vision",
            content: "To be the most trusted technology partner for businesses worldwide, recognized for our integrity, innovation, and exceptional results. We envision a future where technology seamlessly enhances every aspect of business operations.",
            icon: <FiGlobe className="text-blue-400 text-4xl" />
        },
        values: {
            title: "Our Values",
            content: "Innovation, Integrity, Collaboration, and Excellence guide everything we do. We're committed to continuous learning, ethical practices, and delivering beyond expectations.",
            icon: <FiUsers className="text-blue-400 text-4xl" />
        }
    };

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                        What Drives Us
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="inline-flex rounded-full p-1 bg-gray-900 border border-gray-800 shadow-lg">
                        {['mission', 'vision', 'values'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-base sm:text-base font-medium transition-all duration-300 ${
                                    activeTab === tab 
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-cyan-500/20' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="p-8 sm:p-10 rounded-xl max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-xl"
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-800 bg-opacity-60">
                            {tabContent[activeTab].icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 ">
                            {tabContent[activeTab].title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {tabContent[activeTab].content}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutMission;