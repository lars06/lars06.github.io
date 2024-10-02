import React from 'react';
import '../index.css';

function Music() {
  return (
    <div className="content">
        <h1>music</h1>
        <h2>for media</h2>
        <h3>film composition</h3>
        <iframe
            className="youtubeFrame"
            src="https://www.youtube.com/embed/yg0GvC5yMcU?si=8jxfCPQvHpJkjhk_"
            title="Indie Film Music Contest entry 2020 (revised)"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
        <iframe
            className="youtubeFrame"
            src="https://www.youtube.com/embed/3hQE1J94uos?si=5vU_xpShasye0MeR"
            title="Indie Film Music Contest entry 2024"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
        <h3>musical theatre</h3>
        <div className="soundcloudList">
            <iframe
              className="soundcloudFrame"
              title="Original Musical Song - Orchestral Arrangement (no vocals)"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925633723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              frameBorder="0"
              scrolling="no">
            </iframe>
        </div>
        <h2>for piano</h2>
        <h3>live recordings of piano improvisations</h3>
        <div className="soundcloudList">
            <iframe
              className="soundcloudFrame"
              title="Yin Yoga / Meditation live piano improvisation"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1675855665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              frameBorder="0"
              scrolling="no">
            </iframe>
            <iframe
              className="soundcloudFrame"
              title="DRIP improv"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634721846&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              frameBorder="0"
              scrolling="no">
            </iframe>
        </div>
    </div>
  );
}

export default Music;