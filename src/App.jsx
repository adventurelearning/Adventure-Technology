
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

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />          
        </Routes>
        <Routes path='/service'>
            <Route path='/web_dev' element={<WebDevelopment />} />
            <Route path='/Soft_dev' element={<SoftwareDevelopment/>}/>
            <Route path='/Uiux_dev' element={<UiUxDesign/>}/>
            <Route path='/Iot_dev' element={<IotDevelopment/>}/>
            <Route path='/AiMl_dev' element={<AiMl/>}/>
            <Route path='/Data_dev' element={<DataScience/>}/>
            <Route path='/Marketing_dev' element={<DigitalMarket/>}/>
            <Route path='/Consulting_dev' element={<Consulting/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
