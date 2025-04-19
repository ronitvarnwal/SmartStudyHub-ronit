import React from 'react';
import './Navbar.css';
import Logo from '../logo.svg';

const App = () => {
  return (
    <div>
      <nav>
        <img className="logo"src={Logo} alt="Logo" />
      </nav>
    </div>
  );
};

export default App;