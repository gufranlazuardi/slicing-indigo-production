import { ThumbsUp, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const MultiChannelNetwork = () => {
  return (
    <div className="bg-white flex flex-col pb-[2rem]">
      <h1 className="pl-[2rem] text-gray-500 text-[40px] font-semibold">
        Multi Channel Network
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row">
        <div className="flex flex-col gap-[1rem] mt-[3rem]">
          <div className="pl-[4rem] max-w-[450px] text-[20px] text-gray-500">
            <span className="font-bold">iAM </span>is
            <span className="font-bold">
              YouTube Official Multi Channel Network (MCN),{" "}
            </span>
            mainly focused on partnering with Indonesia
            celebrities/content creators on YouTube.
          </div>
          <div className="max-w-[500px] pl-[4rem] text-gray-500 text-[18px]">
            <p>
              With wide network and long relationship with celebrities
              and brand, iAM offers assistance to content creators in
              areas such as:
            </p>
          </div>
          <div className="flex flex-col pl-[4rem] gap-[0.5rem] mt-[1.5rem]">
            <div className="flex items-center gap-4">
              <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                <ThumbsUp color="white" size={20} />
              </div>
              <p className="text-[#5FC0C8] text-[20px] font-light">
                Content Development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                <ThumbsUp color="white" size={20} />
              </div>
              <p className="text-[#5FC0C8] text-[20px] font-light">
                Content Development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                <ThumbsUp color="white" size={20} />
              </div>
              <p className="text-[#5FC0C8] text-[20px] font-light">
                Content Development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                <ThumbsUp color="white" size={20} />
              </div>
              <p className="text-[#5FC0C8] text-[20px] font-light">
                Content Development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-[#235E98] w-8 h-8 rounded-full justify-center items-center">
                <ThumbsUp color="white" size={20} />
              </div>
              <p className="text-[#5FC0C8] text-[20px] font-light">
                Content Development
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 ml-[18rem] mt-[4rem] gap-10">
          <div className="flex flex-col items-center relative">
            <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
              <Image
                src="/Youtube_logo.png"
                alt="Youtube_logo"
                width={40}
                height={100}
                className="absolute bottom-12"
              />
            </div>
            <p className="text-gray-500 font-semibold">Uya Kuya TV</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
              <Image
                src="/Youtube_logo.png"
                alt="Youtube_logo"
                width={40}
                height={100}
                className="absolute bottom-12"
              />
            </div>
            <p className="text-gray-500 font-semibold">Mata Langit</p>{" "}
          </div>
          <div className="flex flex-col items-center relative">
            <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
              <Image
                src="/Youtube_logo.png"
                alt="Youtube_logo"
                width={40}
                height={100}
                className="absolute bottom-12"
              />
            </div>
            <p className="text-gray-500 font-semibold">Chris CSB</p>{" "}
          </div>
          <div className="flex flex-col items-center relative">
            <div className="flex w-[10rem] h-[10rem] bg-blue-600 rounded-full items-end justify-center">
              <Image
                src="/Youtube_logo.png"
                alt="Youtube_logo"
                width={40}
                height={100}
                className="absolute bottom-12"
              />
            </div>
            <p className="text-gray-500 font-semibold">Ratna Listy</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiChannelNetwork;
