import React, { useState } from 'react';
import { FaBuilding, FaCog, FaRegClock, FaUsers, FaMobileAlt, FaChartLine, FaDatabase, FaCloud, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AgricultureServ = () => {
    const [activeCategory, setActiveCategory] = useState('Agriculture Farm Management Software');

    const categoriesData = [
        {
            name: 'Agriculture Farm Management Software',
            icon: <FaBuilding className="text-blue-400" />,
            description: 'Highly scalable and flexible agriculture farm management software that covers automated crop planning, in-field inspections, labor management, farm accounting, and inventory management.',
            stats: [
                { value: '95%', label: 'Increase in crop yield' },
                { value: '30%', label: 'Reduction in operational costs' },
                { value: '24/7', label: 'Support availability' }
            ],
            features: [
                'Automated crop planning',
                'Mobile apps for in-field inspections',
                'Labor management tools',
                'Farm accounting integration'
            ]
        },
        {
            name: 'Livestock Management Software',
            icon: <FaMobileAlt className="text-purple-400" />,
            description: 'Livestock management software solutions to help farmers manage their livestock inventory, track animals, and analyze farm data with ease.',
            stats: [
                { value: '50+', label: 'Active livestock farms' },
                { value: '4.9/5', label: 'Customer rating' },
                { value: '100%', label: 'Real-time tracking' }
            ],
            features: [
                'Cattle management',
                'Livestock breeding management',
                'Inventory tracking',
                'Animal husbandry management'
            ]
        },
        {
            name: 'Food Safety & Compliance Software',
            icon: <FaChartLine className="text-green-400" />,
            description: 'Software solution that adheres to FDA, USDA, FSMA, FSIS, EPA standards for food safety and health compliance in the agricultural industry.',
            stats: [
                { value: '100%', label: 'Compliance with regulations' },
                { value: '99.7%', label: 'Food traceability accuracy' },
                { value: '1,000+', label: 'Food safety reports generated' }
            ],
            features: [
                'Food safety hazard planning',
                'Regulatory traceability',
                'FDA, USDA, FSMA compliance',
                'Advanced monitoring systems'
            ]
        },
        {
            name: 'Farm Accounting Software',
            icon: <FaUsers className="text-yellow-400" />,
            description: 'Farm accounting software to manage your inventories, expenses, track profits and losses, and handle fixed asset activities for a complete financial overview.',
            stats: [
                { value: '100%', label: 'Financial transparency' },
                { value: '30%', label: 'Reduction in financial overheads' },
                { value: '95%', label: 'Accuracy in financial reporting' }
            ],
            features: [
                'Cost center management',
                'Expense tracking',
                'Financial reporting',
                'Inventory management'
            ]
        },
        {
            name: 'Smart Agriculture Software',
            icon: <FaCloud className="text-red-400" />,
            description: 'AI-powered smart agriculture software that uses sensors, automation, and real-time data for optimal crop production and traceability of product origins.',
            stats: [
                { value: '80%', label: 'Reduction in manual labor' },
                { value: '95%', label: 'Accuracy in crop tracking' },
                { value: '100%', label: 'Data-driven farming' }
            ],
            features: [
                'Automated crop management',
                'AI-powered monitoring systems',
                'Real-time crop production data',
                'Mapping and GIS solutions'
            ]
        },
        {
            name: 'Precision Agriculture Software',
            icon: <FaDatabase className="text-blue-400" />,
            description: 'Precision agriculture software using smart technology and sensors to monitor and analyze farm conditions, optimizing farming operations and boosting yields.',
            stats: [
                { value: '25%', label: 'Increase in crop efficiency' },
                { value: '99.8%', label: 'Precision data accuracy' },
                { value: '500+', label: 'Farmers benefiting from the software' }
            ],
            features: [
                'Smart farming apps',
                'Soil sensors',
                'Precision data management',
                'Irrigation control systems'
            ]
        },
        {
            name: 'Drone Automation Software',
            icon: <FaRocket className="text-green-400" />,
            description: 'Custom drone automation software to enable field mapping, monitoring, and analysis for efficient and modernized farm management.',
            stats: [
                { value: '100+', label: 'Drone-enabled fields' },
                { value: '99%', label: 'Monitoring accuracy' },
                { value: '5000+', label: 'Hectares covered' }
            ],
            features: [
                'Field mapping technology',
                'Aerial crop monitoring',
                'Real-time data collection',
                'Drone fleet management'
            ]
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Agriculture Software Solutions</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Custom Software Solutions for Efficient and Modernized Agriculture
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
                                            <FaChartLine className="text-blue-400" />
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

export default AgricultureServ;
