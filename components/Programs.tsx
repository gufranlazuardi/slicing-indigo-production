import React from "react";
import Image from "next/image";

const Programs = () => {
  return (
    <div className="flex flex-col gap-[6rem] bg-[#10335D]">
      <Image
        src="/program-top-section.png"
        alt="program-top-section"
        width={100}
        height={100}
        className="w-full"
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 px-2">
        <div className="relative">
          <Image
            src="/program2.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Indigo Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program6.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Selebrita Pagi Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program8.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Cekidot Show Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program7.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Hot Kiss Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program4.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Silet Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program5.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Intens Studio
          </div>
        </div>{" "}
        <div className="relative">
          <Image
            src="/program3.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Makeup Studio
          </div>
        </div>
        <div className="relative">
          <Image
            src="/program1.jpg"
            alt="program1"
            width={350}
            height={100}
          />
          <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
            Sky Studio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
