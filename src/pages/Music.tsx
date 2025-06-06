import React from 'react';
import '../index.css';

import sagaCityLogo from '../background-images/saga-city.png';
import epCover from '../background-images/ep-cover.jpeg';

function Music() {
  return (
    <div className="content">
      <details open>
        <summary><em>just a position</em> solo EP</summary>
        <div className="music-section">
          <img src={epCover} className="music-image" alt="Just A Position EP cover"/>
          <div className="music-text">
            <p>i will soon be releasing a solo piano/vocal EP called <em>just a position</em>.</p>
            <p>it's a series of songs about place, written whilst living across three different cities in Australia and Germany.</p>
            <p>you'll be able to find the EP on all streaming services soon, so follow on instagram for updates!</p>
          </div>
        </div>
      </details>
      <details>
        <summary>film composing</summary>
        <p>film music has always been a passion which i would love to pursue. have a listen to some sample projects which i scored and orchestrated myself!</p>
        <div>
          <iframe
            className="youtubeFrame"
            src="https://www.youtube.com/embed/JhaLFgvbgtk?si=23dWvW5LMP3CxpM4"
            title="Indie Film Music Contest entry 2025"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
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
        </div>
      </details>
      <details>
        <summary><em>saga city</em> band</summary>
        <div className="music-section">
          <img src={sagaCityLogo} className="music-image" alt="Saga City logo"/>
          <div className="music-text">
            <p><a href="https://www.sagacity.au" target="_blank" rel="noopener noreferrer">SAGA CITY</a> is a Melbourne-based neo-soul band.</p>
            <p>we've been busy writing original tunes and gigging around the city. come see us play at our next show!</p>
            <p>check out our website <a href="https://www.sagacity.au" target="_blank" rel="noopener noreferrer">sagacity.au</a> to get in contact and have a listen!</p>
          </div>
        </div>
      </details>
      <details>
        <summary>solo piano</summary>
        <p>i love performing and improvising on piano. have a listen to some improvisations and let me know if you would like to talk about having music at your next event!</p>
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
      </details>
      <details>
        <summary>musical theatre</summary>
        <p>myself and some well known writers are in the early stages of creating an original musical theatre production. check out my orchestration from the opening song and send me a message to hear more!</p>
        <div className="soundcloudList">
          <iframe
            className="soundcloudFrame"
            title="Original Musical Song - Orchestral Arrangement (no vocals)"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1972289147&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            frameBorder="0"
            scrolling="no">
          </iframe>
        </div>
      </details>
    </div>
  );
}

export default Music;