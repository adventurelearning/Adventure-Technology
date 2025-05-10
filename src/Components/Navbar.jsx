import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaChevronDown, FaChevronUp, FaHome, FaBuilding, FaCode, FaIndustry, FaUsers, FaEnvelope,
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram
} from 'react-icons/fa';
import LogoWhite from '../assets/logo/ATS WEB LOGO 3.svg';


const getLinkClasses = (pathname, path) => {
  const baseClasses = 'hover:text-gray-200 transition-colors';
  const activeClasses = 'text-gray-100';
  return `${baseClasses} ${pathname === path ? activeClasses : ''}`;
};

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    company: false,
    joinus: false,
  });
  const servicesDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);
  const joinusDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setMobileDropdowns(prev => ({ ...prev, services: false }));
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setMobileDropdowns(prev => ({ ...prev, company: false }));
      }
    };

    if (isMobileMenuOpen) { // Only add listener when menu is open
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  return (
    <nav className="px-4 py-2 sticky top-0 z-50 bg-black transition-all duration-1000">
      <div className="flex items-center justify-between transition-all duration-1000 p-2">
        {/* Logo */}
        <Link to="/" className="transition-all duration-500">
          <img
            src={LogoWhite}
            alt="Logo"
            className="w-44 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-12 text-base text-white font-Satoshi,Arial,sans-serif">
          <li><Link to="/" className={getLinkClasses(pathname, '/')}>HOME</Link></li>

          {/* Services Dropdown - Desktop */}
          <li className="relative group">
            <button className="flex items-center hover:text-gray-200 transition-colors">
              SERVICES
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute z-50 mt-2 left-1/2 transform -translate-x-1/2 w-[900px] rounded-lg shadow-lg backdrop-blur-md bg-black/80 border border-gray-700 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform-gpu translate-y-[-10px] group-hover:translate-y-0 p-8 space-y-4">
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {/* Service 1: Development */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/Web-Development" className="text-blue-400 hover:text-blue-300 font-medium">
                    <h3 className="font-semibold text-base ">Web App Development</h3>
                    <p className="text-gray-200 text-sm font-normal">Scalable web apps to meet your business needs.</p>
                  </Link>
                </div>

                {/* Service 2: Software Development */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/App-Development" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base ">App Development</h3>
                    <p className="text-gray-200 text-sm font-normal">Custom solutions for business process automation.</p>
                  </Link>
                </div>

                {/* Service 3: UI/UX Design */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/UiUx-Design" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base ">UI/UX Design</h3>
                    <p className="text-gray-200 text-sm font-normal">Engaging and user-friendly digital experiences.</p>

                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-6 justify-items-center">
                {/* Service 4: IoT Development */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/Iot-development" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base ">IoT Development</h3>
                    <p className="text-gray-200 text-sm font-normal">Connected devices transforming industries.</p>

                  </Link>
                </div>

                {/* Service 5: Embedded Product Design */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/Embedded-Design" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base ">Embedded Product Design</h3>
                    <p className="text-gray-200 text-sm font-normal">Reliable embedded systems for various applications.</p>
                  </Link>
                </div>

                {/* Service 6: Embedded Software */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/Embedded-Software" className="text-blue-400 hover:text-blue-300 font-medium">
                    <h3 className="font-semibold text-base ">Embedded Software</h3>
                    <p className="text-gray-200 text-sm font-normal">Design efficient and reliable software for embedded systems.</p>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-6 justify-items-center">
                {/* Service 7: AI & ML Solutions */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/AiMl-Solutions" className="text-blue-400 hover:text-blue-300 font-medium">
                    <h3 className="font-semibold text-base ">AI & ML Solutions</h3>
                    <p className="text-gray-200 text-sm font-normal">Leverage AI to automate and improve decisions.</p>
                  </Link>
                </div>

                {/* Service 8: Data Science & Analytics */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/DataScience-Analytics" className="text-blue-400 hover:text-blue-300 font-medium">
                    <h3 className="font-semibold  ">Data Science &<span className='block'> Data Analytics</span></h3>
                    <p className="text-gray-200 text-sm font-normal">Use data to drive actionable insights.</p>
                  </Link>
                </div>

                {/* Service 9: Digital Marketing */}
                <div className="group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg">
                  <Link to="/Digital-Marketing" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base ">Digital Marketing</h3>
                    <p className="text-gray-200 text-sm font-normal">Boost brand visibility through digital strategies.</p>
                  </Link>
                </div>
              </div>

            </div>
          </li>

          {/* Industries */}
          <li><Link to="/Industries" className={getLinkClasses(pathname, '/Industries')}>INDUSTRIES</Link></li>

          {/* AboutUs */}
          <li className="relative group" >
            <Link to="/AboutUs" className={getLinkClasses(pathname, '/AboutUs')}>
              ABOUT US
            </Link>
          </li>
          {/* Company Dropdown */}
          <li className="relative group">
            <button className="flex items-center hover:text-gray-200 transition-colors">
              CAREERS
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute z-50 right-0 mt-2 w-64 rounded-lg shadow-lg backdrop-blur-md bg-black/80 border border-gray-700 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform-gpu translate-y-[-10px] group-hover:translate-y-0 p-6 space-y-4">
              <div className="space-y-3">
                <div className='group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 rounded-lg'>
                  <Link to="/Internship" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    <h3 className="font-semibold text-base  mb-2">Internship</h3>
                    <p className="text-sm text-gray-200 mb-2 font-normal">Your digital transformation partner, building software that adapts, evolves, and excels with your business.</p>
                  </Link>
                </div>
                <hr className='border-t border-gray-700 ' />
                <div className=" group cursor-pointer transition-all hover:scale-105 text-start p-4 hover:bg-gray-800/50 ">
                  <Link to="/Career" className="text-blue-400 hover:text-blue-300  font-medium">
                    <h3 className="font-semibold text-base mb-2">Join Us</h3>
                    <p className="text-sm text-gray-200 mb-2  font-normal">We are always on the lookout for talented individuals passionate about software building.</p>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Register + Mobile Toggle */}
        <div className="flex items-center transition-all duration-1000">
          <Link
            to="/Contact"
            className="register-button hidden lg:inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white border border-transparent transition-all"
          >
            CONTACT US
          </Link>

          {/* Hamburger */}
          <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl none text-white" /> : <FaBars className="text-2xl text-white" />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-950 "></div>

        <div className="relative h-full w-full overflow-y-auto">
          <div className="flex justify-between p-2 pt-5">
            <div>
              <Link to="/" className="flex items-center pl-5">
                <img
                  src={LogoWhite}
                  alt="Logo"
                  className="w-48 h-auto object-contain logo-img "
                />
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="px-4 py-5 space-y-1 text-lg font-medium">

            <li>
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg transition-all ${getLinkClasses(pathname, '/')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center text-white">
                  {/* <FaHome className="mr-3" /> */}
                  <span>Home</span>
                </div>
              </Link>
            </li>

            {/* Services Dropdown - Mobile */}
            <li ref={servicesDropdownRef} className="">
              <div
                className="flex justify-between items-center py-3 px-4 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => toggleMobileDropdown('services')}
              >
                <div className="flex items-center">
                  {/* <FaCode className="mr-3" /> */}
                  <span className="text-white">Services</span>
                </div>
                {mobileDropdowns.services ?
                  <FaChevronUp className="text-white" /> :
                  <FaChevronDown className="text-white" />
                }
              </div>
              {mobileDropdowns.services && (
                <div className="bg-black/30 backdrop-blur-lg border-t border-white/10 p-4 animate-fadeIn ">
                  <div className="grid grid-cols-1 gap-1.5">
                    <Link
                      to="/Web-Development"
                      className="block py-1 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">Web Development</h3>
                    </Link>

                    <div className="border-t border-white/10 "></div>

                    <Link
                      to="/App-Development"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">App Development</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/UiUx-Design"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">UI & UX Design</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/Iot-development"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">IoT Development</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/AiMl-Solutions"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">AI & ML Solutions</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/Embedded-Design"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">Embedded Product Design</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/Embedded-Software"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">Embedded Software</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/DataScience-Analytics"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">Data Science & Data Analytics</h3>
                    </Link>
                    <div className="border-t border-white/10"></div>

                    <Link
                      to="/Digital-Marketing"
                      className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-normal text-base text-blue-400 group-hover:text-blue-300 transition-colors">Digital Marketing</h3>
                    </Link>

                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/Industries"
                className={`block py-3 px-4 rounded-lg transition-all ${getLinkClasses(pathname, '/Industries')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center text-white">
                  {/* <FaIndustry className="mr-3" /> */}
                  <span>Industries</span>
                </div>
              </Link>
            </li>

            {/* Aboutus - Mobile */}
            <li>
              <Link
                to="/AboutUs"
                className={`block py-3 px-4 rounded-lg transition-all ${getLinkClasses(pathname, '/AboutUs')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center text-white">
                  {/* <FaHome className="mr-3" /> */}
                  <span>About Us</span>
                </div>
              </Link>
            </li>

            {/* Join Us Dropdown - Mobile */}
            <li ref={joinusDropdownRef} className="">
              <div
                className="flex justify-between items-center py-3 px-4 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => toggleMobileDropdown('joinus')}
              >
                <div className="flex items-center">
                  {/* <FaUsers className="mr-3" /> */}
                  <span className="text-white">Careers</span>
                </div>
                {mobileDropdowns.joinus ?
                  <FaChevronUp className="text-white" /> :
                  <FaChevronDown className="text-white" />
                }
              </div>
              {mobileDropdowns.joinus && (
                <div className="bg-black/30 backdrop-blur-lg border-t border-white/10 space-y-3 px-4 py-3 animate-fadeIn">
                  <Link
                    to="/Internship"
                    className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <h3 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">Internship</h3>
                    <p className="text-sm text-gray-300 mt-1">Start your career with us</p>
                  </Link>

                  <div className="border-t border-white/10"></div>

                  <Link
                    to="/Career"
                    className="block py-2 px-3 rounded hover:bg-blue-900/50 transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <h3 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">Join Us</h3>
                    <p className="text-sm text-gray-300 mt-1">Join our team</p>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className={`block py-3 px-4 rounded-lg transition-all ${getLinkClasses(pathname, '/contact')}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center text-white">
                  {/* <FaEnvelope className="mr-3" /> */}
                  <span>Contact Us</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Links at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/20 backdrop-blur-3xl">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
          </div>
          <p className="text-center text-gray-300 text-sm mt-4">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
