import React from 'react';
import { motion } from 'framer-motion';

const AboutStory = () => {
  return (
    <div className="bg-black text-white font-sans">
      <div className="container mx-auto px-4  max-w-6xl"> {/* Increased max-width to 6xl */}
        {/* Heading */}
        <header className="md:not-last:text-center mb-16"> {/* Increased margin-bottom */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold" 
          >
            About Adventure Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="text-gray-400 mt-4 text-lg md:text-xl" 
          >
            Innovating since 2014 | ISO-Certified |<span className='block md:inline'> End-to-End Product Solutions</span>
          </motion.p>
        </header>

        {/* Introduction Section - Wider card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className=" bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-4 text-justify md:p-10 w-full"
        >
          <div className="max-w-5xl mx-auto"> {/* Constrain text width within the wider card */}
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4"> {/* Increased size */}
              Our Story
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-8"> {/* Increased margin */}
              A journey of innovation and dedication.
            </p>
            
            <div className="space-y-6 md:space-y-8 text-gray-200 leading-relaxed text-lg md:text-xl"> {/* Responsive spacing and text size */}
              <p className="max-w-4xl mx-auto"> {/* Constrain paragraph width */}
                At Adventure Technology, innovation and trust are more than just words – they are part of our organizational heritage. With decades of experience, we have been at the forefront of providing embedded systems, IoT solutions, and end-to-end customized software development across various industries in India.
              </p>
              
              <p className="max-w-4xl mx-auto">
                Our belief in the transformative power of our ideas and technology drives us to change the world for the better. Founded in 2014, Adventure Technology has consistently delivered cutting-edge solutions in the embedded systems and software industry.
              </p>
              
              <p className="max-w-4xl mx-auto">
                We are committed to providing high-quality, reliable, and timely solutions to our customers, always ensuring that affordability remains at the heart of our offerings. Whether it's a complex IoT solution or a robust software development project, we focus on trust, quality, and service.
              </p>
              
              <p className="max-w-4xl mx-auto">
                Our holistic approach to business solutions spans a wide range of services, including embedded systems products, IoT solutions, robotics, web development, app development, cloud services, and end-to-end artificial intelligence solutions.
              </p>
              
              <p className="max-w-4xl mx-auto">
                At Adventure Technology, we don't just build solutions – we create lasting partnerships, ensuring our customers stay ahead in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutStory;