import DigitalDivision from "@/components/DigitalDivision";
import FirstSection from "@/components/FirstSection";
import MultiChannelNetwork from "@/components/MultiChannelNetwork";
import Navbar from "@/components/Navbar";
import ProductionService from "@/components/ProductionService";
import VideoTemplate from "@/components/VideoTemplate";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* <VideoTemplate /> */}
      {/* <FirstSection /> */}
      <DigitalDivision />
      <MultiChannelNetwork />
      <ProductionService />
    </div>
  );
};

export default Home;
