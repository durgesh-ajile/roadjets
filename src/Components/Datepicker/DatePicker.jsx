import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './DatePicker.css'

export default function Datepicker({bookDate, setBookDate}) {

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 4 && day !== 3 && day !== 2;
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