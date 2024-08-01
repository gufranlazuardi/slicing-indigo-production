import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <div className="flex flex-col">
      {/* gambar */}
      <div className="flex relative justify-end">
        <div className=" max-w-md">
          <Image
            src="/capture1.png"
            width={100}
            height={100}
            alt="capture1"
            className="w-[400px] h-[150px]"
          />
        </div>
        <div className=" max-w-md">
          <Image
            src="/capture2.png"
            width={100}
            height={100}
            alt="capture2"
            className="mt-[7rem] w-[400px] h-[150px]"
          />
        </div>
        <div className=" max-w-md">
          <Image
            src="/capture3.png"
            width={400} //
            height={150} //
            alt="capture3"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex gap-[1rem] pl-10">
        {/* text */}
        <h2 className="flex flex-col text-[35px] text-blue-950 font-semibold">
          creative indigo production<span>is...</span>
        </h2>
        <Image
          src="/capture4.png"
          width={100}
          height={100}
          alt="capture4"
          className=""
        />
      </div>
    </div>
  );
};

export default FirstSection;
