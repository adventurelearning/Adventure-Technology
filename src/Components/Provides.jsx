import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import images locally
import webDevelopmentImage from '../assets/Provids/WEB DEVELOPMENT.svg';
import softwareDevelopmentImage from '../assets/Provids/Software Development.svg';
import uiux from '../assets/Provids/UI & UX.svg';
import iotDevelopmentImage from '../assets/Provids/IOT (1).svg';
import dataScienceImage from '../assets/Provids/DATA SCIENCE & DATA ANALYTICS.svg';
import AIML from '../assets/Provids/AI & ML.svg';
import marketing from '../assets/Provids/DIGITAL MARKETING.svg';
import Embdesign from '../assets/Provids/EMBEDDED PRODUCT DESIGN.svg';
import EmbSoft from '../assets/Provids/Embedded Software.svg';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'At Adventure Technology, we build fast, secure, and scalable web applications tailored to your business needs. From simple sites to complex platforms, Adventure Technology delivers robust backend systems with seamless performance.',
    link: webDevelopmentImage,
    path:'/Web-Development'
  },
  {
    id: '02',
    title: 'Software Development',
    description:
      'Adventure Technology builds custom, high-performance software solutions that drive efficiency and innovation. Using the latest technologies and agile practices, we deliver scalable applications tailored to your business needs.',
    link: softwareDevelopmentImage,
    path:"App-Development"
  },
  {
    id: '03',
    title: 'UI & UX Design',
    description:
      'At Adventure Technology, we craft intuitive and engaging digital experiences. Our UI/UX design services combine user research, interaction design, and visual aesthetics to deliver interfaces that are not only beautiful but also user-centric and effective.',
    link: uiux,
     path:"UiUx-Design"
  },
  {
    id: '04',
    title: 'IoT Development',
    description:
      'At Adventure Technology, we design and develop smart IoT solutions that connect devices, systems, and people. From sensor integration to real-time data processing, our IoT platforms enhance automation, efficiency, and decision-making across industries.',
    link: iotDevelopmentImage,
    path:"/Iot-development"
  },
  {
    id: '05',
    title: 'AI & ML Solutions',
    description:
      'At Adventure Technology, we harness the power of AI and Machine Learning to build intelligent systems that learn, adapt, and optimize. From predictive analytics to natural language processing, our solutions help businesses automate processes, uncover insights, and drive smarter decision-making.',
    link: AIML,
    path:"/AiMl-Solutions"
  },
  {
    id: '06',
    title: 'Embedded Product Design',
    description:
      'We design innovative and reliable embedded hardware solutions tailored to your industry needs. From PCB design to microcontroller integration, our expertise ensures optimized, scalable product development for smart devices and systems.',
    link: Embdesign,
    path:"/Embedded-Design"
  },
  {
    id: '07',
    title: 'Embedded Software',
    description:
      'We specialize in embedded software development, including firmware, board support packages (BSP), and middleware. Our solutions ensure reliable, low-level hardware control and efficient performance for embedded systems across industries.',
    link: EmbSoft,
    path:"/Embedded-Software"
  },
  {
    id: '08',
    title: 'Data Science & Data Analytics',
    description:
      'We turn data into actionable insights. At Adventure Technology, our data science and analysis services help businesses uncover patterns, predict trends, and make smarter decisions through advanced analytics and machine learning.',
    link: dataScienceImage,
    path:"/DataScience-Analytics"
  },
  {
    id: '09',
    title: 'Digital Marketing',
    description:
      'At Adventure Technology, we craft data-driven digital marketing strategies that amplify your brand’s online presence. From SEO and paid ads to social media and content marketing, our solutions are designed to attract, engage, and convert your ideal audience.',
    link: marketing,
    path:"/Digital-Marketing"
  },
];

const Provides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50px 0px -50px 0px' } // Adjust rootMargin for better triggering
    );

    itemRefs.current.forEach((item) => {
      if (item) observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-black flex flex-col gap-12 py-16 md:py-24">
      <h1 className="text-white text-3xl md:text-4xl text-center leading-snug pb-8">
        Our Services
      </h1>

      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => (itemRefs.current[index] = el)}
          className="relative flex px-6 md:px-10"
        >
          {/* Timeline Column (Hidden on small screens) */}
          <div className="relative flex flex-col items-center w-16 md:w-20 hidden md:flex">
            {/* Dot */}
            <div className="relative z-10 mt-8 md:mt-11">
              <div className="w-5 h-5 md:w-6 md:h-6 relative">
                <div className="absolute inset-1 bg-blue-600 rounded-full z-10"></div>
                <div className="absolute inset-0 bg-gray-500 rounded-full animate-ping-custom z-0"></div>
              </div>
            </div>

            {/* Line */}
            {index !== services.length - 1 && (
              <div className="absolute top-[3.5rem] md:top-[4.5rem] h-full w-0.5 bg-white z-0"></div>
            )}
          </div>

          {/* Content Column */}
          <div className="flex flex-col md:flex-row w-full justify-between items-start pt-8 md:pt-12">
            {/* Left Content */}
            <div
              className={`w-full md:w-1/2 md:pl-5 text-white transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-60 md:opacity-30'
                }`}
            >
              <h1 className="mb-2 text-xl md:text-2xl font-semibold text-blue-500 leading-tight">
                {service.id}
              </h1>
              <h2 className="text-white text-xl md:text-2xl font-semibold max-w-2xl mb-3 md:mb-4 leading-relaxed">
                {service.title}
              </h2>
              <p className="text-lg font-light opacity-80 max-w-md mb-3 md:mb-4 leading-7">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="border border-blue-500 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300"
              >
                Know More
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-3/4 flex justify-center md:justify-end pt-4 md:pt-0 md:pr-10 transition-opacity duration-500">
              <img
                src={service.link}
                alt={service.title}
                className={`rounded-lg w-full md:w-1/2 h-auto transition-all duration-500 transform ${activeIndex === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-30 md:opacity-0 md:scale-95'
                  }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Provides;