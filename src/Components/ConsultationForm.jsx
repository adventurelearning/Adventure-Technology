import React from 'react';

const ConsultationForm = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-blue-950 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-xl overflow-hidden max-w-screen-lg w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Section */}
          <div className=" text-white py-16 px-8 sm:px-12 flex flex-col justify-center items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Our Technology <br />
                <span className="font-semibold">Experts Are Change</span> <br />
                Catalysts
              </h2>
              <p className="mt-4 text-lg">
                Book A Free Consultation Call With Our Experts Today
              </p>              
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-gray-900 py-16 px-8 sm:px-12 flex flex-col justify-center">
            <form className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="full-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  E-Mail ID
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-number" className="block text-sm font-medium text-gray-300">
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="contact-number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                  Select a Budget Range
                </label>
                <div className="mt-1">
                  <select
                    id="budget"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                  >
                    <option>Select Budget</option>
                    <option>Under $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $20,000</option>
                    <option>Over $20,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="project-brief" className="block text-sm font-medium text-gray-300">
                  Describe Your Project/Idea In Brief (Helps Us <br />
                  Come Back Better Prepared)
                </label>
                <div className="mt-1">
                  <textarea
                    id="project-brief"
                    rows={4}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit a Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;