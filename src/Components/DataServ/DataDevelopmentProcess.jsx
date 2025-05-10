import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText,           // Problem Definition & Objective Setting
    BrushFill,          // Data Collection & Preparation
    BarChart,           // Exploratory Data Analysis (EDA)
    GraphUp,            // Model Selection & Evaluation
    Box,                // Deployment & Reporting
    Wrench              // Monitoring & Continuous Improvement
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Problem Definition & Objective Setting',
        description: 'We define the business problem, set clear objectives, and outline the analytics goals.',
        icon: <FileText className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Problem Definition & Objective Setting Icon" />,
    },
    {
        title: 'Data Collection & Preparation',
        description: 'We gather, clean, and pre-process data to ensure it is ready for analysis.',
        icon: <BrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Data Collection & Preparation Icon" />,
    },
    {
        title: 'Exploratory Data Analysis (EDA)',
        description: 'We explore the data to understand patterns, distributions, and key relationships.',
        icon: <BarChart className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Exploratory Data Analysis (EDA) Icon" />,
    },
    {
        title: 'Model Selection & Evaluation',
        description: 'We select the appropriate models and evaluate their performance using various metrics.',
        icon: <GraphUp className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Model Selection & Evaluation Icon" />,
    },
    {
        title: 'Deployment & Reporting',
        description: 'We deploy the models and present the findings through reports and interactive dashboards.',
        icon: <Box className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Deployment & Reporting Icon" />,
    },
    {
        title: 'Monitoring & Continuous Improvement',
        description: 'We monitor the model performance and continuously improve it with new data and insights.',
        icon: <Wrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Monitoring & Continuous Improvement Icon" />,
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

const DataScienceProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Data Science & Analytics Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Delivering actionable insights through precision at every stage
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

export default DataScienceProcess;
