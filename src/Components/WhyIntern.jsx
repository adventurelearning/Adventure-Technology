import React from 'react';
import {
  AiFillThunderbolt,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
} from 'react-icons/ai';
import { FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';

// Reusable CapabilityItem component
const CapabilityItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start transition-all hover:bg-gray-800 hover:shadow-md p-4 rounded-md">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold mb-1 text-white">{title}</h4>
        <p className="text-sm sm:text-base text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const WhyIntern = () => {
  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        {/* Main Heading and Introduction */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-start mt-16 mb-4">Why Adventure ?</h2>
          <p className="text-base sm:text-lg text-gray-300 w-full sm:w-3/4 text-start">
            At Adventure Technology, we believe in turning interns into industry-ready professionals. Our internship programs are
            designed not just to give you exposure, but to immerse you in real-world projects, innovative technologies, and
            collaborative environments that foster growth and creativity.
          </p>
        </div>

        {/* Why Join Hands Section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-normal text-blue-500 text-center sm:text-left mb-8">
            Why Join Hands With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <CapabilityItem
                icon={<AiFillThunderbolt size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Hands-On Experience"
                description="Work on live projects that make a real impact, not just simulations or side tasks."
              />
              <CapabilityItem
                icon={<AiOutlineClockCircle size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Mentorship by Industry Experts"
                description="Gain insights from experienced professionals who are passionate about mentoring and knowledge sharing."
              />
              <CapabilityItem
                icon={<AiOutlineCheckCircle size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Cutting Edge Tools & Technologies"
                description="Learn and work with the latest tech stacks, development tools, and best practices."
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6 mt-8 md:mt-0">
              <CapabilityItem
                icon={<FiTrendingUp size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Inclusive & Supportive Culture"
                description="Join a team that values curiosity, inclusivity, and continuous learning."
              />
              <CapabilityItem
                icon={<FiUsers size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Flexible Learning Environment"
                description="Remote and hybrid opportunities, personalized project tracks, and a learning-first approach."
              />
              <CapabilityItem
                icon={<FiShield size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                title="Career Boosting Opportunities"
                description="Stand out with certificates, recommendation letters, and the potential for pre-placement offers."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIntern;
