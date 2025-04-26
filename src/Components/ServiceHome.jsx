function ServiceHome() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#184ecc] via-[#1d1d1f] to-[#184ecc] flex flex-col justify-center items-center text-center px-6 py-12 text-white relative overflow-hidden">
            {/* Enhanced Background with Animated Bubbles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large blurry circles (existing) */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-blue-600/40 filter blur-[90px]"></div>
                    <div className="absolute bottom-1/3 left-[20%] w-48 h-48 rounded-full bg-indigo-700/30 filter blur-[70px]"></div>
                    <div className="absolute top-1/3 right-[15%] w-72 h-72 rounded-full bg-indigo-700/40 filter blur-[100px]"></div>
                    <div className="absolute bottom-1/4 right-[20%] w-56 h-56 rounded-full bg-blue-900/30 filter blur-[80px]"></div>
                </div>

                {/* Animated floating bubbles (new) */}
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={`bubble-${i}`}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: `${Math.random() * 100 + 30}px`,
                            height: `${Math.random() * 100 + 30}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 15 + 10}s linear infinite both`,
                            animationDelay: `${Math.random() * 5}s`,
                            filter: 'blur(15px)',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-8 relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fadeIn">
                    <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:from-blue-300 hover:to-blue-400">
                        Explore
                    </span>
                    <span className="text-white/70 mx-2">|</span>
                    <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:from-blue-300 hover:to-blue-400">
                        Build
                    </span>
                    <span className="text-white/70 mx-2">|</span>
                    <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:from-blue-300 hover:to-blue-400">
                        Launch
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl font-medium mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-100">
                    Drive innovation and efficiency with comprehensive digital engineering services
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]">
                        Get Started
                    </button>
      
                </div>
            </div>

            {/* Animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0% { 
                        transform: translateY(0) translateX(0) rotate(0deg); 
                        opacity: 0.5;
                    }
                    50% { 
                        transform: translateY(-100px) translateX(50px) rotate(180deg); 
                        opacity: 0.8;
                    }
                    100% { 
                        transform: translateY(0) translateX(100px) rotate(360deg); 
                        opacity: 0.5;
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
            `}</style>            
        </div>
    )
}

export default ServiceHome;