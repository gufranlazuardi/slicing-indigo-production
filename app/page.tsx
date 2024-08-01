import FirstSection from "@/components/FirstSection";
import VideoTemplate from "@/components/VideoTemplate";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <VideoTemplate />
      <FirstSection />
    </div>
  );
};

export default Home;
