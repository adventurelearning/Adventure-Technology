import React from 'react'
import { motion } from 'framer-motion';
const CultureBanner = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-black to-gray-900 text-white md:py-10">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/tech-people-trying-achieve-ambitious-sustainability-goals_23-2150950185.jpg?t=st=1747046999~exp=1747050599~hmac=a129267206f73dc881022e43d563a40632e86d53ca1f76121c0cfc9a7cc566db&w=996')] bg-cover bg-center opacity-40"></div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative container mx-auto px-6 py-20 md:py-30 text-center"
                    >
                        <motion.h1
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="text-5xl md:text-7xl font-semibold mb-6"
                        >
                            Our <span className="text-blue-400">Culture</span> Code
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300"
                        >
                            Where brilliant minds come together to build the future with passion, purpose, and play
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CultureBanner
