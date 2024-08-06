import AdvertisingAndDesignHouse from "@/components/Advertising&DesignHouse";
import CreativeIndigoProductionIs from "@/components/CreativeIndigoProductionIs";
import DigitalDivision from "@/components/DigitalDivision";
import FirstSection from "@/components/FirstSection";
import InfotainmentDivision from "@/components/InfotainmentDivision";
import JalanSesama1 from "@/components/JalanSesama1";
import JalanSesama2 from "@/components/JalanSesama2";
import MultiChannelNetwork from "@/components/MultiChannelNetwork";
import Navbar from "@/components/Navbar";
import NonInfotainmentDivision from "@/components/NonInfotainmentDivision";
import OurSubsidiaries from "@/components/OurSubsidiaries";
import ProductionService from "@/components/ProductionService";
import Programs from "@/components/Programs";
import VideoSection from "@/components/VideoSection";
import WeHave from "@/components/WeHave";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <VideoSection />
      <CreativeIndigoProductionIs />
      <WeHave />
      <InfotainmentDivision />
      <NonInfotainmentDivision />
      <JalanSesama1 />
      <JalanSesama2 />
      <OurSubsidiaries />
      <DigitalDivision />
      <MultiChannelNetwork />
      <AdvertisingAndDesignHouse />
      <ProductionService />
    </div>
  );
};

export default Home;
