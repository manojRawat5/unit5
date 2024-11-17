import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Weekend Trip Planner</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Weekend Trip Planner. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
