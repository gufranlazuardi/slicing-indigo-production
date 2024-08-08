import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const programsData = [
  {
    src: "/program2.jpg",
    alt: "Indigo Studio",
    title: "Indigo Studio",
  },
  {
    src: "/program6.jpg",
    alt: "Selebrita Pagi Studio",
    title: "Selebrita Pagi Studio",
  },
  {
    src: "/program8.jpg",
    alt: "Cekidot Show Studio",
    title: "Cekidot Show Studio",
  },
  {
    src: "/program7.jpg",
    alt: "Hot Kiss Studio",
    title: "Hot Kiss Studio",
  },
  {
    src: "/program4.jpg",
    alt: "Silet Studio",
    title: "Silet Studio",
  },
  {
    src: "/program5.jpg",
    alt: "Intens Studio",
    title: "Intens Studio",
  },
  {
    src: "/program3.jpg",
    alt: "Makeup Studio",
    title: "Makeup Studio",
  },
  {
    src: "/program1.jpg",
    alt: "Sky Studio",
    title: "Sky Studio",
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col gap-[6rem] bg-[#10335D]">
      <Image
        src="/program-top-section.png"
        alt="program-top-section"
        width={100}
        height={300}
        className="w-full"
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 px-2">
        {programsData.map((program, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="relative">
                <Image
                  src={program.src}
                  alt={program.alt}
                  width={350}
                  height={100}
                />
                <div className="flex absolute w-full bottom-0 h-[3.5rem] bg-gray-600 bg-opacity-40 text-white pl-[1rem] items-center font-light text-sm">
                  {program.title}
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
