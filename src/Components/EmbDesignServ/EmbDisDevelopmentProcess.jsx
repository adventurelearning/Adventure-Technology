import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,        // Requirements & Planning
    BrushFill,          // Hardware Design
    CodeSlash,          // Firmware Development
    BugFill,            // Testing & Validation
    RocketTakeoffFill,  // Production & Deployment
    Wrench              // Post-Deployment Support
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Requirements & Planning',
        description: 'We define system specifications, user requirements, and plan hardware-software architecture.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Requirements and Planning Icon" />,
    },
    {
        title: 'Hardware Design',
        description: 'We design schematics, create PCB layouts, and select appropriate microcontrollers and components.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Hardware Design Icon" />,
    },
    {
        title: 'Firmware Development',
        description: 'We write efficient embedded code, configure drivers, and ensure seamless hardware interaction.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Firmware Development Icon" />,
    },
    {
        title: 'Testing & Validation',
        description: 'We conduct unit tests, functional verification, and compliance validation for hardware and firmware.',
        icon: <BugFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing and Validation Icon" />,
    },
    {
        title: 'Production & Deployment',
        description: 'We support prototyping, pre-compliance, and transition your product into full-scale production.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Production and Deployment Icon" />,
    },
    {
        title: 'Post-Deployment Support',
        description: 'We provide firmware updates, debugging, and product enhancements post-deployment.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Post-Deployment Support Icon" />,
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

const EmbDisDevelopmentProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Embedded Product Design Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    From concept to production—precision at every stage
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

export default EmbDisDevelopmentProcess;
