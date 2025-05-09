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

const WhyHealthCare = ({
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
      icon: <i className="bi bi-activity"></i>,
      title: "Personalized Healthcare Solutions",
      description: "We create apps that cater to individual healthcare needs, offering personalized care, treatments, and health tracking for patients.",
    },
    {
      icon: <i className="bi bi-phone-landscape"></i>,
      title: "Mobile-First Healthcare Experience",
      description: "Our apps are optimized for mobile devices, ensuring healthcare access anytime, anywhere for both patients and healthcare professionals.",
    },
    {
      icon: <i className="bi bi-puzzle-fill"></i>,
      title: "Interactive Features & Telemedicine",
      description: "We integrate telemedicine, appointment scheduling, and virtual consultations to enhance the healthcare experience for users.",
    },
    {
      icon: <i className="bi bi-universal-access-circle"></i>,
      title: "Accessible & Inclusive Design",
      description: "We ensure that our healthcare apps are accessible to all, including people with disabilities, through compliant design standards.",
    },
    {
      icon: <i className="bi bi-cloud-upload-fill"></i>,
      title: "Cloud-Based & Scalable Infrastructure",
      description: "Our apps are built with a cloud-first approach, ensuring scalability, data storage, and security for millions of users.",
    },
    {
      icon: <i className="bi bi-bar-chart-fill"></i>,
      title: "Health Analytics & Monitoring",
      description: "Our apps offer real-time monitoring of patient health data, along with analytics dashboards to help healthcare providers make data-driven decisions.",
    },
    {
      icon: <i className="bi bi-people-fill"></i>,
      title: "Collaboration Among Healthcare Providers",
      description: "We develop platforms that facilitate collaboration among healthcare professionals through secure communication, shared patient records, and team management tools.",
    },
    {
      icon: <i className="bi bi-tools"></i>,
      title: "Ongoing Support & Compliance",
      description: "We provide continuous app support, ensure HIPAA compliance, and integrate new features as healthcare technology evolves.",
    },
  ];

  return (
    <div className="bg-black pt-15">
      <div className="glow-cyan i p-3 bg-black rounded-4xl container mx-auto text-white flex flex-col lg:flex-row items-start justify-around px-6 py-16 min-h-screen">
        {/* Sticky left side */}
        <div className="md:sticky top-26 w-full lg:w-1/2 xl:w-2/5 lg:pr-10 mb-8 lg:mb-0">
          <div className="max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl mb-4">Why Choose Us for Healthcare App Development?</h1>
            <h3 className="text-2xl mb-6">
              Empowering healthcare with innovative, secure, and user-friendly digital platforms.
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
                Smart healthcare solutions that scale with your needs.
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

export default WhyHealthCare;
