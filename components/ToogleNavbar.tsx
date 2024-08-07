import {
  Home,
  Menu,
  UsersRound,
  SlidersVertical,
  Star,
  TvMinimal,
  Smile,
  LayoutGrid,
  Smartphone,
} from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const ToogleNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu color="white" size={30} />
      </SheetTrigger>

      <SheetContent side="top" className="bg-[#10335D]">
        <ul className="text-white flex flex-col justify-center items-center gap-[1rem]">
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <Home size={18} />
            <p className="text-[12px]">About Us</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <UsersRound size={18} />
            <p className="text-[12px]">Team</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <SlidersVertical size={18} />
            <p className="text-[12px]">Facilities</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <Star size={18} />
            <p className="text-[12px]">Achievements</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <TvMinimal size={18} />
            <p className="text-[12px]">Programs</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <Smile size={18} />
            <p className="text-[12px]">Education Project</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <LayoutGrid size={18} />
            <p className="text-[12px]">Subsidiaries</p>
          </li>
          <li className="flex items-center justify-center gap-2 cursor-pointer">
            <Smartphone size={18} />
            <p className="text-[12px]">Contact</p>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default ToogleNavbar;
