import React, { useState } from 'react';
import { FaBuilding, FaGraduationCap, FaChalkboardTeacher, FaBookOpen, FaUniversalAccess, FaUsers, FaMobileAlt, FaChartLine, FaAccessibleIcon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationServ = () => {
    const [activeCategory, setActiveCategory] = useState('Corporate Training Apps');

    const categoriesData = [
        {
            name: 'Corporate Training Apps',
            icon: <FaBuilding className="text-blue-400" />,
            description: 'Custom training applications designed for employee development, onboarding, and continuous professional education within organizations.',
            stats: [
                { value: '85%', label: 'Employee engagement' },
                { value: '3x', label: 'Training efficiency' },
                { value: '24/7', label: 'Accessibility' }
            ],
            features: [
                'Custom course creation',
                'Progress tracking',
                'Certification system',
                'Gamification elements'
            ]
        },
        {
            name: 'On-demand eLearning Apps',
            icon: <FaGraduationCap className="text-purple-400" />,
            description: 'Personalized learning platforms that allow users to access educational content anytime, anywhere, at their own pace.',
            stats: [
                { value: '10k', label: 'Users worldwide' },
                { value: '95%', label: 'Satisfaction rate' },
                { value: '200+', label: 'Course topics' }
            ],
            features: [
                'Microlearning modules',
                'Offline access',
                'Personalized recommendations',
                'Interactive quizzes'
            ]
        },
        {
            name: 'Virtual Classrooms and video Conferencing',
            icon: <FaChalkboardTeacher className="text-green-400" />,
            description: 'Interactive digital environments that replicate physical classrooms with live instruction, collaboration tools, and engagement features.',
            stats: [
                { value: '50+', label: 'Interactive tools' },
                { value: '4K', label: 'Video quality' },
                { value: '99.9%', label: 'Uptime' }
            ],
            features: [
                'Breakout rooms',
                'Whiteboard collaboration',
                'Attendance tracking',
                'Recording capabilities'
            ]
        },
        {
            name: 'LMS Development',
            icon: <FaBookOpen className="text-yellow-400" />,
            description: 'Comprehensive Learning Management Systems for administering, documenting, tracking, and delivering educational courses.',
            stats: [
                { value: '100%', label: 'Customizable' },
                { value: 'SCORM', label: 'Compliant' },
                { value: 'API', label: 'Integration' }
            ],
            features: [
                'Gradebook system',
                'Discussion forums',
                'Multi-language support',
                'Analytics dashboard'
            ]
        },
        {
            name: 'eLearning Apps for Disabled',
            icon: <FaUniversalAccess className="text-red-400" />,
            description: 'Accessible learning solutions with assistive technologies designed for users with various disabilities and special needs.',
            stats: [
                { value: 'WCAG', label: '2.1 Compliant' },
                { value: '10+', label: 'Accessibility tools' },
                { value: '100%', label: 'Inclusive design' }
            ],
            features: [
                'Screen reader support',
                'Voice navigation',
                'High contrast mode',
                'Text-to-speech'
            ]
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-4 md:p-8 pb-20">
        <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-start leading-snug py-6 sm:py-8 px-4 sm:px-8">
                    <span className="font-semibold">Full Suite of Educational App Development Services</span>
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Schools, Institutions, EdTech Businesses
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

export default EducationServ;