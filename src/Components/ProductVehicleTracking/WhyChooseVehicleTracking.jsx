import React from "react";

// Icons mapped for Vehicle Tracking
const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-map-pin h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconHistory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-history h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M3 3v5h5" />
    <path d="M3.05 13a9 9 0 1 0 .5-5.5L3 8" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const IconFence = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-shield-check h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconSpeed = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-gauge h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M12 14h.01" />
    <path d="M20.7 13a8 8 0 1 1-15.4 0" />
    <path d="m12 14 4-4" />
  </svg>
);

const IconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-smartphone h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-cloud h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.5A7 7 0 1 0 5 16.3" />
    <path d="M12 12v9" />
  </svg>
);

// Vehicle Tracking Features
const features = [
  { icon: <IconLocation />, title: "Live Location Tracking", description: "Track your vehicle’s location in real-time with high accuracy." },
  { icon: <IconHistory />, title: "Trip History Reports", description: "Access detailed travel history with timestamps, route playback, and stop durations." },
  { icon: <IconFence />, title: "Geo-Fencing Alerts", description: "Set virtual boundaries and get instant alerts when vehicles enter or exit specified zones." },
  { icon: <IconSpeed />, title: "Speed & Idle Alerts", description: "Get notified about overspeeding, long idling, and route deviations." },
  { icon: <IconMobile />, title: "Mobile App Access", description: "Track your vehicles anytime, anywhere with our Android and iOS apps." },
  { icon: <IconCloud />, title: "Secure Data & Cloud Storage", description: "All your tracking data is encrypted and stored safely on our cloud platform." }
];

const WhyChooseVehicleTracking = () => {
  return (
    <div className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start">
          
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0 text-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
              Why choose {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Vehicle Tracking
              </span>
              {" "} for your fleet?
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Ensure safety, efficiency, and peace of mind with real-time tracking, route history, 
              geo-fencing, and secure cloud storage. Our smart tracking solutions keep your vehicles monitored anytime, anywhere.
            </p>
          </div>

          {/* Right Section: Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="group space-y-2 transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center  mb-2">
                  <div className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative z-10">{feature.icon}</span>
                  </div>
                  <div className="text-sm font-semibold tracking-wide text-gray-400 group-hover:text-blue-300 transition-colors">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVehicleTracking;
