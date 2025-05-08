import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-800 to-gray-800">
          <div className="flex items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Adventure Technology Solutions
            </h1>
          </div>
          <p className="mt-2 text-blue-200">
            Terms and Conditions of Service
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Adventure Technology Solutions ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") are a legally binding agreement that governs your access to and use of our website and the various technology services we offer. By engaging with our Services, which include Web Development, Software Development, UI/UX Design, IoT Development, AI/ML Solutions, Embedded Product Design, Embedded Software, Data Science & Analytics, and Digital Marketing (collectively referred to as the "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms. We are dedicated to providing innovative and high-quality technology solutions, and these terms are designed to ensure a clear understanding of the framework under which these services will be delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Your access to or use of our Services signifies your explicit agreement to these Terms. This agreement takes effect on the date you first access our website, submit a service request, or otherwise engage with any aspect of our Services. If you do not agree with any provision of these Terms, you are prohibited from accessing or using our Services. Your continued use of our Services following any modifications to these Terms will constitute your acceptance of such changes. It is your responsibility to review these Terms periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. Services Provided</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Adventure Technology Solutions is proud to offer a comprehensive suite of technology services tailored to meet the diverse needs of our clients. Our expertise spans several key areas, ensuring that we can provide end-to-end solutions for your technological challenges and aspirations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Web Development</h3>
                <p className="leading-relaxed">We specialize in creating responsive, scalable, and user-friendly websites and web applications, utilizing the latest technologies and design principles to ensure a robust online presence.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Software Development</h3>
                <p className="leading-relaxed">Our software development services cover the full lifecycle, from conceptualization and design to development, testing, and deployment of custom software solutions tailored to your specific requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">UI & UX Design</h3>
                <p className="leading-relaxed">We focus on creating intuitive and engaging user interfaces and experiences that enhance usability and drive user satisfaction, ensuring your digital products are both functional and aesthetically pleasing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">IoT Development</h3>
                <p className="leading-relaxed">We provide expertise in developing Internet of Things solutions, connecting devices and systems to create intelligent, data-driven applications and services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">AI & ML Solutions</h3>
                <p className="leading-relaxed">Our artificial intelligence and machine learning services help businesses leverage the power of data to gain insights, automate processes, and develop intelligent applications.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Embedded Product Design</h3>
                <p className="leading-relaxed">We offer design services for embedded systems and products, focusing on performance, reliability, and efficiency for a wide range of applications.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Embedded Software</h3>
                <p className="leading-relaxed">Our embedded software development services ensure seamless integration and optimal performance of software within embedded systems, driving the functionality of your hardware.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Data Science & Analytics</h3>
                <p className="leading-relaxed">We help you unlock the value of your data through advanced analytics techniques, providing insights that drive informed decision-making and strategic growth.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Digital Marketing</h3>
                <p className="leading-relaxed">Our digital marketing services are designed to enhance your online presence, reach your target audience, and achieve your marketing objectives through strategic and data-driven campaigns.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Unless explicitly stated otherwise in a written contract, all intellectual property rights, including but not limited to source code, designs, methodologies, documentation, and any other materials created or developed by Adventure Technology Solutions as part of the Services, shall remain the sole and exclusive property of Adventure Technology Solutions until full and final payment for the specific project or service has been received. Upon receipt of full payment and as stipulated in the individual project contract, certain intellectual property rights may be transferred to the client. However, Adventure Technology Solutions retains the right to utilize its underlying technologies, tools, and general know-how developed during the provision of services for other projects and clients. Any unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Confidentiality Obligations</h2>
            <p className="text-gray-300 leading-relaxed">
              Adventure Technology Solutions recognizes the sensitive nature of the information that may be shared by our clients during the course of providing Services. We are committed to maintaining the strict confidentiality of all proprietary information, data, and trade secrets disclosed to us by our clients. Similarly, we expect our clients to respect the confidentiality of our methodologies, technologies, and any proprietary information belonging to Adventure Technology Solutions that may be shared during our engagement. These confidentiality obligations will continue even after the termination or completion of our services. We will take all reasonable precautions to prevent the unauthorized disclosure or use of confidential information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Payment Terms and Conditions</h2>
            <p className="text-gray-300 leading-relaxed">
              The specific payment terms, including the schedule of payments, accepted methods of payment, and any applicable taxes, will be clearly outlined in the individual project contract or service agreement. Adherence to the agreed-upon payment schedule is essential for the smooth progression of the project. In the event of late payments, Adventure Technology Solutions reserves the right to implement measures such as pausing project work or suspending services until the outstanding balance is settled. Continued failure to remit payments may result in additional charges, including interest on the overdue amount, and potential legal action to recover the outstanding dues. We encourage our clients to communicate promptly if any unforeseen circumstances may affect their ability to meet the payment obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by applicable law, Adventure Technology Solutions shall not be held liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or in any way connected with the use of or inability to use our Services, even if Adventure Technology Solutions has been advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to our Services shall not exceed the total amount of fees paid by you to Adventure Technology Solutions for the specific services in question. This limitation applies regardless of the basis of the claim, whether in contract, tort (including negligence), strict liability, or any other legal theory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">8. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms and any disputes arising out of or relating to these Terms or our Services shall be governed by and construed in accordance with the laws of the jurisdiction where Adventure Technology Solutions is officially registered. You irrevocably submit to the exclusive jurisdiction of the courts located in that jurisdiction for the resolution of any such disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">9. Modifications to These Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Adventure Technology Solutions reserves the right to modify, amend, or update these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting on our website or otherwise communicating them to you. It is your responsibility to review these Terms periodically for any updates or changes. Your continued use of our Services after the posting of any modified Terms constitutes your acceptance of the new Terms. We may, at our discretion, provide you with notice of significant changes to these Terms, but it is ultimately your responsibility to stay informed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">10. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions, concerns, or require further clarification regarding these Terms and Conditions, please do not hesitate to contact us. We are committed to ensuring that our clients have a clear understanding of the terms governing our services. You can reach us through the following contact details:
              <br />
              <span className="text-blue-400">Adventure Technology Solutions</span>
              <br />
              [Your Company Address]
              <br />
              [Your Contact Email]
              <br />
              [Your Phone Number]
            </p>
          </section>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;