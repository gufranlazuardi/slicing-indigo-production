import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#10335D] text-white py-8 px-4 sm:px-10 md:px-20 lg:pl-32 lg:pr-[20rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/indigo-logo-transparent.png"
            width={230}
            height={60}
            alt="indigo-logo"
            className="h-[6rem]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg md:text-xl">
            PT. Creative Indigo Production
          </h3>
          <div className="flex flex-col">
            <p>Jl. Caringin Barat Kav. 10</p>
            <p>Jakarta Selatan 12430</p>
            <p>Indonesia</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg md:text-xl">Office</h3>
          <div className="flex flex-col">
            <p>Phone: +62 21 7590 3208 - 10</p>
            <p>Fax: +62 21 766 1881</p>
            <p>Email: info@creativeindigo.net</p>
          </div>
          <div className="flex flex-col">
            <p>William</p>
            <p>Email: william@creativeindigo.net</p>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm">
        © Copyright 2018 Creative Indigo Production - All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
