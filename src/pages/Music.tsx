import React from 'react';
import '../index.css';

function Music() {
  return (
    <div className="content">
        <h1>music</h1>
        <h2>piano</h2>
        <p>live recordings of piano improvisations</p>
        <div className="soundcloudList">
            <iframe
              className="soundcloudFrame"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1675855665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              scrolling="no">
            </iframe>
            <iframe
              className="soundcloudFrame"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634721846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              scrolling="no">
            </iframe>
        </div>
    </div>
  );
}

export default Music;