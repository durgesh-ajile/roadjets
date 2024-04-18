import React from "react";
import "./About.css";
import crown from "../../assets/crown.fill.svg";
import medal from "../../assets/medal.fill.svg";
import mask from "../../assets/theatermasks.fill.svg";
import bolt from "../../assets/bolt.shield.fill.svg";

import backpack from "../../assets/backpack.fill.svg";
import book from "../../assets/book.closed.fill.svg";
import puzzle from "../../assets/puzzlepiece.fill.svg";
import light from "../../assets/light.beacon.max.fill.svg";

import star from "../../assets/Star 1.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-child1">
        <h1>About Roadjets</h1>
        <p>
          Welcome to RoadJets, where every journey is an experience. At
          RoadJets, we're more than just a transportation service; we're your
          trusted partner in seamless intercity travel. Our mission is to
          redefine the way you commute, providing not just a ride but a journey
          that's safe, affordable, and tailored to your needs.Founded on the
          principles of accountability, reliability, and innovation, RoadJets is
          committed to making intercity travel a hassle-free adventure. Join us
          on the road to a new era of transportation, where every trip is an
          opportunity to unite, inspire, and explore. Fasten your seatbelt, and
          let RoadJets take you places.
        </p>
      </div>
      <div className="achievements">
        <h1>Achievements</h1>
        <p>
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
        <div className="achive-all">
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={crown} />
              </span>
              <h2>Trusted by Thousands</h2>
              <p>
                We have successfully served 2500+ Roadriders since our initial
                launch, we kept on improving the service from the outstanding
                feedback of our roadriders
              </p>
            </div>
          </div>

          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={medal} />
              </span>
              <h2>Bootstrapping Success</h2>
              <p>
                We achieved these milestones operating on a bootsrapping model.
                showcasing our ability to make the most of available resources
              </p>
            </div>
          </div>
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={mask} />
              </span>
              <h2>Job Creation</h2>
              <p>
                We achieved these milestones operating on a bootsrapping model.
                showcasing our ability to make the most of available resources
              </p>
            </div>
          </div>
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={bolt} />
              </span>
              <h2>Industry Partnerships</h2>
              <p>
                We have established strong partnerships with industry leaders,
                enabling us to provide our roadriders with best service based
                innovation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="achievements" id="goals">
        <h1>Our Goals</h1>
        <p>
          RoadJets is driven by a commitment to redefine intercity travel,
          focusing on goals that prioritize customer satisfaction, operational
          excellence, and sustainable practices. Our vision encompasses
          expanding our services to new horizons, achieving operational
          efficiency, and consistently delivering a safe, reliable, and
          affordable travel experience. Join us on our journey as we strive to
          set new standards in the transportation industry, one road at a time.{" "}
        </p>
        <div className="achive-all">
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={backpack} />
              </span>
              <h2>One-Click One-Step </h2>
              <p>
                We aim to integrate multiple modes of transportation. without
                having to face difficulties.We are delighted to produce a end to
                end service for an affordable prices 3 times lower than the
                price of ola,uber{" "}
              </p>
            </div>
          </div>
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={book} />
              </span>
              <h2>Safety at it’s Root</h2>
              <p>
                Our mission is to redefine the way you commute, providing not
                just a ride but a journey that's safe, affordable, and tailored
                to your needs. Founded on the principles of accountability,
                reliability, and innovation{" "}
              </p>{" "}
            </div>
          </div>
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={puzzle} />
              </span>
              <h2>Sustainable Mission </h2>
              <p>
                We Aim to be the reduce the car-foot print & green house
                emissions by our E-Mobility fleet.{" "}
              </p>{" "}
            </div>
          </div>
          <div className="achive-model">
            <div className="achive-img">
              <span className="achive-icon">
                <img src={light} />
              </span>
              <h2>Customer Driven Innovation</h2>
              <p>
                We aim to work on customer centric appreoach .not only working
                on customer needs but also their desires.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="together">
        <div className="together-text">
          <h1>
            <span>Together</span>, let's shape the future of intercity travel{" "}
          </h1>
          <p>
            Join us on this exciting travel journey and let’s make change the
            way we travel intercity{" "}
          </p>
        </div>
        <div className="together-img">
          <img src={star} />
        </div>
        <Link to="/services?scrollTo=bookride-section">
          <button id="login-btn" style={{ padding: "10px" }}>
            Book Now
          </button>
        </Link>
      </div>
      <div className="about-us-details">
      <h2>Company Details</h2>
      <div className="detail">
        <h3>Company Name:</h3>
        <p>ROADJETS COMMUTE PRIVATE LIMITED</p>
      </div>
      <div className="detail">
        <h3>Address:</h3>
        <address>
        H NO 24-7-299/4/F/403, PRAGATHI NAGAR, R E
COLLEGE, Hanumakonda, Hanumakonda, Telangana,
506004
        </address>
      </div>
    </div>
    </div>
  );
};

export default About;
