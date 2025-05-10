import React from 'react';
import { motion } from 'framer-motion';

const IotTools = () => {
    const iotTools = [
        { name: 'Arduino IDE', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png' },
        { name: 'NodeRED', image: 'https://nodered.org/about/resources/media/node-red-icon.svg' },
        { name: 'PlatformIO', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PlatformIO_logo.svg/2500px-PlatformIO_logo.svg.png' },
        { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
        { name: 'Blynk', image: 'https://avatars.githubusercontent.com/u/11541426?v=4' },
    ];

    return (
        <div className="bg-black py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    IOT Development Tools
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {iotTools.map((tool) => (
                            <motion.div
                                key={tool.name}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-2 p-6 w-full max-w-[220px] h-auto rounded-xl 
                                bg-gray-800/50 border border-gray-700 shadow-md 
                                backdrop-blur-md text-center"
                            >
                                <div className="flex flex-col items-center justify-between flex-grow">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <p className="text-white font-semibold text-base sm:text-lg mt-2">
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

export default IotTools;
