import React from 'react';
import { Link } from 'react-router-dom';
const LxpSupport = () => {
  return (
    <div className="bg-black flex items-center justify-center px-4 sm:px-8 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row-reverse">
          
          {/* Right Side (Text Content) */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center px-6 sm:px-10 py-8 order-2 lg:order-1">
            
            {/* For Mobile: Heading first */}
            <h2 className="text-2xl sm:text-3xl hidden lg:text-5xl font-semibold text-white leading-tight mb-6 lg:hidden">
              Exceptional Support for Your Business
            </h2>

            <div className="mb-3">
              <span className="text-sm font-bold text-blue-500 tracking-widest uppercase">
                24/7 Assistance
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
              Whether it’s navigating courses, tracking progress, or accessing learning resources — 
                            our support team ensures every learner has a smooth and engaging experience. 
                            We’re here to keep your learning journey seamless while you focus on building skills.
            </p>

            <div className="border-t border-gray-700 pt-4 mt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                 Reliable Learner & Administrator Support
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.118a8 8 0 11-11.826 11.826" />
                  </svg>
                  <p className="text-gray-400 text-sm sm:text-base">
                  Quick help with course access, assessments, and learning paths.
                  </p>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Tailored support for admins managing learners, content, and analytics.
                  </p>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.033 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.033-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <p className="text-gray-400 text-sm sm:text-base">
                   Global learning support with localized solutions for every learner community.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/Contact">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all">
                  <span className="relative">Contact Our Experts</span>
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Left Side (Image + Heading for Desktop) */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <h2 className=" lg:block text-2xl md:text-5xl font-semibold text-white leading-tight mb-6 px-6 sm:px-10 lg:px-0">
              Exceptional Support for Learners & Educators
            </h2>
            <img
              src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg"
              alt="Professional support team"
              className="w-full h-[160px] sm:h-[380px] lg:h-1/2 object-cover lg:rounded-l-3xl lg:rounded-t-none rounded-t-3xl"
            />
          </div>

        </div>
      </div>
    </div>
  )
};

export default LxpSupport;
