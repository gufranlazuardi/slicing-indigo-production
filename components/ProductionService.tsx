import Image from "next/image";
import React from "react";

const ProductionService = () => {
  return (
    <div className="flex flex-col bg-black pt-[2rem] pl-[2.5rem] border-t-white border">
      <div className="flex flex-col text-white">
        <h2 className="text-[36px] font-semibold">
          production service
        </h2>
        <h3 className="text-xl font-light">FOR PROMOTERS</h3>
      </div>

      <div className="flex flex-col mt-[1rem] md:mt-[2rem] lg:mt-[3rem] xl:mt-[3rem] text-gray-400">
        <p className="text-[17px] md:text-[18px] lg:text-[20px] xl:text-[20px] max-w-[45rem]">
          Promote and provide a production and exclusive documentation
          of artists and promoters.
        </p>
        <p className="text-[16px] mt-[2rem] max-w-[40rem] md:max-w-[42rem] lg:max-w-[45rem] xl:max-w-[45rem]">
          With professional Show Directors, Cameramen, and supporting
          crews. Our portfolio are Linkin Park, Simple Plan, G Dragon,
          Big Bang, Adam Lambert, Demi Lovato, David Foster, Lenka and
          many more.
        </p>
      </div>
      <Image
        src="/konser.png"
        alt="konser"
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
};

export default ProductionService;
