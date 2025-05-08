import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import TextLogo from '../textlogo.svg'
import './Footer.css';


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-branding">
          <div>
          <img className="footer-logo" src={Logo} alt="Logo" />
          <img className="footer-textlogo" src={TextLogo} alt="TextLogo" />
          </div>
          <p>Your comprehensive resource for optimizing learning techniques, improving study habits, and maximizing academic potential through smarter approaches.</p>
        </div>
      <div className="footer-links">
        <h2>Navigation</h2>
        <ul>
          <Link to="/" style={{textDecoration: 'none', color: '#383838'}}><li>Home</li></Link>
          <Link to="/blog" style={{textDecoration: 'none', color: '#383838'}}><li>Articles</li></Link>
          <Link to="/" style={{textDecoration: 'none', color: '#383838'}}><li>About</li></Link>
          <Link to="/" style={{textDecoration: 'none', color: '#383838'}}><li>Contact</li></Link>
        </ul>
      </div>
        <div className="footer-links">
        <h2>Popular Topics</h2>
        <ul>
          <li>Study Techniques</li>
          <li>Time Management</li>
          <li>Note-Taking</li>
          <li>Digital Tools</li>
        </ul>
      </div>
        <div className="footer-links">
        <h2>Legal</h2>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Accessibility</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;