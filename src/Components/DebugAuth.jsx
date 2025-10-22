import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/userSlice';
import { openModal } from '../redux/uiSlice';
import './DebugAuth.css';

const DebugAuth = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '👨‍💼'
    }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const openLoginModal = () => {
    dispatch(openModal('login'));
  };

  return (
    <div className="debug-auth">
      <h3>Auth Debug Panel</h3>
      <div className="auth-status">
        Status: <span className={isAuthenticated ? 'status-authenticated' : 'status-anonymous'}>
          {isAuthenticated ? 'Authenticated' : 'Anonymous'}
        </span>
      </div>
      
      {isAuthenticated && user && (
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      )}

      <div className="auth-actions">
        <button onClick={handleLogin} className="btn btn-success">
          Quick Login
        </button>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
        <button onClick={openLoginModal} className="btn btn-primary">
          Open Login Modal
        </button>
      </div>
    </div>
  );
};

export default DebugAuth;