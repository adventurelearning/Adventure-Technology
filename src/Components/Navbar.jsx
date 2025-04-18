import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ATSlogo from '../assets/ATSlogo.svg';

// ✅ Utility: Determine if link is active
const getLinkClasses = (pathname, path) => {
  const baseClasses = 'hover:text-[#0057D3] transition-colors';
  const activeClasses = 'text-[#0057D3] font-semibold';
  return `${baseClasses} ${pathname === path ? activeClasses : ''}`;
};

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
  });

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="bg-white shadow px-4 py-2 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={ATSlogo} alt="Logo" className="w-40 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 text-base text-gray-800 font-sans">
          <li className='font-medium'><Link to="/" className={getLinkClasses(pathname, '/')}>Home</Link></li>

          {/* ✅ Services Dropdown - Desktop */}
          <li className="relative group">
            <button className="flex items-center hover:text-[#0057D3] font-medium transition-colors">
              Services
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/web-app" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses(pathname, '/web-app')}`}>
                  Web App Development
                </Link>
              </li>
              <li>
                <Link to="/embedded" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses(pathname, '/embedded')}`}>
                  Embedded System
                </Link>
              </li>
              <li>
                <Link to="/iot" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses(pathname, '/iot')}`}>
                  IoT
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses(pathname, '/machine-learning')}`}>
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>

          <li className='font-medium'><Link to="/Products" className={getLinkClasses(pathname, '/Products')}>Products</Link></li>
          <li className='font-medium' ><Link to="/Blogs" className={getLinkClasses(pathname, '/Blogs')}>Blogs</Link></li>
          <li className='font-medium'><Link to="/Careers" className={getLinkClasses(pathname, '/Careers')}>Careers</Link></li>
          <li className='font-medium'><Link to="/contact" className={getLinkClasses(pathname, '/contact')}>Contact Us</Link></li>
        </ul>

        {/* Register + Mobile Toggle */}
        <div className="flex items-center ">
          <Link
            to="/register"
            className="hidden lg:inline-block px-5 py-2 rounded-lg bg-[#0057D3] text-white border border-transparent hover:bg-white hover:text-[#0057D3] hover:border-blue-700 transition-all"
          >
            Register
          </Link>


          <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>
      </div>

      {/* ✅ Mobile Nav */}
      <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-4 space-y-2 text-base font-medium">
          <li><Link to="/" className={getLinkClasses(pathname, '/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>

          {/* ✅ Services Dropdown - Mobile */}
          <li>
            <div
              className="flex justify-between items-center py-2 px-2 cursor-pointer"
              onClick={() => toggleMobileDropdown('services')}
            >
              <span className="text-gray-800">Services</span>
              {mobileDropdowns.services ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {mobileDropdowns.services && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li><Link to="/web-app" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Web App Development</Link></li>
                <li><Link to="/embedded" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Embedded System</Link></li>
                <li><Link to="/iot" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>IoT</Link></li>
                <li><Link to="/machine-learning" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Machine Learning</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/Products" className={getLinkClasses(pathname, '/Products')} onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
          <li><Link to="/Blogs" className={getLinkClasses(pathname, '/Blogs')} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/Careers" className={getLinkClasses(pathname, '/Careers')} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" className={getLinkClasses(pathname, '/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


