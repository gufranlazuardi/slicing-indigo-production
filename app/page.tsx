import Achievements from "@/components/Achievements";
import AdvertisingAndDesignHouse from "@/components/Advertising&DesignHouse";
import CreativeDesignAndMultimedia from "@/components/CreativeDesignAndMultimedia";
import CreativeIndigoProductionIs from "@/components/CreativeIndigoProductionIs";
import DigitalDivision from "@/components/DigitalDivision";
import FirstSection from "@/components/FirstSection";
import InfotainmentDivision from "@/components/InfotainmentDivision";
import InfotainmentPrograms1 from "@/components/InfotainmentPrograms1";
import JalanSesama1 from "@/components/JalanSesama1";
import JalanSesama2 from "@/components/JalanSesama2";
import MultiChannelNetwork from "@/components/MultiChannelNetwork";
import Navbar from "@/components/Navbar";
import NonInfotainmentDivision from "@/components/NonInfotainmentDivision";
import NonInfotainmentPrograms from "@/components/NonInfotainmentPrograms";
import OurSubsidiaries from "@/components/OurSubsidiaries";
import ProductionService from "@/components/ProductionService";
import Programlist1 from "@/components/Programlist1";
import Programlist2 from "@/components/Programlist2";
import Programlist3 from "@/components/Programlist3";
import Programs from "@/components/Programs";
import VideoSection from "@/components/VideoSection";
import WeHave from "@/components/WeHave";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <VideoSection />
      <CreativeIndigoProductionIs />
      <CreativeDesignAndMultimedia />
      <Programs />
      <Achievements />
      <InfotainmentPrograms1 />
      <NonInfotainmentPrograms />
      <Programlist1 />
      <Programlist2 />
      <Programlist3 />
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
