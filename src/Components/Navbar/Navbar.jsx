// import React from 'react'
import './Navbar.css'
import { FaArrowRight } from "react-icons/fa6";
import Logo from '../../assets/Logo.png'
import { useLocation } from 'react-router-dom';


import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";


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
        <div id='sidebar'>
        <MobileNavbar />
        </div>
      </div>
    </div>
  )
}


const MobileNavbar = ({
  userData,
  isAuthenticated,
  showPopup,
  setShowPopup,
  select
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const NavbarboxRef = useRef(null);
  const location = useLocation();

  const handleLogout = () => {
    axios({
      method: "get",
      url: "https://api.speakerore.com/api/logout",
      withCredentials: true,
    })
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggle = () => {
    const box = NavbarboxRef.current;
    // Apply initial styles
    box.style.transition = "transform 0.3s ease-in-out";
    box.style.transform = sidebarToggle && "translateX(70%)";
    box.style.right = !sidebarToggle && "-21%";
    box.style.display = sidebarToggle ? "block" : "none";

    // Delay style changes to ensure initial styles are applied before transition
    setTimeout(() => {
      box.style.transition = "transform 0.3s ease-out";
      box.style.transform = sidebarToggle
        ? "translateX(-0%)"
        : "translateX(70%)";
      box.style.right = sidebarToggle ? "0%" : "-21%";
    }, 200);
    setSidebarToggle(!sidebarToggle);
  };
  // const handleSignInClick = () => {
  //   setShowPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <div className="Navbar_coontainer">
        <Link to="/">
          <div className="Navbar_logo">
            {/* <img src={logo} alt="" /> */}
          </div>
        </Link>
          <div
            onClick={() => handleToggle()}
            className="Navbar_hambergure_icon"
          >
            <h4 style={{ marginRight: "10px" }}></h4>
            <GiHamburgerMenu />
          </div>
      </div>
      {!sidebarToggle && (
        <div
          onClick={() => handleToggle()}
          className="Eventlist_speakerore_sidebar_empty_div"
        ></div>
      )}
      {
        // !sidebarToggle &&
        <div
          ref={NavbarboxRef}
          id="Navbar_sidebar_id"
          className="Navbar_sidebar"
        >
          <div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="Navbar_inputfield">
              <div>
                <Link to="/" >
                  <div className="nav-select" id={location.pathname === '/' ? 'side-select' :''} onClick={() => handleToggle()}>
                    Home
                  </div>
                </Link>
                <Link to="/services" >
                  <div className="nav-select" id={location.pathname === '/services' ? 'side-select' :''} onClick={() => handleToggle()}>
                    Services
                  </div>
                </Link>
                <Link to="/about">
                  <div className="nav-select" id={location.pathname === '/about' ? 'side-select' :''} onClick={() => handleToggle()}>
                    About Us
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="nav-select" id={location.pathname === '/contact' ? 'side-select' :''} onClick={() => handleToggle()}>
                    Contacts
                  </div>
                </Link>
              </div>
             
            </div>
            <hr />
            {/* {isAuthenticated ?
              <div className="logout" style={{marginTop:'20px'}} >
              <Button variant="outlined" color="error" onClick={handleLogout}>
                {" "}
                <IoMdLogOut /> <span style={{margin:'2px 0 0 3px'}}>Logout</span>
              </Button>
            </div>: null} */}
            
          </div>
        </div>
      }
    </>
  );
};



export default Navbar