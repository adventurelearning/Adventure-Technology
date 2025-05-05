import React, { useState, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Section Component for dynamic content rendering
const Section = ({ title, description, icon }) => (
  <div className="flex items-center mb-6">
    <div className="mr-4 text-3xl text-white">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const WhyAutomotive = ({
  children,
  className = "h-full lg:mt-2 w-full",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const content = [
    {
      icon: <i className="bi bi-cogs"></i>,
      title: "Customized Embedded System Design",
      description: "We develop tailor-made embedded systems that cater to the specific needs of automotive applications, ensuring high performance and reliability.",
    },
    {
      icon: <i className="bi bi-phone-laptop"></i>,
      title: "Seamless Integration with Vehicle Networks",
      description: "Our systems are built to integrate flawlessly with existing automotive networks (CAN, LIN, FlexRay), ensuring smooth communication between vehicle components.",
    },
    {
      icon: <i className="bi bi-shield-lock"></i>,
      title: "Robust Safety & Security",
      description: "We prioritize safety by developing embedded systems that comply with automotive safety standards (ISO 26262) and ensure secure operation through advanced encryption techniques.",
    },
    {
      icon: <i className="bi bi-tachometer"></i>,
      title: "Real-time Performance Monitoring",
      description: "We design embedded systems capable of real-time data processing, enabling efficient monitoring and control of vehicle subsystems like engine management, braking, and safety features.",
    },
    {
      icon: <i className="bi bi-cloud-arrow-up"></i>,
      title: "Cloud-Based Connectivity",
      description: "Our embedded systems leverage cloud connectivity to offer remote diagnostics, over-the-air updates, and continuous monitoring of vehicle performance.",
    },
    {
      icon: <i className="bi bi-pie-chart"></i>,
      title: "Data Analytics & Reporting",
      description: "We implement data collection and analytics systems to provide valuable insights into vehicle health, usage patterns, and driver behavior, optimizing maintenance and performance.",
    },
    {
      icon: <i className="bi bi-people"></i>,
      title: "Collaborative Ecosystem for Automotive Manufacturers",
      description: "Our systems are designed to integrate across automotive manufacturers, suppliers, and service providers, enabling efficient collaboration and streamlining vehicle production and servicing.",
    },
    {
      icon: <i className="bi bi-tools"></i>,
      title: "Ongoing Support & Compliance",
      description: "We provide long-term support for automotive embedded systems, ensuring they stay compliant with evolving standards and receive necessary updates throughout their lifecycle.",
    },
  ];

  return (
    <div className="bg-black pt-15">
      <div className="glow-cyan i p-3 bg-black rounded-4xl container mx-auto text-white flex flex-col lg:flex-row items-start justify-around px-6 py-16 min-h-screen">
        {/* Sticky left side */}
        <div className="sticky top-26 w-full lg:w-1/2 xl:w-2/5 lg:pr-10 mb-8 lg:mb-0">
          <div className="max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl mb-4">Why Choose Us for Automotive Embedded Systems?</h1>
            <h3 className="text-2xl mb-6">
              Empowering automotive innovation with robust, scalable, and high-performance embedded systems.
            </h3>
            <div
              ref={divRef}
              onMouseMove={handleMouseMove}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
            >
              <i className="text-3xl bi bi-lightbulb-fill"></i>
              <h1 className="text-2xl text-white font-semibold py-4">
                Cutting-edge automotive systems that enhance vehicle performance and safety.
              </h1>
              <button
                to="/contact"
                className="register-button hidden lg:inline-block mt-4 px-5 py-2 rounded-lg text-base font-semibold text-white border border-transparent transition-all"
              >
                Start Your Project
              </button>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity,
                  background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
                }}
              />
              {children}
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 max-w-lg">
          <div className="h-full overflow-y-auto pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Hide scrollbar for Webkit browsers */}
            <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

            {content.map((item, index) => (
              <div key={index} className="pb-2">
                <div className="flex items-center space-x-2">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="font-semibold text-lg pl-4">{item.title}</h3>
                </div>
                <p className="mt-2 pl-14">{item.description}</p>
                {index !== content.length - 1 && (
                  <div className="border-t border-gray-700 my-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAutomotive;
