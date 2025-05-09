import React from "react";
import { motion } from "framer-motion";

const ManufacturingCount = () => {
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
    <div className="bg-black px-4 sm:px-10 md:px-20 py-10">
      <div className="border-2 border-gray-600 rounded-xl p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center text-center bg-gradient-to-r from-gray-900 to-black gap-6 sm:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1"
            whileHover="hover"
            variants={hoverEffect}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {stat.value}
            </h3>
            <p className="mt-2 sm:mt-3 text-gray-300 text-base sm:text-lg md:text-xl font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturingCount;
