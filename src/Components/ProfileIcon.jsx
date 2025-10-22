import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import { openModal } from '../redux/uiSlice';
import './ProfileIcon.css';

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const handleLoginClick = () => {
    dispatch(openModal('login'));
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    setIsOpen(false);
  };

  return (
    <div className="profile-icon" ref={dropdownRef}>
      <button 
        className="profile-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="avatar">
          {isAuthenticated && user ? (
            user.name?.charAt(0).toUpperCase() || 'U'
          ) : (
            '👤'
          )}
        </div>
      </button>

      {isOpen && (
        <div className="profile-dropdown">
          {isAuthenticated ? (
            <>
              <div className="profile-info">
                <p className="profile-name">{user?.name || 'User'}</p>
                <p className="profile-email">{user?.email || 'user@example.com'}</p>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Settings</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="dropdown-item" onClick={handleLoginClick}>
                Login
              </button>
              <button className="dropdown-item">Register</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;