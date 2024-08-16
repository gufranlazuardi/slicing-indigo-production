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
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const ToogleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu
          color="white"
          size={30}
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>

      <SheetContent side="top" className="bg-[#10335D] z-[1000]">
        <ul className="text-white flex flex-col justify-center items-center gap-[1rem]">
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("about")}
          >
            <Home size={18} />
            <p className="text-[12px]">About Us</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("team")}
          >
            <UsersRound size={18} />
            <p className="text-[12px]">Team</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("facilities")}
          >
            <SlidersVertical size={18} />
            <p className="text-[12px]">Facilities</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("achievements")}
          >
            <Star size={18} />
            <p className="text-[12px]">Achievements</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("our-programs")}
          >
            <TvMinimal size={18} />
            <p className="text-[12px]">Programs</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("jalan-sesama")}
          >
            <Smile size={18} />
            <p className="text-[12px]">Education Project</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("subsidiaries")}
          >
            <LayoutGrid size={18} />
            <p className="text-[12px]">Subsidiaries</p>
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleScrollToSection("footer")}
          >
            <Smartphone size={18} />
            <p className="text-[12px]">Contact</p>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default ToogleNavbar;
