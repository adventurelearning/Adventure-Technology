import React from "react";

// Icons for AI Attendance System
const IconAI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconCamera = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <circle cx="12" cy="14" r="3" />
  </svg>
);

const IconOffline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    <path d="M12 8v4l2 2" />
  </svg>
);

const IconSecurity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconUI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const IconStorage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

// AI Attendance System Features
const features = [
  { icon: <IconAI />, title: "On-Device AI", description: "Fast, local facial recognition without cloud delays." },
  { icon: <IconCamera />, title: "Camera + Board", description: "HD camera with embedded board for real-time detection." },
  { icon: <IconOffline />, title: "Offline & Online", description: "Works offline, syncs automatically when online." },
  { icon: <IconSecurity />, title: "Tamper-Proof", description: "Prevents spoofing with live AI verification." },
  { icon: <IconUI />, title: "User-Friendly UI", description: "Optional touchscreen for easy attendance feedback." },
  { icon: <IconStorage />, title: "Flexible Storage", description: "Logs stored locally or on cloud dashboards." },
];

const WhyChooseAIAttendance = () => {
  return (
    <div className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-start">
          {/* Left Side Text */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-left space-y-6 ">
            <h1 className="text-3xl sm:text-4xl  font-semibold leading-tight tracking-wide">
              Why choose {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                AI Attendance System
              </span>
              {" "} for your organization?

            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              Ensure accurate, real-time attendance with AI-powered facial recognition. Our embedded solution works offline or online, prevents spoofing, and provides flexible storage options — making attendance management smarter, faster, and secure.
            </p>
          </div>


          {/* Right Side Features */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="h-full flex flex-col p-6 bg-gray-900 border border-blue-500 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black border border-blue-500 text-blue-400 mb-4">
                  {feature.icon}
                </div>

                {/* Title + Description */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAIAttendance;
