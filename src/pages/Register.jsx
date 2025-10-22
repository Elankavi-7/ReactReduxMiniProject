import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Simulate registration
    dispatch(setUser({
      id: 1,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email
    }));

    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <Link to="/" className="back-home">
              ← Back to Home
            </Link>
            <h1>Create Account</h1>
            <p>Join us today and get started</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
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

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                minLength="6"
              />
              <small className="password-hint">
                Must be at least 6 characters long
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Create Account
            </button>
          </form>

          <div className="register-footer">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>

          <div className="auth-divider">
            <span>or sign up with</span>
          </div>

          <div className="social-auth">
            <button className="social-btn google-btn">
              <span className="social-icon">🔍</span>
              Google
            </button>
            <button className="social-btn github-btn">
              <span className="social-icon">🐱</span>
              GitHub
            </button>
          </div>
        </div>

        <div className="register-hero">
          <div className="hero-content">
            <h2>Welcome to MyApp</h2>
            <p>Join thousands of satisfied users who trust us with their digital solutions.</p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>Fast & Reliable</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <span>Secure & Safe</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💎</span>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;