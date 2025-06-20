import React from 'react';
import '../index.css';

import action1 from '../background-images/action-1.jpeg';
import action2 from '../background-images/action-2.jpeg';
import action3 from '../background-images/action-3.jpeg';
import action4 from '../background-images/action-4.jpeg';
import action5 from '../background-images/action-5.jpeg';
import action6 from '../background-images/action-6.jpeg';

function About() {
  return (
    <div>
      <div className="content">
        <h1>about me</h1>
        <p>hi i'm lars mellick and welcome to lars.au, the goto website for lars.</p>
        <p>after working as a software engineer for several years, i am currently pursuing projects in various areas of music, software, and writing. check out some of these projects on my <a href="#/music">music</a> page.</p>
        <p>if you want to get in touch, drop me a message on one of the social pipes!</p>
        <div className="photos" id="aboutGrid">
          <ul>
            <li><img src={action1} className="small-portrait-img" alt="Pose 1"/></li>
            <li><img src={action2} className="small-portrait-img" alt="Pose 2"/></li>
            <li><img src={action3} className="small-portrait-img" alt="Pose 3"/></li>
            <li><img src={action4} className="small-portrait-img" alt="Pose 4"/></li>
            <li><img src={action5} className="small-portrait-img" alt="Pose 5"/></li>
            <li><img src={action6} className="small-portrait-img" alt="Pose 6"/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
