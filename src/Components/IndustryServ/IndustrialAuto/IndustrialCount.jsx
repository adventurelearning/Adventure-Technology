import React from "react";
import { motion } from "framer-motion";

const IndustrialCount= () => {
  const stats = [
    { value: "10+", label: "App developers" },
    { value: "7+", label: "years of running company" },
    { value: "20k+", label: "happy clients" },
  ];

  const hoverEffect = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-black px-4 sm:px-20 py-0">
      <div className="border-2 border-gray-600 rounded-lg p-8 flex flex-col md:flex-row justify-around items-center text-center bg-gradient-to-r from-gray-900 to-black h-52">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="m-4"
            whileHover="hover"
            variants={hoverEffect}
          >
            <h3 className="text-5xl m-0 text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {stat.value}
            </h3>
            <p className="mt-3 text-gray-300 text-lg font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustrialCount;
