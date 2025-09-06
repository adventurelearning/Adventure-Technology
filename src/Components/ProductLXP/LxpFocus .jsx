import React from 'react';
import lxpmob from '../../assets/lxpmob.svg'
const LxpFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        
          
          {/* Main Content Section (Image) */}
           <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={lxpmob}
              alt="Learning Experience Platform"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          
          {/* Text Section */}
           <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
              Empower Learning, <span className="block"> Grow Without Limits </span>
            </h1>
           <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Our Learning Experience Platform (LXP) helps you deliver, manage, and scale 
              engaging learning programs with ease. From personalized pathways and secure 
              access to analytics and global reach, we provide everything you need to 
              empower learners and transform education at every level.
            </p>
          </div>

        </div>

    </div>
  );
};

export default LxpFocus;
