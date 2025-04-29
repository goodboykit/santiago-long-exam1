import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaTshirt, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/nubdexchange_logo.png';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const { cartCount } = useCart();
  
  // Check if user is logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('nuUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [location.pathname]); // Re-check when route changes
  
  const handleLogout = () => {
    localStorage.removeItem('nuUser');
    setUser(null);
    navigate('/login');
  };
  
  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bulldogs-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="NU Bulldogs Exchange" />
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" className={isActive('/') && !location.pathname.includes('section') ? 'active' : ''}>
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>
          
          <Link to="/section/uniforms" className={isActive('/section/uniforms') ? 'active' : ''}>
            <FaTshirt className="nav-icon" />
            <span>Uniforms</span>
          </Link>
          
          <Link to="/section/school-merch" className={isActive('/section/school-merch') ? 'active' : ''}>
            <FaShoppingBag className="nav-icon" />
            <span>School Merch</span>
          </Link>
          
          <Link to="/cart" className={isActive('/cart') ? 'active' : ''}>
            <div className="cart-icon-container">
              <FaShoppingCart className="nav-icon" />
              <span>Cart</span>
              {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
            </div>
          </Link>
          
          <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
            <FaUser className="nav-icon" />
            <span>Profile</span>
          </Link>
        </div>
        
        <div className="navbar-user">
          {user ? (
            <>
              <span className="user-greeting">Hi, {user.name.split(' ')[0]}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-link">Login</Link>
              <span className="auth-divider">|</span>
              <Link to="/signup" className="auth-link">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;