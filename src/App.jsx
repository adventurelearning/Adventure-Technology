import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'; // ✅ Only use Routes and Route here
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment';
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment/SoftwareDevelopment';
import UiUxDesign from './Pages/Services/UiDesign/UiUxDesign';
import IotDevelopment from './Pages/Services/Iot/IotDevelopment';
import AiMl from './Pages/Services/AiMlDevelopment/AiMl';
import DataScience from './Pages/Services/DataScience/DataScience';
import DigitalMarket from './Pages/Services/DigitalMarketing/DigitalMarket';
import Consulting from './Pages/Services/Consulting/Consulting';
import ContactForm from './Pages/Contact/Contact';
import Industries from './Pages/Industries/Industries';
import Education from './Components/Education';
import Healthcare from './Components/Healthcare';
import Automotive from './Components/Automotive';
import IndustrialAuto from './Components/IndustrialAuto';
import Ecommerce from './Components/Ecommerce';
import SaaS from './Components/SaaS';
import Agriculture from './Components/Agriculture';
import Manufacturing from './Components/Manufacturing';
import Internship from './Components/Internship';
import ScrollToTop from './Components/Scrolltotop';
import Careers from './Components/Careers';
import Aboutus from './Components/Aboutus';
import EmpDesign from './Pages/Services/EmbeddedDesign/EmpDesign';
import EmbSoft from './Pages/Services/EmbeddedSoft/EmbSoft';
import TermsAndConditions from './Components/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />

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

        {/* Services */}
        <Route path="/Web-Development" element={<WebDevelopment />} />
        <Route path="/Software-Development" element={<SoftwareDevelopment />} />
        <Route path="/UiUx-Design" element={<UiUxDesign />} />
        <Route path="/Iot-development" element={<IotDevelopment />} />
        <Route path="/Ai&Ml-Solutions" element={<AiMl />} />
        <Route path="/DataScience-Analytics" element={<DataScience />} />
        <Route path="/Digital-Marketing" element={<DigitalMarket />} />
        <Route path="/IT-Consulting" element={<Consulting />} />
        <Route path="/Embedded-Design" element={<EmpDesign/>} />     
        <Route path='/Embedded-Software' element={<EmbSoft/>}/>  

        {/* Careers */}
        <Route path="/Internship" element={<Internship />} />
        <Route path="/Career" element={<Careers/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />

        {/*Terms&Condition*/}
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>

      </Routes>  
      <Footer />
    </>
  );
}

export default App;
