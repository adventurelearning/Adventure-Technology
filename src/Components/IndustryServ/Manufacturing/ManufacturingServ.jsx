import React, { useState } from 'react';
import { FaBuilding, FaCog, FaRegClock, FaUsers, FaMobileAlt, FaChartLine, FaDatabase, FaCloud, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ManufacturingServ = () => {
    const [activeCategory, setActiveCategory] = useState('Manufacturing Automation');

    const categoriesData = [
        {
            name: 'Manufacturing Automation',
            icon: <FaCog className="text-blue-400" />,
            description: 'Custom automation solutions designed to streamline manufacturing processes, enhance production efficiency, and reduce operational costs.',
            stats: [
                { value: '85%', label: 'Operational efficiency improvement' },
                { value: '50%', label: 'Reduction in manual errors' },
                { value: '24/7', label: 'System uptime' }
            ],
            features: [
                'Automated production lines',
                'Real-time monitoring',
                'Predictive maintenance',
                'Robotic process automation'
            ]
        },
        {
            name: 'Manufacturing Data Analytics',
            icon: <FaChartLine className="text-purple-400" />,
            description: 'Data-driven insights for optimizing production processes, minimizing downtime, and maximizing resource utilization.',
            stats: [
                { value: '10K+', label: 'Reports generated' },
                { value: '99.5%', label: 'Data accuracy' },
                { value: '1M+', label: 'Data points analyzed' }
            ],
            features: [
                'Custom dashboards',
                'Advanced data visualizations',
                'Real-time reporting',
                'Predictive analytics'
            ]
        },
        {
            name: 'Supply Chain Optimization',
            icon: <FaRegClock className="text-green-400" />,
            description: 'Technology solutions to streamline supply chain operations, reduce costs, and improve efficiency in logistics and inventory management.',
            stats: [
                { value: '30%', label: 'Cost reduction' },
                { value: '40%', label: 'Faster order fulfillment' },
                { value: '98%', label: 'Inventory accuracy' }
            ],
            features: [
                'Real-time tracking',
                'Automated inventory management',
                'Supply chain analytics',
                'Demand forecasting'
            ]
        },
        {
            name: 'Cloud Solutions for Manufacturing',
            icon: <FaCloud className="text-yellow-400" />,
            description: 'Cloud-based infrastructure that ensures secure and scalable data storage and access, enabling seamless operations across multiple sites.',
            stats: [
                { value: '99.9%', label: 'Uptime guarantee' },
                { value: '100%', label: 'Data security compliance' },
                { value: '1 TB', label: 'Data storage capacity' }
            ],
            features: [
                'Cloud hosting',
                'Data backups',
                'Load balancing',
                'Auto-scaling'
            ]
        },
        {
            name: 'IT Support & Managed Services',
            icon: <FaUsers className="text-red-400" />,
            description: 'Comprehensive IT support to ensure your manufacturing systems run smoothly, providing 24/7 monitoring, troubleshooting, and system optimization.',
            stats: [
                { value: '24/7', label: 'Support availability' },
                { value: '98%', label: 'Incident resolution rate' },
                { value: '99.9%', label: 'System uptime' }
            ],
            features: [
                '24/7 monitoring',
                'Remote troubleshooting',
                'System upgrades',
                'Cybersecurity protection'
            ]
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Manufacturing IT Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Custom IT Solutions for Every Manufacturing Need
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

export default ManufacturingServ;
