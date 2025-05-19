import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutConnect = () => {
    return (
        <div>
            <section className="md:py-24 bg-gradient-to-b from-blue-950 to-black text-white pb-15">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-2xl border border-gray-700/50 bg-white/5 backdrop-blur-lg shadow-lg"
                        style={{
                            // Glass effect
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)', // For Safari
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready for Your Next <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Adventure?</span></h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Join a team that values your curiosity and rewards your creativity.
                        </p>
                        <Link to="/Career">
                        <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                            Explore Careers
                        </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutConnect;