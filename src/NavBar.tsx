import React from 'react';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navContainer">
      <ul className="navItems">
        <li><a href="/">home</a></li>
        <li><a href="/">about me</a></li>
        <li><a href="/">music</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;