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

const WhyAgriculture = ({
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
      icon: <i className="bi bi-building"></i>,
      title: "Farm Management Integration",
      description: "We create software solutions that streamline farm operations by integrating planting schedules, harvest tracking, and equipment management.",
    },
    {
      icon: <i className="bi bi-shield-lock"></i>,
      title: "Advanced Security",
      description: "We prioritize the security of your agricultural data, implementing encryption, secure cloud storage, and access control for sensitive farming data.",
    },
    {
      icon: <i className="bi bi-bar-chart-line"></i>,
      title: "Real-Time Farm Analytics",
      description: "Track the performance of crops, livestock, and machinery with real-time data and analytics to make informed decisions for your farm.",
    },
    {
      icon: <i className="bi bi-gear"></i>,
      title: "Customizable Solutions for Agriculture",
      description: "Our software is highly customizable to meet the specific needs of your farm, from crop management to resource allocation and reporting.",
    },
    {
      icon: <i className="bi bi-cloud-arrow-up"></i>,
      title: "Cloud-Based Agriculture Software",
      description: "Access your farm’s data anytime, anywhere with cloud-based software that ensures uptime and scalability as your operations grow.",
    },
    {
      icon: <i className="bi bi-people-fill"></i>,
      title: "User-Centric Design for Farmers",
      description: "We design intuitive interfaces for farmers and farm operators, making technology easy to use and ensuring a smooth user experience in agricultural tasks.",
    },
    {
      icon: <i className="bi bi-cogs"></i>,
      title: "Continuous Support & Updates",
      description: "Our team provides continuous support and regular updates to keep your farm management software in sync with new agricultural trends and technologies.",
    },
    {
      icon: <i className="bi bi-currency-dollar"></i>,
      title: "Flexible Billing & Payment Systems",
      description: "Our solutions include flexible billing and subscription models, helping farm management teams handle invoicing, payments, and financial tracking.",
    },
  ];

  return (
    <div className="bg-black pt-15">
      <div className="glow-cyan i p-3 bg-black rounded-4xl container mx-auto text-white flex flex-col lg:flex-row items-start justify-around px-6 py-16 min-h-screen">
        {/* Sticky left side */}
        <div className="sticky top-26 w-full lg:w-1/2 xl:w-2/5 lg:pr-10 mb-8 lg:mb-0">
          <div className="max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl mb-4">Why Choose Us for Agriculture Software Development?</h1>
            <h3 className="text-2xl mb-6">
              Empowering your farm with reliable, scalable, and secure agricultural software solutions.
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
                Empower your farm with technology-driven solutions.
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

export default WhyAgriculture;
