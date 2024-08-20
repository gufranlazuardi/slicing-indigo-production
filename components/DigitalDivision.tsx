"use client";

import Image from "next/image";
import React from "react";

const DigitalDivisionData = [
  {
    src: "/images/Thumb-Alvin.png",
    alt: "Thumb-Alvin",
  },
  {
    src: "/images/Thumb-Ganjil.png",
    alt: "Thumb-Ganjil",
  },
  {
    src: "/images/Thumb-Intens-Investigasi.png",
    alt: "Thumb-Intens-Investigasi",
  },
  {
    src: "/images/Thumb-Was.png",
    alt: "Thumb-Thumb-Was",
  },
  {
    src: "/images/Thumb-Who-Cares.png",
    alt: "Thumb-Who-Cares",
  },
];

const DigitalDivision = () => {
  return (
    <div className="flex flex-col px-[1rem] md:pl-[2rem] lg:pl-[2rem] xl:pl-[2rem] pt-[2rem] pb-[4rem]">
      <h2 className=" text-gray-500 text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold">
        digital division
      </h2>
      <div className="flex items-center justify-center gap-[2rem] md:gap-[4rem] lg:gap-[12rem] xl:gap-[12rem] flex-col md:flex-col lg:flex-col xl:flex-row">
        <div className="flex mt-[4rem] gap-[2rem] md:gap-[5rem] lg:gap-[5rem] xl:gap-[5rem] ">
          <div className="flex flex-col gap-[1rem]">
            <Image
              src="/images/Icon-www.png"
              alt="Icon-www"
              height={100}
              width={100}
              className="w-[4rem]"
            />
            <Image
              src="/images/Logo-cumicumicom.png"
              alt="Logo-cumicumicom"
              height={100}
              width={100}
              className="w-[15rem]"
            />
            <p className="text-gray-500 text-[18px] font-light max-w-[15rem]">
              Produce and manage celebrity news through web portal
            </p>
            <Image
              src="/images/About-Cumi-Web-crop.png"
              alt="About-Cumi-Web-Crop"
              width={300}
              height={100}
              className="mt-1 w-[18rem]"
            />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <Image
              src="/images/Logo-Youtube.png"
              alt="Logo-Youtube"
              height={100}
              width={100}
            />
            <Image
              src="/images/Logo-cumicumi-YT.png"
              alt="/Logo-cumicumi-YT"
              height={100}
              width={100}
              className="w-[12rem] mt-[0.5rem]"
            />
            <p className="text-gray-500 text-[18px] font-light max-w-[15rem]">
              Produce and manage celebrity video news through Youtube
              Channels
            </p>
            <Image
              src="/images/About-Cumi-YT-crop.png"
              alt="About-Cumi-YT"
              height={100}
              width={300}
              className="mt-1 w-[18rem]"
            />
          </div>
        </div>

        {/* kanan */}
        <div className="flex flex-col gap-4 pr-[2rem] pt-[1rem]">
          <div className="text-gray-500 flex items-center text-[20px] md:text-[28] lg:text-[30px] xl:text-[32px] font-semibold">
            Our{" "}
            <span className="px-2">
              <Image
                src="/images/Logo-YouTube.png"
                alt="Logo-Youtube"
                width={120}
                height={100}
              />
            </span>
            digital channels
          </div>
          <div className="grid grid-cols-2 gap-5">
            {DigitalDivisionData.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
                className="w-[12rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDivision;
