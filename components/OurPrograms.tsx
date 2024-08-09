import { ArrowDown } from "lucide-react";
import React from "react";

const OurPrograms = () => {
  return (
    <div
      className="w-full flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-4 justify-center items-center py-[1rem] md:py-[2.5rem] lg:py-[3rem] xl:py-[3rem] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/oursubsidiaries-1349x640.jpg')",
        objectFit: "cover",
      }}
    >
      <p className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[42px] text-gray-600 font-light">
        our programs
      </p>
      <div className="h-full p-2 rounded-full bg-gray-500 opacity-60">
        <ArrowDown color="white" size={50} />
      </div>
    </div>
  );
};

export default OurPrograms;
