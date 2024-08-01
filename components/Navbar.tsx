import { Home } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex mx-auto w-full justify-between bg-[#cl] px-[5rem] py-2">
        {/* gambar */}
        <Image
          src="/indigo-logo-transparent.png"
          width={150}
          height={200}
          alt="indigo-logo-trasparent"
        />
        {/* navbar button component */}
        <div className="flex items-center">
          <ul className="flex items-center justify-center gap-4">
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Home</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Team</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Facilities</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Achievements</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Programs</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">
                Education Project
              </p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Subsidiaries</p>
            </li>
            <li className="flex items-center gap-1">
              <Home size={18} color="white" />
              <p className="text-white text-[12px]">Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
