"use client";

import Achievements from "@/components/Achievements";
import AdvancedIntoDigital from "@/components/AdvancedIntoDigital";
import AdvertisingAndDesignHouse from "@/components/Advertising&DesignHouse";
import CreativeDesignAndMultimedia from "@/components/CreativeDesignAndMultimedia";
import CreativeIndigoProductionIs from "@/components/CreativeIndigoProductionIs";
import DigitalDivision from "@/components/DigitalDivision";
import Footer from "@/components/Footer";
import InfotainmentDivision from "@/components/InfotainmentDivision";
import InfotainmentPrograms1 from "@/components/InfotainmentPrograms1";
import JalanSesama1 from "@/components/JalanSesama1";
import JalanSesama2 from "@/components/JalanSesama2";
import MultiChannelNetwork from "@/components/MultiChannelNetwork";
import NonInfotainmentDivision from "@/components/NonInfotainmentDivision";
import NonInfotainmentPrograms from "@/components/NonInfotainmentPrograms";
import OurFacilities from "@/components/OurFacilities";
import OurPrograms from "@/components/OurPrograms";
import OurSubsidiaries from "@/components/OurSubsidiaries";
import ProductionService from "@/components/ProductionService";
import Programlist1 from "@/components/Programlist1";
import Programlist2 from "@/components/Programlist2";
import Programlist3 from "@/components/Programlist3";
import Programs from "@/components/Programs";
import Silet from "@/components/Silet";
import VideoSection from "@/components/VideoSection";
import WeHave from "@/components/WeHave";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AdvertisingAndDesignHouseMobile from "@/components/AdvertisingAndDesignHouseMobile";
import CreativeIndigoProductionIsMobile from "@/components/CreativeIndigoProductionIsMobile";
import WeHaveMobile from "@/components/WeHaveMobile";
import AchievementsMobile from "@/components/AchievementsMobile";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <VideoSection />

      <div id="about" data-aos="fade-up">
        <div className="sm:block hidden">
          <CreativeIndigoProductionIs />
        </div>
        <div className="block sm:hidden">
          <CreativeIndigoProductionIsMobile />
        </div>
      </div>

      <div data-aos="fade-up">
        <div className="sm:block hidden">
          <WeHave />
        </div>
        <div className="block sm:hidden">
          <WeHaveMobile />
        </div>
      </div>

      <div id="team">
        <InfotainmentDivision />
      </div>
      <div data-aos="fade-up">
        <NonInfotainmentDivision />
      </div>
      <div data-aos="fade-up">
        <CreativeDesignAndMultimedia />
      </div>
      <div id="facilities">
        <OurFacilities />
      </div>
      <div data-aos="fade-up">
        <AdvancedIntoDigital />
      </div>
      <Programs />

      <div id="achievements">
        <div className="sm:block hidden">
          <Achievements />
        </div>
        <div className="block sm:hidden">
          <AchievementsMobile />
        </div>
      </div>

      <div id="our-programs">
        <OurPrograms />
      </div>
      <InfotainmentPrograms1 />
      <Silet />
      <NonInfotainmentPrograms />
      <Programlist1 />
      <Programlist2 />
      <Programlist3 />
      <div id="jalan-sesama">
        <JalanSesama1 />
      </div>
      <JalanSesama2 />
      <div id="subsidiaries">
        <OurSubsidiaries />
      </div>
      <div data-aos="fade-up">
        <DigitalDivision />
      </div>
      <div data-aos="fade-up">
        <MultiChannelNetwork />
      </div>
      <div className="hidden sm:block">
        <AdvertisingAndDesignHouse />
      </div>
      <div data-aos="fade-up" className="block sm:hidden">
        <AdvertisingAndDesignHouseMobile />
      </div>
      <div data-aos="fade-up">
        <ProductionService />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
