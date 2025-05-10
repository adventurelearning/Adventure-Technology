import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython,
    SiJavascript,
    SiDotnet,
    SiNodedotjs,
    SiMongodb,
    SiDocker,
    SiPostgresql,
    SiGithub,
} from 'react-icons/si';

const SoftTools = () => {
    const technologies = [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
        { name: '.NET', icon: SiDotnet, color: 'text-purple-600' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
        { name: 'GitHub', icon: SiGithub, color: 'text-gray-400' },
    ];

    return (
        <div className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    Tools & Technologies We Use
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {technologies.map((tech) => (
                            <motion.div
                                key={tech.name}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-2 p-6 w-60 h-35 rounded-xl 
                                bg-gray-800/50 border border-gray-700 shadow-md 
                                backdrop-blur-md text-center"
                            >
                                <tech.icon className={`w-18 h-18 ${tech.color}`} />
                                <p className="text-white font-semibold text-base mt-1">
                                    {tech.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SoftTools;
