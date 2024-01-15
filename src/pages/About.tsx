import React from 'react';
import '../index.css';

import model1 from '../background-images/model-1.jpeg';
import model2 from '../background-images/model-2.jpeg';
import model3 from '../background-images/model-3.jpeg';
import model4 from '../background-images/model-4.jpeg';
import model5 from '../background-images/model-5.jpeg';
import model6 from '../background-images/model-6.jpeg';
import model7 from '../background-images/model-7.jpeg';

function About() {
  return (
    <div>
      <div className="content">
          <h1>about me</h1>
          <p>hi i'm lars, a master of none.</p>
          <p>after working as a software engineer for several years, i am currently pursuing projects in various areas of music, software, and writing.</p>
          <p>drop me a message on one of the social pipes!</p>
      </div>
      <div className="photos">
          <ul>
            <li><img src={model1} className="small-portrait-img" alt="Pose-1"/></li>
            <li><img src={model2} className="small-portrait-img" alt="Pose-2"/></li>
            <li><img src={model3} className="small-portrait-img" alt="Pose-3"/></li>
            <li><img src={model4} className="small-portrait-img" alt="Pose-4"/></li>
            <li><img src={model5} className="small-portrait-img" alt="Pose-5"/></li>
            <li><img src={model6} className="small-portrait-img" alt="Pose-6"/></li>
            <li><img src={model7} className="small-portrait-img" alt="Pose-7"/></li>
          </ul>
        </div>
      </div>
  );
}

export default About;
