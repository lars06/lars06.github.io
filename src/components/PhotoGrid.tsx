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
import edin from '../background-images/edin.jpeg';
import zoom from '../background-images/zoom.jpeg';
import bedroom from '../background-images/bedroom.jpeg';
import cloud from '../background-images/cloud.jpeg';
import drip from '../background-images/drip.jpeg';
import hike from '../background-images/hike.gif';
import graf from '../background-images/graf.jpeg';
import lisbon from '../background-images/lisbon.jpeg';
import lasr from '../background-images/lasr.gif';
import bird from '../background-images/bird.jpeg';

const PhotoGrid = () => {
  return (
    <div className="photos" id="homeGrid">
      <ul>
        <li><img src={sailor} className="small-portrait-img" alt="lars driving boat"/></li>
        <li><img src={cloud} className="large-landscape-img" alt="clouds"/></li>
        <li><img src={stairs} className="small-landscape-img" alt="shadows on stairs"/></li>
        <li><img src={watering} className="large-landscape-img" alt="backyard"/></li>
        <li><img src={piano} className="large-portrait-img" alt="lars playing piano"/></li>
        <li><img src={bridge} className="small-landscape-img" alt="scottish hills"/></li>
        <li><img src={reflect} className="large-portrait-img" alt="reflection in lake"/></li>
        <li><img src={blanc} className="large-landscape-img" alt="mont blanc"/></li>
        <li><img src={lasr} className="small-portrait-img" alt="lars as a dj"/></li>
        <li><img src={lonely} className="large-landscape-img" alt="someone in english cliffs"/></li>
        <li><img src={bedroom} className="small-landscape-img" alt="piano in bedroom"/></li>
        <li><img src={acappella} className="large-portrait-img" alt="lars singing acappella"/></li>
        <li><img src={building} className="large-landscape-img" alt="brick building"/></li>
        <li><img src={bike} className="small-landscape-img" alt="bike rider"/></li>
        <li><img src={embrace} className="large-portrait-img" alt="blurred lars and friend"/></li>
        <li><img src={lisbon} className="small-portrait-img" alt="lisbon streets"/></li>
        <li><img src={bird} className="large-landscape-img" alt="bird on lake"/></li>
        <li><img src={cliffs} className="small-landscape-img" alt="english cliffs"/></li>
        <li><img src={lostweekend} className="small-portrait-img" alt="lars playing piano"/></li>
        <li><img src={edin} className="large-landscape-img" alt="edinburgh buildings"/></li>
        <li><img src={zoom} className="large-landscape-img" alt="scooter"/></li>
        <li><img src={crane} className="small-landscape-img" alt="crane in blue sky"/></li>
        <li><img src={drip} className="large-portrait-img" alt="gorge water"/></li>
        <li><img src={graf} className="small-landscape-img" alt="street corner"/></li>
        <li><img src={hike} className="large-portrait-img" alt="german hike"/></li>
      </ul>
  </div>
  );
};

export default PhotoGrid;