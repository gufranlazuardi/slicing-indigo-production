import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

const programsData = [
  {
    src: "/images/program2.jpg",
    alt: "Indigo Studio",
    title: "Indigo Studio",
  },
  {
    src: "/images/program6.jpg",
    alt: "Selebrita Pagi Studio",
    title: "Selebrita Pagi Studio",
  },
  {
    src: "/images/program8.jpg",
    alt: "Cekidot Show Studio",
    title: "Cekidot Show Studio",
  },
  {
    src: "/images/program7.jpg",
    alt: "Hot Kiss Studio",
    title: "Hot Kiss Studio",
  },
  {
    src: "/images/program4.jpg",
    alt: "Silet Studio",
    title: "Silet Studio",
  },
  {
    src: "/images/program5.jpg",
    alt: "Intens Studio",
    title: "Intens Studio",
  },
  {
    src: "/images/program3.jpg",
    alt: "Makeup Studio",
    title: "Makeup Studio",
  },
  {
    src: "/images/program1.jpg",
    alt: "Sky Studio",
    title: "Sky Studio",
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col gap-[6rem] bg-[#10335D] px-[0.5rem] py-[6rem]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 px-2 ">
        {programsData.map((program, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="relative group hover:opacity-40 transition-all">
                <Image
                  src={program.src}
                  alt={program.alt}
                  width={350}
                  height={100}
                />
                <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-opacity-50 bg-gray-500 text-white pl-[1rem] items-center font-light text-sm">
                  {program.title}
                </div>
                <div className="hover:absolute opacity-0 hidden group-hover:opacity-100 transition-all">
                  <Search />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none">
              <Image
                src={program.src}
                alt={program.alt}
                width={300}
                height={100}
                className="w-full h-full"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Programs;
