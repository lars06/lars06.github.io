import React from 'react';
import './App.css';
import cliffs from './resources/background-images/cliffs.jpeg';
import stairs from './resources/background-images/stairs.jpeg';
import piano from './resources/background-images/piano.jpeg';
import watering from './resources/background-images/watering.jpeg';
import lonely from './resources/background-images/lonely.jpeg';
import bridge from './resources/background-images/bridge.jpeg';
import blanc from './resources/background-images/blanc.jpeg';
import jcm from './resources/background-images/jcm.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="lars">
          lars
        </h1>
        <ul>
          <li><img src={cliffs} className="small-landscape-img" alt="Cliffs"/></li>
          <li><img src={stairs} className="large-landscape-img" alt="Stairs"/></li>
          <li><img src={piano} className="large-portrait-img" alt="Piano"/></li>
          <li><img src={watering} className="large-landscape-img" alt="Watering"/></li>
          <li><img src={lonely} className="large-landscape-img" alt="Lonely"/></li>
          <li><img src={bridge} className="small-landscape-img" alt="Bridge"/></li>
          <li><img src={jcm} className="small-landscape-img" alt="Musicians"/></li>
          <li><img src={blanc} className="large-landscape-img" alt="Mont Blanc"/></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
