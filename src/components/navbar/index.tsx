import React from 'react';
import Logo from '../logo';

import './navbar.scss';

// TODO: add hamburger menu to navbar
// Everything fits on mobile so this is low priority

export function NavBar() {
  return (
    <div id="navbar" className="navbar">
      <a href="/">
        <Logo color="#747bff" className="navbar-logo-main" />
      </a>
      <div className="nav-menu">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
