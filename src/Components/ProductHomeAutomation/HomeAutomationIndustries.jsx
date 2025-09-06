import React, { useState, useEffect, useRef } from 'react';
// import backgroundVideoMobile from '../../assets/ecommerce.mp4';

// Icons (reuse / adjust as needed)
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const IconOffice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 4v16" />
  </svg>
);

const IconElderly = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="6" r="4" />
    <path d="M6 22v-6a6 6 0 1 1 12 0v6" />
  </svg>
);

const IconVacation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Industries data for Home Automation
const industries = [
  {
    name: 'Smart Homes & Apartments',
    icon: <IconHome />,
    video: 'https://cdn.pixabay.com/video/2023/01/31/147329-793685006_tiny.mp4',
    description: 'Automate lighting, security, climate control, and entertainment in your home or apartment.'
  },
  {
    name: 'Office Automation',
    icon: <IconOffice />,
    video: 'https://cdn.pixabay.com/video/2023/07/04/171488-846230631_tiny.mp4',
    description: 'Smart office solutions for energy savings, security, and productivity at workplaces.'
  },
  {
    name: 'Elderly Assistance at Home',
    icon: <IconElderly />,
    video: 'https://cdn.pixabay.com/video/2022/10/16/137006-762979726_tiny.mp4',
    description: 'Remote monitoring, fall detection, and smart alerts for senior citizen care.'
  },
  {
    name: 'Vacation Home Monitoring',
    icon: <IconVacation />,
    video: 'https://cdn.pixabay.com/video/2022/12/05/142013-779383930_tiny.mp4',
    description: 'Keep your second home safe with smart locks, CCTV, and automated monitoring.'
  },
  
];

const HomeAutomationIndustries = () => {
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);
    const listContainerRef = useRef(null);
    const animationRef = useRef(null);

    // Create a duplicated array for seamless looping
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
            setHighlightedIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % industries.length;
                return nextIndex;
            });
            animationRef.current = setTimeout(animate, 2000);
        };

        animationRef.current = setTimeout(animate, 2000);

        return () => {
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, [isPaused]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
        }
    }, [highlightedIndex]);

    const handleIndustryClick = (index) => {
        setHighlightedIndex(index);
        if (animationRef.current) {
            clearTimeout(animationRef.current);
        }
        // Restart animation after a delay
        setTimeout(() => {
            if (!isPaused) {
                animationRef.current = setTimeout(() => {
                    setHighlightedIndex((index + 1) % industries.length);
                }, 2000);
            }
        }, 3000);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        if (!isPaused && animationRef.current) {
            clearTimeout(animationRef.current);
        } else if (isPaused) {
            // Restart the animation
            animationRef.current = setTimeout(() => {
                setHighlightedIndex((highlightedIndex + 1) % industries.length);
            }, 2000);
        }
    };

  return (
     <div id='Ecomvdo' className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powering Smart Living with Home Automation
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl">
            From smart apartments to vacation homes, our solutions bring safety, comfort, and efficiency to every lifestyle.
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

export default HomeAutomationIndustries;
