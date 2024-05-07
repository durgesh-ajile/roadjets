import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-log">
        <img src={logo} />
      </div>
      <div className="footer-child1">
        <div className="footer-left">
          <div>
            <IoMdMail />
            <span className="mail">roadjets.in@gmail.com</span>
          </div>
          <div>
            <IoCall />
            <span className="phone">+91 9032240749</span>
          </div>
          <div>
            <FaLocationDot />
            <span className="address">Hyderabad, Telangana </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="right1">
            <h4>Home</h4>
            <Link to="/"><p>Benefits</p></Link>
            <Link to="/"><p>Our Testimonials</p></Link>
            <Link to="/"><p>Our FAQ</p></Link>
          </div>
          <div className="right1">
            <h4>About Us</h4>
            <Link to="/about?scrollTo=navbar"><p>Company</p></Link>
            <Link to="/about"><p>Achievements</p></Link>
            <Link to="/about"><p>Our Goals</p></Link>
          </div>
          <div className="right1">
            <h4>Policies</h4>
            <Link target="_blank" to="/termsandconditions"><p>Terms and Conditions</p></Link>
            <Link target="_blank" to="/privacypolicy"><p>Privacy Policy</p></Link>
            <Link target="_blank" to="/cancellation"><p>Cancellations</p></Link>
          </div>
          <div className="right3">
            <h4>Social Profiles</h4>
            <div className="right32">
              <Link style={{ color: "black" }}>
                <div className="icon">
                  <FaFacebook />
                </div>
              </Link>
              <Link style={{ color: "black" }}>
                <div className="icon">
                  <FaTwitter />
                </div>
              </Link>
              <Link
                style={{ color: "black" }}
                to="https://in.linkedin.com/company/roadjets"
              >
                <div className="icon">
                  <FaLinkedin />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 Roadjets Commute Private Limited. All rights reserved.</div>
    </div>
  );
};

export default Footer;
