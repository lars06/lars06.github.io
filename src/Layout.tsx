import React from 'react';
import './index.css';
import { Outlet, NavLink } from "react-router-dom";
import SocialsPill from './SocialsPill';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navContainer">
        <ul className="navItems">
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="/about">about me</NavLink></li>
          <li><NavLink to="/music">music</NavLink></li>
        </ul>
      </nav>
      <SocialsPill/>
      <Outlet/>
    </div>
  );
};

export default Layout;