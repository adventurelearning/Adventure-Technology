                import React from 'react';

                const ManufacturingHome = () => {
                  return (
                    <div className="bg-black text-white">
                      <div className='container mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden min-h-[80vh] md:min-h-screen'>

                        {/* Background decorative elements */}
                        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
                          <div className='absolute top-20 left-4 w-20 h-20 md:w-40 md:h-40 rounded-full bg-blue-500 blur-3xl'></div>
                          <div className='absolute bottom-10 right-4 w-32 h-32 md:w-60 md:h-60 rounded-full bg-purple-500 blur-3xl'></div>
                          <div className='absolute top-1/2 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-green-500 blur-3xl'></div>
                        </div>

                        {/* Main content */}
                        <div className='text-center relative z-10 max-w-4xl w-full px-4'>
                          {/* Animated heading */}
                          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x'>
                              Manufacturing IT
                            </span>
                            <span className='block mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                              Services & Solutions
                            </span>
                          </h1>

                          {/* Subheading */}
                          <h3 className='text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
                            We Provide Custom IT Solutions to Empower Manufacturing Businesses, Streamline Operations, and Drive Growth Through Technology
                          </h3>

                          {/* Button */}
                          <button className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
                            <span className='relative z-10'>Connect With Us</span>
                            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                          </button>  
                        </div>

                        {/* Floating icons */}
                        <div className='absolute bottom-16 sm:bottom-32 left-4 md:left-10 opacity-20 animate-float'>
                          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        </div>
                        <div className='absolute top-16 right-4 md:right-10 opacity-20 animate-float'>
                          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                };

                export default ManufacturingHome;
