import React, { useState } from "react";
import "./Contactus.css";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Contactus = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const apiContactUs = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://seal-app-aximy.ondigitalocean.app/api/contact-us",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleContactUs = async (e) => {
    e.preventDefault();

    toast.promise(
      apiContactUs(),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      },
      {
        style: {
          minWidth: "250px",
          backgroundColor: "black",
          color: "white",
        },
        success: {
          duration: 5000,
          icon: "🚀",
        },
      }
    );
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
              <input
                className="firstinput"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="contactuslastname">
              <label className="lastname">Last Name</label>
              <input
                className="lastinput"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="contactusemail">
            <div className="contactusfirstname">
              <label className="firstname">Email</label>
              <input
                className="firstinput"
                type="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="contactuslastname">
              <label className="lastname">Phone</label>
              <input
                className="lastinput"
                type="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="subject">
            <label className="subjecttitle">Subject</label>
            <input
              className="subjectinput"
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="message">
            <label className="messagetitle">Message</label>
            <textarea
              className="messageinput"
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button
            className="sendmsgbutton"
            onClick={(e) => {
              handleContactUs(e);
            }}
          >
            Send Your Message
          </button>
        </div>
        <div className="contactusiconsinfo">
          <div className="mailid">
            <div className="icons">
              <IoMdMail />
            </div>
            <a className="maillink" href="mailto:roadjets.in@gmail.com">
              roadjets.in@gmail.com
            </a>
          </div>
          <div className="phonenumber">
            <div className="icons">
              <FaPhoneAlt />
            </div>
            <a className="phonelink" href="tel:+919032240749">
              +91 9032240749
            </a>
          </div>
          <div className="contactlocation">
            <div className="icons">
              <FaLocationDot />
            </div>
            <label>Hyderabad, Jubiliee Hills</label>
          </div>
          <div className="socialprofile">
            <div className="combinesocial">
              <Link style={{"color": "black"}}>
                <div className="icons">
                  <FaFacebook />
                </div>
              </Link>
              <Link style={{"color": "black"}}>
                <div className="icons">
                  <FaTwitter />
                </div>
              </Link>
              <Link style={{"color": "black"}} to="https://in.linkedin.com/company/roadjets">
                <div className="icons">
                  <FaLinkedin />
                </div>
              </Link>
            </div>

            <label>Social Profiles</label>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contactus;
