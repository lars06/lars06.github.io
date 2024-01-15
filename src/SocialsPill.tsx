import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'

const SocialsPill = () => {
  return (
    <div className="socialsContainer">
        <div className="socialsPill">
            <SocialIcon url="https://www.instagram.com/lars.mellick"/>
            <SocialIcon url="https://soundcloud.com/larsmellick"/>
            <SocialIcon url="https://linkedin.com/in/larsmellick"/>
            <SocialIcon url="mailto:larsmellick@me.com?subject=Hi"/>
        </div>
    </div>
  );
};

export default SocialsPill;