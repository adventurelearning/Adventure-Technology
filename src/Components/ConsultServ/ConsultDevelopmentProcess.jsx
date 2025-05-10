import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,       // Initial Consultation & Discovery
    ClipboardData,     // Business Analysis
    GraphUp,           // Strategy Development
    CpuFill,           // Technology Solutions
    GearFill,          // Implementation
    ChatDotsFill       // Ongoing Advisory & Support
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600'; // Updated for a consulting vibe
const iconSize = 40;

const processSteps = [
    {
        title: 'Initial Consultation & Discovery',
        description: 'Understanding your business goals, challenges, and current IT landscape.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery Icon" />,
    },
    {
        title: 'Business Analysis',
        description: 'We assess your workflows and systems to identify improvement opportunities.',
        icon: <ClipboardData className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Business Analysis Icon" />,
    },
    {
        title: 'Strategy Development',
        description: 'Creating a tailored IT strategy aligned with your business objectives.',
        icon: <GraphUp className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Strategy Icon" />,
    },
    {
        title: 'Technology Solutions',
        description: 'Recommending the best-fit tools, platforms, or custom solutions.',
        icon: <CpuFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Technology Icon" />,
    },
    {
        title: 'Implementation',
        description: 'Deploying solutions efficiently while ensuring minimal disruption.',
        icon: <GearFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Implementation Icon" />,
    },
    {
        title: 'Ongoing Advisory & Support',
        description: 'Continuous guidance and support to adapt to evolving needs.',
        icon: <ChatDotsFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Support Icon" />,
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

const ITConsultingProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our IT Consulting Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Empowering your business through strategic IT solutions
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

export default ITConsultingProcess;
