import React, { useState,useEffect } from "react";


const Video: React.FC = () => {

const [currentBackground, setCurrentBackground] = useState(1)


useEffect (() => {
  const randomBackground = Math.floor(Math.random() * 3 + 1);
  setCurrentBackground(randomBackground)
},[])
  return (
    <div className="">
      <div className={`absolute top-0 left-0 w-screen h-screen z-0 ${
              currentBackground === 1 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}>
        <video
          className={`absolute z-auto h-screen w-screen object-cover ${currentBackground === 1 ? 'opacity-100': 'opacity-0' } transition-opacity duration-1000 ease-in `}
          autoPlay
          loop
          muted
        >
          <source src="assets/waterfall.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`absolute top-0 left-0 w-screen h-screen z-0 ${
              currentBackground === 2 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}>
        <video
          className={`absolute z-auto h-screen w-screen object-cover ${currentBackground === 2 ? 'opacity-100': 'opacity-0' } transition-opacity duration-1000 ease-in `}
          autoPlay
          loop
          muted
        >
          <source src="assets/greenstation.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`absolute top-0 left-0 w-screen h-screen z-0 ${
              currentBackground === 3 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}>
        <video
          className={`absolute z-auto h-screen w-screen object-cover ${currentBackground === 3 ? 'opacity-100': 'opacity-0' } transition-opacity duration-1000 ease-in `}
          autoPlay
          loop
          muted
        >
          <source src="assets/winter.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
