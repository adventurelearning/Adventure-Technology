import React from 'react';
import { motion } from 'framer-motion';
import {
    BookHalf,           // Requirements & Planning
    PenFill,            // System Design
    CodeSlash,          // Embedded Software Development
    ClipboardCheckFill, // Testing & Validation
    RocketTakeoffFill,  // Deployment & Go-Live
    Tools               // Ongoing Support & Updates
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Requirements Analysis & Planning',
        description: 'We work with you to define your automation needs, goals, and technical specifications for optimized industrial systems.',
        icon: <BookHalf className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery Icon" />,
    },
    {
        title: 'Industrial System Design',
        description: 'We design robust, scalable, and efficient automation systems tailored to your specific industrial needs, including hardware and software integration.',
        icon: <PenFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Design Icon" />,
    },
    {
        title: 'Automation Software Development',
        description: 'We develop high-performance control software, embedded systems, and firmware to enable seamless automation across your industrial processes.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Development Icon" />,
    },
    {
        title: 'Testing & Validation',
        description: 'We conduct extensive testing to ensure the automation system meets all safety standards, regulatory compliance, and integrates seamlessly with other machinery.',
        icon: <ClipboardCheckFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing Icon" />,
    },
    {
        title: 'Deployment & Go-Live',
        description: 'We ensure a smooth deployment of the automation systems into your industrial environment, minimizing downtime and ensuring optimal functionality.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Launch Icon" />,
    },
    {
        title: 'Ongoing Support & Updates',
        description: 'We provide continuous monitoring, updates, and system support to ensure your automation solutions remain efficient, reliable, and optimized for evolving needs.',
        icon: <Tools className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Support Icon" />,
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

const IndustrialProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-8">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Industrial Automation Engineering Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Transforming industrial concepts into smart, reliable, and efficient automation systems
                </h3>

                <div className="border border-gray-700 rounded-xl p-2 md:p-10 backdrop-blur-md bg-gray-800/30 mt-12">
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

export default IndustrialProcess;
