import React, { useState } from 'react';
import { FaCar, FaCode, FaTools, FaCogs, FaWifi, FaBatteryFull, FaShieldAlt, FaMicrochip, FaCog, FaNetworkWired, FaDesktop, FaClipboardList, FaRegClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const IndustriesServ = () => {
    const [activeCategory, setActiveCategory] = useState('Custom Embedded System Design');

    const categoriesData = [
        {
            name: 'Custom Embedded System Design',
            icon: <FaMicrochip className="text-blue-400" />,
            description: 'We design tailor-made embedded systems optimized for performance, real-time control, and environmental durability.',
            stats: [
                { value: '100+', label: 'Embedded systems designed' },
                { value: '15+', label: 'Years of experience' },
                { value: '98%', label: 'Client satisfaction rate' }
            ],
            features: [
                'Microcontroller/Microprocessor selection',
                'Low-power embedded design',
                'Sensor and actuator integration',
                'Custom PCB design and enclosure prototyping'
            ]
        },
        {
            name: 'Firmware Development',
            icon: <FaCog className="text-green-400" />,
            description: 'We write efficient, real-time firmware for embedded devices that control machinery, collect sensor data, and communicate securely with industrial networks.',
            stats: [
                { value: '200+', label: 'Firmware solutions delivered' },
                { value: '10+', label: 'Years of experience' },
                { value: '95%', label: 'System reliability' }
            ],
            features: [
                'Bare-metal or RTOS-based development',
                'Communication protocol stacks (Modbus, CAN, RS-485)',
                'Edge processing and real-time algorithms'
            ]
        },
        {
            name: 'Industrial IoT (IIoT) Integration',
            icon: <FaNetworkWired className="text-orange-400" />,
            description: 'Transform your machines into intelligent, connected systems. We connect embedded hardware to cloud platforms for remote monitoring and analytics.',
            stats: [
                { value: '1M+', label: 'IIoT devices connected' },
                { value: '20+', label: 'Industrial networks integrated' },
                { value: '24/7', label: 'Service availability' }
            ],
            features: [
                'MQTT, OPC UA, and HTTP REST integrations',
                'Edge-to-cloud connectivity',
                'Data logging and visualization',
                'Predictive maintenance setup'
            ]
        },
        {
            name: 'Human-Machine Interface (HMI) Solutions',
            icon: <FaDesktop className="text-purple-400" />,
            description: 'We build embedded HMIs that are intuitive, rugged, and fully customizable for factory floors or field operations.',
            stats: [
                { value: '500+', label: 'HMIs developed' },
                { value: '98%', label: 'HMI system reliability' },
                { value: '100+', label: 'Industrial clients served' }
            ],
            features: [
                'Touchscreen and graphical display design',
                'Linux or RTOS-based HMI systems',
                'SCADA & dashboard integration'
            ]
        },
        {
            name: 'Testing, Validation & Certification',
            icon: <FaClipboardList className="text-red-400" />,
            description: 'We ensure your embedded solutions meet industrial standards for performance, safety, and electromagnetic compatibility (EMC).',
            stats: [
                { value: '300+', label: 'Systems tested' },
                { value: '99%', label: 'Compliance rate' },
                { value: '50+', label: 'Industry standards met' }
            ],
            features: [
                'Functional testing & validation',
                'Environmental stress screening',
                'CE, RoHS, ISO 13849, and IEC 61508 support'
            ]
        },
        {
            name: 'Legacy System Modernization',
            icon: <FaRegClock className="text-yellow-400" />,
            description: 'Upgrade aging automation systems with embedded replacements to improve reliability and enable data-driven operations—without replacing entire infrastructures.',
            stats: [
                { value: '100+', label: 'Legacy systems upgraded' },
                { value: '98%', label: 'System modernization success rate' },
                { value: '30+', label: 'Industries served' }
            ],
            features: [
                'Reverse engineering',
                'Protocol bridging',
                'Custom retrofitting solutions'
            ]
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Industrial Automation Engineering Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Embedded Systems, IIoT, HMI & More
                    </span>
                </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Categories */}
                    <div className="md:w-1/2 bg-gradient-to-r from-black via-cyan-1000 to-black rounded-l-lg shadow-xl border border-l-lg border-gray-700 p-2">
                        <h2 className="text-lg font-semibold text-white uppercase tracking-wider p-6 border-b border-gray-500">
                            CORE SERVICES
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
                                            <FaTools className="text-blue-400" />
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

export default IndustriesServ;
