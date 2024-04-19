// GoogleMap.js
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./GoogleMap.css";
import { useRef } from "react";
import axios from "axios";
import mapimage from "../../assets/booknow.png"

const MapContainer = () => {
  const windowWidth = useRef(window.innerWidth);

  console.log(windowWidth.current < 651);

  const mapStyles = {
    height: "50vh",
    width: "50%",
  };

  const mapStylesMobile = {
    height: "40vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [pickUp, setPickUp] = useState("");
  const [drop, setDrop] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      try {
        const response = await axios({
          method: "post",
          url: "https://seal-app-aximy.ondigitalocean.app/api/get-whatapplink",
          data: {
            toPhone: "+918320911933",
            message: `Hi! I want to request a ride from ${pickUp} to ${drop}. let me know for further info`,
          },
        });

        // Open the WhatsApp link in a new window
        window.open(response.data.link, "_self");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mapcontainer">
      <img src={mapimage} width="300" height="300" />
      <div className="requestdiv">
        <input
          className="pickupinput"
          placeholder="Enter Pickup Location"
          onChange={(e) => {
            setPickUp(e.target.value);
          }}
        />
        {/* <img
          width="24"
          height="24"
          src="https://img.icons8.com/windows/32/000000/gps-device.png"
          alt="gps-device"
          className="mapicon"
          // onClick={handleGetCurrentLocation}
          style={{ cursor: 'pointer' }}
        /> */}
        <img
          className="circleicon"
          width="12"
          height="12"
          src="https://img.icons8.com/ios/50/circled.png"
          alt="circled"
        />
        <img
          className="squareicon"
          width="12"
          height="12"
          src="https://img.icons8.com/ios/50/rounded-square.png"
          alt="rounded-square"
        />
        <input
          className="destinationinput"
          placeholder="Enter Destination Location"
          onChange={(e) => {
            setDrop(e.target.value);
          }}
        />
        <button
          className="requestnowbtn"
          onClick={(e) => {
            handleRequest(e);
          }}
        >
          Request Now
        </button>
      </div>
    </div>
  );
};

export default MapContainer;
