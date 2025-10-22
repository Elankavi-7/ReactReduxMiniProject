import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeAllDropdowns, toggleServices } from '../redux/dropdownSlice';
import ProfileIcon from './ProfileIcon';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isServicesOpen } = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();
  const location = useLocation();
  const navbarRef = useRef(null);

  const services = [
    { name: 'Web Development', path: '/services/web', icon: '💻' },
    { name: 'Mobile Apps', path: '/services/mobile', icon: '📱' },
    { name: 'UI/UX Design', path: '/services/design', icon: '🎨' },
    
  ];

  const handleServicesToggle = () => {
    dispatch(toggleServices());
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      dispatch(closeAllDropdowns());
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(closeAllDropdowns());
    setIsMobileMenuOpen(false);
  }, [location, dispatch]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => dispatch(closeAllDropdowns())}>
          <span className="logo-icon">🚀</span>
          MyApp
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${isServicesOpen ? 'active' : ''}`}
              onClick={handleServicesToggle}
            >
              Services
              <span className={`arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
            </button>
            
            {isServicesOpen && (
              <div className="dropdown-menu">
                {services.map((service, index) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="dropdown-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-actions">
          <ProfileIcon />
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;