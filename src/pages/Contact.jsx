import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      details: 'contact@myapp.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Office',
      details: '123 Business St, City, State 12345',
      description: 'Come say hello at our office'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </section>

      <div className="contact-container">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-info">
                      <h3>{method.title}</h3>
                      <p className="method-details">{method.details}</p>
                      <p className="method-description">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Twitter">
                    <span className="social-icon">🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span className="social-icon">💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <span className="social-icon">🐱</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;