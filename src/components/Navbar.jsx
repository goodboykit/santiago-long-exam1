import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTshirt, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/nubdexchange_logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/section/uniforms"><FaTshirt /> Uniforms</Link></li>
        <li><Link to="/section/school-merch"><FaShoppingBag /> School Merch</Link></li>
        <li><Link to="/cart"><FaShoppingCart /> Cart</Link></li>
        <li><Link to="/profile"><FaUser /> Profile</Link></li>
      </ul>
      <div className="auth-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
