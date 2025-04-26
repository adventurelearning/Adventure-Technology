
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import Services from './Pages/Services/Services'







function App() {
  

  return (
    <>
      <div>
        <Header />
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
