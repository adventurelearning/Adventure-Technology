import React from 'react';
import backgroundImage from '../assets/contact/contact.jpeg'; // Adjust the path as needed

const ContactHome = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-[90vh] flex items-center justify-center p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/80 z-0"></div>

      {/* Content */}
      <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
        {/* Animated heading */}
        <h1 className="text-white font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl mb-6 relative inline-block">
          <span className="relative">
            Let's Connect & Create
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </span>
        </h1>

        {/* Glowing text paragraph */}
        <p className="text-white/90 text-lg md:text-xl mt-0 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
          We're excited to hear about your project. Whether you have questions or ready to start, our team is here to help you succeed.
        </p>

        {/* Button group with hover effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="mailto:info@adventuretechsolution.com"
            className="relative inline-flex items-center justify-center bg-transparent border-2 border-blue-400 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </span>
            <span className="absolute inset-0 bg-blue-400 opacity-0 duration-300"></span>
          </a>

          <a
            href="tel:+91 9884445571"
            className="relative inline-flex items-center justify-center bg-blue-500 text-white border-2 border-blue-500 px-8 py-3 rounded-full font-medium hover:bg-transparent hover:text-white hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Additional contact options */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            {
              icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
              text: '+91-9884445571'
            },
            {
              icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              text: 'hello@example.com'
            },
            {
              icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
              text: 'Coimbatore'
            },
            {
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              text: 'Mon-Sat:9AM-5PM'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-blue-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <p className="text-white/80 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHome;