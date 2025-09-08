import React, { useState, useEffect, useRef } from 'react';

// Icons for Vehicle Tracking
const IconFleet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 17h1l2 3h12l2-3h1V6H3v11z" />
    <circle cx="7.5" cy="20.5" r="1.5" />
    <circle cx="16.5" cy="20.5" r="1.5" />
  </svg>
);

const IconBus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="5" width="18" height="12" rx="2" ry="2" />
    <line x1="7" y1="17" x2="7" y2="21" />
    <line x1="17" y1="17" x2="17" y2="21" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
  </svg>
);

const IconCrane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 20h16M4 10h16M10 6h4v14h-4z" />
    <circle cx="6" cy="20" r="2" />
    <circle cx="18" cy="20" r="2" />
  </svg>
);

// Vehicle Tracking industries data
const industries = [
  {
    name: 'Fleet Management for Logistics & Delivery',
    icon: <IconFleet />,
    video: 'https://cdn.pixabay.com/video/2023/04/05/158311-816643992_tiny.mp4',
    description: 'Track, monitor, and optimize logistics and delivery fleets in real time.'
  },
  {
    name: 'School & College Transport Monitoring',
    icon: <IconBus />,
    video: 'https://cdn.pixabay.com/video/2018/07/10/17464-277481167_tiny.mp4',
    description: 'Ensure student safety with live bus tracking, route monitoring, and instant alerts.'
  },
  {
    name: 'Personal Vehicle Security',
    icon: <IconShield />,
    video: 'https://cdn.pixabay.com/video/2022/03/16/110046-693195872_tiny.mp4',
    description: 'Protect your car or bike with theft alerts, GPS tracking, and geofencing.'
  },
  {
    name: 'Construction & Equipment Tracking',
    icon: <IconCrane />,
    video: 'https://cdn.pixabay.com/video/2020/01/13/31175-388397123_tiny.mp4',
    description: 'Monitor heavy equipment usage, prevent misuse, and improve site efficiency.'
  },
];

const VehicleTrackingIndustries = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate array for smooth loop
  const duplicatedIndustries = [...industries, ...industries];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      setHighlightedIndex(prevIndex => (prevIndex + 1) % industries.length);
      animationRef.current = setTimeout(animate, 1000);
    };

    animationRef.current = setTimeout(animate, 1500);

    return () => clearTimeout(animationRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
    }
  }, [highlightedIndex]);

  const handleIndustryClick = (index) => {
    setHighlightedIndex(index);
    clearTimeout(animationRef.current);
  };

  return (
    <div id='Ecomvdo' className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight mb-4">
            Smarter Mobility with Vehicle Tracking
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
            From fleet management to personal vehicle safety, our solutions deliver control, security, and efficiency on the move.
          </p>
        </div>

      <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Industries List */}
          <div className="lg:w-full w-full mb-10 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Industries We Serve</h2>
            <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-900/50 p-3 border border-gray-800 shadow-lg">
              <div
                className="space-y-3 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${highlightedIndex * 64}px)` }}
              >
                {industries.map((industry, index) => {
                  const isHighlighted = highlightedIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() => handleIndustryClick(index)}
                      className={`flex items-center px-3 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-blue-500 shadow-lg shadow-blue-500/20'
                          : 'bg-gray-800/30 border-gray-700 hover:border-gray-500 hover:bg-gray-700/40'
                      }`}
                    >
                      <span className="text-base sm:text-lg font-medium">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTrackingIndustries;
