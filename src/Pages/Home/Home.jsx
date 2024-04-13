import { BsFillLightningChargeFill } from "react-icons/bs";
import "./Home.css";
import HomeService from "./HomeService";
import WhyRoadjets from "./WhyRoadjets";
import Knowus from "./Knowus";

import Faq from "../../Components/Faq/Faq.jsx";
import "../../Components/Faq/Faq.css";
import { Link } from "react-router-dom";

import Roadjetsfooter from "../../assets/Roadjetbanner.jpeg";
import wallet from "../../assets/wallet.png";
import RoadjetsBanner from "../../assets/mid journey .png";

const faqsData = [
  {
    id: 1,
    question: "Are toll charges included in the ticket price ?",
    answer: "Yes, absolutely. You won't need to pay an extra penny.",
  },
  {
    id: 2,
    question: "Are the cars equipped with required safety standards ?",
    answer:
      "Indeed. Our cars are specially designed for intercity travel, featuring additional airbags, ABS, charging points, and other safety measures.",
  },
  {
    id: 3,
    question: "How does the buffer period work ?",
    answer:
      "The buffer period, one hour before the ride, allows you to book tickets, but it doesn't confirm home picking or a ride. If canceled, your money is promptly refunded.",
  },
  {
    id: 4,
    question: "In how many days can I expect the refund ?",
    answer: "You'll receive your refund within 1-2 working days.",
  },
  {
    id: 5,
    question: "What if the ride is canceled from RoadJets' end ?",
    answer:
      "We not only refund your money but also provide an exclusive free ride as compensation.",
  },
  {
    id: 6,
    question: "When will the free ride expire ?",
    answer: "The free ride is valid for 3 months from the day of cancellation.",
  },
  {
    id: 7,
    question: "Is it a complete doorstep service ?",
    answer:
      "Doorstep services are currently available only in Tier 2 cities, with plans to extend to Tier 1 cities. Stay tuned for our upcoming launch!",
  },
  {
    id: 8,
    question: "Is the money refundable if I cancel the ride ?",
    answer:
      "Yes, the money is refundable if canceled at least 2 hour prior to the departure time.",
  },
  {
    id: 9,
    question: "Can the ticket price be negotiated or reduced ?",
    answer:
      "We ensure our ticket costs are affordable, so negotiations are not applicable. However, we offer customized plans to suit your needs.",
  },
  // Add more FAQs as needed
];

const Home = () => {
  //  const handleBookRide = async (e) => {
  //   e.preventDefault();
  //   try {

  //   } catch (error) {

  //   }
  //  }
  return (
    <div className="home">
      <div className="heading">
        <h1>
          <span className="icon-box">
            <BsFillLightningChargeFill id="lightning" />
          </span>
          Welcome To India’s Most Reliable Intercity Travel Partner.
        </h1>
        <h2 className="head2">Connecting people & Uniting Hearts In The Most Reliable Way Possible</h2>
        {/* <p>Affordable,Safe,Simplified Travel Solutions</p> */}
        <div className="home-btn signup-in">
        <Link to="/services?scrollTo=navbar">
          <button id="login-btn">Book Now</button>
        </Link>
      </div>
      </div>
      <div className="roadjetbanner">
        <img src={RoadjetsBanner}></img>
      </div>
      

      <div className="ourservices">
        <div className="head-serve">
          <div>
            <h1>Our Services</h1>
            <p>
              Choose your destination, time & get an instant confirmation from
              our customer support.
            </p>
          </div>
          <div>
            <Link to="/services?scrollTo=navbar">
              <button className="white-btn">View All</button>
            </Link>
          </div>
        </div>
        <HomeService />
      </div>

      <WhyRoadjets />
      <Knowus />

      <div className="afford">
        <div className="afford-img">
          <img src={wallet} />
        </div>
        <div className="big-btn">
          <button id="over-btn">
            <button id="afford-btn">Affordability Redefined</button>
          </button>
        </div>

        <div className="afford-text">
          <h1>
            RoadJets combines affordability with unparalleled quality in every
            journey. Enjoy the best of both worlds, where affordability meets
            uncompromised safety,quality on every road with RoadJets
          </h1>
        </div>
        <Link to="/services?scrollTo=navbar"> 
          <div className="big-btn">
            <button style={{ cursor: "pointer" }}>Book Now !!</button>
          </div>
        </Link>
      </div>

      <div className="faq">
        <div className="faq-child1">
          <div className="frequently">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="380"
              height="240"
              viewBox="0 0 540 342"
              fill="none"
            >
              <path
                d="M539.922 177.455C540.281 292.053 307.001 203.186 272.934 341.293C294.937 182.723 0.783425 293.746 0.423807 179.148C0.0641896 64.549 272.174 99.2944 271.864 0.294889C376.367 160.468 539.562 62.8561 539.922 177.455Z"
                fill="#FFF500"
                fill-opacity="0.82"
              />
            </svg>
            <div className="in-frequently">
              Frequently Asked <br />
              Questions
            </div>
          </div>
          <div className="square-box">
            <img src={Roadjetsfooter} />
          </div>
        </div>
        <div className="faq-child2">
          <div className="faq-list">
            {faqsData.map((faq) => (
              <Faq key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
