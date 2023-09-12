import React from "react";

const Video = () => {
  return (
    <>
      <video
        className="absolute z-auto h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="assets/waterfall.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
