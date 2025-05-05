import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const IndustrialFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of industrial automation systems do you design?',
      answer:
        'We design and develop a variety of industrial automation systems, including PLC (Programmable Logic Controller) systems, SCADA (Supervisory Control and Data Acquisition), robotics, process control systems, and custom automation solutions for manufacturing, logistics, and other industries.',
    },
    {
      id: 2,
      question: 'How do you ensure seamless integration with existing industrial equipment?',
      answer:
        'Our automation solutions are designed to integrate seamlessly with existing machinery, devices, and control systems. We focus on communication protocols such as Modbus, OPC, and Ethernet/IP, ensuring smooth interaction across different hardware and software platforms.',
    },
    {
      id: 3,
      question: 'Can your automation systems be customized for specific industry needs?',
      answer:
        'Yes, we specialize in providing customized automation systems tailored to the unique requirements of various industries. Whether it’s for automotive, pharmaceuticals, food & beverage, or logistics, we develop solutions that meet your specific operational needs.',
    },
    {
      id: 4,
      question: 'How do you ensure the safety and reliability of automation systems?',
      answer:
        'Safety is a priority in every project. We adhere to industry standards such as ISO 13849, IEC 61508, and functional safety guidelines to ensure our automation systems are designed with built-in safety mechanisms. Regular testing and validation ensure the systems perform reliably even in critical applications.',
    },
    {
      id: 5,
      question: 'Do you offer support for remote monitoring and control of industrial systems?',
      answer:
        'Yes, our automation solutions often include remote monitoring capabilities. We implement cloud-based and IoT technologies that enable you to monitor system performance, track key metrics, and perform diagnostics remotely, helping to reduce downtime and improve operational efficiency.',
    },
    {
      id: 6,
      question: 'What role does data analytics play in your industrial automation systems?',
      answer:
        'Data analytics is a key component of our automation systems. By collecting data from various industrial processes, we provide actionable insights that help optimize performance, reduce waste, and predict maintenance needs. This data-driven approach helps businesses make more informed decisions and improve operational efficiency.',
    },
    {
      id: 7,
      question: 'How do you handle system scalability for growing industrial operations?',
      answer:
        'We design automation systems with scalability in mind. Our solutions are modular, allowing for easy expansion as your operations grow. Whether you need to add more machines, integrate new technologies, or increase system complexity, our systems can be easily upgraded to meet future demands.',
    },
    {
      id: 8,
      question: 'What kind of ongoing support and maintenance do you provide?',
      answer:
        'We offer comprehensive support and maintenance services, including regular system updates, troubleshooting, and performance monitoring. Our team ensures that your automation systems continue to operate efficiently and remain compliant with evolving industry standards.',
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

export default IndustrialFAQ;
