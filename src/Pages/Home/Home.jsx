import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import './Home.css'
import HomeService from './HomeService';
import WhyRoadjets from './WhyRoadjets';
import Knowus from './Knowus';
import afford from '../../assets/afford.png';

const Home = () => {
  return (
    <div className='home'>
      <div className="heading">
        <h1>
        <span className="icon-box">
          <BsFillLightningChargeFill id='lightning'/>
        </span>
        Welcome To India’s First Sustainable Intercity Carpooling Service.
        </h1>
        <h2 className='head2'>
        Connecting people to Unite.Heal.Inspire
        </h2>
        <p>Affordable,Safe,Simplified Travel Solutions</p>
      </div>
      <div className="home-btn signup-in">
          <button id='login-btn'>Book Ride</button>
        <button id='signup-btn' style={{background:"white", marginLeft:"10px"}}>View Pricing</button>
      </div>

      <div className="ourservices">
        <div className="head-serve">
          <div>
          <h1>Our Services</h1>
          <p> Choose your destination, time & get an instant confirmation from our customer support.</p>
          </div>
          <div>
            <button className='white-btn'>View All</button>
          </div>
        </div>
        <HomeService/>
      </div>


      <WhyRoadjets/>
      <Knowus/>

      <div className="afford">
        <div className="afford-img">
          <img src={afford}/>
        </div>
        <div className="big-btn">
        <button id='over-btn'>
          <button style={{width:"550px"}}>
          Affordability Redefined
          </button>
        </button>
        </div>
        
        <div className="afford-text">
          <h1>
          RoadJets combines affordability with unparalleled quality in every journey. Enjoy the best of both worlds, where affordability meets uncompromised safety,quality on every road with RoadJets
          </h1>
        </div>
        <div className="big-btn">
          <button>
          Book Now !!
          </button>
        </div>
      </div>

      <div className="faq">
        <div className="faq-child1">
          <div className="frequently">
          <svg xmlns="http://www.w3.org/2000/svg" width="450" height="260" viewBox="0 0 540 342" fill="none">
  <path d="M539.922 177.455C540.281 292.053 307.001 203.186 272.934 341.293C294.937 182.723 0.783425 293.746 0.423807 179.148C0.0641896 64.549 272.174 99.2944 271.864 0.294889C376.367 160.468 539.562 62.8561 539.922 177.455Z" fill="#FFF500" fill-opacity="0.82"/>
</svg>
<div className="in-frequently">
Frequently Asked <br/>Questions
</div>
          </div>
        <div className="square-box">

        </div>
        </div>
        <div className="faq-child2">
          
        </div>
      </div>
    </div>
  )
}

export default Home