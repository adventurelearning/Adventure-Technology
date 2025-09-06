import React, { useState, useEffect, useRef } from 'react';

// Icons for learning industries/domains
const IconCorporate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 21V8a2 2 0 0 1 2-2h3V3h8v3h3a2 2 0 0 1 2 2v13z" />
  </svg>
);

const IconEducation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M22 12l-10 6L2 12l10-6 10 6z" />
    <path d="M6 18v-6l6-3 6 3v6" />
  </svg>
);

const IconHealthcare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const IconTech = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M2 12h20" />
  </svg>
);

const IconRetail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 4h18l-1.5 6h-15L3 4z" />
    <path d="M4 10h16v10H4z" />
  </svg>
);

const IconFinance = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M8 9h8M8 15h8" />
  </svg>
);

const IconGovernment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconNonProfit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 21s-6-4.35-9-9a6 6 0 1 1 12 0c0 4.65-9 9-9 9z" />
  </svg>
);

// Industries/domains data for LXP
const industries = [
  {
    name: 'Corporate Training',
    icon: <IconCorporate />,
    video: 'https://cdn.pixabay.com/video/2022/12/15/141671-781717292_tiny.mp4',
    description: 'Upskill employees with role-based learning, compliance training, and leadership programs.'
  },
  {
    name: 'Higher Education',
    icon: <IconEducation />,
    video: 'https://cdn.pixabay.com/video/2023/04/12/159081-826772727_tiny.mp4',
    description: 'Support universities and colleges with engaging digital classrooms and adaptive learning paths.'
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: <IconHealthcare />,
    video: 'https://cdn.pixabay.com/video/2021/11/01/96015-632506638_tiny.mp4',
    description: 'Provide critical medical training, certifications, and continuous education for healthcare professionals.'
  },
  {
    name: 'Technology & IT',
    icon: <IconTech />,
    video: 'https://cdn.pixabay.com/video/2023/07/07/172625-848170206_tiny.mp4',
    description: 'Deliver tech skill development, coding bootcamps, and product onboarding programs.'
  },
  {
    name: 'Retail & Customer Service',
    icon: <IconRetail />,
    video: 'https://cdn.pixabay.com/video/2023/05/17/162731-834158514_tiny.mp4',
    description: 'Train staff in sales, product knowledge, and customer experience excellence at scale.'
  },
  {
    name: 'Banking & Finance',
    icon: <IconFinance />,
    video: 'https://cdn.pixabay.com/video/2022/08/03/127059-742155437_tiny.mp4',
    description: 'Support compliance training, financial literacy, and investment skill development.'
  },
  {
    name: 'Government & Public Sector',
    icon: <IconGovernment />,
    video: 'https://cdn.pixabay.com/video/2022/05/27/118456-717386444_tiny.mp4',
    description: 'Enable workforce readiness, public training programs, and large-scale e-learning delivery.'
  },
  {
    name: 'Nonprofits & NGOs',
    icon: <IconNonProfit />,
    video: 'https://cdn.pixabay.com/video/2021/10/14/94766-628644006_tiny.mp4',
    description: 'Empower volunteers and staff with accessible learning, resources, and community building.'
  },
];

const LxpSupportIndustries = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate array for smooth loop
  const duplicatedIndustries = [...industries, ...industries];

  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      setHighlightedIndex(prevIndex => (prevIndex + 1) % industries.length);
      animationRef.current = setTimeout(animate, 1500);
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

  const handleIndustryClick = (index) => {
    setHighlightedIndex(index);
    clearTimeout(animationRef.current);
  };

  return (
    <div className="bg-black text-white p-6 sm:p-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Powering Learning Across Industries
        </h1>
       <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
          From corporate to healthcare, explore how our Learning Experience Platform drives skill development and growth.
        </p>

           <div className="flex flex-col-1 lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Industries List */}

          <div className="lg:w-full w-full mb-10 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Industries We Serve</h2>
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-900/50 p-3 border border-gray-800 shadow-lg">
              <div
                className="space-y-3 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${highlightedIndex * 64}px)` }}
              >
                {duplicatedIndustries.map((industry, index) => {
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

export default LxpSupportIndustries;
