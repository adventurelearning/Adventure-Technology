import React from 'react';
import { motion } from 'framer-motion';

const SoftTools = () => {
    const technologies = [
        {
            name: 'Flutter',
            image: 'https://www.svgrepo.com/show/353751/flutter.svg',
        },
        {
            name: 'React Native',
            image: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png',
        },
        {
            name: 'Swift (iOS)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg',
        },
        {
            name: 'Kotlin (Android)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
        },
        {
            name: 'Android Studio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png',
        },
        {
            name: 'Ionic',
            image: 'https://www.svgrepo.com/show/373687/ionic.svg',
        },
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
                                className="flex flex-col items-center gap-4 p-6 w-full max-w-[220px] h-auto rounded-xl 
                                bg-gray-800/50 border border-gray-700 shadow-md 
                                backdrop-blur-md text-center"
                            >
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                                <p className="text-white font-semibold text-base sm:text-lg">
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
