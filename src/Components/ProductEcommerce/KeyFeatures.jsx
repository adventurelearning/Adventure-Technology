import React from 'react';

// Using inline SVG icons for a clean, self-contained component
const IconDollarSign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconBox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
    <path d="M12 2v4" />
    <path d="M7 6h10" />
    <path d="M12 10v4" />
    <path d="M7 14h10" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBarChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <line x1="18" x2="18" y1="20" y2="10" />
    <line x1="12" x2="12" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="14" />
  </svg>
);

// Define the e-commerce feature data
const features = [
  {
    icon: <IconDollarSign />,
    title: "Seamless Checkout",
    description: "Fast, secure payments with multiple options to boost conversions and reduce cart abandonment."
  },
  {
    icon: <IconBox />,
    title: "Smart Product Management",
    description: "Easily add, update, and categorize products with real-time stock tracking and automated alerts."
  },
  {
    icon: <IconUsers />,
    title: "Customer Engagement",
    description: "Build lasting relationships with personalized shopping experiences, wishlists, and loyalty programs."
  },
  {
    icon: <IconBarChart />,
    title: "Sales Analytics",
    description: "Track orders, monitor revenue, and analyze trends with easy-to-understand business dashboards."
  }
];

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-16 md:py-16  font-sans relative">
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
            Explore the essential tools that help you create, manage, and grow a successful online store.
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
