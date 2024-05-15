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
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import booknow from "../../assets/arrows.png";

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

const data = [
  {
    id: 1,
    title: "Hyderabad(Rai-Durg Metero) - Warangal",
    text: "Our route begins at Rai-Durg Metero, meandering through the ORR for a comfortable 3 hours and 30 minutes. Our dedicated pilots ensure a seamless and secure ride. For a personalized experience, kindly share your travel details in advance. Currently, doorstep services are available exclusively in Warangal. Your ticket cost covers all tall charges. Residents of Gachibowli, Madhapur, Raidurg, Hitech City, Kondapur Miyapur will find this route especially convenient. Trust Roadjets for a reliable and enjoyable travel experience.",
    location: "Hyderabad(Rai-Durg Metero) - Warangal - Timings:",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR-3h: 30 min - A/C - Female Preference",
    img1: warangal1,
    img2: warangal2,
    code: "GBC-WGL"
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
    code: "UPL-WGL"
  },
  {
    id: 3,
    title: "Hyderabad  Karimnagar",
    text: "Our route commences from offering a pleasant 2 hours and 30 minutes ride. Our dedicated pilots ensure a smooth experience throughout, Please share your personalized travel details in advance for a tailored service. Currently, doorstep services are exclusively available in Warangal. Your ticket cost covers all toll charges. Travelers from Secunderabad, Uppal Ameerpet, ramanthpur will find this route particularly advantageous. Trust RoadJets for a reliable and streamlined travel experience.",
    location: "Hyderabad(Rai-Durg Metero) - Karimnagar - Timings :",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "KNR",
    shortDescription: "Via SH 01 -3h: 30 min - A/C - Female Preference",
    img1: warangal1,
    img2: Karimnagar,
    code: "GBC-KNR"
  },
  {
    id: 4,
    title: "Hyderabad  Kammam",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from Rai-Durg Metero & taken through ORR which takes around 3hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from gachibowli,madhapur,raidurg,hitech-city,kondapur,miyapur will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad(Rai-Durg Metero) - Kammam - Timings :",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR 3h:00 min A/C",
    img1: warangal1,
    img2: Kammar,
    code: "KMM-WGL"
  },
];
const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState('')

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
        url: "https://seal-app-aximy.ondigitalocean.app/api/get-whatapplink",
        data: {
          toPhone: "+918320911933",
          message: `Hii! I want to book a ride from ${finalLocation} ${preference}`,
        },
      });

      // Open the WhatsApp link in a new window
      window.open(response.data.link, "_self");
    } catch (error) {
      console.log(error);
    }
    console.log("clicked")

  };

  const getBookingData = async () => {
    try {
      let Sdata = await axios({
        method: "get",
        url: "https://seal-app-aximy.ondigitalocean.app/api/getBookingService"
      })
      setServiceData(Sdata.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBookingData()
  }, [])

  console.log(serviceData)

  return (serviceData ?
    <div className="services">
      {/* <div className="map">
        <MapContainer />
      </div> */}
      <div className="all-service" id="bookride-section">
      <div className="service-model" key={data[0].id} id={data[0].id}>
          <h2>{serviceData[0].title}</h2>
          <div className="directionArrow">
            <img src={booknow}></img>
          </div>
          <div className="service-book">
            <p>{serviceData[0].text}</p>
            <div>
              <button
                id="login-btn"
                onClick={(e) => {
                  // handleBook(e, data.location, data.shortDescription);
                  navigate(`/book?route=@${data[0].code}`)
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="service-img">
            <div className="img1">
              <img src={data[0].img1} />
            </div>
            <div className="img2">
              <img src={data[0].img2} />
            </div>
          </div>
          <div className="yellow">
            <div className="location">
              <span>{serviceData[0].shortFormStartLocation}</span>
              <span>{serviceData[0].shortFormEndLocation}</span>
            </div>
            <div className="time">{serviceData[0].shortDescription}</div>
          </div>
          {/* <div className="yellow2">{serviceData[0].title} - Timings: </div>
          <div className="time-box" >
            {serviceData[0].pickUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
          <div className="yellow2" style={{ margin: "0" }}>{serviceData[0].returnRoute}  - Timings: </div>
          <div className="time-box">
            {serviceData[0].dropUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div> */}
        </div>
        {/* <div className="service-model" key={data[1].id} id={data[1].id}>
          <h2>{serviceData[1].title}</h2>
          <div className="directionArrow">
            <img src={booknow}></img>
          </div>
          <div className="service-book">
            <p>{serviceData[1].text}</p>
            <div>
              <button
                id="login-btn"
                onClick={(e) => {
                  // handleBook(e, data.location, data.shortDescription);
                  navigate(`/book?route=@${data[1].code}`)
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="service-img">
            <div className="img1">
              <img src={data[1].img1} />
            </div>
            <div className="img2">
              <img src={data[1].img2} />
            </div>
          </div>
          <div className="yellow">
            <div className="location">
              <span>{serviceData[1].shortFormStartLocation}</span>
              <span>{serviceData[1].shortFormEndLocation}</span>
            </div>
            <div className="time">{serviceData[1].shortDescription}</div>
          </div>
          <div className="yellow2">{serviceData[1].title} - Timings: </div>
          <div className="time-box" >
            {serviceData[1].pickUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
          <div className="yellow2" style={{ margin: "0" }}>{serviceData[1].returnRoute} - Timings: </div>
          <div className="time-box">
            {serviceData[1].dropUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="service-model" key={data[2].id} id={data[2].id}>
          <h2>{serviceData[2].title}</h2>
          <div className="directionArrow">
            <img src={booknow}></img>
          </div>
          <div className="service-book">
            <p>{serviceData[2].text}</p>
            <div>
              <button
                id="login-btn"
                onClick={(e) => {
                  // handleBook(e, data.location, data.shortDescription);
                  navigate(`/book?route=@${data[2].code}`)
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="service-img">
            <div className="img1">
              <img src={data[2].img1} />
            </div>
            <div className="img2">
              <img src={data[2].img2} />
            </div>
          </div>
          <div className="yellow">
            <div className="location">
              <span>{serviceData[2].shortFormStartLocation}</span>
              <span>{serviceData[2].shortFormEndLocation}</span>
            </div>
            <div className="time">{serviceData[2].shortDescription}</div>
          </div>
          <div className="yellow2">{serviceData[2].title} - Timings: </div>
          <div className="time-box" >
            {serviceData[2].pickUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
          <div className="yellow2" style={{ margin: "0" }}>{serviceData[2].returnRoute} - Timings: </div>
          <div className="time-box">
            {serviceData[2].dropUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
        </div>
        <div className="service-model" key={data[3].id} id={data[3].id}>
          <h2>{serviceData[3].title}</h2>
          <div className="directionArrow">
            <img src={booknow}></img>
          </div>
          <div className="service-book">
            <p>{serviceData[3].text}</p>
            <div>
              <button
                id="login-btn"
                onClick={(e) => {
                  // handleBook(e, data.location, data.shortDescription);
                  navigate(`/book?route=@${data[3].code}`)
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="service-img">
            <div className="img1">
              <img src={data[3].img1} />
            </div>
            <div className="img2">
              <img src={data[3].img2} />
            </div>
          </div>
          <div className="yellow">
            <div className="location">
              <span>{serviceData[3].shortFormStartLocation}</span>
              <span>{serviceData[3].shortFormEndLocation}</span>
            </div>
            <div className="time">{serviceData[3].shortDescription}</div>
          </div>
          <div className="yellow2">{serviceData[3].title} - Timings: </div>
          <div className="time-box" >
            {serviceData[3].pickUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
          <div className="yellow2" style={{ margin: "0" }}>{serviceData[3].returnRoute} - Timings: </div>
          <div className="time-box">
            {serviceData[3].dropUpTiming.map((data) => {
              return (
                <div className="solo-time">
                  <h3>{data.time}</h3>
                  <div>{data.car}</div>
                  <div>{data.model}</div>
                  <div>{data.review} ({data.rating}🌟)</div>
                </div>
              );
            })}

          </div>
        </div> */}
      </div>
    </div> : null
  );
};

export default Services;
