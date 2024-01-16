import React from 'react';
import { SocialIcon } from 'react-social-icons'
import '../index.css';

const SocialsPill = () => {
  return (
    <div className="socialsContainer">
        <div className="socialsPill">
            <SocialIcon url="https://www.instagram.com/lars.mellick" target="_blank"/>
            <SocialIcon url="https://soundcloud.com/larsmellick" target="_blank"/>
            <SocialIcon url="https://linkedin.com/in/larsmellick" target="_blank"/>
            <SocialIcon url="mailto:hi@lars.au?subject=hi from website"/>
        </div>
    </div>
  );
};

export default SocialsPill;