import React, { useRef, useEffect, useState } from 'react';

// Import images locally
import webDevelopmentImage from '../assets/Provids/WEB DEVELOPMENT.svg';
import softwareDevelopmentImage from '../assets/Provids/Software Development.svg';
import iotDevelopmentImage from '../assets/Provids/IOT (1).svg';
// import aiMlImage from '../assets/Provids/WEB DEVELOPMENT.svgg';
import dataScienceImage from '../assets/Provids/DATA SCIENCE & DATA ANALYTICS.svg';
// import digitalMarketingImage from '../assets/Provids/WEB DEVELOPMENT.svg';
// import itConsultingImage from '../assets/Provids/WEB DEVELOPMENT.svg';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'At Adventure Technology, we build fast, secure, and scalable web applications tailored to your business needs. From simple sites to complex platforms, Adventure Technology delivers robust backend systems with seamless performance.',
    link: webDevelopmentImage,  // Referencing the local image
  },
  {
    id: '02',
    title: 'Software Development',
    description:
      'Adventure Technology builds custom, high-performance software solutions that drive efficiency and innovation. Using the latest technologies and agile practices, we deliver scalable applications tailored to your business needs..',
    link: softwareDevelopmentImage,  // Referencing the local image
  },
  {
    id: '03',
    title: 'IoT Development',
    description:
      'At Adventure Technology, we design and develop smart IoT solutions that connect devices, systems, and people. From sensor integration to real-time data processing, our IoT platforms enhance automation, efficiency, and decision-making across industries.',
    link: iotDevelopmentImage,  // Referencing the local image
  },
  {
    id: '04',
    title: 'AI & ML Solutions',
    description:
      'At Adventure Technology, we harness the power of AI and Machine Learning to build intelligent systems that learn, adapt, and optimize. From predictive analytics to natural language processing, our solutions help businesses automate processes, uncover insights, and drive smarter decision-making.',
    link: webDevelopmentImage,  // Referencing the local image
  },
  {
    id: '05',
    title: 'Data Science & Data Analysis',
    description:
      'We turn data into actionable insights. At Adventure Technology, our data science and analysis services help businesses uncover patterns, predict trends, and make smarter decisions through advanced analytics and machine learning.',
    link: dataScienceImage,  // Referencing the local image
  },
  {
    id: '06',
    title: 'Digital Marketing',
    description:
      'At Adventure Technology, we craft data-driven digital marketing strategies that amplify your brand’s online presence. From SEO and paid ads to social media and content marketing, our solutions are designed to attract, engage, and convert your ideal audience.',
    link: webDevelopmentImage,  // Referencing the local image
  },
  {
    id: '07',
    title: 'IT Consulting',
    description:
      'Adventure Technology provides expert IT consulting to help businesses align technology with their goals. From strategy to implementation, we guide digital transformation and optimize IT infrastructure for long-term success.',
    link: webDevelopmentImage,  // Referencing the local image
  },
];

const Provides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
    );

    itemRefs.current.forEach(item => {
      if (item) observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-black flex flex-col gap-8 p-4">
      <h1 className="text-white text-4xl text-center leading-snug">
        Our Services
      </h1>

      {services.map((service, index) => (
        <div
          key={service.id}
          ref={el => itemRefs.current[index] = el}
          className="relative flex items-start"
        >
          {/* Vertical line */}
          {index !== services.length - 1 && (
            <div className="absolute left-3 top-6 h-[calc(100%)] w-0.5 mt-2 bg-gray-200"></div>
          )}

          {/* Timeline dot */}
          <div className="relative z-10 mr-10 mt-1">
            <div className="w-6 h-6 relative">
              <div className="absolute inset-1 bg-white rounded-full z-10"></div>
              <div className="absolute inset-0 bg-gray-500 rounded-full animate-ping-custom z-0"></div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`flex-1 pb-30 text-white mt-10 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-30'}`}
          >
            <h1 className="mb-4 text-2xl font-semibold text-blue-600 leading-tight">{service.id}</h1>
            <h2 className="text-white text-2xl font-semibold max-w-2xl mb-4 leading-relaxed">{service.title}</h2>
            <p className="text-lg font-light opacity-80 max-w-sm mb-4 leading-7">{service.description}</p>
            <button className="border border-blue-600 text-blue-500 px-4 py-2 rounded-lg">
              Know More
            </button>
          </div>

          {/* Image */}
          <div className="w-1/2 transition-opacity duration-500">
            <img 
              src={service.link} 
              alt={service.title} 
              className={`rounded-lg w-full h-auto object-cover transition-all duration-500 transform ${
                activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Provides;
