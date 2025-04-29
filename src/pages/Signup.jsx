// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/nubdexchange_logo.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    course: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Store user info in localStorage
    const userInfo = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      studentId: formData.studentId,
      course: formData.course,
      joined: 'April 30, 2025'
    };
    
    localStorage.setItem('nuUser', JSON.stringify(userInfo));
    
    alert(`Account created for ${formData.firstName} ${formData.lastName}`);
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="form-container signup-form">
        <div className="form-logo">
          <img src={logo} alt="NU Bulldogz Exchange" />
          <h2>NU Bulldogz Exchange</h2>
        </div>

        <h1>Create Your Account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="studentId">Student ID</label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                placeholder="Enter student ID"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Course/Program</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select your course</option>
                <option value="BSIT">BS Information Technology</option>
                <option value="BSCS">BS Computer Science</option>
                <option value="BSN">BS Nursing</option>
                <option value="BSBA">BS Business Administration</option>
                <option value="BSHRM">BS Hotel & Restaurant Management</option>
                <option value="BSEd">BS Education</option>
                <option value="BSA">BS Accountancy</option>
                <option value="BSCrim">BS Criminology</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          
          <button type="submit" className="auth-button">Create Account</button>
        </form>
        
        <div className="form-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
      
      <div className="auth-banner">
        <div className="auth-overlay">
          <h2>Join the NU Bulldogz Exchange</h2>
          <p>Get access to exclusive NU merchandise and uniforms</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;