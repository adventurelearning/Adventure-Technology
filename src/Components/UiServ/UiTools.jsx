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
    const technologies = [
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
          <div className="bg-black py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                        Technologies We Use
                    </h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                            {technologies.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex flex-col items-center gap-2 p-6 w-full max-w-[220px] h-auto rounded-xl 
                                    bg-gray-800/50 border border-gray-700 shadow-md 
                                    backdrop-blur-md text-center"
                                >
                                    <div className="flex flex-col items-center justify-between flex-grow">
                                        <tech.icon className={`w-16 h-16 sm:w-20 sm:h-20 ${tech.color}`} />
                                        <p className="text-white font-semibold text-base sm:text-lg mt-2">
                                            {tech.name}
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
