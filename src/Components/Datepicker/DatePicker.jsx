import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './DatePicker.css'

export default function Datepicker({bookDate, setBookDate, location}) {

  const isWeekday = (date) => {
    const day = date.getDay();
    if(location === "MD(Rai-Durg Metero)-WGL"){
      return day !== 0 && day !== 1 && day !== 4 && day !== 3 && day !== 2;
    } else if(location === "WGL-MD(Rai-Durg Metero)"){
      return day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6;
    }
  };

  return (
    <div className="date-pick">
      <DatePicker 
      selected={bookDate} 
      onChange={(date) => setBookDate(date)} 
    //   dateFormat="D/M/YYYY"
    filterDate={isWeekday}
      />
    </div>
  );
}