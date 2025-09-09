import React from 'react';

// Using inline SVG icons for a clean, self-contained component
const IconLaptop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
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

const IconCreditCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" x2="23" y1="10" y2="10" />
  </svg>
);

const IconShuffle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shuffle h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" x2="21" y1="20" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" x2="21" y1="15" y2="21" />
    <line x1="4" x2="9" y1="20" y2="15" />
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
  { icon: <IconLaptop />, title: "Seller Dashboard", description: "Manage products, orders, and customers in one place." },
  { icon: <IconLock />, title: "Secure Shopping", description: "Data protection and safe payments for every transaction." },
  { icon: <IconChart />, title: "Analytics", description: "Track sales performance and customer insights in real time." },
  { icon: <IconCreditCard />, title: "Easy Payments", description: "Accept multiple payment methods seamlessly." },
  { icon: <IconShuffle />, title: "Scalable", description: "Adaptable for startups, small shops, or global brands." },
  { icon: <IconGlobe />, title: "Across India", description: "Offer your products to customers all over India with hassle-free payments." }

];

const WhyChooseEcommerce = () => {
  return (
      <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-start">
          {/* Left Side Text */}
         <div className="lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-start space-y-6 ">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
              A few reasons why {" "}
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                our e-commerce platform
              </span>
              {" "} is the right choice
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              Our e-commerce solution empowers you to launch, manage, and scale your online store effortlessly. From product listings to secure payments and analytics, we give you everything you need to grow your business online.
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

export default WhyChooseEcommerce;
