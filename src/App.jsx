
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment'
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment/SoftwareDevelopment'

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
            <Route path='/web' element={<WebDevelopment />} />
            <Route path='/Soft' element={<SoftwareDevelopment/>}/>
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
