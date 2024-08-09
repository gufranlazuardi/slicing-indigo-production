import Image from "next/image";
import React from "react";

const NonInfotainmentDivision = () => {
  return (
    <div className="flex bg-white px-[3rem] py-[2rem] flex-col">
      <div className="flex flex-col justify-between md:flex-row lg:flex-row xl:flex-row">
        {/* kiri */}
        <div className="flex flex-col mb-[2rem]">
          <h1 className="text-[28px] font-semibold">
            non infotainment
          </h1>
          <p className="font-light text-[18px]">DIVISION</p>
        </div>

        {/* kanan */}
        <div className="flex justify-center gap-[1rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem]">
          <div className="flex ">
            <p className=" sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-light text-gray-500 break-words leading-[1.2] max-w-[80px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px]">
              Build new/refurbished programs
            </p>
          </div>
          <div className="flex">
            <p className=" sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-light text-gray-500 break-words leading-[1.2] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px]">
              Find different entertainment area to target
            </p>
          </div>
          <div className="flex">
            <p className=" sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-light text-gray-500 break-words leading-[1.2] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px]">
              Concept and create TV shows, as well as develop Pilot
              Programs, Fillers, Youtube Channels and Company Profile
            </p>
          </div>
          <div className="flex">
            <p className=" sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-light text-gray-500 break-words leading-[1.2] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px]">
              Produced some works for well-known companies, such as
              Disney Channel, Commonwealth Life and Garuda Indonesia
              Airways.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/non-infotainment-image.png"
        alt="non-infotainment-image"
        width={900}
        height={100}
      />
    </div>
  );
};

export default NonInfotainmentDivision;
