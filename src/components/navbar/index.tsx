import React from 'react';

import './navbar.scss';

export function NavBar() {
  return (
    <div id="navbar" className="navbar">
      <div className="logo">KJ</div>
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
