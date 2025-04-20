
import React, { useState, useEffect } from 'react';
import './Navbar.css';

import LogoIcon from '../logo.svg';
import MenuIcon from '../menu.svg';
import TextLogo from '../textlogo.svg';
import SearchIcon from '../searchicon.svg';
import NightIcon from '../night-icon.svg';

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-group">
        <img className="logo" src={LogoIcon} alt="Logo" />
        <img className="textlogo" src={TextLogo} alt="TextLogo" />
      </div>
      <div className="icon-group">
        <img className="searchicon" src={SearchIcon} alt="Search" />
        <img className="nighticon" src={NightIcon} alt="Night Mode" />
        <img className="menuicon" src={MenuIcon} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
