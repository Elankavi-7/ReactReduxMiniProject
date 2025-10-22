import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { closeModal } from '../redux/uiSlice';
import './LoginPopup.css';

const LoginPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      dispatch(setUser({
        id: 1,
        name: 'John Doe',
        email: formData.email
      }));
    } else {
      // Register logic
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      dispatch(setUser({
        id: 1,
        name: formData.name,
        email: formData.email
      }));
    }
    
    dispatch(closeModal());
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="modal-overlay">
      <div className="login-popup">
        <button 
          className="close-btn"
          onClick={() => dispatch(closeModal())}
        >
          ×
        </button>
        
        <div className="popup-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to your account' : 'Join us today'}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button type="submit" className="btn btn-primary btn-full">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="popup-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="switch-mode-btn" onClick={switchMode}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <div className="auth-divider">
          <span>or continue with</span>
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
    </div>
  );
};

export default LoginPopup;