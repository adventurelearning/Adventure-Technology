import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChartFill,     // Market Research
  ClipboardCheck,    // Campaign Strategy
  PencilSquare,      // Content Creation
  MegaphoneFill,     // Execution
  GraphUpArrow,      // Performance Tracking
  GearFill           // Optimization & Scaling
} from 'react-bootstrap-icons';

const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
  {
    title: 'Market Research',
    description: 'We analyze your audience, competitors, and industry trends to uncover growth opportunities.',
    icon: <BarChartFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
  {
    title: 'Campaign Strategy',
    description: 'We develop a tailored digital marketing strategy aligned with your goals and budget.',
    icon: <ClipboardCheck className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
  {
    title: 'Content Creation',
    description: 'We produce engaging content—ads, blogs, social posts—that speaks to your audience.',
    icon: <PencilSquare className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
  {
    title: 'Campaign Execution',
    description: 'We run and manage campaigns across SEO, PPC, social media, and email marketing channels.',
    icon: <MegaphoneFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
  {
    title: 'Performance Tracking',
    description: 'We track KPIs like traffic, conversions, and ROI using tools like Google Analytics & Ads Manager.',
    icon: <GraphUpArrow className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
  {
    title: 'Optimization & Scaling',
    description: 'We refine campaigns, test new strategies, and scale successful tactics for long-term growth.',
    icon: <GearFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const DigitalMarketingProcess = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
          Our Digital Marketing Process
        </h2>
        <h3 className="text-lg text-center text-gray-400 mt-4">
          Targeted strategy and measurable results at every step
        </h3>

        <div className="border border-gray-700 rounded-xl p-10 backdrop-blur-md bg-gray-800/30 mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-4 border border-gray-600 rounded-md hover:shadow-md transition duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

                {/* Optional directional arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 right-[-28px] transform -translate-y-1/2 text-blue-500 font-bold text-lg">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingProcess;
