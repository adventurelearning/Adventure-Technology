import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-5xl mx-auto bg-gray-800 bg-opacity-75 rounded-xl shadow-lg overflow-hidden backdrop-blur-md">
        {/* Header */}
        <div className="px-8 py-10 sm:px-12 sm:py-12 bg-gradient-to-r from-blue-900 to-gray-900 border-b border-gray-700">
          <h1 className="text-3xl font-semibold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400">
            At Adventure Technology Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-10 sm:px-12 sm:py-12 space-y-8">
          <section id="data-collection">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">1. Data Collection</h2>
            <p className="text-gray-300 leading-relaxed">
              We may collect various types of information when you engage with our services. This includes personal information that you voluntarily provide, such as your name, email address, phone number, and company details when you contact us, request a quote, or subscribe to our newsletters. Additionally, we may automatically collect certain technical information, such as your IP address, browser type, operating system, and browsing patterns on our website. This helps us to improve our website's functionality and your user experience. We may also collect information through cookies and similar tracking technologies as described in the 'Cookies' section below.
            </p>
          </section>

          <section id="information-usage">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">2. Information Usage</h2>
            <p className="text-gray-300 leading-relaxed">
              The information we collect is used for specific and legitimate business purposes. This includes providing and improving our services, responding to your inquiries, processing your requests, and managing our relationship with you. We may also use your contact information to send you updates about our services, relevant industry news, and marketing communications, where permitted by applicable law. Your technical information helps us to analyze website traffic, diagnose technical issues, and optimize our online presence. We are committed to using your information responsibly and in accordance with this Privacy Policy.
            </p>
          </section>

          <section id="data-sharing">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">3. Data Sharing Practices</h2>
            <p className="text-gray-300 leading-relaxed">
              We understand the importance of keeping your personal information confidential. We will only share your data with third parties in limited circumstances, such as with trusted service providers who assist us in delivering our services (e.g., hosting providers, email marketing services). These providers are contractually obligated to protect your information and use it only for the purposes we specify. We may also disclose your information if required by law, to comply with a legal process, or to protect our rights, property, or safety, or the rights, property, or safety of others. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section id="security-measures">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">4. Security Measures</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement robust security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include technical safeguards such as encryption, firewalls, and secure server infrastructure, as well as organizational measures like access controls and employee training on data protection practices. While we strive to maintain the highest standards of data security, please be aware that no method of data transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.
            </p>
          </section>

          <section id="your-rights">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Depending on your location and applicable data protection laws, you may have certain rights regarding your personal information. These rights may include the right to access, correct, or delete your personal data, the right to restrict or object to the processing of your data, and the right to data portability. If you wish to exercise any of these rights, please contact us using the information provided in the 'Contact Us' section below. We will review your request and respond in accordance with applicable laws. We may need to verify your identity before fulfilling your request.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may use cookies and other similar tracking technologies to enhance your browsing experience and collect information about how you use our site. Cookies are small text files that are placed on your device when you visit a website. We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a longer period). These technologies help us to remember your preferences, understand how you navigate our website, and improve its functionality. You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may impact your ability to access certain features of our website.
            </p>
          </section>

          <section id="policy-updates">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">7. Updates to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our data processing practices or legal requirements. We will post any revisions on our website, and the 'Last Updated' date at the bottom of this page will indicate when the policy was last revised. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Significant changes to this policy will be communicated more prominently, such as through a notice on our website or via email, where appropriate.
            </p>
          </section>

          <section id="contact-us">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">8. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please do not hesitate to contact us. We are committed to addressing your inquiries in a timely and professional manner. You can reach us through the following contact details:
              <br />
              Adventure Technology Solutions
              <br />
              [Your Company Address]
              <br />
              [Your Contact Email]
              <br />
              [Your Phone Number]
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 sm:px-12 sm:py-8 border-t border-gray-700 text-center text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          <p className="mt-2 text-xs text-gray-500">
            © {new Date().getFullYear()} Adventure Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;