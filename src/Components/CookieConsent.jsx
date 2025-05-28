import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}


export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", 365);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "declined", 365);
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 md:bottom-6 left-3 md:left-6 z-50 w-80">
      <div className="relative bg-gray-950/100 backdrop-blur-lg p-5 rounded-xl border border-gray-700 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Close cookie consent"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="flex items-start mb-3">
          <div className="bg-blue-600/20 p-2 rounded-lg mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold pt-1.5">We Use Cookies</h2>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          This website uses cookies to ensure you get the best experience on our website.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
          >
            Decline
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-3 text-center">
          By continuing, you agree to our{' '}
          <Link to="/cookie-policy" className="text-blue-400 hover:underline">Cookie Policy</Link>
        </p>
      </div>
    </div>
  );
}
