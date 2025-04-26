import React, { useState } from 'react';

const Tools = () => {
    const [activeCategory, setActiveCategory] = useState('Web Development');

    const categories = [
        'Web Development',
        'Software Development',
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
        'Software Development': [
            { name: 'Node.js', image: 'https://path/to/nodejs-logo.png' },
            { name: 'Python', image: 'https://path/to/python-logo.png' },
            { name: 'Ruby', image: 'https://path/to/ruby-logo.png' },
            { name: 'Java', image: 'https://path/to/java-logo.png' },
            { name: '.NET', image: 'https://path/to/dotnet-logo.png' },
            { name: 'PHP', image: 'https://path/to/php-logo.png' },
        ],
        'IOT Development': [
            { name: 'React Native', image: 'https://path/to/react-native-logo.png' },
            { name: 'Flutter', image: 'https://path/to/flutter-logo.png' },
            { name: 'Swift', image: 'https://path/to/swift-logo.png' },
            { name: 'Kotlin', image: 'https://path/to/kotlin-logo.png' },
            { name: 'Ionic', image: 'https://path/to/ionic-logo.png' },
        ],
        'AI & ML Solutions': [
            { name: 'TensorFlow', image: 'https://path/to/tensorflow-logo.png' },
            { name: 'Keras', image: 'https://path/to/keras-logo.png' },
            { name: 'PyTorch', image: 'https://path/to/pytorch-logo.png' },
            { name: 'Scikit-learn', image: 'https://path/to/scikit-learn-logo.png' },
            { name: 'OpenCV', image: 'https://path/to/opencv-logo.png' },
        ],
        'Data Science & Data Analysis': [
            { name: 'Hadoop', image: 'https://path/to/hadoop-logo.png' },
            { name: 'Spark', image: 'https://path/to/spark-logo.png' },
            { name: 'Kafka', image: 'https://path/to/kafka-logo.png' },
            { name: 'Flink', image: 'https://path/to/flink-logo.png' },
            { name: 'Hive', image: 'https://path/to/hive-logo.png' },
        ],
    };

    return (
        <div className="bg-black text-white min-h-screen p-8 pb-20">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Explore</span> the Tools We Use
                    <span className="block font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                        Across Various Tech Domains
                    </span>

                </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Categories */}
                    <div className="md:w-1/2 bg-gradient-to-r from-black via-cyan-1000 to-black rounded-l-lg shadow-xl border border-l-lg border-gray-700  p-2">
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
                                            : 'text-gray-100 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-blue-900 '}
                            `}
                                >
                                    {category}
                                </button>


                            ))}
                        </div>
                    </div>

                    {/* Right Side - Tools */}
                    <div className="md:w-1/2 bg-black border border-l-0 border-gray-700 rounded-r-lg p-8">
                        <h2 className="text-lg font-semibold  not-first:text-white uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
                            Tools for <span className="text-blue-600">{activeCategory}</span>
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-6">
                            {toolsData[activeCategory]?.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="group p-0.5 rounded-lg bg-gradient-to-b from-black via-gray-900 to-cyan-950 border-l border-t border-r border-gray-700 
                                    
                                    transition-all duration-300 " 
                                >
                                    <div className="flex items-center gap-3 rounded-md px-4 py-3 ">
                                        {/* Logo */}
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-12 h-12 object-contain"
                                        />
                                        {/* Text */}
                                        <span className="font-semibold text-white text-lg">
                                            {tool.name}
                                        </span>
                                    </div>

                                </div>

                            ))}
                        </div>
                        {toolsData[activeCategory]?.length === 0 && (
                            <p className="text-gray-600 italic mt-4">No tools listed for this category yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;