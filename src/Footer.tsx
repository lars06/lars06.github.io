import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div>
        <div className="socials">
            <SocialIcon url="https://www.instagram.com/lars.mellick"/>
            <SocialIcon url="https://soundcloud.com/larsmellick"/>
            <SocialIcon url="https://linkedin.com/in/larsmellick"/>
        </div>
        <p className="disclaimer">© 2023 Lars Mellick</p>
    </div>
  );
};

export default Footer;