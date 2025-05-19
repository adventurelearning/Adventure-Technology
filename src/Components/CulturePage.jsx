import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBrain, FaRocket, FaUsers, FaHeart } from 'react-icons/fa';

const CulturePage = () => {


  const perks = [
    "Flexible work arrangements",
    "Professional development budget",
    "Wellness programs",
    "Hackathon Fridays",
    "Community volunteer days",
    "Cutting-edge tech stack",
    "Annual adventure retreat",
    "Stocked innovation lab"
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white min-h-screen md:pt-15">
      {/* Team Culture Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://img.freepik.com/free-photo/smiley-man-showing-something-his-colleagues-laptop-meeting_23-2148817058.jpg?ga=GA1.1.638410588.1746424089&semt=ais_hybrid&w=740" 
                  alt="Adventure Technology Team" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-6 py-3 mr-4 rounded-lg shadow-lg">
                  <span className="font-bold">30+</span> Innovators
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">We're More Than <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Colleagues</span></h2>
              <p className="text-lg text-gray-300 mb-6">
                At Adventure Technology, we've built a culture where creativity thrives and friendships flourish. Our team is a diverse collective of thinkers, makers, and dreamers who believe work should be both meaningful and fun.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-4">
                    <FaUsers className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flat Hierarchy</h4>
                    <p className="text-gray-400">Your voice matters here. We encourage open dialogue at all levels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-4">
                    <FaRocket className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Autonomy + Accountability</h4>
                    <p className="text-gray-400">Own your projects while collaborating with brilliant peers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-5 md:py-14 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Perks That <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Matter</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We invest in our team's growth, wellbeing, and happiness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="bg-blue-500/10 group-hover:bg-blue-500/20 p-3 rounded-full mr-4 transition-all duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-medium">{perk}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}

    </div>
  );
};

export default CulturePage;