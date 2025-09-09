import React from 'react';

// Icons
const IconBattery = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-battery h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" x2="23" y1="13" y2="11" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-shield h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconThermometer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-thermometer h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a5 5 0 1 0 5 0z" />
  </svg>
);

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-activity h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

// Features Data (Converted to BMS)
const features = [
  {
    icon: <IconBattery />,
    title: "Real-Time Monitoring",
    description: "Track voltage, current, temperature, and battery health instantly with smart sensors."
  },
  {
    icon: <IconShield />,
    title: "Overcharge & Discharge Protection",
    description: "Intelligent cut-off and recovery systems prevent battery damage and extend lifespan."
  },
  {
    icon: <IconThermometer />,
    title: "Thermal Management",
    description: "Advanced temperature control and heat protection for safe battery operations."
  },
  {
    icon: <IconActivity />,
    title: "Data Logging & Alerts",
    description: "Get instant alerts for faults and analyze performance with detailed historical logs."
  }
];

// Component
const KeyFeatures = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-16 md:py-16 font-sans relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Heading Section */}
        <section className="text-left md:text-center">
          <h2 className="text-3xl sm:text-4xl  font-semibold mb-4 tracking-tight">
            Key{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Features
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore the smart features that make our Battery Management System the perfect solution for safety, performance, and efficiency.
          </p>
        </section>

        {/* Features Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default KeyFeatures;
