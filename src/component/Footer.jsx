import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Product Categories</h4>
          <ul>
            <li>Dehydrated Onions</li>
            <li>Dehydrated Garlic</li>
            <li>Spices</li>
            <li>Seasonal Vegetables</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Information</h4>
          <p>123 Food Lane, Flavor Town, USA</p>
          <p>Email: info@expoworld.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ExpoWorld. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
