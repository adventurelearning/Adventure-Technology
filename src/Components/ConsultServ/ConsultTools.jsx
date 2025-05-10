import React from 'react';
import { motion } from 'framer-motion';
import {
    BiLock,
    BiBarChartAlt2,
    BiCodeAlt,
    BiCloud,
    BiSupport,
    BiCog,
  } from 'react-icons/bi';
  

const ConsultTools= () => {
    const services = [
        {
            name: 'Cybersecurity & Risk Management',
            icon: <BiLock className="text-red-500" size={52} />,
           
        },
        {
            name: 'Data Analytics & Business Intelligence',
            icon: <BiBarChartAlt2 className="text-blue-500" size={52} />,

        },
        {
            name: 'Software Development & Integration',
            icon: <BiCodeAlt className="text-green-500" size={52} />,
            
        },
        {
            name: 'Cloud Solutions & Migration',
            icon: <BiCloud className="text-purple-500" size={52} />,
          
        },
        {
            name: 'IT Support & Managed Services',
            icon: <BiSupport className="text-orange-500" size={52} />,
           
        },
        {
            name: 'Process Automation & Optimization',
            icon: <BiCog className="text-teal-500" size={52} />,
           
        },
    ];
    

    return (
        <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
                    IT Consulting Services We Offer
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {services.map((service) => (
                            <motion.div
                                key={service.name}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center gap-4 p-6 w-60 h-auto rounded-xl bg-gray-800/50 border border-gray-700 shadow-md backdrop-blur-md text-center transition-all duration-300"
                            >
                                <div className="flex flex-col items-center justify-between flex-grow">
                                    {service.icon}
                                    <p className="text-white font-semibold text-lg mt-2">{service.name}</p>
                                    <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ConsultTools;
