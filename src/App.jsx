
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment'
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment/SoftwareDevelopment'
import UiUxDesign from './Pages/Services/UiDesign/UiUxDesign'
import IotDevelopment from './Pages/Services/Iot/IotDevelopment'
import AiMl from './Pages/Services/AiMlDevelopment/AiMl'
import DataScience from './Pages/Services/DataScience/DataScience'
import DigitalMarket from './Pages/Services/DigitalMarketing/DigitalMarket'
import Consulting from './Pages/Services/Consulting/Consulting'
import ContactForm from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Contact' element={<ContactForm />} />
        </Routes>

        <Routes path='/service'>
          <Route path='/Web-Development' element={<WebDevelopment />} />
          <Route path='/Software-Development' element={<SoftwareDevelopment />} />
          <Route path='/UiUx-Design' element={<UiUxDesign />} />
          <Route path='/Iot-development' element={<IotDevelopment />} />
          <Route path='/Ai&Ml-Solutions' element={<AiMl />} />
          <Route path='/DataScience-Analytics' element={<DataScience />} />
          <Route path='/Digital-Marketing' element={<DigitalMarket />} />
          <Route path='/IT-Consulting' element={<Consulting />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
