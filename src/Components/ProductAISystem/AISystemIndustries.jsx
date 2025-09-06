import React, { useState, useEffect, useRef } from 'react';

// Icons for AI Attendance System
const IconSchool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconOffice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M7 14h2" />
    <path d="M7 18h2" />
  </svg>
);

const IconConstruction = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 20h16M4 10h16M10 6h4v14h-4z" />
    <circle cx="6" cy="20" r="2" />
    <circle cx="18" cy="20" r="2" />
  </svg>
);

const IconFactory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 21V8l7-5 7 5v13H3z" />
    <path d="M10 14v7" />
    <path d="M14 10v11" />
  </svg>
);

const IconGovernment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2L2 7h20L12 2z" />
    <path d="M5 7v14h14V7" />
    <path d="M12 11v7" />
  </svg>
);

// AI Attendance System industries
const industries = [
  {
    name: 'Schools & Colleges',
    icon: <IconSchool />,
    video: 'https://cdn.pixabay.com/video/2018/07/10/17464-277481167_tiny.mp4',
    description: 'Track student attendance with facial recognition, ensuring safety and accuracy.'
  },
  {
    name: 'Corporate Offices & IT Parks',
    icon: <IconOffice />,
    video: 'https://cdn.pixabay.com/video/2023/04/05/158311-816643992_tiny.mp4',
    description: 'Monitor employee attendance efficiently for HR and payroll management.'
  },
  {
    name: 'Construction Sites',
    icon: <IconConstruction />,
    video: 'https://cdn.pixabay.com/video/2020/01/13/31175-388397123_tiny.mp4',
    description: 'Manage worker attendance on-site with offline and online modes.'
  },
  {
    name: 'Manufacturing Plants',
    icon: <IconFactory />,
    video: 'https://cdn.pixabay.com/video/2022/03/16/110046-693195872_tiny.mp4',
    description: 'Track staff in production lines to improve accountability and efficiency.'
  },
  {
    name: 'Government Offices',
    icon: <IconGovernment />,
    video: 'https://cdn.pixabay.com/video/2021/02/15/office-6007285_tiny.mp4',
    description: 'Ensure accurate attendance records for employees across departments.'
  },
];

const AIAttendanceIndustries = () => {
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
      animationRef.current = setTimeout(animate, 1500);
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
    <div id='AIAttendanceIndustries' className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight mb-4">
            AI Attendance System in Various Industries
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
            Our AI Attendance System provides seamless attendance management for schools, offices, construction sites, manufacturing units, and government offices.
          </p>
        </div>

       <div className="flex flex-col-1 lg:flex-row items-start lg:space-x-12">
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

export default AIAttendanceIndustries;
