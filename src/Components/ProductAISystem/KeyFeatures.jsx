import React from 'react';

// Inline SVG icons for AI Attendance Hardware
const IconProcessor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path d="M9 9h6v6H9z" />
  </svg>
);

const IconCamera = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="14" cy="13" r="3" />
    <path d="M5 7h4l2-2h6l2 2h4v14H5V7z" />
  </svg>
);

const IconAI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v18m9-9H3" />
  </svg>
);

const IconConnectivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5v14" />
  </svg>
);

const IconDisplay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
    <path d="M8 20h8" />
  </svg>
);

const IconPower = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v10M6.343 6.343l7.314 7.314M17.657 6.343l-7.314 7.314" />
  </svg>
);

const IconOS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

// AI Attendance Hardware Features
const features = [
  {
    icon: <IconProcessor />,
    title: "Processor",
    description: "Quad-Core ARM Cortex / NVIDIA Jetson Nano"
  },
  {
    icon: <IconCamera />,
    title: "Camera",
    description: "5MP or 8MP HD camera with IR support for low light"
  },
  {
    icon: <IconDisplay />,
    title: "Facial Recognition",
    description: "OpenCV / TensorFlow Lite / Custom AI models"
  },
  {
    icon: <IconConnectivity />,
    title: "Connectivity",
    description: "Wi-Fi, LAN, Optional 4G Module"
  },
  // {
  //   icon: <IconDisplay />,
  //   title: "Display",
  //   description: "5\"–7\" Touchscreen TFT / HDMI Output"
  // },
  // {
  //   icon: <IconPower />,
  //   title: "Power",
  //   description: "5V/3A or POE support"
  // },
  // {
  //   icon: <IconOS />,
  //   title: "Operating System",
  //   description: "Embedded Linux / Ubuntu Core"
  // }
];

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-16 md:py-16 font-sans relative">
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
            Explore the key hardware and software components that power accurate and fast AI attendance tracking.
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
