import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="company-name">Quila</span>
      </div>
      <div className="navbar-links">
        {isHomePage ? (
          <>
            <Link to="/about">About us</Link>
            <Link to="/faqs">FAQs</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/faqs">FAQs</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        <a href="https://wa.me/yourwhatsappnumber" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" /> Whatsapp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;