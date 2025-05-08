import React, { useState } from 'react';

const CareerOpportunities = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleUploadClick = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      alert('Please upload a valid PDF file.');
      return;
    }

    setUploading(true);
    setUploadError('');

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'resume'); // <-- Your unsigned preset

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dlw21awck/image/upload', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (result && result.secure_url) {
        setResumeUrl(result.secure_url);
        console.log('Uploaded to:', result.secure_url);
        setUploading(false);
      } else {
        setUploadError('Upload failed: ' + (result?.error?.message || 'Unknown error'));
        console.error(result);
        setUploading(false);
      }
    } catch (err) {
      console.error('Error uploading:', err);
      setUploadError('Error uploading PDF.');
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (!fullName || !email || !phone || !resumeUrl) {
      alert('Please fill in all required fields and upload your resume.');
      return;
    }

    try {
      const response = await fetch('https://adventure-back-end.vercel.app/api/jobapplication/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          resumeUrl,
          coverLetter,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Application submitted successfully:', data);
        setSubmissionStatus('success');
        setFullName('');
        setEmail('');
        setPhone('');
        setResumeUrl('');
        setCoverLetter('');
        // Optionally, show a success message to the user
      } else {
        console.error('Failed to submit application:', data);
        setSubmissionStatus('error');
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmissionStatus('error');
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white px-4 py-12">
      <div className=" mx-auto">    


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

          <div className="flex items-center justify-center">
            <div id="application-form" className="bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-blue-700 max-w-4xl w-full">
              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-100">Career Opportunity Application</h2>
              {submissionStatus === 'success' && (
                <div className="bg-green-500 text-white p-4 rounded-md mb-4 text-center">
                  Application submitted successfully! We will be in touch if a suitable opportunity arises.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="bg-red-500 text-white p-4 rounded-md mb-4 text-center">
                  Failed to submit application. Please try again later.
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-blue-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
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
                        <p className="pt-1 text-sm text-blue-300">Click to upload your resume (PDF)</p>
                        {uploading && <p className="text-xs text-blue-300">Uploading...</p>}
                        {uploadError && <p className="text-xs text-red-500">{uploadError}</p>}
                        {resumeUrl && <p className="text-xs text-green-400">Resume uploaded!</p>}
                      </div>
                      <input type="file" className="opacity-0" accept=".pdf" onChange={handleResumeUpload} required />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Cover Letter (Optional)</label>
                  <textarea
                    className="w-full bg-gray-700 border border-blue-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Tell us why you'd like to work with us in the future..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-sm text-blue-300">
                  By submitting this form, you agree to our <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a> and consent to having your data stored for future recruitment purposes.
                </div>
                <button
                  type="submit"
                  className="w-fit bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  disabled={uploading}
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