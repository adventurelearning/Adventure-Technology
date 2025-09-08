import React from "react";

// Icons reused with suitable mapping for home automation
const IconLaptop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-monitor h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const IconMic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-mic h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-clock h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-smartphone h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const IconEnergy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-battery-charging h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M5 18h6v-6H5v6z" />
    <path d="M13 6h6v6h-6V6z" />
    <line x1="22" y1="11" x2="22" y2="13" />
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-shield h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Home Automation Features
const features = [
  { icon: <IconLaptop />, title: "Centralized Control Panel", description: "Manage lights, fans, ACs, and more through a mobile app or voice assistant." },
  { icon: <IconMic />, title: "Voice Control Compatibility", description: "Works seamlessly with Alexa, Google Assistant, and Siri for hands-free operation." },
  { icon: <IconClock />, title: "Smart Scheduling", description: "Automate daily routines—turn on lights at sunset, set AC timers, and more." },
  { icon: <IconPhone />, title: "Remote Access", description: "Monitor and control your home devices from anywhere using your smartphone." },
  { icon: <IconEnergy />, title: "Energy Efficiency", description: "Reduce electricity bills with smart usage tracking and intelligent automation." },
  { icon: <IconLock />, title: "Security Integration", description: "Connect to smart cameras, motion sensors, and door locks for a complete smart security system." }
];

const WhyChooseHomeAutomation = () => {
  return (
    <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start">
          
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0 text-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
              Why choose {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Smart Home Automation
              </span>
              {" "} for your home?
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Experience the future of living with centralized control, energy savings, and smart security. Our home automation system makes your home smarter, safer, and more efficient—controlled anytime, anywhere.
            </p>
          </div>

          {/* Right Section: Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="group  space-y-2 transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-2">
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

export default WhyChooseHomeAutomation;
