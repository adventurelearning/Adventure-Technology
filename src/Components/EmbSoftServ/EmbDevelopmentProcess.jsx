import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,      // Requirement Analysis & Planning
    BrushFill,        // Hardware Abstraction & BSP
    CodeSlash,        // Firmware Development
    BugFill,          // Testing & Validation
    RocketTakeoffFill, // Integration & Deployment
    Wrench            // Maintenance & Optimization
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Requirement Analysis & Planning',
        description: 'We gather system specifications and define project goals, ensuring the firmware aligns with hardware and product needs.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Planning Icon" />,
    },
    {
        title: 'Hardware Abstraction & BSP',
        description: 'We create Board Support Packages (BSP), configure bootloaders, and build HAL layers for your target hardware.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="BSP Icon" />,
    },
    {
        title: 'Firmware & Middleware Development',
        description: 'We develop embedded firmware and middleware components, including drivers, protocol stacks, and service layers.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Firmware Icon" />,
    },
    {
        title: 'Testing & Validation',
        description: 'We conduct unit testing, hardware-in-the-loop (HIL) simulations, and functional validation to ensure robust software.',
        icon: <BugFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing Icon" />,
    },
    {
        title: 'Integration & Deployment',
        description: 'We integrate firmware with hardware and deploy the system, ensuring correct behavior and seamless startup.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Deployment Icon" />,
    },
    {
        title: 'Maintenance & Optimization',
        description: 'We provide long-term support, bug fixes, performance tuning, and firmware updates to extend product lifecycle.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance Icon" />,
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

const EmbDevelopmentProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6 ">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Embedded Software Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Delivering reliable, efficient embedded solutions from concept to deployment
                </h3>

                <div className="border border-gray-700 rounded-xl p-2 md:p-10 backdrop-blur-md bg-gray-800/30 mt-5 md:mt-12">
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

                                {/* Optional directional arrow */}
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

export default EmbDevelopmentProcess;
