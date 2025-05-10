import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AiFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'How long does it take to build an AI model?',
      answer:
        'The time required to build an AI model depends on various factors like the complexity of the problem, the amount and quality of data, and the type of AI model (e.g., supervised, unsupervised, deep learning). On average, building an AI model can take anywhere from a few weeks to several months.',
    },
    {
      id: 2,
      question: 'What data do I need to train an AI model?',
      answer:
        'The type of data needed depends on the AI problem you’re solving. For example, if you’re building a classification model, you’ll need labeled data. For natural language processing (NLP) models, you’ll need text data. In general, the more relevant, clean, and high-quality data you have, the better your model will perform.',
    },
    {
      id: 3,
      question: 'How do you ensure the accuracy of an AI model?',
      answer:
        'We evaluate our AI models using various metrics such as accuracy, precision, recall, F1-score, or mean squared error, depending on the task. We also validate the model using cross-validation and test it with a separate dataset to ensure it generalizes well to new, unseen data.',
    },
    {
      id: 4,
      question: 'Can an AI model be updated after deployment?',
      answer:
        'Yes! AI models can be retrained and updated as more data becomes available or if you want to improve the model’s performance. Continuous monitoring and periodic updates ensure that the model stays accurate over time.',
    },
    {
      id: 5,
      question: 'What happens if the AI model makes an incorrect prediction?',
      answer:
        'If an AI model makes an incorrect prediction, we analyze the reasons behind the error, such as biases in the data or limitations in the model. Based on the analysis, we can retrain the model, fine-tune it, or even provide a fallback mechanism to handle such cases.',
    },
    {
      id: 6,
      question: 'How do you ensure the ethical use of AI?',
      answer:
        'We follow best practices for ethical AI development, such as ensuring fairness, transparency, and accountability in the model’s decision-making process. We also pay attention to issues like data privacy and bias mitigation, ensuring the model’s outcomes are fair and trustworthy.',
    },
  ];

  // Animation variants
  const itemVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none transition duration-300  ${
                  expandedId === item.id
                    ? 'bg-gray-700 rounded-t-xl border-b border-gray-600'
                    : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                }`}
              >
                <span className="text-lg">{item.question}</span>
                {expandedId === item.id ? (
                  <ChevronUpIcon className="h-7 w-7 text-blue-400" />
                ) : (
                  <ChevronDownIcon className="h-7 w-7 text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="bg-gray-900 text-gray-300 overflow-hidden rounded-b-xl"
                  >
                    <div className="py-5 px-6">
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiFAQ;
