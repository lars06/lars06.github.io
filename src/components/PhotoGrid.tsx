import React from 'react';
import '../index.css';

import cliffs from '../background-images/cliffs.jpeg';
import stairs from '../background-images/stairs.jpeg';
import piano from '../background-images/piano.jpeg';
import watering from '../background-images/watering.jpeg';
import lonely from '../background-images/lonely.jpeg';
import bridge from '../background-images/bridge.jpeg';
import blanc from '../background-images/blanc.jpeg';
import sailor from '../background-images/sailor.gif';
import acappella from '../background-images/acappella.gif';
import bike from '../background-images/bike.jpeg';
import building from '../background-images/building.jpeg';
import crane from '../background-images/crane.jpeg';
import embrace from '../background-images/embrace.jpeg';
import lostweekend from '../background-images/lostweekend.gif';
import reflect from '../background-images/reflect.jpeg';
import smoko from '../background-images/smoko.jpeg';
import zoom from '../background-images/zoom.jpeg';
import clothes from '../background-images/clothes.jpeg';
import cloud from '../background-images/cloud.jpeg';
import drip from '../background-images/drip.jpeg';
import hike from '../background-images/hike.gif';
import graf from '../background-images/graf.jpeg';
import boat from '../background-images/boat.jpeg';
import lasr from '../background-images/lasr.gif';
import lake from '../background-images/lake.jpeg';

const PhotoGrid = () => {
  return (
    <div className="photos" id="homeGrid">
      <ul>
        <li><img src={sailor} className="small-portrait-img" alt="gif of lars driving boat"/></li>
        <li><img src={cloud} className="large-landscape-img" alt="image of clouds"/></li>
        <li><img src={stairs} className="small-landscape-img" alt="image of shadows on stairs"/></li>
        <li><img src={watering} className="large-landscape-img" alt="image of backyard"/></li>
        <li><img src={piano} className="large-portrait-img" alt="image of lars playing piano"/></li>
        <li><img src={bridge} className="small-landscape-img" alt="image of scottish hills"/></li>
        <li><img src={reflect} className="large-portrait-img" alt="image of reflection in lake"/></li>
        <li><img src={blanc} className="large-landscape-img" alt="image of mont blanc"/></li>
        <li><img src={lasr} className="small-portrait-img" alt="gif of lars as a dj"/></li>
        <li><img src={lonely} className="large-landscape-img" alt="image of someone in english cliffs"/></li>
        <li><img src={crane} className="small-landscape-img" alt="image of crane in blue sky"/></li>
        <li><img src={acappella} className="large-portrait-img" alt="gif of lars singing acappella"/></li>
        <li><img src={building} className="large-landscape-img" alt="image of brick building"/></li>
        <li><img src={bike} className="small-landscape-img" alt="image of bike rider"/></li>
        <li><img src={embrace} className="large-portrait-img" alt="blurred image of lars and friend"/></li>
        <li><img src={boat} className="small-portrait-img" alt="image of boat on austrian lake"/></li>
        <li><img src={lake} className="large-landscape-img" alt="image of german lake"/></li>
        <li><img src={cliffs} className="small-landscape-img" alt="image of english cliffs"/></li>
        <li><img src={lostweekend} className="small-portrait-img" alt="gif of lars playing piano"/></li>
        <li><img src={clothes} className="large-landscape-img" alt="image of clothes hanging"/></li>
        <li><img src={zoom} className="large-landscape-img" alt="image of scooter"/></li>
        <li><img src={graf} className="small-landscape-img" alt="image of street corner with graffiti"/></li>
        <li><img src={drip} className="large-portrait-img" alt="image of gorge water"/></li>
        <li><img src={smoko} className="small-landscape-img" alt="image of man in high vis"/></li>
        <li><img src={hike} className="large-portrait-img" alt="gif of german hike"/></li>
      </ul>
  </div>
  );
};

export default PhotoGrid;