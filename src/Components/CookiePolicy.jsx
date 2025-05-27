import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CookiePolicy({ onClose }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Header */}
          <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-800 to-gray-800">
          <div className="flex items-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Adventure Technology Solutions
            </h1>
          </div>
          <p className="mt-2 text-blue-200">
           Cookie Policy
          </p>
        </div>
        <div className="p-6">
          {/* Last Updated */}
          <p className="text-gray-400 text-sm mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric' })}
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
            <p className="text-gray-300 mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p className="text-gray-300">
              By continuing to browse the site, you are agreeing to our use of cookies as described in this policy.
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">2. What Are Cookies</h3>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the site owners.
            </p>
            <p className="text-gray-300">
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">3. Types of Cookies We Use</h3>

            <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-400 mb-2">Essential Cookies</h4>
              <p className="text-gray-300">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as logging in or filling in forms.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-400 mb-2">Analytics Cookies</h4>
              <p className="text-gray-300">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are popular and how visitors move around the site.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium text-blue-400 mb-2">Marketing Cookies</h4>
              <p className="text-gray-300">
                These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant ads on other sites.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">4. Managing Cookies</h3>
            <p className="text-gray-300 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-gray-300">
              If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. Contact Us</h3>
            <p className="text-gray-300">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:privacy@example.com" className="text-blue-400 hover:underline">
                info@adventure
                technologysolutions.com
              </a>.
            </p>            
          </section>    
                
        </div>
        
      </div>
      
    </div>
  );
}