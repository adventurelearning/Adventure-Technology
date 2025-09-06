import React from 'react';

// Inline SVG icons for vehicle tracking features
const IconTruck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M3 17h1l2 3h12l2-3h1V6H3v11z" />
    <circle cx="7.5" cy="20.5" r="1.5" />
    <circle cx="16.5" cy="20.5" r="1.5" />
  </svg>
);

const IconBus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="12" rx="2" ry="2" />
    <line x1="7" y1="17" x2="7" y2="21" />
    <line x1="17" y1="17" x2="17" y2="21" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
  </svg>
);

const IconCrane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M4 20h16M4 10h16M10 6h4v14h-4z" />
    <circle cx="6" cy="20" r="2" />
    <circle cx="18" cy="20" r="2" />
  </svg>
);

// Vehicle Tracking feature data
const features = [
  {
    icon: <IconTruck />,
    title: "Fleet Management",
    description: "Track and optimize logistics and delivery vehicles in real-time for efficiency."
  },
  {
    icon: <IconBus />,
    title: "School & College Transport",
    description: "Ensure student safety with live tracking, route monitoring, and timely alerts."
  },
  {
    icon: <IconShield />,
    title: "Personal Vehicle Security",
    description: "Protect your car or bike with theft alerts, geofencing, and emergency tracking."
  },
  {
    icon: <IconCrane />,
    title: "Construction & Equipment Tracking",
    description: "Monitor heavy machinery usage, prevent misuse, and reduce downtime."
  }
];

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-16 md:py-16 font-sans relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Heading Section */}
        <section className="text-left md:text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Key{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Features
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore powerful solutions for logistics, transport, personal security, and equipment tracking.
          </p>
        </section>

        {/* Feature Cards Section */}
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
