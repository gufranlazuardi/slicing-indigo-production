"use client";

import {
  Home,
  LayoutGrid,
  SlidersVertical,
  Smartphone,
  Smile,
  Star,
  TvMinimal,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ToogleNavbar from "./ToogleNavbar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <nav className="flex w-full justify-between bg-[#10335D] px-[5rem] py-2 sticky top-0 z-80">
        {/* gambar */}
        <button onClick={handleLogoClick}>
          <Image
            src="/indigo-logo-transparent.png"
            width={150}
            height={200}
            alt="indigo-logo-transparent"
          />
        </button>
        {/* navbar button component */}
        <div className="flex items-center">
          {isLargeScreen ? (
            <ul className="flex items-center justify-center gap-4">
              <li className="flex items-center gap-1 cursor-pointer">
                <Home size={18} color="white" />
                <p className="text-white text-[12px]">About Us</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <UsersRound size={18} color="white" />
                <p className="text-white text-[12px]">Team</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <SlidersVertical size={18} color="white" />
                <p className="text-white text-[12px]">Facilities</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <Star size={18} color="white" />
                <p className="text-white text-[12px]">Achievements</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <TvMinimal size={18} color="white" />
                <p className="text-white text-[12px]">Programs</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <Smile size={18} color="white" />
                <p className="text-white text-[12px]">
                  Education Project
                </p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <LayoutGrid size={18} color="white" />
                <p className="text-white text-[12px]">Subsidiaries</p>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <Smartphone size={18} color="white" />
                <p className="text-white text-[12px]">Contact</p>
              </li>
            </ul>
          ) : (
            <ToogleNavbar />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
