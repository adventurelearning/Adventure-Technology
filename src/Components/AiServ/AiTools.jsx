import React from 'react';
import { motion } from 'framer-motion';

const AiTools = () => {
    const technologies = [
        { name: 'TensorFlow', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
        { name: 'Tableau', image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        { name: 'PyTorch', image: 'https://easyai.tech/wp-content/uploads/2019/01/pytorch.png' },
        { name: 'Scikit-learn', image: 'https://cdn.prod.website-files.com/65264f6bf54e751c3a776db1/66d86935aaeb8c0b9fa1bde7_scikit-learn.png' },
        { name: 'Power BI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png' },
    ];

    return (
        <div className="bg-black py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    AI & ML Solutions
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
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
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
