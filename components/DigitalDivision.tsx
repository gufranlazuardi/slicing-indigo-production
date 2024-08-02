import Image from "next/image";
import React from "react";

const DigitalDivision = () => {
  return (
    <div className="flex flex-col pl-[2rem] pt-[2rem] pb-[4rem]">
      <h2 className="text-gray-500 text-[50px] font-semibold">
        digital division
      </h2>
      <div className="flex mt-[4rem] gap-[8rem]">
        <div className="flex flex-col gap-[1rem]">
          <Image
            src="/icon-www.png"
            alt="/icon-www"
            height={100}
            width={100}
            className="w-[4rem]"
          />
          <Image
            src="/Logo-cumicumicom.png"
            alt="/icon-www"
            height={100}
            width={100}
            className="w-[15rem]"
          />
          <p className="text-gray-500 text-[22px] font-light max-w-[16rem]">
            Produce and manage celebrity news through web portal
          </p>
          <Image
            src="/About-Cumi-Web-crop.png"
            alt="About-Cumi-Web-Crop"
            width={300}
            height={100}
            className="mt-1"
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <Image
            src="/Logo-Youtube.png"
            alt="Logo-Youtube"
            height={100}
            width={100}
          />
          <Image
            src="/Logo-cumicumi-YT.png"
            alt="/Logo-cumicumi-YT"
            height={100}
            width={100}
            className="w-[13rem] mt-[0.5rem]"
          />
          <p className="text-gray-500 text-[22px] font-light max-w-[18rem]">
            Produce and manage celebrity video news through Youtube
            Channels
          </p>
          <Image
            src="/About-Cumi-YT-crop.png"
            alt="About-Cumi-YT"
            height={100}
            width={300}
          />
        </div>
        <div>
          <p className="text-gray-500 flex items-center text-[32px] font-semibold">
            Our{" "}
            <span className="px-2">
              <Image
                src="/Logo-Youtube.png"
                alt="Logo-Youtube"
                width={120}
                height={100}
              />
            </span>
            digital channels
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalDivision;
