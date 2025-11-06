import React, { useState } from "react";
import "./player.css";

const reelsVideos = [
  { title: "Reel 1", embedUrl: "https://kinescope.io/9o5sfWEzNrDAbszmBTdG7F" },
  { title: "Reel 2", embedUrl: "https://kinescope.io/m6TrE82mbLKiLs1Um9eEym" },
  { title: "Reel 3", embedUrl: "https://kinescope.io/dqd6Gz85FjFNToWviAoN34" },
  { title: "Reel 4", embedUrl: "https://kinescope.io/nKhCKCmUqsnyBgdfbnSyyH" },
];

const motionVideos = [
  { title: "Motion 1", embedUrl: "https://kinescope.io/ar8L3CL9xEAk5PE2BSh2ji" },
  { title: "Motion 2", embedUrl: "https://kinescope.io/fTKKNJ18KYuzNfMXMtj3MT"},
  { title: "Motion 3", embedUrl: "https://kinescope.io/w44gfAGUpVr16UXR4TgPBW" },
  { title: "Motion 4", embedUrl: "https://kinescope.io/62PiMdZ56s2j8bdVGQJiU6" },
];

const horizontalVideos = [
  { title: "Horizontal 1", embedUrl: "https://kinescope.io/gSFZKa9L5q4TzhEsvhmtqY" },
  { title: "Horizontal 2", embedUrl: "https://kinescope.io/sKbkn79ddJjbskrhbUHLFo" },
];

export default function VideoPlayer() {
  const categories = {
    Reels: reelsVideos,
    Motion: motionVideos,
    Horizontal: horizontalVideos,
  };

  const [activeCategory, setActiveCategory] = useState("Reels");
  const [currentVideo, setCurrentVideo] = useState(categories["Reels"][0]);

  return (
    <div className="player-wrapper">
      <p className="player-title">Наши работы</p>

      {/* Переключение категорий */}
      <div className="tabs">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`tab-button ${activeCategory === cat ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentVideo(categories[cat][0]);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Видео */}
      <div className="video-container">
        <iframe
          src={currentVideo.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={currentVideo.title}
        ></iframe>
      </div>

      {/* Кнопки выбора видео */}
      <div className="video-selector">
        {categories[activeCategory].map((video) => (
          <button
            key={video.title}
            className={`video-button ${
              video.embedUrl === currentVideo.embedUrl ? "selected" : ""
            }`}
            onClick={() => setCurrentVideo(video)}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}
