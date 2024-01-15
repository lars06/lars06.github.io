import React from 'react';
import './App.css';
import NavBar from './NavBar';
import PhotoGrid from './PhotoGrid';
import SocialsPill from './SocialsPill';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="title">
          <h1 id="lars">
            lars
          </h1>
      </div>
      <PhotoGrid/>
      <SocialsPill/>
    </div>
  );
}

export default App;
