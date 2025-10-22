import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">🚀</span>
                MyApp
              </div>
              <p className="footer-description">
                Building amazing digital experiences with modern technology and innovative solutions.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">🐱</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/web" className="footer-link">Web Development</Link></li>
              <li><Link to="/services/mobile" className="footer-link">Mobile Apps</Link></li>
              <li><Link to="/services/design" className="footer-link">UI/UX Design</Link></li>
              <li><Link to="/services/consulting" className="footer-link">Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contact@myapp.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 MyApp. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;