import React from 'react';
import { motion } from 'framer-motion';
import {
    BiLogoReact,
    BiLogoAngular,
    BiLogoVuejs,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoTailwindCss,
} from 'react-icons/bi';

const SoftTools = () => {
    const technologies = [
        { name: 'HTML5', icon: BiLogoHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: BiLogoCss3, color: 'text-blue-600' },
        { name: 'JavaScript', icon: BiLogoJavascript, color: 'text-yellow-400' },
        { name: 'Vue.js', icon: BiLogoVuejs, color: 'text-green-600' },
        { name: 'React', icon: BiLogoReact, color: 'text-blue-500' },
        { name: 'Tailwind', icon: BiLogoTailwindCss, color: 'text-cyan-400' },
        { name: 'Node.js', icon: BiLogoNodejs, color: 'text-green-500' },
        { name: 'MongoDB', icon: BiLogoMongodb, color: 'text-green-600' },
    ];

    return (
        <div className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    Technologies We Use
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            {technologies.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex flex-col items-center gap-2 p-6 w-60 h-35 rounded-xl 
                 bg-gray-800/50 border border-gray-700 shadow-md 
                 backdrop-blur-md text-center"
                                >
                                    <div className="flex flex-col items-center justify-between flex-grow">
                                        <tech.icon className={`w-18 h-18 ${tech.color}`} />
                                        {tech.name && (
                                            <p className="text-white font-semibold text-base mt-1">
                                                {tech.name}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SoftTools;
