
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import LogoIcon from '../Images/logo.svg';
import MenuIcon from '../Images/menu.svg';
import TextLogo from '../Images/textlogo.svg';
import SearchIcon from '../Images/searchicon.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <>
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open': ''}`}>
  <div className="navbar-top">
    <Link to="/" style={{ cursor: 'default' }}>
    <div className={`logo-group ${isMenuOpen ? 'logo-edit' : ''}`}>
      <img className="logo" src={LogoIcon} alt="Logo" />
      <img className="textlogo" src={TextLogo} alt="TextLogo" />
    </div>
    </Link>
    <div className={`icon-group ${isMenuOpen ? 'icon-edit' : ''}`}>
      <Link to="/search">
      <img className="searchicon" src={SearchIcon} alt="Search" /></Link>
      <img className="menuicon" src={MenuIcon} alt="Menu" onClick={toggleMenu} />
    </div>
  </div>
  {isMenuOpen &&(
    <ul className="menu-content">
      <li><Link to="/" style={{textDecoration: 'none', color: '#525252'}}>Home</Link></li>
      <li><Link to="/blog" style={{textDecoration: 'none', color: '#525252'}}>Articles</Link></li>
      <li><Link to="/search" style={{textDecoration: 'none', color: '#525252'}}>Search</Link></li>
      <li><Link to="/" style={{textDecoration: 'none', color: '#525252'}}>About</Link></li>
    </ul>
  )}
</nav>
    </>
  );
};

export default Navbar;
