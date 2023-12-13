import React from "react";
import "./Contactus.css";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contactus = () => {
  const handleDragStart = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactusdiv">
      <div className="contactusheader">
        <div className="contactusheading">
          <h2>Contact Us</h2>
        </div>
        <div className="contactusparagraph">
          <p className="contactusfirstpara">
            At RoadJet's we value your feedback, injuries and suggestions. our
            dedicated team is here to assist you in any way we can. Feel free to
            reach out to us through the following channels mentioned below
          </p>
          <p className="contactussecpara">
            Thank you for choosing Roadjet. We look forward to server you!
          </p>
        </div>
      </div>
      <hr className="horizontalline"></hr>
      <div className="contactussection">
        <div className="contactusform">
          <div className="contactusname">
            <div className="contactusfirstname">
              <label className="firstname">First Name</label>
              <input className="firstinput" type="text" />
            </div>
            <div className="contactuslastname">
              <label className="lastname">Last Name</label>
              <input className="lastinput" type="text" />
            </div>
          </div>
          <div className="contactusemail">
            <div className="contactusfirstname">
              <label className="firstname">Email</label>
              <input className="firstinput" type="Email" />
            </div>
            <div className="contactuslastname">
              <label className="lastname">Phone</label>
              <input className="lastinput" type="Phone" />
            </div>
          </div>
          <div className="subject">
            <label className="subjecttitle">Subject</label>
            <input className="subjectinput" type="text" />
          </div>
          <div className="message">
            <label className="messagetitle">Message</label>
            <textarea className="messageinput" type="text" />
          </div>
          <button className="sendmsgbutton">Send Your Message</button>
        </div>
        <div className="contactusiconsinfo">
          <div className="mailid">
            <div className="icons">
              <IoMdMail />
            </div>
            <a className="maillink" href="mailto:roadjets.in@gmail.com">roadjets.in@gmail.com</a>
          </div>
          <div className="phonenumber">
            <div className="icons">
              <FaPhoneAlt />
            </div>
            <a className="phonelink" href="tel:+918320911933">+91 8320911933</a>
          </div>
          <div className="contactlocation">
            <div className="icons">
              <FaLocationDot />
            </div>
            <label>Hyderabad, Jubiliee Hills</label>
          </div>
          <div className="socialprofile">
            <div className="combinesocial">
              <div className="icons">
                <FaFacebook />
              </div>
              <div className="icons">
                <FaTwitter />
              </div>
              <div className="icons">
                <FaLinkedin />
              </div>
            </div>

            <label>Social Profiles</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
