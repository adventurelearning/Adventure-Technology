import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom"; // ✅ Only use Routes and Route here
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";
import SoftwareDevelopment from "./Pages/Services/SoftwareDevelopment/SoftwareDevelopment";
import UiUxDesign from "./Pages/Services/UiDesign/UiUxDesign";
import IotDevelopment from "./Pages/Services/Iot/IotDevelopment";
import AiMl from "./Pages/Services/AiMlDevelopment/AiMl";
import DataScience from "./Pages/Services/DataScience/DataScience";
import DigitalMarket from "./Pages/Services/DigitalMarketing/DigitalMarket";
import Consulting from "./Pages/Services/Consulting/Consulting";
import ContactForm from "./Pages/Contact/Contact";
import Industries from "./Pages/Industries/Industries";
import Education from "./Components/Education";
import Healthcare from "./Components/Healthcare";
import Automotive from "./Components/Automotive";
import IndustrialAuto from "./Components/IndustrialAuto";
import Ecommerce from "./Components/Ecommerce";
import SaaS from "./Components/SaaS";
import Agriculture from "./Components/Agriculture";
import Manufacturing from "./Components/Manufacturing";
import Internship from "./Components/Internship";
import ScrollToTop from "./Components/ScrollToTop";
import Careers from "./Components/Careers";
import Aboutus from "./Components/Aboutus";
import EmpDesign from "./Pages/Services/EmbeddedDesign/EmpDesign";
import EmbSoft from "./Pages/Services/EmbeddedSoft/EmbSoft";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import { Helmet } from "react-helmet";
import CookieConsent from "./Components/CookieConsent";
import CookiePolicy from "./Components/CookiePolicy";
import NotFound from "./Components/NotFound";
import Billing from "./Pages/Products/BillingSoftware/Billing";
import LXPlatform from "./Pages/Products/LXP/LXPlatform";
import CRManagement from "./Pages/Products/CRM/CRManagement";

import HomeAuto from "./Pages/Products/HomeAutomation/HomeAuto";
import VehicleTracking from "./Pages/Products/VehicleTracking/VehicleTracking";
import BMS from "./Pages/Products/BMS/BMS";
import AIAttendanceSystem from "./Pages/Products/AISystem/AIAttendanceSystem";
import EcomProduct from "./Pages/Products/Ecommerce/EcomProduct";


function App() {
  return (
    <>
      <Helmet>
        <title>Adventure Technology</title>
        <meta
          name="description"
          content="Welcome to Adventure Technology — Empowering industries with innovative digital solutions."
        />
        <meta
          name="keywords"
          content="technology, software, services, development, innovation, digital transformation"
        />
        <meta name="author" content="Adventure Technology Team" />
        <meta property="og:title" content="Adventure Technology" />
        <meta
          property="og:description"
          content="Innovative gear and expert advice for your next adventure."
        />
        <meta
          property="og:url"
          content="https://www.adventuretechnology.com/"
        />
      </Helmet>

      <Header />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Industries" element={<Industries />} />
      

        {/* Industry Pages */}
        <Route path="/Education" element={<Education />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Automotive" element={<Automotive />} />
        <Route path="/IndustrialAuto" element={<IndustrialAuto />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/SaaS" element={<SaaS />} />
        <Route path="/Agriculture" element={<Agriculture />} />
        <Route path="/Manufaturing" element={<Manufacturing />} />

        {/* Product Pages */}
        <Route path="/Billing-Software" element={<Billing/>} />
        <Route path="/Ecommerce-Service" element={<EcomProduct/>} />
        <Route path="/LearningExperience-Platform" element={<LXPlatform/>}/>
        <Route path="/CustomerRelationship-Management" element={<CRManagement/>}/>
        <Route path="/Home-Automation" element={<HomeAuto/>} />
        <Route path="/Vehicle-Tracking" element={<VehicleTracking/>}/>
        <Route path="/Battery-Management-System" element={<BMS/>}/>
        <Route path="/Attendance-System" element={<AIAttendanceSystem/>}/>



        
        {/* Services */}
        <Route path="/Web-Development" element={<WebDevelopment />} />
        <Route path="/App-Development" element={<SoftwareDevelopment />} />
        <Route path="/UiUx-Design" element={<UiUxDesign />} />
        <Route path="/Iot-development" element={<IotDevelopment />} />
        <Route path="/AiMl-Solutions" element={<AiMl />} />
        <Route path="/DataScience-Analytics" element={<DataScience />} />
        <Route path="/Digital-Marketing" element={<DigitalMarket />} />
        <Route path="/IT-Consulting" element={<Consulting />} />
        <Route path="/Embedded-Design" element={<EmpDesign />} />
        <Route path="/Embedded-Software" element={<EmbSoft />} />

        {/* Careers */}
        <Route path="/Internship" element={<Internship />} />
        <Route path="/Career" element={<Careers />} />
        <Route path="/Aboutus" element={<Aboutus />} />

        {/*Terms&Condition*/}
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>     
      <CookieConsent/>
      <Footer />
    </>
  );
}

export default App;
