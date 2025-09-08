import React from 'react';

// Inline SVG icons (same as before)
const IconLaptop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-monitor h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-lock h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-bar-chart-2 h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <line x1="18" x2="18" y1="20" y2="10" />
    <line x1="12" x2="12" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="14" />
  </svg>
);

const IconCreditCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-credit-card h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" x2="23" y1="10" y2="10" />
  </svg>
);

const IconShuffle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-shuffle h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" x2="21" y1="20" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" x2="21" y1="15" y2="21" />
    <line x1="4" x2="9" y1="20" y2="15" />
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-globe h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const features = [
  { icon: <IconLaptop />, title: "Admin panel", description: "Invoicing, stock, and customer management." },
  { icon: <IconLock />, title: "Safety", description: "Secure and reliable with robust encryption." },
  { icon: <IconChart />, title: "Statistics", description: "Real-time stock tracking and business insights." },
  { icon: <IconCreditCard />, title: "Credit", description: "Easily track and manage customer credits." },
  { icon: <IconShuffle />, title: "Flexible", description: "Works for retail, wholesale, and service businesses." },
  { icon: <IconGlobe />, title: "Global", description: "Print and share invoices instantly." },
];

const WhychooseBill = () => {
  return (
    <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start">
          
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0 text-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
              A few reasons why {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                our software
              </span>{" "}
              might be the right fit
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Our billing software is designed to make invoicing, stock management, and customer handling effortless. Whether you run a retail shop, wholesale business, or service company, we help you save time and boost profits.
            </p>
            <div className="flex justify-center lg:justify-start">
              {/* <button className="flex items-center space-x-2 px-6 py-3 border border-blue-400 rounded-full font-medium text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-right h-5 w-5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button> */}
            </div>
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
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhychooseBill;
