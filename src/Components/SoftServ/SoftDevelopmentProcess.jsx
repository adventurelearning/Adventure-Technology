import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,        // Discovery & Planning
    BrushFill,          // UI/UX Design
    CodeSlash,          // Development
    BugFill,            // Testing & Quality Assurance
    RocketTakeoffFill,  // Deployment & Launch
    Wrench              // Maintenance & Support
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discovery & Planning',
        description: 'We define your goals, analyze requirements, and create a strategic development roadmap.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery and Planning Icon" />,
    },
    {
        title: 'UI/UX Design',
        description: 'We design intuitive, accessible, and consistent user experiences across platforms.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="UI/UX Design Icon" />,
    },
    {
        title: 'Development',
        description: 'We build scalable and secure software using modern frameworks and best practices.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Development Icon" />,
    },
    {
        title: 'Testing & Quality Assurance',
        description: 'Rigorous testing ensures your software is stable, secure, and meets all functional requirements.',
        icon: <BugFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing and Quality Assurance Icon" />,
    },
    {
        title: 'Deployment & Launch',
        description: 'We deploy to your chosen environment with full optimization and support for rollout.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Deployment and Launch Icon" />,
    },
    {
        title: 'Maintenance & Support',
        description: 'Ongoing monitoring, improvements, and updates keep your software secure and up-to-date.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance and Support Icon" />,
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

const SoftDevelopmentProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6 ">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Software Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Building reliable, secure, and scalable software from idea to execution
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

export default SoftDevelopmentProcess;
