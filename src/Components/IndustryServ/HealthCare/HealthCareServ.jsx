import React, { useState } from 'react';
import { FaHeartbeat, FaBoxOpen, FaLaptopCode, FaCog, FaLaptop, FaStore, FaClinicMedical } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HealthCareServ = () => {
    const [activeCategory, setActiveCategory] = useState('Fitness and Wellness Apps');

    const categoriesData = [
        {
            name: 'Fitness and Wellness Apps',
            icon: <FaHeartbeat className="text-purple-400" />,
            description: 'Apps that help individuals maintain a healthy lifestyle by providing workout plans, diet tracking, and wellness routines.',
            stats: [
                { value: '5M+', label: 'Active users' },
                { value: '90%', label: 'Retention rate' },
                { value: '100+', label: 'Workout plans' }
            ],
            features: [
                'Personalized workout plans',
                'Meal tracking and recipes',
                'Progress tracking',
                'Fitness challenges'
            ]
        },
        {
            name: 'Healthcare Software Product Development',
            icon: <FaLaptopCode className="text-blue-400" />,
            description: 'Custom software development to create robust healthcare applications that meet the specific needs of healthcare providers and patients.',
            stats: [
                { value: '200+', label: 'Healthcare products developed' },
                { value: '98%', label: 'Client satisfaction rate' },
                { value: '10+', label: 'Years of experience' }
            ],
            features: [
                'Custom healthcare solutions',
                'Integrated with existing systems',
                'Secure and scalable applications',
                'Compliance with healthcare regulations'
            ]
        },
        {
            name: 'Healthcare Ecommerce Development',
            icon: <FaStore className="text-green-400" />,
            description: 'Developing ecommerce platforms that cater to the healthcare sector, offering healthcare products, services, and medical supplies online.',
            stats: [
                { value: '1M+', label: 'Products sold' },
                { value: '24/7', label: 'Online store availability' },
                { value: '500+', label: 'Products listed' }
            ],
            features: [
                'Online store setup',
                'Payment gateway integration',
                'Product management',
                'Customer support system'
            ]
        },
        {
            name: 'Healthcare Software Consulting',
            icon: <FaCog className="text-orange-400" />,
            description: 'Expert consulting services to help healthcare organizations select, implement, and optimize their software systems and technologies.',
            stats: [
                { value: '150+', label: 'Clients served' },
                { value: '100%', label: 'Client retention rate' },
                { value: '5+', label: 'Years of healthcare expertise' }
            ],
            features: [
                'Technology consulting',
                'System optimization',
                'Implementation strategies',
                'Compliance guidance'
            ]
        },
        {
            name: 'Custom Healthcare Software Development',
            icon: <FaLaptop className="text-red-400" />,
            description: 'Tailored software solutions for healthcare organizations, ensuring that their specific needs are met through custom-built applications.',
            stats: [
                { value: '300+', label: 'Custom apps developed' },
                { value: '95%', label: 'Client satisfaction rate' },
                { value: '10+', label: 'Years of experience' }
            ],
            features: [
                'Custom software development',
                'Healthcare-specific solutions',
                'System integration',
                'Security & compliance'
            ]
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Full Suite of Healthcare App Development Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Fitness, Ecommerce, Custom Software, and More
                    </span>
                </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Categories */}
                    <div className="md:w-1/2 bg-gradient-to-r from-black via-cyan-1000 to-black rounded-l-lg shadow-xl border border-l-lg border-gray-700 p-2">
                        <h2 className="text-lg font-semibold text-white uppercase tracking-wider p-6 border-b border-gray-500">
                            Categories
                        </h2>
                        <div className="space-y-2 p-4">
                            {categoriesData.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`w-full py-3 px-4 text-left rounded-md transition-all duration-300 focus:outline-none
                                        ${activeCategory === category.name
                                            ? 'text-white bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 shadow-lg ring-1 ring-blue-300/30'
                                            : 'text-gray-100 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-blue-900'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl">{category.icon}</span>
                                        <span className="text-lg font-medium">{category.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Active Category Details */}
                    <div className="md:w-1/2 bg-black border border-l-0 border-gray-700 rounded-r-lg p-8">
                        {categoriesData.map((category) => (
                            activeCategory === category.name && (
                                <motion.div 
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-4xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 rounded-xl">
                                            {category.icon}
                                        </span>
                                        <h2 className="text-2xl font-semibold text-white">
                                            {category.name}
                                        </h2>
                                    </div>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        {category.description}
                                    </p>
                                    
                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {category.stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 text-center"
                                            >
                                                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                                                <div className="text-sm text-gray-400">{stat.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    {/* Key Features */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <FaClinicMedical className="text-blue-400" />
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {category.features.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                                    className="flex items-center gap-2 text-gray-300"
                                                >
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                        className="mt-auto"
                                    >
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                                            Get Started with {category.name}
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthCareServ;
