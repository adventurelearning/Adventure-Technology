// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function NotFound() {
    useEffect(() => {
        document.title = "404 - Page Not Found";
    }, []);

    // Animation variants
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {}
    }
};


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const floatingVariants = {
        float: {
            y: [-10, 10],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                    ease: 'easeInOut'
                }
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-2 md:px-4 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-900 opacity-20 blur-xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            />

            <motion.div
                className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-900 opacity-20 blur-xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center justify-center text-center relative z-10"
            >
                <motion.div variants={floatingVariants} animate="float">
                    <motion.h1
                        variants={itemVariants}
                        className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                    >
                        404
                    </motion.h1>
                </motion.div>


                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-semibold mb-2"
                >
                    Oops! We Couldn't Find That Page
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 mb-8 text-center max-w-md"
                >
                    The page you're looking for has been abducted or never existed in this dimension.
                </motion.p>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        to="/"
                        className="relative inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10">Go to Homepage</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Link>
                </motion.div>


                <motion.div
                    variants={itemVariants}
                    className="mt-12 text-gray-500 text-xs md:text-sm"
                    animate={{
                        opacity: [0.6, 1, 0.6],
                        transition: { duration: 3, repeat: Infinity }
                    }}
                >
                    <p>In case you have typed the URL, please check if the spelling is correct</p>
                    <p className="mt-1">
                        If you suspect a site problem, kindly <Link to="/Contact" className="text-blue-500 hover:underline">contact us</Link>. We appreciate your support.
                    </p>

                </motion.div>
            </motion.div>
        </div>
    );
}

export default NotFound;