import React from 'react';
import { motion } from 'framer-motion';
import {
    BookHalf,           // Discovery & Requirements Gathering
    PenFill,            // UI/UX Design
    CodeSlash,          // SaaS App Development
    ClipboardCheckFill, // Testing & Quality Assurance
    RocketTakeoffFill,  // Deployment & Go-Live
    Tools               // Ongoing Support & Maintenance
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discovery & Requirements Gathering',
        description: 'We collaborate with you to define business objectives, key features, and user personas for your SaaS platform.',
        icon: <BookHalf className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery Icon" />,
    },
    {
        title: 'UI/UX Design for SaaS Users',
        description: 'Our design team creates intuitive and engaging user interfaces that ensure seamless interactions and excellent user experience.',
        icon: <PenFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Design Icon" />,
    },
    {
        title: 'SaaS App Development',
        description: 'We develop scalable, secure, and high-performance SaaS platforms using the latest technologies and cloud infrastructure.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Development Icon" />,
    },
    {
        title: 'Testing & Quality Assurance',
        description: 'We perform extensive testing to ensure your platform is bug-free, secure, and optimized for performance.',
        icon: <ClipboardCheckFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing Icon" />,
    },
    {
        title: 'Deployment & Go-Live',
        description: 'We ensure a smooth deployment process and go-live with minimal disruptions, making sure your SaaS platform is fully operational.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Launch Icon" />,
    },
    {
        title: 'Ongoing Support & Maintenance',
        description: 'We provide continuous support, updates, and feature enhancements to ensure your SaaS solution evolves with business needs.',
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

const SaaSProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our SaaS Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Building secure, scalable, and future-proof SaaS platforms for businesses
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

export default SaaSProcess;
