/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./Serices.css";
import warangal1 from "../../assets/Warangal.png";
import warangal2 from "../../assets/Warangal2.png";
import warangal3 from "../../assets/Warangal3.png";
import Karimnagar from "../../assets/Karimnagar.png";
import Kammar from "../../assets/Kammam.png";
import MapContainer from "../../Components/GoogleMap/GoogleMap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const timeData = [
  {
    time: "5:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "6:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "9:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "11:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "2:30 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "5:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "6:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "9:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "10:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
  {
    time: "11:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan",
  },
];

const serviceData = [
  {
    id: 1,
    title: "Hyderabad(gachibowli circle) - Warangal",
    text: "Our route begins at Gachibowli Circle, meandering through the ORR for a comfortable 3 hours and 30 minutes. Our dedicated pilots ensure a seamless and secure ride. For a personalized experience, kindly share your travel details in advance. Currently, doorstep services are available exclusively in Warangal. Your ticket cost covers all tall charges. Residents of Gachibowli, Madhapur, Raidurg, Hitech City, Kondapur Miyapur will find this route especially convenient. Trust Roadjets for a reliable and enjoyable travel experience.",
    location: "Hyderabad(gachibowli circle) - Warangal - Timings:",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR-3h: 30 min - A/C - Female Preference",
    img1: warangal1,
    img2: warangal2,
  },
  {
    id: 2,
    title: "Hyderabad (Uppal) - Warangal",
    text: "Our route commences from Uppai X Road NH163, offering a pleasant 2 hours and 30 minutes ride. Our dedicated pilots ensure a smooth experience throughout. Please share your personalized travel details in advance for a tailored service. Currently, doorstep services are exclusively available in Warangal. Your ticket cost covers all toll charges. Travelers from Secunderabad, Uppal, Ameerpet, ramanthpur will find this route particularly advantageous, Trust RoadJets for a reliable and streamlined travel experience",
    location: "Hyderabad (Uppal) - Warangal - Timings :",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via NH 163 -2h: 30 min - A/C - Female Preference",
    img1: warangal3,
    img2: warangal2,
  },
  {
    id: 3,
    title: "Hyderabad  Karimnagar",
    text: "Our route commences from offering a pleasant 2 hours and 30 minutes ride. Our dedicated pilots ensure a smooth experience throughout, Please share your personalized travel details in advance for a tailored service. Currently, doorstep services are exclusively available in Warangal. Your ticket cost covers all toll charges. Travelers from Secunderabad, Uppal Ameerpet, ramanthpur will find this route particularly advantageous. Trust RoadJets for a reliable and streamlined travel experience.",
    location: "Hyderabad(gachibowli circle) - Karimnagar - Timings :",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "KNR",
    shortDescription: "Via SH 01 -3h: 30 min - A/C - Female Preference",
    img1: warangal1,
    img2: Karimnagar,
  },
  {
    id: 4,
    title: "Hyderabad  Kammam",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from gachibowli circle & taken through ORR which takes around 3hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from gachibowli,madhapur,raidurg,hitech-city,kondapur,miyapur will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad(gachibowli circle) - Kammam - Timings :",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR 3h:00 min A/C",
    img1: warangal1,
    img2: Kammar,
  },
];
const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToElement = params.get("scrollTo");

    if (scrollToElement) {
      scroller.scrollTo(scrollToElement, {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    }
  }, [location.search]);

  const handleBook = async (e, location, preference) => {
    e.preventDefault();
    try {
      const inputString = location;

      // Find the index of the second occurrence of '-'
      const endIndex = inputString.indexOf("-", inputString.indexOf("-") + 1);

      // Extract the substring before the second '-'
      const finalLocation = inputString.substring(0, endIndex).trim();

      const response = await axios({
        method: "post",
        url: "https://roadjets.onrender.com/api/get-whatapplink",
        data: {
          toPhone: "+918975141294",
          message: `Hii! I want to book a ride from ${finalLocation} ${preference}`,
        },
      });

      // Open the WhatsApp link in a new window
      window.open(response.data.link, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="services">
      <div className="map">
        <MapContainer />
      </div>
      <div className="all-service" id="bookride-section">
        {serviceData.map((data) => {
          return (
            <div className="service-model" key={data.id} id={data.id}>
              <h2>{data.title}</h2>
              <div className="directionArrow">
                <img src="/public/arrows.png"></img>
              </div>
              <div className="service-book">
                <p>{data.text}</p>
                <div>
                  <button
                    id="login-btn"
                    onClick={(e) => {
                      handleBook(e, data.location, data.shortDescription);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
              <div className="service-img">
                <div className="img1">
                  <img src={data.img1} />
                </div>
                <div className="img2">
                  <img src={data.img2} />
                </div>
              </div>
              <div className="yellow">
                <div className="location">
                  <span>{data.shortFormStartLocation}</span>
                  <span>{data.shortFormEndLocation}</span>
                </div>
                <div className="time">{data.shortDescription}</div>
              </div>
              <div className="yellow2">{data.location}</div>
              <div className="time-box">
                {timeData.map((data) => {
                  return (
                    <div className="solo-time">
                      <h3>{data.time}</h3>
                      <div>{data.car}</div>
                      <div>{data.model}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
