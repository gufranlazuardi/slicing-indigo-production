"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <ReactPlayer
      url="/videos/INDIGO-PRODUCTION.mp4"
      controls
      playing
      loop
      width="100%"
      height="1005"
      muted={true}
    />
  );
};

export default VideoSection;
