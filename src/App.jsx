import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Header1 from './Components/Header1'
import Navbar1 from './Components/Navbar1'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Navbar/>
        {/* <Header1/>
        <Navbar1/> */}
        <Routes>
        <Route path="/" element={<Home/>} />

        </Routes>

      </div>
    </>
  )
}

export default App
