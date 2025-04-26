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
            { name: 'NodeJS', image: 'https://cdn4.iconfinder.com/data/icons/logos-3/188/nodejs-light-512.png' },
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
        <div className="bg-black text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
                <h1 className="text-white text-3xl md:text-4xl text-start leading-snug py-8 px-8">
                    <span className="font-semibold">Explore</span> the Tools We Use
                    <span className="block text-blue-400 font-medium mt-2">Across Various Tech Domains</span>
                </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Categories */}
                    <div className="md:w-1/2 bg-blue-600 rounded-l-lg shadow-md">
                        <h2 className="text-lg font-semibold text-white uppercase tracking-wider p-6 border-b border-blue-500">
                            Categories
                        </h2>
                        <div className="space-y-2 p-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`w-full py-3 px-4 text-left text-lg font-medium rounded-md transition-colors duration-300 focus:outline-none ${activeCategory === category
                                        ? 'bg-blue-700 text-white shadow-inner'
                                        : 'bg-blue-500 hover:bg-blue-400 text-gray-100'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Tools */}
                    <div className="md:w-1/2 bg-white rounded-r-lg p-8">
                        <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
                            Tools for <span className="text-blue-600">{activeCategory}</span>
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-6">
                            {toolsData[activeCategory]?.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="bg-gray-100 rounded-md p-4 flex flex-col items-center justify-center space-y-2 transition-transform duration-300 hover:scale-105 hover:shadow-md"
                                >
                                    <div className="relative w-16 h-12 flex items-center justify-center">
                                        <img src={tool.image} alt={tool.name} className="object-contain w-full h-full rounded-md " />
                                        {/* <span className="font-semibold text-gray-700 text-lg text-end">{tool.name}</span> */}
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