// GoogleMap.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./GoogleMap.css";
import { useRef } from 'react';

const MapContainer = () => {

  const windowWidth = useRef(window.innerWidth);

console.log(windowWidth.current < 651)

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

  return (
    <div className="mapcontainer">
      <LoadScript googleMapsApiKey="AIzaSyBVVJ911DUtETpVPMCWFZxmsnZoM6mJCzk">
        <GoogleMap
          mapContainerStyle={windowWidth.current > 651 ? mapStyles : mapStylesMobile}
          zoom={13}
          center={defaultCenter}
        >
          {/* Add markers or other components as needed */}
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
      <div className="requestdiv">
        <input className="pickupinput" placeholder="Enter Pickup Location" />
        {/* <img
          width="24"
          height="24"
          src="https://img.icons8.com/windows/32/000000/gps-device.png"
          alt="gps-device"
          className="mapicon"
          // onClick={handleGetCurrentLocation}
          style={{ cursor: 'pointer' }}
        /> */}
        <img className="circleicon" width="12" height="12" src="https://img.icons8.com/ios/50/circled.png" alt="circled"/>
        <img className="squareicon" width="12" height="12" src="https://img.icons8.com/ios/50/rounded-square.png" alt="rounded-square"/>
        <input className="destinationinput" placeholder="Enter Destination Location" />
        <button className="requestnowbtn">Request Now</button>
      </div>
    </div>
  );
};

export default MapContainer;
