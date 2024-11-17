import React from "react";
import './summary.css'; // Link to the CSS file

const Summary = () => {
  const cab = localStorage.getItem("cab") || 'Unknown';
  const hotel = localStorage.getItem("hotel") || 'Unknown';
  const location = localStorage.getItem("location") || 'Unknown';
  let startDate = localStorage.getItem("startDate") || 'Unknown';
  const a = startDate.split('00')
  startDate = a[0];
  let endDate = localStorage.getItem("endDate") || 'Unknown';
  const b = endDate.split('00')
  endDate = b[0]
  const array = JSON.parse(localStorage.getItem("tripData"));
  const description = array.description || 'Unknown';
  const tripName = array.tripName || 'Unknown';
  const NoOfTravelers = array.estimatedTravelers || 'Unknown';
  console.log(startDate,'middle',a)

  return (
    <div className="summary-container">
      <h1 className="summary-heading">Trip Summary</h1>
      <div className="summary-details">
        <div className="summary-item">
          <span className="label">Trip Name:</span> <span className="value">{tripName}</span>
        </div>
        <div className="summary-item">
          <span className="label">Cab Service:</span> <span className="value">{cab}</span>
        </div>
        <div className="summary-item">
          <span className="label">Hotel:</span> <span className="value">{hotel}</span>
        </div>
        <div className="summary-item">
          <span className="label">Location:</span> <span className="value">{location}</span>
        </div>
        <div className="summary-item">
          <span className="label">Start Date:</span> <span className="value">{startDate}</span>
        </div>
        <div className="summary-item">
          <span className="label">End Date:</span> <span className="value">{endDate}</span>
        </div>
        <div className="summary-item">
          <span className="label">Description:</span> <span className="value">{description}</span>
        </div>
        <div className="summary-item">
          <span className="label">Number of Travelers:</span> <span className="value">{NoOfTravelers}</span>
        </div>
      </div>
      <button onClick={()=>window.location.href='/'}>Back to Home page</button>
    </div>
  );
};

export default Summary;
