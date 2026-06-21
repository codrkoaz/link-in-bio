import React, { useState, useEffect } from "react";

const videos = [
  { id: 1, src: "/mov/waterfall.mp4" },
  { id: 2, src: "/mov/greenstation.mp4" },
  { id: 3, src: "/mov/winter.mp4" },
];

const Video: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState(1);

  useEffect(() => {
    const randomBackground = Math.floor(Math.random() * 3 + 1);
    setCurrentBackground(randomBackground);
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div
          key={video.id}
          className={`absolute top-0 left-0 w-screen h-screen z-0 ${
            currentBackground === video.id ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out`}
        >
          <video
            className="absolute z-auto h-screen w-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Video;