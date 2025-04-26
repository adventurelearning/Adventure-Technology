import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
