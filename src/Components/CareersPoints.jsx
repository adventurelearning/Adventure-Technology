import React from 'react';

const CareersPoints = () => {
    return (
        <div className="bg-black py-20 px-6 text-center">
            <h1 className="text-white text-4xl font-semibold mb-8">
                Adventure is where the <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'> Future Works</span>
            </h1>

            <h3 className="text-gray-300 max-w-5xl mx-auto text-lg mb-14 leading-relaxed md:text-center text-start">
                At <strong>Adventure Technology</strong>, our mission is to create an environment where innovation and growth thrive. We are committed to building a collaborative, forward-thinking team, guided by our core values: <strong>Connected</strong>, <strong>Inclusive</strong>, and <strong>Flexible</strong>.
            </h3>


            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 max-w-6xl mx-auto">
                <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold mb-3 text-start md:text-center">Connected</h4>
                    <p className="text-gray-300 text-start">
                        "We value collaboration and open communication, ensuring our teams stay aligned and work towards shared goals, whether remote or in-office."
                    </p>
                </div>

                <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold mb-3 text-start md:text-center">Inclusive</h4>
                    <p className="text-gray-300 text-start">
                        "We embrace diversity and create a workplace where every voice is valued, driving innovation and a dynamic company culture."
                    </p>
                </div>

                <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold mb-3 text-start md:text-center">Flexible</h4>
                    <p className="text-gray-300 text-start ">
                        "We offer flexible work options, including remote work and adjustable hours, promoting balance for a productive and happy workforce."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareersPoints;
