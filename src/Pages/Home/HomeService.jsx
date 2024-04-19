import React from "react";
import image from "../../assets/Image.png";
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { LuArrowRightLeft } from "react-icons/lu";

const HomeService = () => {
  const handleNizamabad = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://seal-app-aximy.ondigitalocean.app/api/get-whatapplink",
        data: {
          toPhone: "+918320911933",
          message: `Hii! I want to book a ride to Nizamabad`,
        },
      });

      // Open the WhatsApp link in a new window
      window.open(response.data.link, "_self");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="homeservice">
      <div className="service-model">
        <img src={image} />
        <div className="layer2">
          <div>
            <button className="white-btn">WGL</button>
            <LuArrowRightLeft className="directionhomearrow" />
            <button className="white-btn">HYD</button>
          </div>
          {/* <div style={{ marginTop: "20px" }}>24*7</div> */}
        </div>
        <div className="layer3">
          <h3>Warangal</h3>
          <p>
            {/* Route - via  ORR - Distance : 199 Km - Duration : 3 hours 30 minutes. Book your ride now. enjoy the seamless,safe & affordable travel with roadjets. */}
          </p>
          <Link to="/services?scrollTo=navbar">
            <button className="book-btn">Book Now!</button>
          </Link>
        </div>
      </div>
      <div className="service-model">
        <img src={image1} />
        <div className="layer2">
          <div>
            <button className="white-btn">KNR</button>
            <LuArrowRightLeft className="directionhomearrow" />
            <button className="white-btn">HYD</button>
          </div>
          {/* <div style={{ marginTop: "20px" }}>24*7</div> */}
        </div>
        <div className="layer3">
          <h3>Karimnagar</h3>
          <p>
            {/* Route - via  ORR - Distance : 199 Km - Duration : 3 hours 30 minutes. Book your ride now. enjoy the seamless,safe & affordable travel with roadjets. */}
          </p>
          <Link to="/services?scrollTo=navbar">
            <button className="book-btn">Book Now!</button>
          </Link>
        </div>
      </div>
      <div className="service-model">
        <img src={image2} />
        <div className="layer2">
          <div>
            <button className="white-btn">KHM</button>
            <LuArrowRightLeft className="directionhomearrow" />
            <button className="white-btn">HYD</button>
          </div>
          {/* <div style={{ marginTop: "20px" }}>24*7</div> */}
        </div>
        <div className="layer3">
          <h3>Khammam</h3>
          <p>
            {/* Route - via  ORR - Distance : 199 Km - Duration : 3 hours 30 minutes. Book your ride now. enjoy the seamless,safe & affordable travel with roadjets. */}
          </p>
          <Link to="/services?scrollTo=navbar">
            <button className="book-btn">Book Now!</button>
          </Link>
        </div>
      </div>
      <div className="service-model">
        <img src={image3} />
        <div className="layer2">
          <div>
            <button className="white-btn">NZB</button>
            <LuArrowRightLeft className="directionhomearrow" />
            <button className="white-btn">HYD</button>
          </div>
          {/* <div style={{ marginTop: "20px" }}>24*7</div> */}
        </div>
        <div className="layer3">
          <h3>Nizamabad</h3>
          <p>
            {/* Route - via  ORR - Distance : 199 Km - Duration : 3 hours 30 minutes. Book your ride now. enjoy the seamless,safe & affordable travel with roadjets. */}
          </p>
          <Link to="/services?scrollTo=navbar"><button
            className="book-btn"
          >
            Book Now!
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomeService;
