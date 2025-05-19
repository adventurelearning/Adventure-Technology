import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/contact/contact.jpeg';

const ContactHome = () => {
  const [emailHref, setEmailHref] = useState('mailto:info@adventuretechsolution.com');

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setEmailHref(
      isMobile
        ? 'mailto:info@adventuretechnologysolutions.com'
        : 'https://mail.google.com/mail/?view=cm&fs=1&to=info@adventuretechsolution.com'
    );
  }, []);

  return (
    <div
      className="bg-cover bg-center w-full min-h-[90vh] flex items-center justify-center p-8 relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/80 z-0"></div>

      <div className="text-center relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-white font-semibold text-3xl sm:text-5xl md:text-6xl mb-6 relative inline-block group">
          <span className="relative">
            Let's Connect & Create
            <span className="absolute left-0 -bottom-2 w-full h-1.5 "></span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
          We're excited to hear about your project. Whether you have questions or are ready to start, our team is here to help you succeed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-blue-500 hover:border-blue-500 hover:shadow-blue-400/30 transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </span>
          </a>

          <a
            href="tel:+919840550244"
            className="relative inline-flex items-center justify-center bg-blue-500 text-white border-2 border-blue-500 px-8 py-3 rounded-full font-medium hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </span>
          </a>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
          {[
            {
              icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
              text: '+91 - 9840550244 / 9150018072',
              href: 'tel:+919840550244',
            },
            {
              icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              text: (
                <>
                  info@adventuretechnology
                  <span className="md:block">solutions.com</span>
                </>
              ),
              href: emailHref,
            },
            {
              icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
              text: 'Coimbatore',
              href: 'https://www.google.co.in/maps/place/Adventure+Technology+Solutions+Pvt+Ltd/@11.021711,76.9600853,17z/data=!4m10!1m2!2m1!1sadventure+technology+coimbatore!3m6!1s0x3ba859c25e89dc0f:0xc0dbf6d829b43505!8m2!3d11.0217055!4d76.9626604!15sCh9hZHZlbnR1cmUgdGVjaG5vbG9neSBjb2ltYmF0b3JlWiEiH2FkdmVudHVyZSB0ZWNobm9sb2d5IGNvaW1iYXRvcmWSARBzb2Z0d2FyZV9jb21wYW55mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVU5SYUdaNWN6UjNSUkFCqgFXCg0vZy8xMXliMno3ajk2EAEyHxABIhuIPVlSd3U0V1VJfgHCzGKE2B2Y8Zpne-wFxwgyIxACIh9hZHZlbnR1cmUgdGVjaG5vbG9neSBjb2ltYmF0b3Jl4AEA-gEFCJIBEDs!16s%2Fg%2F11yb2z7j96?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
            },
            {
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              text: 'Mon - Sat : 9AM - 5PM',
              href: null,
            },
          ].map((item, index) => {
            const content = (
              <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-blue-400 transition-colors duration-300 h-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <p className="text-white/80 text-sm break-words">{item.text}</p>
              </div>
            );

            return (
              <div key={index} className="w-full">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
