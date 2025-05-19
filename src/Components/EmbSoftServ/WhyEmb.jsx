import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/WEB 4.svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const WhyEmb = () => {
    const expertisePoints = [
        {
            title: 'Firmware & Low-Level Development',
            description:
                'We specialize in writing efficient and optimized firmware that interacts with hardware to enable device functionality, using languages like C and C++.',
            list: [
                'Efficient Memory Management',
                'Hardware-Software Integration',
                'Real-Time Operating Systems (RTOS)',
            ],
            image: web1,
        },
        {
            title: 'Real-Time Systems & Processing',
            description:
                'Our expertise in real-time embedded systems ensures timely and deterministic responses to sensor inputs and other hardware triggers, crucial for mission-critical applications.',
            list: [
                'Low Latency & Real-Time Processing',
                'System Resource Optimization',
                'Sensor and Actuator Integration',
            ],
            image: web2,
        },
        {
            title: 'Embedded System Design & Prototyping',
            description:
                'From initial design to prototype, we provide comprehensive embedded system development services, including hardware selection and integration with software for custom solutions.',
            list: [
                'Custom PCB Design & Prototyping',
                'Embedded Software Architecture',
                'Component Selection & Integration',
            ],
            image: web3,
        },
        {
            title: 'IoT & Embedded Solutions',
            description:
                'We offer integrated solutions for IoT devices, providing seamless connectivity, data exchange, and cloud integration for a wide range of applications.',
            list: [
                'Wireless Communication (Wi-Fi, BLE, Zigbee)',
                'Cloud Integration & Data Management',
                'Mobile & Web App Interfaces for IoT Devices',
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

export default WhyEmb;
