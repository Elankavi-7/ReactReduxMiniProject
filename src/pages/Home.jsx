import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">MyApp</span>
            </h1>
            <p className="hero-description">
              We create amazing digital experiences that help businesses grow and succeed in the modern world.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">💻</div>
            <div className="floating-card card-2">📱</div>
            <div className="floating-card card-3">🎨</div>
            <div className="hero-graphic">
              <div className="graphic-circle"></div>
              <div className="graphic-wave"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We deliver exceptional results with cutting-edge technology</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Lightning-fast applications optimized for speed and efficiency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision</h3>
              <p>Pixel-perfect designs with attention to every detail.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security to protect your data and users.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Scalable</h3>
              <p>Solutions that grow with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;