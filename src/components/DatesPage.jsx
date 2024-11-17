import React, { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // RSuite styles
import "./DatePage.css";

function DatePage({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false); // Track if the calendar is open

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    if (!startDate || !endDate) {
      alert("Please fill in both the start date and end date.");
    } else {
      window.location.href = '/tripDesc'
      onContinue();
    }
  };

  const handleCalendarOpen = () => {
    setCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };
  localStorage.setItem('startDate',startDate)
  localStorage.setItem('endDate',endDate)
  return (
    <div className="card">
      <div className="header">
        <img src="trips.svg" alt="Travel Icon" className="image" />
        <h2>Let's set up your trip!</h2>
        <p>What have you decided?</p>
      </div>

        <button
          className={`option ${selectedOption === "Dates" ? "selected" : ""}`}
          onClick={() => handleOptionSelect('Dates')}
        >
          Dates
        </button>


      {selectedOption === "Dates" && (
        <div className="date-selection">
          <h3>Dates</h3>
          <div className="date-inputs">
            <div>
              <label>Start date</label>
              <DatePicker
                value={startDate}
                onChange={(value) => setStartDate(value)}
                placeholder="Select start date"
                format="yyyy-MM-dd"
                style={{ width: 200 }}
                onOpen={handleCalendarOpen} // Trigger when calendar opens
                onClose={handleCalendarClose} // Trigger when calendar closes
              />
            </div>
            <div>
              <label>End date</label>
              <DatePicker
                value={endDate}
                onChange={(value) => setEndDate(value)}
                placeholder="Select end date"
                format="yyyy-MM-dd"
                style={{ width: 200 }}
                shouldDisableDate={(date) => date < startDate} // Use shouldDisableDate instead of disabledDate
                onOpen={handleCalendarOpen} // Trigger when calendar opens
                onClose={handleCalendarClose} // Trigger when calendar closes
              />
            </div>
          </div>
        </div>
      )}

      <button className="continue-button" onClick={handleContinueClick}>
        Continue
      </button>
    </div>
  );
}

export default DatePage;
