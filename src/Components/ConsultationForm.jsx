import React from 'react';

const ConsultationForm = () => {
  return (
    <div className="bg-gradient-to-r  from-blue-950 via-black to-blue-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden max-w-6xl w-full ">
        <div className="lg:grid lg:grid-cols-2">

          {/* Left Section */}


          <div className="text-white p-10 flex flex-col justify-center bg-transparent">
            <h2 className="text-4xl font-semibold leading-tight">
              Let’s Create a <br />
              <span className="text-blue-500">Better Future Through</span> <br />
              Technology Together
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Book a free consultation call with our experts today.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-gray-950 py-10 flex items-center w-3/4 justify-center border border-gray-600 rounded-xl">
            <form className="w-full max-w-sm space-y-6 px-0">

              {/* Input Fields */}
              {[
                { id: 'name', type: 'text', label: 'Full Name' },
                { id: 'email', type: 'email', label: 'Email' },
                { id: 'number', type: 'tel', label: 'Contact Number' },
              ].map(({ id, type, label }) => (
                <div key={id} className="relative">
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-500 bg-transparent py-3 px-2 text-white placeholder-transparent focus:border-white focus:outline-none text-lg"
                  />
                  <label
                    htmlFor={id}
                    className="absolute left-2 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white"
                  >
                    {label}
                  </label>
                </div>
              ))}

              {/* Textarea */}
              <div className="relative">
                <textarea
                  id="project"
                  name="project"
                  rows="1"
                  required
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-500 bg-transparent py-3 px-2 text-white placeholder-transparent focus:border-blue-500 focus:outline-none text-lg resize-none"
                ></textarea>
                <label
                  htmlFor="project"
                  className="absolute left-2 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400"
                >
                  Describe Your Project/Idea In Brief
                </label>
                <span className="block text-sm text-gray-400 mt-1">
                  Helps us come back better prepared
                </span>
              </div>

              {/* Submit Button */}
              <div>
              <button
                  type="submit"
                 className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 hover:from-blue-900 hover:via-blue-800 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 cursor-pointer"
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
