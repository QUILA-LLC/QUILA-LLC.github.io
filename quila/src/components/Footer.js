import React from 'react';
import '../assets/styles/Footer.css';
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com',
    icon: <FaInstagram />,
    label: 'Instagram',
  },
  {
    href: 'https://www.twitter.com',
    icon: <FaTwitter />,
    label: 'Twitter',
  },
  {
    href: 'https://www.facebook.com',
    icon: <FaFacebookSquare />,
    label: 'Facebook',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-input-section">
        <h2>Be the first to know</h2>
        <div className="footer-input">
          <div className="input-wrapper">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <input type="email" placeholder="Your email address" aria-label="Email address" />
          </div>
          <button>Get early access</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
        <div className="footer-right">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;