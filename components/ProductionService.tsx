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

      <div className="flex flex-col mt-[3rem] text-gray-400">
        <p className="text-[20px] max-w-[45rem]">
          Promote and provide multimedia production and exclusive
          documentation of artists and promoters.
        </p>
        <p className="text-[16px] mt-[2rem] max-w-[45rem]">
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
