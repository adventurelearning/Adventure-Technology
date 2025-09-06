import React from 'react';

// Inline SVG icons updated for CRM context
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <line x1="18" x2="18" y1="20" y2="10" />
    <line x1="12" x2="12" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="14" />
  </svg>
);

const IconWorkflow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <line x1="6" x2="6" y1="3" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const IconAutomation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06c.46-.46.61-1.15.33-1.82A1.65 1.65 0 0 0 3 12.6V12a2 2 0 0 1 0-4v-.09c0-.67.39-1.27 1-1.51.63-.25 1.36-.09 1.82.33l.06.06a2 2 0 0 1 2.83-2.83l-.06-.06c-.46-.46-.61-1.15-.33-1.82A1.65 1.65 0 0 0 11.4 3h1.2c.67 0 1.27.39 1.51 1 .25.63.09 1.36-.33 1.82l-.06.06a2 2 0 0 1 2.83 2.83l.06-.06c.46-.46 1.15-.61 1.82-.33.61.24 1 0.84 1 1.51V12c0 .67-.39 1.27-1 1.51-.63.25-1.36.09-1.82-.33z" />
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const features = [
  { icon: <IconUsers />, title: "Customer Management", description: "Centralize all customer data and interactions in one place." },
  { icon: <IconLock />, title: "Secure Data", description: "Enterprise-grade encryption to keep your CRM data safe." },
  { icon: <IconChart />, title: "Analytics", description: "Track leads, pipeline, and sales performance with insights." },
  { icon: <IconWorkflow />, title: "Pipeline Management", description: "Visualize and manage deals at every stage of the journey." },
  { icon: <IconAutomation />, title: "Automation", description: "Automate repetitive tasks and streamline workflows." },
  { icon: <IconGlobe />, title: "Global Access", description: "Collaborate with teams and access CRM anywhere, anytime." },
];

const WhyChooseCRM = () => {
  return (
   <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-26 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start">
          
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0 text-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
             Why choose our {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                CRM platform
              </span>
              ?
            </h1>
             <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Our CRM software is built to help businesses grow stronger customer relationships, streamline sales pipelines, and improve team collaboration. From lead capture to customer retention, we’ve got you covered.</p>
            {/* <button className="flex items-center space-x-2 px-6 py-3 border border-blue-400 rounded-full font-medium text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button> */}
          </div>

          {/* Right Section: Features Grid */}
           <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="group p-4 space-y-2 transform transition-transform duration-300 hover:-translate-y-1">
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
                <p className="text-gray-400 text-sm md:text-base ">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCRM;
