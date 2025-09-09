import React, { useState, useEffect, useRef } from 'react';

// Industries data (updated for BMS)
const industries = [
    {
        name: 'Electric Vehicles (EVs & E-Bikes)',
        description: 'Optimize battery performance, safety, and range for electric mobility solutions with real-time monitoring and intelligent charging.',
    },
    {
        name: 'Solar Energy Systems',
        description: 'Manage energy storage efficiently for residential and commercial solar setups, ensuring reliable power availability and long battery life.',
    },
    {
        name: 'Industrial Battery Packs',
        description: 'Safely monitor and control large-scale battery arrays used in factories, warehouses, and other industrial applications.',
    },
    {
        name: 'Inverters & UPS Systems',
        description: 'Guarantee uninterrupted power supply for critical systems with precise battery management and health monitoring.',
    },
    {
        name: 'IoT & Robotics',
        description: 'Enable autonomous devices and robotic systems with smart power management and safe energy storage.',
    },
];

const BMSSupportIndustry = () => {
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        if (isPaused) return;
        const animate = () => {
            setHighlightedIndex(prevIndex => (prevIndex + 1) % industries.length);
            animationRef.current = setTimeout(animate, 2500);
        };
        animationRef.current = setTimeout(animate, 2500);
        return () => clearTimeout(animationRef.current);
    }, [isPaused]);

    const handleIndustryClick = (index) => {
        setHighlightedIndex(index);
        clearTimeout(animationRef.current);
        setTimeout(() => {
            if (!isPaused) {
                animationRef.current = setTimeout(() => {
                    setHighlightedIndex((index + 1) % industries.length);
                }, 2500);
            }
        }, 3000);
    };

    return (
        <div id="bmsvdo" className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-10 text-left lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight mb-4">
                        Powering Industries with{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                            Smart Battery Management
                        </span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                        Our advanced Battery Management System (BMS) is trusted across multiple industries to ensure safety, efficiency, and performance for every application.
                    </p>
                </div>

              <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Industries List */}
          <div className="lg:w-full w-full mb-10 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Industries We Serve</h2>
            <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-900/50 p-3 border border-gray-800 shadow-lg">
              <div
                className="space-y-3 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${highlightedIndex * 64}px)` }}
              >
                {industries.map((industry, index) => {
                  const isHighlighted = highlightedIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() => handleIndustryClick(index)}
                      className={`flex items-center px-3 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-blue-500 shadow-lg shadow-blue-500/20'
                          : 'bg-gray-800/30 border-gray-700 hover:border-gray-500 hover:bg-gray-700/40'
                      }`}
                    >
                      <span className="text-base sm:text-lg font-medium">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default BMSSupportIndustry;
