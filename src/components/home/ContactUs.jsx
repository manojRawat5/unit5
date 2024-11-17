import React from "react";
import "./ContactUS.css"; // Import your custom CSS file

const ContactContainer = () => {
  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or inquiries!</p>
      <form className="contact-form" action="https://formspree.io/f/mrgvrykq"
            method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default ContactContainer;
