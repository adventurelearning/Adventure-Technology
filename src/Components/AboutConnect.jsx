import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutConnect = () => {
    return (
        <div>
            <div className="py-20 px-6 md:px-16 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Let's discuss how our technology solutions can drive your success.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="bg-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium text-white transition-all duration-300 shadow-lg mr-4">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default AboutConnect
