import React, { useState } from 'react';
import { FaBuilding, FaCog, FaRegClock, FaUsers, FaMobileAlt, FaChartLine, FaDatabase, FaCloud, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SaaSServ = () => {
    const [activeCategory, setActiveCategory] = useState('Custom SaaS Solutions');

    const categoriesData = [
        {
            name: 'Custom SaaS Solutions',
            icon: <FaBuilding className="text-blue-400" />,
            description: 'Tailored SaaS platforms designed to meet unique business needs, improve efficiency, and enhance customer experience.',
            stats: [
                { value: '98%', label: 'Client satisfaction' },
                { value: '50%', label: 'Increase in productivity' },
                { value: '24/7', label: 'Support availability' }
            ],
            features: [
                'Customizable workflows',
                'API integrations',
                'Scalable architecture',
                'Real-time analytics'
            ]
        },
        {
            name: 'SaaS Mobile Apps',
            icon: <FaMobileAlt className="text-purple-400" />,
            description: 'Mobile-optimized SaaS applications that provide seamless user experiences across devices, anywhere, anytime.',
            stats: [
                { value: '5M+', label: 'Active users' },
                { value: '4.8/5', label: 'App rating' },
                { value: '100%', label: 'Cross-platform support' }
            ],
            features: [
                'Push notifications',
                'Offline access',
                'Push notifications',
                'Mobile-first design'
            ]
        },
        {
            name: 'SaaS Analytics Platforms',
            icon: <FaChartLine className="text-green-400" />,
            description: 'SaaS platforms focused on data analytics, delivering actionable insights to drive business decisions and enhance operations.',
            stats: [
                { value: '10K+', label: 'Reports generated' },
                { value: '99.5%', label: 'Data accuracy' },
                { value: '5K+', label: 'Active users' }
            ],
            features: [
                'Custom dashboards',
                'Data visualizations',
                'Real-time reporting',
                'Advanced filters'
            ]
        },
        {
            name: 'SaaS CRM Systems',
            icon: <FaUsers className="text-yellow-400" />,
            description: 'Customer Relationship Management (CRM) solutions designed to streamline communication, manage leads, and drive sales growth.',
            stats: [
                { value: '50%', label: 'Improvement in sales' },
                { value: '30%', label: 'Faster lead conversion' },
                { value: '95%', label: 'Customer retention rate' }
            ],
            features: [
                'Lead tracking',
                'Email automation',
                'Advanced reporting',
                'Customer segmentation'
            ]
        },
        {
            name: 'SaaS Infrastructure and Cloud Services',
            icon: <FaCloud className="text-red-400" />,
            description: 'Reliable and scalable infrastructure solutions to host and manage SaaS applications, ensuring optimal performance and security.',
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
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">SaaS Development Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Custom SaaS Solutions for Every Business Need
                    </span>
                </h1>
                <div className="flex flex-col md:flex-row">
                         {/* Left Side - Categories */}
                         <div className="md:w-1/2 bg-gradient-to-r from-black via-cyan-1000 to-black rounded-t-lg md:rounded-t-none md:rounded-l-lg shadow-xl border border-gray-700 p-2">
                           <h2 className="text-lg font-semibold text-white uppercase tracking-wider p-4 border-b border-gray-500">
                             Categories
                           </h2>
                           <div className="space-y-2 p-2">
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
                                   <span className="text-sm sm:text-base font-medium">{category.name}</span>
                                 </div>
                               </button>
                             ))}
                           </div>
                         </div>
               
                         {/* Right Side - Details */}
                         <div className="md:w-1/2 bg-black border border-t-0 md:border-t border-l-0 border-gray-700 rounded-b-lg md:rounded-b-none md:rounded-r-lg p-4 sm:p-8">
                           {categoriesData.map((category) =>
                             activeCategory === category.name && (
                               <motion.div
                                 key={category.name}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5 }}
                                 className="h-full flex flex-col"
                               >
                                 <div className="flex items-center gap-4 mb-6">
                                   <span className="text-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-xl">
                                     {category.icon}
                                   </span>
                                   <h2 className="text-xl sm:text-2xl font-semibold text-white">{category.name}</h2>
                                 </div>
               
                                 <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                                   {category.description}
                                 </p>
               
                                 {/* Stats */}
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
               
                                 {/* Features */}
                                 <div className="mb-6">
                                   <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                     <FaChartLine className="text-blue-400" />
                                     Key Features
                                   </h3>
                                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                           )}
                         </div>
                       </div>
            </div>
        </div>
    );
};

export default SaaSServ;
