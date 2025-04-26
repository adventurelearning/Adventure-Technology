import React from 'react';

const ConsultationForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#184ecc] via-[#1d1d1f] to-[#184ecc] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl overflow-hidden max-w-6xl w-full shadow-2xl">
        <div className="lg:grid lg:grid-cols-2">
          
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
          <div className="text-white p-10 flex flex-col justify-center bg-transparent">
            <h2 className="text-4xl font-bold leading-tight">
              Our Technology <br />
              <span className="text-blue-400">Experts Are Change</span> <br />
              Catalysts
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Book a free consultation call with our experts today.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#091057] p-10 flex items-center justify-center">
            <form className="w-full max-w-xl space-y-6">
              
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
                  rows="4"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
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
