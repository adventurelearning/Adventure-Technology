import React from 'react';
import { motion } from 'framer-motion';
import {
    SiFigma,
    SiAdobephotoshop,
    SiAdobexd,
    SiSketch,
    SiFramer,
    SiInvision,
    SiMiro,
    SiCanva,
} from 'react-icons/si';

const UiTools = () => {
    const designTools = [
        { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
        { name: 'Adobe XD', icon: SiAdobexd, color: 'text-purple-500' },
        { name: 'Sketch', icon: SiSketch, color: 'text-orange-400' },
        { name: 'Framer', icon: SiFramer, color: 'text-blue-500' },
        { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-600' },
        { name: 'InVision', icon: SiInvision, color: 'text-pink-400' },
        { name: 'Miro', icon: SiMiro, color: 'text-yellow-400' },
        { name: 'Canva', icon: SiCanva, color: 'text-cyan-400' },
    ];

    return (
        <div className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    UI/UX Tools We Use
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {designTools.map((tool) => (
                            <motion.div
                                key={tool.name}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-2 p-6 w-60 h-35 rounded-xl 
                                    bg-gray-800/50 border border-gray-700 shadow-md 
                                    backdrop-blur-md text-center"
                            >
                                <div className="flex flex-col items-center justify-between flex-grow">
                                    <tool.icon className={`w-14 h-14 ${tool.color}`} />
                                    <p className="text-white font-semibold text-base mt-2">
                                        {tool.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UiTools;
