import React from 'react';
import { Link } from 'react-router-dom';

const AIAttendanceSupport = () => {
  return (
    <div className="bg-black flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row-reverse">
          
          {/* Right Side (Text Content) */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center px-6 sm:px-10 py-8 order-2 lg:order-1">
            
            {/* For Mobile: Heading first */}
            <h2 className="text-2xl sm:text-3xl hidden lg:text-5xl font-semibold text-white leading-tight mb-6 lg:hidden">
              Reliable AI Attendance Support
            </h2>

            <div className="mb-3">
              <span className="text-sm font-bold text-blue-500 tracking-widest uppercase">
                Hassle-Free Assistance
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
              No PC or external server needed. Lightning-fast detection with low power usage. 
              Easily installable in classrooms, gates, or reception areas. Scalable for single or multi-location deployments.
              Designed, developed & supported in India.
            </p>

            <div className="border-t border-gray-700 pt-4 mt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Key Features
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
                    No PC or external server required.
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
                    Lightning-fast detection with low power consumption.
                  </p>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.033 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Easily installable in classrooms, gates, or reception areas.
                  </p>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.1.9-2 2-2h4a2 2 0 012 2v5a2 2 0 01-2 2h-4c-1.1 0-2-.9-2-2v-5zM4 11h4a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2z" />
                  </svg>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Scalable for single or multi-location deployments. Supported in India.
                  </p>
                </div>
              </div>         
            </div>
          </div>

          {/* Left Side (Box Content + Heading for Desktop) */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <h2 className="lg:block text-2xl md:text-5xl font-semibold text-white leading-tight mb-6 px-1 sm:px-10 lg:px-0">
              Reliable AI Attendance Support
            </h2>

            {/* In the Box Section */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-3">In the Box</h4>
              <ul className="text-gray-400 text-sm sm:text-base space-y-2 list-disc pl-6">
                <li>Preloaded Embedded Board with AI Attendance Software</li>
                <li>HD Camera Module</li>
                <li>Power Supply & Connectors</li>
                <li>Optional Display Module</li>
                <li>User Manual & Installation Guide</li>
                <li>1-Year Warranty & Remote Support</li>
              </ul>
            </div>

            <div className="mt-8">
              <Link to="/Contact">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all">
                  <span className="relative">Get AI Attendance Support</span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default AIAttendanceSupport;
