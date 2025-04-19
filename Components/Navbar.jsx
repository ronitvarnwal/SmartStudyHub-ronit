import React from 'react';
import './Navbar.css';
import LogoIcon from '../logo.svg';
import MenuIcon from '../menu.svg';
import TextLogo from '../textlogo.svg'

const App = () => {
  return (
    <div>
     <nav>
         <img className="logo" src={LogoIcon} alt="Logo" />
         <img className="textlogo" src={TextLogo} alt="TextLogo" />
       <img className="menuicon"src={MenuIcon} alt="MenuIcon" />
      </nav>
    </div>
  );
};

export default App;