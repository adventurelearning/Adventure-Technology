import React from 'react';
import { motion } from 'framer-motion';
import {
    BookHalf,           // Discovery & Requirements Gathering
    PenFill,            // IT Infrastructure Design
    CodeSlash,          // IT Systems Development
    ClipboardCheckFill, // Testing & Optimization
    RocketTakeoffFill,  // Deployment & System Integration
    Tools               // Ongoing IT Support & Maintenance
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discovery & Requirements Gathering',
        description: 'We collaborate with you to assess your current IT infrastructure, understand business goals, and design the right IT solutions for your manufacturing needs.',
        icon: <BookHalf className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery Icon" />,
    },
    {
        title: 'IT Infrastructure Design',
        description: 'Our team designs robust, scalable, and secure IT infrastructure that supports the unique needs of your manufacturing operations.',
        icon: <PenFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Design Icon" />,
    },
    {
        title: 'IT Systems Development',
        description: 'We develop and integrate advanced IT systems that automate processes, improve operational efficiency, and enable real-time data monitoring in your manufacturing environment.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Development Icon" />,
    },
    {
        title: 'Testing & Optimization',
        description: 'We ensure all systems are thoroughly tested, optimized for peak performance, and ready to handle the demands of your manufacturing operations.',
        icon: <ClipboardCheckFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing Icon" />,
    },
    {
        title: 'Deployment & System Integration',
        description: 'We ensure seamless deployment and integration of IT systems across your manufacturing operations, minimizing downtime and disruptions.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Launch Icon" />,
    },
    {
        title: 'Ongoing IT Support & Maintenance',
        description: 'We provide continuous IT support, system monitoring, and maintenance to ensure your infrastructure remains secure, efficient, and up-to-date.',
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

const ManufacturingProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Manufacturing IT Services & Solutions Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Designing secure, scalable, and high-performance IT infrastructure for manufacturing excellence
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

export default ManufacturingProcess;
