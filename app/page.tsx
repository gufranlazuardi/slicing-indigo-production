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
import AdvancedIndoDigitalMobile from "@/components/AdvancedIntoDigitalMobile";
import InfotainmentPrograms1Mobile from "@/components/InfotainmentPrograms1Mobile";
import SiletMobile from "@/components/SiletMobile";
import NonInfotainmentProgramsMobile from "@/components/NonInfotainmentProgramsMobile";
import Programlist1Mobile from "@/components/Programlist1Mobile";
import Programlist2Mobile from "@/components/Programlist2Mobile";
import JalanSesama1Mobile from "@/components/JalanSesama1Mobile";
import JalanSesama2Mobile from "@/components/JalanSesama2Mobile";
import Programlist3Mobile from "@/components/Programlist3Mobile";

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
        <div className="sm:block hidden">
          <AdvancedIntoDigital />
        </div>
        <div className="block sm:hidden">
          <AdvancedIndoDigitalMobile />
        </div>
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

      <div>
        <div className="sm:block hidden">
          <InfotainmentPrograms1 />
        </div>
        <div className="block sm:hidden">
          <InfotainmentPrograms1Mobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <Silet />
        </div>
        <div className="block sm:hidden">
          <SiletMobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <NonInfotainmentPrograms />
        </div>
        <div className="block sm:hidden">
          <NonInfotainmentProgramsMobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <Programlist1 />
        </div>
        <div className="block sm:hidden">
          <Programlist1Mobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <Programlist2 />
        </div>
        <div className="block sm:hidden">
          <Programlist2Mobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <Programlist3 />
        </div>
        <div className="block sm:hidden">
          <Programlist3Mobile />
        </div>
      </div>

      <div id="jalan-sesama">
        <div className="sm:block hidden">
          <JalanSesama1 />
        </div>
        <div className="sm:hidden block">
          <JalanSesama1Mobile />
        </div>
      </div>

      <div>
        <div className="sm:block hidden">
          <JalanSesama2 />
        </div>
        <div className="sm:hidden block">
          <JalanSesama2Mobile />
        </div>
      </div>

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
