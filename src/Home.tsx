import React from 'react';
import './index.css';
import PhotoGrid from './PhotoGrid';
import SocialsPill from './SocialsPill';

function Home() {
  return (
    <div>
      <div className="title">
          <h1>
            lars
          </h1>
      </div>
      <PhotoGrid/>
      <SocialsPill/>
    </div>
  );
}

export default Home;
