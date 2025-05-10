import React from 'react';
import { FaIndustry, FaAppleAlt, FaHeartbeat, FaCar, FaShoppingCart, FaBook, FaCloud, FaCog} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Add this for routing

const industryData = [
    {
        title: 'Manufacturing',
        icon: <FaIndustry className="w-8 h-8" />,
        image: 'https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/event_details_image/smrc-1100-520_0.jpg.webp?itok=OxvY1NKO',
        description: 'Optimizing manufacturing with real-time monitoring, predictive maintenance, and digital twins using custom software and IoT technologies.',
        link: '/Manufaturing'
    },
    {
        title: 'Agriculture',
        icon: <FaAppleAlt className="w-8 h-8" />,
        image: 'https://relevant.software/wp-content/uploads/tablet-with-screen-showing-game-it-1024x683.jpg',
        description: 'We create intelligent living spaces with IoT-based automation, energy management systems, and smart device integration for modern lifestyles.',
        link: '/Agriculture'
    },
    {
        title: 'Healthcare',
        icon: <FaHeartbeat className="w-8 h-8" />,
        image: 'https://sonatafy.com/wp-content/uploads/2021/08/healthcare-software-developer-services.jpg',
        description: 'Transforming healthcare with AI diagnostics, IoT-based monitoring, patient data analytics, and HIPAA-compliant custom healthcare platforms.',
        link: '/Healthcare'
    },
    {
        title: 'Automotive',
        icon: <FaCar className="w-8 h-8" />,
        image: 'https://dealersu.com/wp-content/uploads/2025/03/Can-You-Still-Repair-Your-Own-Car-in-2025.png',
        description: 'We connected, autonomous, and intelligent mobility with AI-powered diagnostics, IoT integration, and custom automotive software solutions.',
        link: '/Automotive'
    },
    {
        title: 'E-commerce',
        icon: <FaShoppingCart className="w-8 h-8" />,
        image: 'https://o2w.es/t/900x500/smart/media/t/blog/e-commerce-1-1200x682.jpg.1920x1920_q85.jpg',
        description: 'Creating dynamic online stores, inventory automation, and customer analytics platforms to enhance digital retail experiences and conversions.',
        link: '/Ecommerce'
    },
    {
        title: 'Education',
        icon: <FaBook className="w-8 h-8" />,  // Updated icon for Education
        image: 'https://www.daad.in/files/2022/06/iStock-507009337_864x486px.jpg',
        description: 'We build e-learning portals, AI tutoring tools, and virtual classrooms that empower institutions to deliver smarter, scalable digital education.',
        link: '/Education'
    },
    {
        title: 'Industrial Automation',
        icon: <FaCog className="w-8 h-8" />,
        image: 'https://www.automationreadypanels.com/wp-content/uploads/2023/08/Key-Benefits-of-Automation-Engineering-1024x683.jpg',
        description: 'Delivering smart factory solutions using IoT sensors, real-time analytics, and automation platforms that streamline operations and reduce downtime.',
        link: '/IndustrialAuto'
    },
    {
        title: 'SaaS',
        icon: <FaCloud className="w-8 h-8" />,  // Updated icon for SaaS
        image: 'https://www.emnify.com/hubfs/SaaS.jpg',
        description: 'Developing intelligent robotic systems with embedded software, real-time processing, and AI-powered control mechanisms for various applications.',
        link: '/SaaS'
    }
];

const IndustriesBox = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    const imageHoverVariants = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="bg-black md:py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-20"
                >
                    {industryData.map((industry, index) => (
                        <Link to={industry.link} key={index}>
                            <motion.div
                                variants={cardVariants}
                                className="bg-black rounded-2xl border border-gray-800 overflow-hidden max-w-xl mx-auto cursor-pointer transition"
                            >
                                <motion.div
                                    className="h-80 w-full overflow-hidden"
                                    whileHover="hover"
                                    variants={imageHoverVariants}
                                >
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>

                                <div className="p-4">
                                    <div className="flex items-center mb-2 py-4">
                                        <div className="text-white bg-blue-600 rounded-md px-2 py-2 p-1 mr-2 text-3xl">
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-white text-xl font-semibold pl-4">{industry.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-base pb-4">{industry.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default IndustriesBox;
