/* eslint-disable react/jsx-key */
import React from 'react'
import './Serices.css'
import warangal1 from '../../assets/Warangal.png'
import warangal2 from '../../assets/Warangal2.png'
import warangal3 from '../../assets/Warangal3.png'
import Karimnagar from '../../assets/Karimnagar.png'
import Kammar from '../../assets/Kammam.png'
import MapContainer from '../../Components/GoogleMap/GoogleMap'

const timeData = [{
    time: "5:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "6:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "9:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "11:00 AM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "2:30 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "5:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "6:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "9:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "10:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
},{
    time: "11:00 PM",
    car: "Tata Tigor EV",
    model: "4 seater - Sedan"
}]

const serviceData = [{
    title: "Hyderabad  Warangal",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from gachibowli circle & taken through ORR which takes around 3hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from gachibowli,madhapur,raidurg,hitech-city,kondapur,miyapur will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad(gachibowli circle) - Warangal - Timings:",
    img1: warangal1,
    img2: warangal2
},{
    title: "Hyderabad  Warangal",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from uppal X road NH163 & takes around 2 hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from secundrabad,uppal,ameerpet will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad (Uppal) - Warangal - Timings :",
    img1: warangal3,
    img2: warangal2
},{
    title: "Hyderabad  Karimnagar",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from gachibowli circle & taken through ORR which takes around 3hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from gachibowli,madhapur,raidurg,hitech-city,kondapur,miyapur will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad(gachibowli circle) - Warangal - Timings :",
    img1: warangal1,
    img2: Karimnagar
},{
    title: "Hyderabad  Kammam",
    text: " Enjoy the seamless,safe ride with roadjets. the route is started from gachibowli circle & taken through ORR which takes around 3hours 30 minutes. our pilots make sure the ride is well-served through out. let us know about your customised travel details prior. currently the door-step services are available at warangal only.the ticket cost includes the toll-charges. travelers from gachibowli,madhapur,raidurg,hitech-city,kondapur,miyapur will be benificial from this route.as this is a pooling service the time tables are strictly followed. we request the travelers to be prior.",
    location: "Hyderabad(gachibowli circle) - Warangal - Timings :",
    img1: warangal1,
    img2: Kammar
},]
const Services = () => {
  return (
    <div className='services'>
        <div className="map">
            <MapContainer />
        </div>
        <div className="all-service">
            {serviceData.map((data) => {
                return <div className="service-model">
                <h2>{data.title}</h2>
                <div className="service-book">
                    <p> 
                        {data.text}
                    </p>
                    <div>
                        <button id='login-btn'>
                            Book Now
                        </button>
                    </div>
                </div>
                <div className="service-img">
                    <div className="img1">
                        <img src={data.img1}/>
                    </div>
                    <div className="img2">
                        <img src={data.img2}/>
                    </div>
                </div>
                <div className="yellow">
                    <div className="location">
                        <span>
                            HYD
                        </span>
                        <span>
                            WGL
                        </span>
                    </div>
                    <div className="time">
                    Via ORR 3h:00 min A/C   
                    </div>
                </div>
                <div className="yellow2">
                {data.location}
                </div>
                <div className="time-box">
                    {timeData.map((data) => {
                    return <div className="solo-time">
                        <h3>{data.time}</h3>
                        <div>{data.car}</div>
                        <div>{data.model}</div>
                    </div>
                    })}
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default Services