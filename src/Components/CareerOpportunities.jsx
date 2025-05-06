import React from 'react';

const CareerOpportunities = () => {
  const handleUploadClick = () => {
    // Scroll to the form section (you'll need to add an ID to your form section)
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white px-4 py-12">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-4">
            Future Career <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Opportunities</span> 
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            While we're not currently hiring, we'd love to connect for future opportunities
          </p>
        </div>

        {/* Current Status */}
        <div className="mb-16 bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-blue-700 text-center ">
          <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-blue-800 transition-colors"
            onClick={handleUploadClick}>
            <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-100">Submit Your Resume</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Upload your resume now for future consideration. We'll review your profile when new opportunities become available.
          </p>
        </div>


        {/* Form Section (hidden until scrolled to) */}
        {/* Form Section */}
        <div className="mt-24">
          <h1 className="text-4xl font-semibold mb-6 text-center">
            Apply <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Here</span>
          </h1>

          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-blue-200 mb-4">
              We're always looking for talented individuals to join our team in the future.
              By submitting your application now, you'll be first in line when new opportunities arise.
            </p>
          </div>

          <div className="flex items-center justify-center min-h-screen ">
            <div id="application-form" className="bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-blue-700 max-w-4xl w-full">
              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-100">Career Opportunity Application</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-blue-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Resume Upload</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-blue-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="pt-1 text-sm text-blue-300">Click to upload your resume (PDF, DOC, DOCX)</p>
                      </div>
                      <input type="file" className="opacity-0" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Cover Letter (Optional)</label>
                  <textarea
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Tell us why you'd like to work with us in the future..."
                  ></textarea>
                </div>
                <div className="text-sm text-blue-300">
                  By submitting this form, you agree to our <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a> and consent to having your data stored for future recruitment purposes.
                </div>
                <button
                  type="submit"
                  className="w-fit bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;