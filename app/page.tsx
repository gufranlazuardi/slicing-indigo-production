import DigitalDivision from "@/components/DigitalDivision";
import FirstSection from "@/components/FirstSection";
import InfotainmentDivision from "@/components/InfotainmentDivision";
import MultiChannelNetwork from "@/components/MultiChannelNetwork";
import Navbar from "@/components/Navbar";
import NonInfotainmentDivision from "@/components/NonInfotainmentDivision";
import OurSubsidiaries from "@/components/OurSubsidiaries";
import ProductionService from "@/components/ProductionService";
import Programs from "@/components/Programs";
import VideoTemplate from "@/components/VideoTemplate";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* <VideoTemplate /> */}
      {/* <FirstSection /> */}
      <InfotainmentDivision />
      <NonInfotainmentDivision />
      <Programs />
      <OurSubsidiaries />
      <DigitalDivision />
      <MultiChannelNetwork />
      <ProductionService />
    </div>
  );
};

export default Home;
