// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-content">
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-info">
            <h4>Contact Information</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
