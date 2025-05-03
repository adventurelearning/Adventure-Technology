import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,        // Discovery & Research
    BrushFill,          // UI/UX Design
    Layers,             // Prototyping
    PersonCircle,       // User Testing
    FileLock,           // Accessibility & Standards
    Wrench              // Maintenance & Iteration
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discovery & Research',
        description: 'We start by understanding your users, their needs, and the business goals to inform our design decisions.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery and Research Icon" />,
    },
    {
        title: 'UI/UX Design',
        description: 'We create user-centered, visually appealing designs, focusing on seamless experiences and brand consistency.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="UI/UX Design Icon" />,
    },
    {
        title: 'Prototyping',
        description: 'We turn designs into interactive prototypes to visualize how the product will function and feel.',
        icon: <Layers className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Prototyping Icon" />,
    },
    {
        title: 'User Testing',
        description: 'We conduct usability tests to validate designs with real users and gather feedback for improvements.',
        icon: <PersonCircle className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="User Testing Icon" />,
    },
    {
        title: 'Accessibility & Standards',
        description: 'We ensure that your product meets accessibility standards and is usable by all, regardless of ability.',
        icon: <FileLock className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Accessibility and Standards Icon" />,
    },
    {
        title: 'Maintenance & Iteration',
        description: 'After launch, we continue monitoring user feedback, iterating on designs, and enhancing the product to improve performance.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance and Iteration Icon" />,
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

const UiUxDesignProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our UI/UX Design Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Delivering intuitive and accessible designs at every stage
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

export default UiUxDesignProcess;
