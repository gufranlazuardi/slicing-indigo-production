import { ThumbsUp, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const MultiChannelNetwork = () => {
  return (
    <div className="bg-white flex flex-col pb-[2rem]">
      <h1 className="pl-[2rem] text-left xl:text-center text-gray-500 text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold">
        Multi Channel Network
      </h1>
      <div className="flex flex-col justify-center gap-[2rem] md:gap-[2rem] lg:gap-[18rem] xl:gap-[18rem] items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="flex flex-col gap-[1rem] mt-[3rem]">
          <div className="pl-[4rem] max-w-[450px] text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-500 font-light">
            <span className="font-bold">iAM </span>is
            <span className="font-bold">
              YouTube Official Multi Channel Network (MCN),{" "}
            </span>
            mainly focused on partnering with Indonesia
            celebrities/content creators on YouTube.
          </div>
          <div className="max-w-[500px] pl-[4rem] text-gray-500 text-[20px] font-light">
            With wide network and long relationship with celebrities
            and brand, iAM offers assistance to content creators in
            areas such as:
          </div>
          <div className="flex pl-[4rem] mt-[1.5rem]">
            <ul className="flex flex-col gap-1">
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                    <ThumbsUp color="white" size={20} />
                  </div>
                  <p className="text-[#5FC0C8] text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-light">
                    Content Development
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                    <ThumbsUp color="white" size={20} />
                  </div>
                  <p className="text-[#5FC0C8] text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-light">
                    Cross Promotion
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                    <ThumbsUp color="white" size={20} />
                  </div>
                  <p className="text-[#5FC0C8] text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-light">
                    Digital Rights Management
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                    <ThumbsUp color="white" size={20} />
                  </div>
                  <p className="text-[#5FC0C8]  font-light">
                    Monetisation/Sales
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                    <ThumbsUp color="white" size={20} />
                  </div>
                  <p className="text-[#5FC0C8] text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-light">
                    Audience Development
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-[3rem]">
            <div className="flex flex-col gap-2 items-center relative">
              <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
                <Image
                  src="/images/Youtube_logo.png"
                  alt="Youtube_logo"
                  width={40}
                  height={100}
                  className="absolute bottom-12"
                />
              </div>
              <p className="text-gray-500 font-semibold">
                Uya Kuya TV
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center relative">
              <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
                <Image
                  src="/images/Youtube_logo.png"
                  alt="Youtube_logo"
                  width={40}
                  height={100}
                  className="absolute bottom-12"
                />
              </div>
              <p className="text-gray-500 font-semibold">
                Mata Langit
              </p>{" "}
            </div>
          </div>
          <div className="flex gap-[3rem]">
            <div className="flex flex-col gap-2 items-center relative">
              <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
                <Image
                  src="/images/Youtube_logo.png"
                  alt="Youtube_logo"
                  width={40}
                  height={100}
                  className="absolute bottom-12"
                />
              </div>
              <p className="text-gray-500 font-semibold">Chris CSB</p>
            </div>
            <div className="flex flex-col gap-2 items-center relative">
              <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
                <Image
                  src="/images/Youtube_logo.png"
                  alt="Youtube_logo"
                  width={40}
                  height={100}
                  className="absolute bottom-12"
                />
              </div>
              <p className="text-gray-500 font-semibold">
                Ratna Listy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiChannelNetwork;
