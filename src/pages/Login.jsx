// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/nubdexchange_logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    
    // Store user information in localStorage
    const userInfo = {
      name: email.split('@')[0], // Using email as name
      email: email,
      joined: 'April 30, 2025'
    };
    
    localStorage.setItem('nuUser', JSON.stringify(userInfo));
    
    // Simulate login success
    alert(`Welcome back, ${userInfo.name}!`);
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="form-container login-form">
        <div className="form-logo">
          <img src={logo} alt="NU Bulldogz Exchange" />
          <h2>NU Bulldogz Exchange</h2>
        </div>

        <h1>Login to Your Account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="auth-button">Login</button>
        </form>
        
        <div className="form-footer">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
      
      <div className="auth-banner">
        <div className="auth-overlay">
          <h2>Welcome to NU Bulldogz Exchange</h2>
          <p>The official store for National University Philippines merchandise</p>
        </div>
      </div>
    </div>
  );
};

export default Login;