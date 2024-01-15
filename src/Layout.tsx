import React from 'react';
import './index.css';
import { Outlet, Link } from "react-router-dom";
import SocialsPill from './SocialsPill';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navContainer">
        <ul className="navItems">
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about me</Link></li>
          <li><Link to="/music">music</Link></li>
        </ul>
      </nav>
      <SocialsPill/>
      <Outlet/>
    </div>
  );
};

export default Layout;