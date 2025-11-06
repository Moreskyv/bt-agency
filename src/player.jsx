import React, { useState } from "react";
import './player.css'
const videoList = [
  {
    title: "Видео 1",
    embedUrl: "https://kinescope.io/9o5sfWEzNrDAbszmBTdG7F",
  },
  {
    title: "Видео 2",
    embedUrl: "https://rutube.ru/play/embed/VIDEO_ID_2",
  },
  {
    title: "Видео 3",
    embedUrl: "https://rutube.ru/play/embed/VIDEO_ID_3",
  },
];

export default function VideoPlayer() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <div style={{ maxWidth: "840px", margin: "20px auto", textAlign: "center" }}>
      <p className="player-text">Наши работы:</p>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={currentVideo.embedUrl}
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={currentVideo.title}
        ></iframe>
      </div>

          
      <div style={{ marginTop: "20px" }}>
        {videoList.map((video, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(video)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: video.embedUrl === currentVideo.embedUrl ? "#010246ff" : "#000000ff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}
