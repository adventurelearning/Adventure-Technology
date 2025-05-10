import React from 'react';
import { motion } from 'framer-motion';
import {
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiKeras,
    SiPython,
    SiNumpy,
    SiPandas,
    SiJupyter,
} from 'react-icons/si';

const AiTools = () => {
    const technologies = [
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-green-500' },
        { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-yellow-500' },
        { name: 'Keras', icon: SiKeras, color: 'text-orange-400' },
        { name: 'Python', icon: SiPython, color: 'text-blue-500' },
        { name: 'NumPy', icon: SiNumpy, color: 'text-blue-400' },
        { name: 'Pandas', icon: SiPandas, color: 'text-green-600' },
        { name: 'Jupyter', icon: SiJupyter, color: 'text-yellow-600' },
   
    ];

    return (
              <div className="bg-black py-10 ">
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

export default AiTools;
