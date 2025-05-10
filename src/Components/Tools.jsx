import React, { useState } from 'react';

const Tools = () => {
    const [activeCategory, setActiveCategory] = useState('Web Development');

    const categories = [
        'Web Development',
        'App Development',
        'IOT Development',
        'AI & ML Solutions',
        'Data Science & Data Analysis',
    ];

    const toolsData = {
        'Web Development': [
            { name: 'HTML', image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/167_Html5_logo_logos-512.png' },
            { name: 'CSS', image: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' },
            { name: 'JavaScript', image: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png' },
            { name: 'React', image: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png' },
            { name: 'NodeJS', image: 'https://e7.pngegg.com/pngimages/353/697/png-clipart-node-js-javascript-front-and-back-ends-computer-software-others-miscellaneous-angle.png' },
            { name: 'MongoDB', image: 'https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png' },
        ],
        'App Development': [
            {
                name: 'Flutter',
                image: 'https://www.svgrepo.com/show/353751/flutter.svg'
            },
            {
                name: 'React Native',
                image: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png' 
            },
            {
                name: 'Swift (iOS)',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg'
            },
            {
                name: 'Kotlin (Android)',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png'
            },
            {
                name: 'Androi Studio',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png'
            },
            {
                name: 'Ionic',
                image: 'https://www.svgrepo.com/show/373687/ionic.svg'
            }

        ],
        'IOT Development': [
            { name: 'Arduino IDE', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png' },
            { name: 'NodeRED', image: 'https://nodered.org/about/resources/media/node-red-icon.svg' },
            { name: 'PlatformIO', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PlatformIO_logo.svg/2500px-PlatformIO_logo.svg.png' },
            { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
            { name: 'Blynk', image: 'https://avatars.githubusercontent.com/u/11541426?v=4' },
        ],
        'AI & ML Solutions': [
            { name: 'TensorFlow', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'Tableau', image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
            { name: 'PyTorch', image: 'https://easyai.tech/wp-content/uploads/2019/01/pytorch.png' },
            { name: 'Scikit-learn', image: 'https://cdn.prod.website-files.com/65264f6bf54e751c3a776db1/66d86935aaeb8c0b9fa1bde7_scikit-learn.png' },
            { name: 'Power BI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png' },
        ],
        'Data Science & Data Analysis': [
            { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
            { name: 'Sql', image: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
            { name: 'Power BI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png' },

            { name: 'Hadoop', image: 'https://www.svgrepo.com/show/355048/hadoop.svg' },
            { name: 'Tableau', image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        ],
    };

    return (
        <div className="bg-black text-white min-h-screen p-4 sm:p-8">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-start leading-snug py-6 px-4 sm:px-8">
                    <span className="font-semibold">Explore</span> the Tools We Use
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Across Various Tech Domains
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Categories */}
                    <div className="md:w-1/2 bg-gradient-to-r from-black via-cyan-1000 to-black rounded-t-lg md:rounded-l-lg md:rounded-tr-none shadow-xl border border-gray-700 p-2">
                        <h2 className="text-lg font-semibold text-white uppercase tracking-wider p-6 border-b border-gray-500">
                            Categories
                        </h2>
                        <div className="space-y-2 p-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`w-full py-3 px-4 text-left text-lg font-medium rounded-md transition-all duration-300 focus:outline-none
                              ${activeCategory === category
                                            ? 'text-white bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 shadow-lg ring-1 ring-blue-300/30'
                                            : 'text-gray-100 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-blue-900'}
                            `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Tools */}
                    <div className="md:w-1/2 bg-black border border-l-0 border-gray-700 rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-6 sm:p-8">
                        <h2 className="text-lg font-semibold uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
                            Tools for <span className="text-blue-600">{activeCategory}</span>
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6">
                            {toolsData[activeCategory]?.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="group p-0.5 rounded-lg bg-gradient-to-b from-black via-gray-900 to-cyan-950 border border-gray-700 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 rounded-md px-3 py-3 sm:px-4">
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                        />
                                        <span className="font-semibold text-white text-sm sm:text-base">
                                            {tool.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {toolsData[activeCategory]?.length === 0 && (
                            <p className="text-gray-600 italic mt-4">
                                No tools listed for this category yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
