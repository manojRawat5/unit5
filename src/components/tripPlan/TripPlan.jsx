import React, { useState } from "react";
import ChooseLocation from "./ChooseLocation";
import ChooseHotel from "./ChooseHotel";
import ChooseCab from "./ChooseCab";
import "./tripPlan.css";

function TripPlan() {
  const [location, setLocation] = useState("");
  const [hotel, setHotel] = useState("");
  const [cab, setCab] = useState("");
  localStorage.setItem('location',location)
  localStorage.setItem('hotel',hotel)
  localStorage.setItem('cab',cab)
  function redec(){
    window.location.href = '/summary'
  }
  return (
    <div className="app">
      <h1>Trip Plan</h1>

      <ChooseLocation setLocation={setLocation} />

      {location && <ChooseHotel location={location} setHotel={setHotel} />}

      {hotel && <ChooseCab setCab={setCab} />}

      {location && hotel && cab && (
        <div className="summary">
          <h3>Trip Summary:</h3>
          <p>Location: {location}</p>
          <p>Hotel: {hotel}</p>
          <p>Cab: {cab}</p>
          <button onClick={redec}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default TripPlan;
