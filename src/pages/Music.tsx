import React from 'react';
import '../index.css';

function Music() {
  return (
    <div className="content">
        <h1>music</h1>
        <h2>for media</h2>
        <p>film scoring examples</p>
        <iframe
            className="youtubeFrame"
            src="https://www.youtube.com/embed/3hQE1J94uos?si=5vU_xpShasye0MeR"
            title="Indie Film Music Contest entry 2024"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
        <h2>for piano</h2>
        <p>live recordings of piano improvisations</p>
        <div className="soundcloudList">
            <iframe
              className="soundcloudFrame"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1675855665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              frameBorder="0"
              scrolling="no">
            </iframe>
            <iframe
              className="soundcloudFrame"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634721846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              frameBorder="0"
              scrolling="no">
            </iframe>
        </div>
    </div>
  );
}

export default Music;