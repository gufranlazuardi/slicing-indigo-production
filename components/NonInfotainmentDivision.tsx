import Image from "next/image";
import React from "react";

const NonInfotainmentDivision = () => {
  return (
    <div className="flex justify-between bg-white px-[3rem] py-[2rem] relative">
      <div className="flex flex-col mb-[8rem]">
        <h1 className="text-[28px] font-semibold">
          non infotainment
        </h1>
        <p className="font-light text-[18px]">DIVISION</p>
      </div>

      {/* kanan */}
      <div className="flex gap-2">
        <div className="flex w-full gap-3 max-w-[150px]">
          <p className="text-[18px] text-slate-400 break-words leading-[1.2]">
            Experienced Journalists & Reporters
          </p>
        </div>
        <div className="flex w-full gap-3 max-w-[150px]">
          <p className="text-[18px] text-slate-400 break-words leading-[1.2]">
            Experienced Journalists & Reporters
          </p>
        </div>
        <div className="flex w-full gap-3 max-w-[150px]">
          <p className="text-[18px] text-slate-400 break-words leading-[1.2]">
            Experienced Journalists & Reporters
          </p>
        </div>
        <div className="flex w-full gap-3 max-w-[150px]">
          <p className="text-[18px] text-slate-400 break-words leading-[1.2]">
            Experienced Journalists & Reporters
          </p>
        </div>
      </div>
      <Image
        src="/non-infotainment-image.png"
        alt="non-infotainment-image"
        width={900}
        height={100}
        className="absolute bottom-0 left-0 pl-[2rem]"
      />
    </div>
  );
};

export default NonInfotainmentDivision;
