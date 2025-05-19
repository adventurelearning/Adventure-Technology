import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/MARKETING 2.svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const WhyMark = () => {
    const expertisePoints = [
        {
            title: 'Search Engine Optimization (SEO)',
            description:
                'We boost your online visibility through on-page, off-page, and technical SEO — helping your content rank and convert better.',
            list: [
                'Keyword & Competitor Analysis',
                'On-Page & Technical SEO',
                'Backlink Strategy & Monitoring',
            ],
            image: web1,
        },
        {
            title: 'Social Media Strategy',
            description:
                'We manage your brand presence across platforms like Instagram, LinkedIn, and TikTok with data-driven content strategies.',
            list: [
                'Content Calendars & Scheduling',
                'Community Engagement',
                'Platform-Specific Campaigns',
            ],
            image: web2,
        },
        {
            title: 'Paid Advertising & Funnels',
            description:
                'Maximize ROI with laser-focused Google Ads, Meta Ads, and conversion-optimized landing pages that guide users to action.',
            list: [
                'Targeted Ad Campaigns',
                'Funnel Design & A/B Testing',
                'Performance Optimization',
            ],
            image: web3,
        },
        {
            title: 'Analytics, Email & Automation',
            description:
                'We track and analyze user behavior, set up email flows, and automate marketing to turn cold leads into loyal customers.',
            list: [
                'Google Analytics & Tag Manager',
                'Email Campaigns & Drip Flows',
                'CRM & Marketing Automation',
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

export default WhyMark;
