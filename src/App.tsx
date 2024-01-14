import React from 'react';
import './App.css';
import NavBar from './NavBar';
import PhotoGrid from './PhotoGrid';

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
      <p className="disclaimer">© 2023 Lars Mellick</p>
    </div>
  );
}

export default App;
