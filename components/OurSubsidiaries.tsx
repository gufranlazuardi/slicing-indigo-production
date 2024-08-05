import { ArrowBigDown, ArrowDown } from "lucide-react";
import React from "react";

const OurSubsidiaries = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center bg-sky-950 py-[3rem]">
      <p className="text-[40px] text-white font-light">
        our subsidiaries
      </p>
      <div className="h-full p-4 rounded-full bg-gray-500">
        <ArrowDown color="white" />
      </div>
    </div>
  );
};

export default OurSubsidiaries;
