import React from 'react';
import './index.css';

import cliffs from './background-images/cliffs.jpeg';
import stairs from './background-images/stairs.jpeg';
import piano from './background-images/piano.jpeg';
import watering from './background-images/watering.jpeg';
import lonely from './background-images/lonely.jpeg';
import bridge from './background-images/bridge.jpeg';
import blanc from './background-images/blanc.jpeg';
import sailor from './background-images/sailor.gif';
import acappella from './background-images/acappella.gif';
import bike from './background-images/bike.jpeg';
import building from './background-images/building.jpeg';
import crane from './background-images/crane.jpeg';
import embrace from './background-images/embrace.jpeg';
import lostweekend from './background-images/lostweekend.gif';
import reflect from './background-images/reflect.jpeg';
import smoko from './background-images/smoko.jpeg';
import zoom from './background-images/zoom.jpeg';
import clothes from './background-images/clothes.jpeg';
import cloud from './background-images/cloud.jpeg';
import drip from './background-images/drip.jpeg';
import hike from './background-images/hike.gif';
import graf from './background-images/graf.jpeg';
import rolling from './background-images/rolling.jpeg';
import lasr from './background-images/lasr.gif';
import lake from './background-images/lake.jpeg';

const PhotoGrid = () => {
  return (
    <div className="photos">
      <ul>
        <li><img src={sailor} className="small-portrait-img" alt="Sailor"/></li>
        <li><img src={cloud} className="large-landscape-img" alt="Zoom"/></li>
        <li><img src={stairs} className="small-landscape-img" alt="Stairs"/></li>
        <li><img src={watering} className="large-landscape-img" alt="Watering"/></li>
        <li><img src={piano} className="large-portrait-img" alt="Piano"/></li>
        <li><img src={bridge} className="small-landscape-img" alt="Bridge"/></li>
        <li><img src={reflect} className="large-portrait-img" alt="Reflect"/></li>
        <li><img src={blanc} className="large-landscape-img" alt="Mont Blanc"/></li>
        <li><img src={lasr} className="small-portrait-img" alt="DJlasr"/></li>
        <li><img src={lonely} className="large-landscape-img" alt="Lonely"/></li>
        <li><img src={crane} className="small-landscape-img" alt="Crane"/></li>
        <li><img src={acappella} className="large-portrait-img" alt="Acappella"/></li>
        <li><img src={building} className="large-landscape-img" alt="Building"/></li>
        <li><img src={bike} className="small-landscape-img" alt="Bike"/></li>
        <li><img src={embrace} className="large-portrait-img" alt="Embrace"/></li>
        <li><img src={rolling} className="large-landscape-img" alt="Rolling"/></li>
        <li><img src={lake} className="large-portrait-img" alt="Lake"/></li>
        <li><img src={cliffs} className="small-landscape-img" alt="Cliffs"/></li>
        <li><img src={lostweekend} className="small-portrait-img" alt="Lostweekend"/></li>
        <li><img src={clothes} className="large-landscape-img" alt="Clothes"/></li>
        <li><img src={zoom} className="large-landscape-img" alt="Zoom"/></li>
        <li><img src={graf} className="small-landscape-img" alt="Graf"/></li>
        <li><img src={drip} className="large-portrait-img" alt="Drip"/></li>
        <li><img src={smoko} className="small-landscape-img" alt="Smoko"/></li>
        <li><img src={hike} className="large-portrait-img" alt="Hike"/></li>
      </ul>
  </div>
  );
};

export default PhotoGrid;