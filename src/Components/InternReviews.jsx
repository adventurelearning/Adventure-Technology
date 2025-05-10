import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InternReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewHeight = 'h-48'; // Static height for the review content area

    const reviews = [
        {
          id: 1,
          name: "Dinakaran",
          role: "MERN Stack Development Intern",
          content:
            "My internship gave me hands-on experience with modern web technologies and agile workflows. The mentorship and real project involvement helped me grow as a confident and capable web developer.",
        },
        {
          id: 2,
          name: "Kiruthika",
          role: "MERN Stack Development Intern",
          content:
            "Working on full-stack applications with the MERN stack sharpened my coding and problem-solving skills. I contributed to impactful features and learned directly from experienced developers.",
        },
        {
          id: 3,
          name: "Yuvaraj",
          role: "UI/UX Design Intern",
          content:
            "I worked on real user-facing designs and improved my skills in wireframing, prototyping, and usability testing. Seeing my designs go live was a highlight of this internship.",
        },
        {
          id: 4,
          name: "Leander",
          role: "Front-End Development Intern",
          content:
            "Building interactive interfaces with React helped me understand front-end architecture and user experience. The code reviews and guidance pushed me to write cleaner, more efficient code.",
        },
        {
          id: 5,
          name: "Priya",
          role: "DevOps Intern",
          content:
            "I gained practical experience with AWS, Docker, and CI/CD pipelines. The internship strengthened my understanding of automation and infrastructure management.",
        },
        {
          id: 6,
          name: "Niranjan",
          role: "Backend Engineering Intern",
          content:
            "I developed and deployed microservices using Node.js and Docker. This role deepened my backend knowledge and gave me real-world exposure to scalable system design.",
        },
      ];
      

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const goToReview = (index) => {
        setCurrentIndex(index);
    };

    const currentReview = reviews[currentIndex];

    return (
        <section className="py-5 md:py-5 lg:py-5 xl:py-5 bg-gradient-to-br from-black to-blue-900 "> {/* Added 'relative' here */}
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-4xl lg:text-4xl font-semibold text-white bg-clip-text  mb-4 tracking-tight">
                        Our Intern <span className="text-blue-400">Experience</span>
                    </h2>
                    <p className="text-lg  md:text-xl lg:text-xl xl:text-xl  text-gray-200  leading-relaxed">
                        Real stories from our incredible interns, showcasing their growth, <span className='lg:block'> contributions, and the vibrant culture of our programs.</span>
                    </p>
                </div>

                <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    {/* Animated Background */}
                    <div className="relative bg-gray-800 border border-gray-500 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-all duration-500">

                        {/* Left: Avatar and Basic Info */}
                        <div className="md:w-1/3 flex flex-col items-center md:items-start mb-6 md:mb-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0">
                            <div className="bg-blue-700 bg-opacity-90 w-24 h-24 rounded-full flex items-center justify-center text-blue-100 text-5xl font-bold mb-4 shadow-md">
                                {currentReview.name.charAt(0)}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-1">{currentReview.name}</h3>
                            <p className="text-blue-300 text-lg">{currentReview.role}</p>
                        </div>

                        {/* Right: Review Text */}
                        <div className="md:w-2/3 md:pl-8 ">
                            <p className={`text-gray-300 text-lg md:pt-10  leading-relaxed italic ${reviewHeight} overflow-hidden`}>
                                <span className="text-blue-400 font-semibold mr-2">“</span>
                                {currentReview.content}
                                <span className="text-blue-400 font-semibold ml-2">”</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons (outside the card) */}
                {/* <div className="absolute top-4/6 left-16 transform -translate-y-1/2">
                    <button
                        onClick={goToPrevious}
                        className="bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>
                </div>
                <div className="absolute top-4/6 right-16 transform -translate-y-1/2">
                    <button
                        onClick={goToNext}
                        className="bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </div> */}

                {/* Line Pagination (below the card) */}
                <div className="mt-8 flex justify-center space-x-3">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToReview(i)}
                            className={`w-6 h-1 rounded-md transition-colors duration-300 ${i === currentIndex ? 'bg-blue-500 shadow-md' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InternReviews;