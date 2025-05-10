import React from 'react';
import { motion } from 'framer-motion';
import {
    CompassFill,        // Discovery & Planning
    BrushFill,          // Data Collection & Preparation
    CodeSlash,          // Model Training & Algorithm Selection
    BugFill,            // Model Evaluation & Testing
    RocketTakeoffFill,  // Deployment & Integration
    Wrench              // Maintenance & Continuous Improvement
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discover & Planning',
        description: 'We define AI & ML goals, research data sources, and outline the project strategy.',
        icon: <CompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery and Planning Icon" />,
    },
    {
        title: 'Data Collection & Preparation',
        description: 'We gather, clean, and pre-process data to ensure it is ready for model training.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Data Collection & Preparation Icon" />,
    },
    {
        title: 'Model Training & Algorithm Selection',
        description: 'We choose and train AI/ML models based on your needs, selecting the most effective algorithms.',
        icon: <CodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Model Training & Algorithm Selection Icon" />,
    },
    {
        title: 'Model Evaluation & Testing',
        description: 'We rigorously test the model, evaluating it using key metrics to ensure accuracy and reliability.',
        icon: <BugFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Model Evaluation & Testing Icon" />,
    },
    {
        title: 'Deployment & Integration',
        description: 'We deploy the trained model into your production environment, ensuring real-time predictions.',
        icon: <RocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Deployment & Integration Icon" />,
    },
    {
        title: 'Maintenance & Continuous Improvement',
        description: 'We monitor and continuously improve your model with new data and updates.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance & Continuous Improvement Icon" />,
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

const AiDevelopmentProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6 ">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our AI & ML Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Delivering AI & ML solutions with precision at every stage</h3>

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

export default AiDevelopmentProcess;
