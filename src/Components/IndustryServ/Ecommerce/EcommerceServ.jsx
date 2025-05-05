import React, { useState } from 'react';
import { FaShoppingCart, FaCreditCard, FaMobileAlt, FaSearch, FaShippingFast, FaDollarSign, FaChartLine, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EcommerceServ = () => {
    const [activeCategory, setActiveCategory] = useState('Custom Ecommerce Platforms');

    const categoriesData = [
        {
            name: 'Custom Ecommerce Platforms',
            icon: <FaShoppingCart className="text-blue-400" />,
            description: 'Developing tailor-made ecommerce platforms with robust functionality, user-friendly interfaces, and seamless shopping experiences.',
            stats: [
                { value: '50+', label: 'Ecommerce Features' },
                { value: '3x', label: 'Conversion Rate' },
                { value: '24/7', label: 'Customer Support' }
            ],
            features: [
                'Custom Product Pages',
                'Real-time Inventory Management',
                'Advanced Search Functionality',
                'Personalized User Experience'
            ]
        },
        {
            name: 'Payment Gateway Integration',
            icon: <FaCreditCard className="text-green-400" />,
            description: 'Secure and seamless payment gateway integration for smooth transactions and enhanced user trust.',
            stats: [
                { value: '50+', label: 'Payment Methods Supported' },
                { value: '99.9%', label: 'Transaction Success Rate' },
                { value: '100%', label: 'PCI DSS Compliance' }
            ],
            features: [
                'Multiple Payment Options',
                'Recurring Billing Support',
                'Fraud Protection',
                'Multi-currency Support'
            ]
        },
        {
            name: 'Mobile Ecommerce Solutions',
            icon: <FaMobileAlt className="text-purple-400" />,
            description: 'Responsive, mobile-first ecommerce applications designed to provide a seamless shopping experience on any device.',
            stats: [
                { value: '100%', label: 'Mobile Optimization' },
                { value: '85%', label: 'Mobile Sales Growth' },
                { value: '50%', label: 'Mobile Traffic Share' }
            ],
            features: [
                'Mobile Shopping Cart',
                'Push Notifications',
                'Mobile Payment Integration',
                'App Store Integration'
            ]
        },
        {
            name: 'SEO and Marketing Tools',
            icon: <FaSearch className="text-yellow-400" />,
            description: 'Comprehensive ecommerce SEO and marketing tools to improve your online store’s visibility and increase sales.',
            stats: [
                { value: '50%', label: 'Increase in Organic Traffic' },
                { value: '30%', label: 'Boost in Sales' },
                { value: '5x', label: 'ROI from Marketing Campaigns' }
            ],
            features: [
                'SEO-Friendly Product Pages',
                'Email Marketing Integration',
                'Product Recommendations',
                'Referral Programs'
            ]
        },
        {
            name: 'Order Management and Shipping Solutions',
            icon: <FaShippingFast className="text-red-400" />,
            description: 'Seamless order and shipping management solutions to track inventory, process orders, and manage delivery logistics.',
            stats: [
                { value: '24/7', label: 'Order Tracking' },
                { value: '100%', label: 'Shipping Integration' },
                { value: '98%', label: 'On-Time Delivery Rate' }
            ],
            features: [
                'Order Tracking',
                'Shipping Label Generation',
                'Inventory Synchronization',
                'Multiple Delivery Options'
            ]
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Ecommerce App Development Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Scalable Solutions for Your Ecommerce Business
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

export default EcommerceServ;
