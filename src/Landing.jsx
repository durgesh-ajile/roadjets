import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Knowus from "./Pages/Home/Knowus";
import HomeService from "./Pages/Home/HomeService";
import Contactus from "./Pages/Contactus/Contactus";

const Landing = () => {
  

  return (
    <div className="landing">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default Landing;
