import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRocket, FaMedal, FaShieldAlt, FaHeadset, FaChevronRight } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Header = () => {
    // Animation variants


    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white z-50  hidden lg:flex justify-center items-center shadow-xl relative overflow-hidden"
        >
            {/* Animated background circles */}
            <motion.div
                className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/4 bg-blue-600 rounded-full opacity-20 blur-2xl w-48 h-48"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.3, y: 10 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/4 bg-blue-500 rounded-full opacity-20 blur-xl w-32 h-32"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 0.3, x: -10 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
            />

            {/* Middle Section - Centered CTA */}
            <motion.div
                variants={itemVariants}
                className="z-10 text-center" // Added text-center for centering
            >
                <motion.div
                    className="relative group inline-block" // Changed to inline-block to contain text width
                >
                    <div className="p-1 text-sm text-white flex items-center justify-center space-x-3">
                        <span>Empowering businesses with innovative technology solutions</span>
                        <Link to="/Industries">
                        <span className="text-blue-200 font-semibold cursor-pointer group-hover:text-white transition-colors duration-300 flex items-center space-x-1">
                            <span className="underline-animation">Explore Our Services</span>
                            <span><FaChevronRight /></span>
                        </span>
                        </Link>
                    </div>

                    <motion.div
                        className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 rounded-md" // Changed to rounded-md to match text container
                    />
                </motion.div>
            </motion.div>
        </motion.header>
    );
};

export default Header;