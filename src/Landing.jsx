import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'

const Landing = () => {
  return (
    <div className="landing">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Landing