import React from 'react';

// Inline SVG icons (reused, renamed for BMS context)
const IconBattery = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-battery h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
    <line x1="22" y1="11" x2="22" y2="13" />
  </svg>
);

const IconVoltage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-zap h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconCustom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-settings h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconSupport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-headphones h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 18a3 3 0 0 1-6 0v-4a3 3 0 0 1 6 0v4zM3 18a3 3 0 0 0 6 0v-4a3 3 0 0 0-6 0v4z" />
  </svg>
);

const IconAPI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-code h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const features = [
  { icon: <IconBattery />, title: "Supports Lithium-ion & Lead-Acid", description: "Compatible with popular battery chemistries." },
  { icon: <IconVoltage />, title: "3S to Battery Pack", description: "Works with small to large multi-cell systems." },
  { icon: <IconCustom />, title: "Customizable", description: "Set voltage, capacity, and safety limits easily." },
  { icon: <IconSupport />, title: "Local Support", description: "Warranty & service coverage across India." },
  { icon: <IconAPI />, title: "API & App Integration", description: "Connect BMS data with apps and IoT systems." },
];


const WhyChooseBMS = () => {
  return (
   <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-start">
          {/* Left Side Text */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-left space-y-6 ">
             <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-wide">
             Why choose {" "}
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                    BMS solution
              </span>
             
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify">Protect, monitor, and extend the life of your batteries with our advanced BMS solutions. Ideal for electric vehicles, solar setups, inverters, and energy storage systems — ensure your batteries operate safely and efficiently at all times.
            </p>
          </div>
            

          {/* Right Side Features */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="h-full flex flex-col p-6 bg-gray-900 border border-blue-500 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black border border-blue-500 text-blue-400 mb-4">
                  {feature.icon}
                </div>

                {/* Title + Description */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBMS;
