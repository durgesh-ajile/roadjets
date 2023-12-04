import React from 'react'
import './Navbar.css'
import { FaArrowRight } from "react-icons/fa6";
import Logo from '../../assets/Logo.png'
import { useLocation } from 'react-router-dom';
const Navbar = () => {

  const location = useLocation();
  const selected = { borderRadius: "8px",
    background: "var(--white-95, #F1F1F3)"}
  return (
    
    <div className='navbar'>
      <div className="nav-title">
        <span style={{marginRight:"10px"}}>Register to unlock offer 🌟 on your first ride</span> 
        <FaArrowRight id='arrow-icon'/>
      </div>
      <div className="nav-links">
        <div className="logo">
          <img src={Logo}/>
        </div>
        <div className="links">
          <div style={location.pathname === "/" ? selected : null}>Home</div>
          <div style={location.pathname === "/services" ? selected : null}>Services</div>
          <div style={location.pathname === "/about" ? selected : null}>About Us</div>
          <div style={location.pathname === "/pricing" ? selected : null}>Pricing</div>
          <div style={location.pathname === "/contact" ? selected : null}>Contact</div>
        </div>
        <div className="signup-in">
          <button id='signup-btn'>Sign Up</button>
          <button id='login-btn'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar