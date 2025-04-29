import React from 'react';
import chennai from '../assets/locations/CHENNAI.svg';
import coimbatore from '../assets/locations/COIMBATORE.svg'; 

const Locations = () => {
    return (
        <div className="py-20 px-3  bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white border border-gray-500 border-l-0 border-r-0">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-start space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold text-white">
                        Our Presence
                    </h1>
                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        We are dedicated to providing exceptional service wherever you need us.
                        With a focus on quality and reliability, we're always here to support you.
                    </p>
                </div>

                {/* Image Section with Location Labels */}
                <div className="lg:w-1/2 flex flex-wrap justify-around gap-8">
                    {/* Location 1 */}
                    <div className="text-center group">
                        <div className="relative">
                            <img
                                src={chennai}
                                alt="Chennai Office"
                                className="w-48 sm:w-56 md:w-44 object-contain"
                            />
                            {/* <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div> */}
                        </div>

                        <p className="text-gray-300 text-sm pt-3">No.90, First floor,<br/>
                            Rajaji road,Tambaram,<br/>
                            Chennai,Tamil Nadu-600045</p>
                    </div>

                    {/* Location 2 */}
                    <div className="text-center group ">
                        <div className="relative">
                            <img
                                src={coimbatore}
                                alt="New York Office"
                                className="w-48 sm:w-56 md:w-44 mt-1"
                            />
                            {/* <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div> */}
                        </div>

                        <p className="text-gray-300 text-sm pt-3">No:121/4, 7th Street,<br/>
                            Tatabad, Gandhipuram,<br/>
                            Coimbatore, Tamil Nadu-641012.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;