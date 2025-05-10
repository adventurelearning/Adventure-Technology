import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AutomotiveFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of automotive embedded systems do you develop?',
      answer:
        'We develop a wide range of automotive embedded systems, including engine control units (ECUs), advanced driver-assistance systems (ADAS), infotainment systems, vehicle-to-everything (V2X) communication modules, telematics, and more.',
    },
    {
      id: 2,
      question: 'Can embedded systems support real-time vehicle data processing?',
      answer:
        'Yes, our embedded systems are designed to process real-time data from various vehicle sensors, such as cameras, radar, LiDAR, and GPS, enabling advanced functionalities like autonomous driving, collision detection, and adaptive cruise control.',
    },
    {
      id: 3,
      question: 'Do you support integration with automotive networks like CAN, LIN, or FlexRay?',
      answer:
        'Absolutely. Our systems are built to integrate with automotive communication networks such as CAN (Controller Area Network), LIN (Local Interconnect Network), and FlexRay, ensuring seamless communication between vehicle components and subsystems.',
    },
    {
      id: 4,
      question: 'Are your embedded systems compliant with automotive safety standards?',
      answer:
        'Yes, all our embedded systems are developed with a focus on safety and compliance with international automotive standards like ISO 26262, which ensures functional safety for critical systems in vehicles, such as braking, steering, and airbag systems.',
    },
    {
      id: 5,
      question: 'Can you help with over-the-air (OTA) updates for automotive systems?',
      answer:
        'Yes, we offer solutions for OTA (Over-The-Air) updates, allowing automotive manufacturers to remotely update embedded software in vehicles. This ensures that the latest features, security patches, and performance improvements are always available to drivers without requiring a physical visit to the service center.',
    },
    {
      id: 6,
      question: 'Do you provide support for automotive sensor integration?',
      answer:
        'Yes, we specialize in integrating various sensors, such as radar, LiDAR, ultrasonic, and cameras, into automotive embedded systems. These sensors are essential for features like adaptive cruise control, collision avoidance, and lane-keeping assistance.',
    },
    {
      id: 7,
      question: 'What about the security of automotive embedded systems?',
      answer:
        'Security is a top priority. Our embedded systems are designed with robust cybersecurity measures, including encryption, secure boot, and intrusion detection, to prevent unauthorized access and ensure the safety and privacy of vehicle data and communication.',
    },
    {
      id: 8,
      question: 'How do you ensure the scalability of embedded systems for automotive use?',
      answer:
        'We design automotive embedded systems with scalability in mind, allowing them to handle a growing number of features and sensors. Our systems are modular and can be easily upgraded to accommodate future technologies such as electric vehicles (EVs), autonomous driving, and smart connectivity.',
    },
  ];

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none ${
                    isOpen ? 'bg-gray-700 rounded-t-xl' : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                  }`}
                >
                  <span className="text-lg text-left">{item.question}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-6 w-6 text-blue-400" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={variants}
                      className="overflow-hidden bg-gray-900 text-gray-300 rounded-b-xl"
                    >
                      <div className="px-6 py-5">
                        <p className="leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AutomotiveFAQ;
