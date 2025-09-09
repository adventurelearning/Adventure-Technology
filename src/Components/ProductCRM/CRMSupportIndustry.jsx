import React, { useState, useEffect, useRef } from 'react';

// Icon Components (CRM-focused)
const IconBank = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-bank h-6 w-6 mr-3">
    <path d="M3 10h18" />
    <path d="M5 10v10" />
    <path d="M19 10v10" />
    <path d="M2 20h20" />
    <path d="M12 1l10 5H2z" />
  </svg>
);

const IconGraduation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-graduation-cap h-6 w-6 mr-3">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconHealth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-heart-pulse h-6 w-6 mr-3">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
    <path d="M12 8v4l2 2" />
  </svg>
);

const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-building h-6 w-6 mr-3">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 21V9h6v12" />
  </svg>
);

const IconAirplane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-plane h-6 w-6 mr-3">
    <path d="M2 16l20-5-20-5v5l6 2-6 2v5z" />
  </svg>
);

const IconCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-shopping-cart h-6 w-6 mr-3">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const IconHeadset = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-headphones h-6 w-6 mr-3">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className="lucide lucide-shield h-6 w-6 mr-3">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Industries for CRM
const industries = [
  {
    name: 'Banking & Financial Services',
    icon: <IconBank />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69591-536979208_small.mp4',
    description: 'Manage client portfolios, track opportunities, and improve relationship banking.'
  },
  {
    name: 'Education & Training',
    icon: <IconGraduation />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69592-536979209_small.mp4',
    description: 'Enhance student engagement, admissions, and alumni management with CRM tools.'
  },
  {
    name: 'Healthcare & Hospitals',
    icon: <IconHealth />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69590-536979207_small.mp4',
    description: 'Improve patient relationships, appointment scheduling, and follow-ups.'
  },
  {
    name: 'Real Estate & Property',
    icon: <IconBuilding />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69588-536979205_small.mp4',
    description: 'Track leads, manage property listings, and close deals faster.'
  },
  {
    name: 'Travel & Hospitality',
    icon: <IconAirplane />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69595-536979212_small.mp4',
    description: 'Deliver personalized experiences and manage bookings with ease.'
  },
  {
    name: 'Retail & E-commerce',
    icon: <IconCart />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69594-536979211_small.mp4',
    description: 'Track customer behavior, loyalty programs, and purchase history seamlessly.'
  },
  {
    name: 'Customer Support & BPO',
    icon: <IconHeadset />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69589-536979206_small.mp4',
    description: 'Manage tickets, automate responses, and increase first-call resolution.'
  },
  {
    name: 'Insurance & Legal',
    icon: <IconShield />,
    video: 'https://cdn.pixabay.com/video/2021/04/06/69593-536979210_small.mp4',
    description: 'Track policy renewals, case updates, and improve compliance.'
  }
];

const CRMSupportIndustry = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const animate = () => {
      setHighlightedIndex(prev => (prev + 1) % industries.length);
      animationRef.current = setTimeout(animate, 2000);
    };
    animationRef.current = setTimeout(animate, 2000);
    return () => clearTimeout(animationRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [highlightedIndex]);

  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight mb-4">
            Empowering CRM across industries
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
             From banking to healthcare, our CRM solutions adapt to your unique business needs, helping you connect, engage, and grow.
          </p>
        </div>

        <div className="flex flex-col-1 lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Industries List */}

          <div className="lg:w-full w-full mb-10 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Industries We Serve</h2>
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-900/50 p-3 border border-gray-800 shadow-lg">
              <div
                className="space-y-3 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${highlightedIndex * 64}px)` }}
              >
                {industries.map((industry, index) => {
                  const originalIndex = index % industries.length;
                  const isHighlighted = highlightedIndex === originalIndex;
                  return (
                    <div
                      key={index}
                      onClick={() => handleIndustryClick(originalIndex)}
                      className={`flex items-center px-3 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${isHighlighted
                        ? 'bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-blue-500 shadow-lg shadow-blue-500/20'
                        : 'bg-gray-800/30 border-gray-700 hover:border-gray-500 hover:bg-gray-700/40'
                        }`}
                    >
                      {/* <span className="mr-3">{industry.icon}</span> */}
                      <span className="text-base sm:text-lg font-medium">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Video Section */}
          {/* <div className="lg:w-3/5 w-full">
            <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-2xl relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={industries[highlightedIndex].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

          
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg sm:text-2xl font-bold mb-2">{industries[highlightedIndex].name}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{industries[highlightedIndex].description}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CRMSupportIndustry;
