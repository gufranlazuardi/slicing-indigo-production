import Image from "next/image";
import React from "react";

const InfotainmentDivision = () => {
  return (
    <>
      <Image
        src="/images/production-team.jpg"
        alt="production-team"
        width={600}
        height={100}
      />
      <div className="flex flex-col justify-between bg-[#10335D] px-[3rem] py-[2rem] xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <div className="flex flex-col gap-[2rem]">
          {/* infotainment division */}
          <div className="flex flex-col text-white">
            <h2 className="text-[28px] font-semibold">
              infotainment
            </h2>
            <p className="font-light text-[18px]">DIVISION</p>
          </div>
          <p className="text-gray-400 text-[18px]">
            Our team in Infotainment Division consists of more than...
          </p>
        </div>
        <div className="flex flex-col gap-[1rem] py-[2rem]">
          {/* angka */}
          <div className="flex gap-2">
            <div className="flex flex-col w-full gap-3 max-w-[150px]">
              <h2 className="text-2xl text-cyan-400 font-bold">
                45+
              </h2>
              <p className="text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-slate-400 break-words leading-[1.2]">
                Experienced Journalists & Reporters
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 max-w-[150px]">
              <h2 className="text-2xl text-cyan-400 font-bold">
                70+
              </h2>
              <p className="text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-slate-400 break-words leading-[1.2]">
                Producers and Assistants
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 max-w-[150px]">
              <h2 className="text-2xl text-cyan-400 font-bold">
                20+
              </h2>
              <p className="text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-slate-400 break-words leading-[1.2]">
                Scripwriters{" "}
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 max-w-[150px]">
              <h2 className="text-2xl text-cyan-400 font-bold">
                45+
              </h2>
              <p className="text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-slate-400 break-words leading-[1.2]">
                Camera Persons{" "}
              </p>
            </div>
          </div>
          {/* text bawah kanan */}
          <div className="flex flex-col justify-end text-end">
            <p className="text-slate-400">
              The main passion is to deliver the news
            </p>
            <p className="text-slate-400">
              in the most acurate and entertaining way possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfotainmentDivision;
