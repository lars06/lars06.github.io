import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'

const SocialPill = () => {
  return (
    <div className="socials">
        <div className="pill">
            <SocialIcon url="https://www.instagram.com/lars.mellick"/>
            <SocialIcon url="https://soundcloud.com/larsmellick"/>
            <SocialIcon url="https://linkedin.com/in/larsmellick"/>
            <SocialIcon url="mailto:larsmellick@me.com?subject=Hi"/>
        </div>
    </div>
  );
};

export default SocialPill;