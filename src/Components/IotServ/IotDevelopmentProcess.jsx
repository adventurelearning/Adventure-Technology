import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,        // Discovery & Planning
    BrushFill,          // UI/UX Design
    Gear,               // Hardware Setup
    FileLock,           // Security & Authentication
    CloudDownload,      // Cloud Integration
    Tools               // Ongoing Maintenance & Support
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discovery & Planning',
        description: 'We define IoT goals, identify devices, and plan the architecture for your IoT system.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery and Planning Icon" />,
    },
    {
        title: 'Hardware Setup',
        description: 'We select the right sensors, actuators, and IoT devices for seamless data collection.',
        icon: <Gear className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Hardware Setup Icon" />,
    },
    {
        title: 'Connectivity & Network Setup',
        description: 'We establish secure and reliable connectivity via protocols like MQTT, HTTP, or CoAP.',
        icon: <FileLock className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Connectivity and Network Setup Icon" />,
    },
    {
        title: 'Cloud Integration',
        description: 'We integrate your IoT system with cloud platforms to enable data storage, analysis, and remote access.',
        icon: <CloudDownload className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Cloud Integration Icon" />,
    },
    {
        title: 'Data Analytics & Insights',
        description: 'We implement data processing, machine learning, and AI for actionable insights and predictions.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Data Analytics Icon" />,
    },
    {
        title: 'Maintenance & Support',
        description: 'We offer ongoing support, firmware updates, and monitoring to ensure optimal IoT device performance.',
        icon: <Tools className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance and Support Icon" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const IotDevelopmentProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our IoT Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Seamlessly integrating IoT from concept to maintenance
                </h3>

                <div className="border border-gray-700 rounded-xl p-10 backdrop-blur-md bg-gray-800/30 mt-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative p-4 border border-gray-600 rounded-md hover:shadow-md transition duration-300"
                            >
                                {step.icon}
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>

                                {/* Optional directional arrow for horizontal flow */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 right-[-28px] transform -translate-y-1/2 text-blue-500 font-bold text-lg">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default IotDevelopmentProcess;
