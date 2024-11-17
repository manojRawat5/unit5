import React from "react";
import "./Testimonials.css";

const Testimonials = () => (
  <section className="testimonial-container">
    <h2>What Our Travelers Say</h2>
    <div className="testimonial-cards">
      <div className="testimonial">
        <p>"Amazing experience! The trip was perfectly planned!"</p>
        <h4>- Sarah J.</h4>
      </div>
      <div className="testimonial">
        <p>"The itinerary was just what we needed. Loved the trip!"</p>
        <h4>- John D.</h4>
      </div>
      <div className="testimonial">
        <p>"I’ll definitely use this planner again for my next trip!"</p>
        <h4>- Emily T.</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
