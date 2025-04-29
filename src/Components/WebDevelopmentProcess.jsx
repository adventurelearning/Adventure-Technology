import React from 'react';
import { motion } from 'framer-motion';
import {
    RocketFill,
    DatabaseFill,
    CpuFill,
    FileCodeFill,
    LightningChargeFill,
    GearFill
} from 'react-bootstrap-icons';

const WebDevelopmentProcess = () => {
    const processSteps = [
        {
            title: 'Discovery & Planning',
            description: 'We begin by understanding your vision, business requirements, and user needs. This phase includes research, technical consultation, and defining the scope and timeline.',
            icon: <RocketFill className="text-primary mb-4" size={40} />,
        },
        {
            title: ' UI/UX Design',
            description: 'Our design team creates intuitive and engaging user interfaces that reflect your brand and enhance usability. Wireframes and mockups are reviewed with you before development begins.',
            icon: <DatabaseFill className="text-purple-500 mb-4" size={40} />,
        },
        {
            title: 'Development',
            description: 'Using modern frameworks and coding best practices, our developers bring your application to life. We follow agile methods with iterative development and regular client feedback.',
            icon: <CpuFill className="text-green-500 mb-4" size={40} />,
        },
        {
            title: 'Testing & Quality Assurance',
            description: 'We rigorously test your web app across browsers and devices for functionality, performance, and security. Bugs are fixed, and the product is polished before launch.',
            icon: <FileCodeFill className="text-yellow-500 mb-4" size={40} />,
        },
        {
            title: 'Deployment & Launch',
            description: 'Easily customize your app\'s interface and workflows without writing code, then redeploy.',
            icon: <LightningChargeFill className="text-pink-500 mb-4" size={40} />,
        },
        {
            title: 'Maintenance & Support',
            description: 'Post-launch, we provide ongoing support, monitor performance, and update your app as needed. Whether it’s adding features or fixing issues, we’re here to help.',
            icon: <GearFill className="text-orange-500 mb-4" size={40} />,
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

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    Our Web Development Process
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center text-white p-6 rounded-lg
                                     bg-gray-800/50 border border-gray-700 shadow-md
                                     hover:shadow-lg hover:border-gray-600 transition-all duration-300
                                     backdrop-blur-md flex flex-col items-center justify-center"
                        >
                            {step.icon}
                            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default WebDevelopmentProcess;
