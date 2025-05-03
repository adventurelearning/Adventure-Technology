import React from 'react';
import { motion } from 'framer-motion';
import {
    BiNetworkChart,
    BiCloud,
    BiDesktop,
    BiChip,  // Use BiChip as an alternative for BiCpu
    BiBuilding,
    BiServer,
    BiPowerOff,
} from 'react-icons/bi';

const IotTools = () => {
    const technologies = [
        { name: 'AWS IoT', icon: BiCloud, color: 'text-orange-500' },
        { name: 'Azure IoT', icon: BiCloud, color: 'text-blue-600' },
        { name: 'Google Cloud IoT', icon: BiCloud, color: 'text-yellow-400' },
        { name: 'Device Management', icon: BiNetworkChart, color: 'text-green-600' },
        { name: 'Raspberry Pi', icon: BiChip, color: 'text-red-600' },  // Replace with BiChip
        { name: 'Kubernetes', icon: BiServer, color: 'text-blue-500' },
        { name: 'Linux', icon: BiChip, color: 'text-gray-600' },  // Replace with BiChip
        { name: 'IoT Protocols', icon: BiPowerOff, color: 'text-green-400' },
    ];

    return (
        <div className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    IoT Tools & Technologies We Use
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

export default IotTools;
