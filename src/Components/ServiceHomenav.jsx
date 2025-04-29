import React from 'react';
// import {
//   GlobeAltIcon,
//   ArrowsRightLeftIcon,
//   ComputerDesktopIcon,
//   ChartBarIcon,
//   CpuChipIcon,
//   WifiIcon,
//   ChatBubbleLeftRightIcon
// } from '@heroicons/react/24/solid';

const ServiceHomenav = () => {
  const services = [
    {
      name: "Web Development",
      icon: GlobeAltIcon,
      description: "Building fast, responsive, and modern websites."
    },
    {
      name: "Digital Transformation",
      icon: ArrowsRightLeftIcon,
      description: "Modernizing your business with cutting-edge tech."
    },
    {
      name: "Software Development",
      icon: ComputerDesktopIcon,
      description: "Custom software solutions tailored to your needs."
    },
    {
      name: "Data Science & Analytics",
      icon: ChartBarIcon,
      description: "Unlocking insights from your business data."
    },
    {
      name: "AI & ML Solutions",
      icon: CpuChipIcon,
      description: "Smart solutions powered by AI and machine learning."
    },
    {
      name: "IoT Development",
      icon: WifiIcon,
      description: "Connecting devices for smarter operations."
    },
    {
      name: "IT Consulting",
      icon: ChatBubbleLeftRightIcon,
      description: "Expert guidance for your IT strategy and goals."
    }
  ];

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Comprehensive solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 
                         hover:shadow-xl hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-white text-sm">
                  {service.description}
                </p>
              </div>
        
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceHomenav;
