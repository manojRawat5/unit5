import React from "react";
import "./Features.css";

const Features = () => (
  <section className="features-container">
    <div className="feature-card" id="feature-card1">
      <h3>Explore Destinations</h3>
      <p>Discover the best places to visit based on your interests.</p>
    </div>
    <div className="feature-card" id="feature-card2">
      <h3>Custom Itineraries</h3>
      <p>We provide personalized travel plans for every type of trip.</p>
    </div>
    <div className="feature-card" id="feature-card3">
      <h3>Book Instantly</h3>
      <p>Secure your accommodations and activities in just a few clicks.</p>
    </div>
  </section>
);

export default Features;
