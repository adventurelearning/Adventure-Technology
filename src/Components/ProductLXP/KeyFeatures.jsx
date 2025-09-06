import React from 'react';

// Using inline SVG icons for a clean, self-contained component
const IconBookOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <path d="M2 3h6a4 4 0 0 1 4 4v14H6a4 4 0 0 1-4-4z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14h6a4 4 0 0 0 4-4z" />
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

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-10 w-10 text-blue-400 group-hover:text-blue-200 transition-colors">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// Define the LXP feature data
const features = [
  {
    icon: <IconBookOpen />,
    title: "Personalized Learning Paths",
    description: "Deliver tailored courses and skill journeys designed to match each learner’s goals and pace."
  },
  {
    icon: <IconUsers />,
    title: "Collaboration & Community",
    description: "Encourage social learning through groups, discussions, and peer-to-peer knowledge sharing."
  },
  {
    icon: <IconBarChart />,
    title: "Analytics & Insights",
    description: "Track learner progress, engagement, and performance with data-driven dashboards."
  },
  {
    icon: <IconAward />,
    title: "Gamification & Recognition",
    description: "Boost motivation with badges, points, and certificates to celebrate learner achievements."
  }
];

const KeyFeatures= () => {
  return (
     <div className="bg-black text-white px-6 sm:px-10 lg:px-16 md:py-16  font-sans relative">
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
            Discover the essential tools that make our Learning Experience Platform a complete solution for modern education and training.
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
