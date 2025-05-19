import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/WEB 4.svg';

const WhyEmbDis= () => {
    const expertisePoints = [
        {
            title: 'Product Concept and Design',
            description:
                'We transform ideas into tangible embedded product designs, considering form, function, and feasibility, ensuring your product is intuitive and manufacturable.',
            list: [
                'Innovative Product Conceptualization',
                'Ergonomic Design for User Comfort',
                'Design for Manufacturability (DFM)',
            ],
            image: web1,
        },
        {
            title: 'Hardware Design & Prototyping',
            description:
                'Our expertise lies in designing custom PCBs, selecting the right sensors and actuators, and developing reliable prototypes for embedded systems.',
            list: [
                'Custom PCB Design & Layout',
                'Sensor & Actuator Selection',
                'Prototyping and Iterative Testing',
            ],
            image: web2,
        },
        {
            title: 'System Architecture & Integration',
            description:
                'We design scalable and efficient system architectures, integrating hardware and software for seamless operation across embedded devices.',
            list: [
                'Modular System Architecture',
                'Hardware-Software Integration',
                'Real-Time Systems Design',
            ],
            image: web3,
        },
        {
            title: 'User Interface (UI) for Embedded Systems',
            description:
                'We create user interfaces for embedded products, ensuring that the interaction between the user and the device is intuitive and responsive.',
            list: [
                'Embedded UI/UX Design',
                'Responsive Touch Interfaces',
                'Seamless User Experience',
            ],
            image: web4,
        },
    ];


  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Our Development Edge
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
          Why clients trust us with their digital products
        </p>
      </div>

      {/* Sticky scroll container */}
      <div className="relative h-[400vh]">
        {expertisePoints.map((point, index) => (
          <div
            key={index}
            className="sticky top-15 h-screen flex items-center justify-center"
          style={{ zIndex: index }}

          >
            <div className="w-full max-w-5xl bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-3xl rounded-xl shadow-xl  px-6 py-10">
              <div className="flex flex-col md:flex-row items-center">
                {/* Left: Text */}
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{point.description}</p>
                  <ul className="space-y-2 mt-4">
                    {point.list.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200">
                        <CheckCircle
                          className="text-green-400 mt-1 mr-2"
                          size={18}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 flex justify-center p-8">
                  <img
                    src={point.image}
                    alt={point.title}
                    className= "w-3/4 md:w-3/4 max-w-md h-auto object-contain pt-4 md:pt-10"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyEmbDis;
