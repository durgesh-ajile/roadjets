import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-log">
        <img src={logo}/>
      </div>
      <div className="footer-child1">
        <div className="footer-left">
          <div >
          <IoMdMail />
          <span className="mail">roadjets.in@gmail.com</span>
          </div>
          <div >
          <IoCall />
          <span className="phone">+91 9381290983</span>   
          </div>
          <div>
          <FaLocationDot />
          <span  className="address">Hyderabad,telangana </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="right1">
            <h4>Home</h4>
            <p>Benefits</p>
            <p>Our Testimonials</p>
            <p>Our FAQ</p>
          </div>
          <div className="right2">
            <h4>About Us</h4>
            <p>Company</p>
            <p>Achievements</p>
            <p>Our Goals</p>
          </div>
          <div className="right3">
            <h4>Social Profiles</h4>
          <div className="right32">
            <div className="icon">
            <FaFacebook />
            </div>
            <div className="icon">
            <FaTwitter />
            </div>
            <div className="icon">
            <FaLinkedin />
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div className="copyright">
      © 2023 Roadjets. All rights reserved.
      </div>
    </div>
  )
}

export default Footer