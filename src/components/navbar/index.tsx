import React from 'react';
import logo from '../../assets/kj-logo.svg';

import './navbar.scss';

export function NavBar() {
  return (
    <div id="navbar" className="navbar">
      <a href="/">
        <img className="logo" src={logo} alt="KJ Logo" />
      </a>
      <div className="nav-menu">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Portfolio
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
