"use client";
import Image from "next/image";

// animation for scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HackthonsContent = () => {
  // animation
  useEffect(() => {
    Aos.init();
  }, []);
  const SrcImg = [
    "/images/counterspell-cairo.png",
    "/images/moonlit hacks.png",
  ];
  return (
    <div className="p-10 flex flex-col  gap-14 items-center h-fit md:h-screen">
      <div className="">
        <h1 data-aos="fade-right">What's a Hackathon</h1>
        <p data-aos="fade-right" className="ml-4">
          A hackathon is a space that helps give makers everything they need to
          start building–mentors, collaborators, inspiration, and a goal to work
          towards. Hackers will leave a hackathon with a project of their own,
          ready and excited to keep hacking once they get home.
        </p>
      </div>

      <h1>our last Hackathons</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {SrcImg.map((src, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className=" p-10 h-52 w-80 bg-slate-400 dark:bg-neutral-900  rounded-md flex flex-col gap-4  justify-center items-center  select-none group hover:scale-110 hover:-translate-y-3"
          >
            <Image
              src={src}
              width={500}
              height={500}
              alt="pic"
              className="group-hover:scale-90"
            />

            <h1 className="text-lg group-hover:scale-125 text-white dark:text-white">
              MoonLit Hacks
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackthonsContent;
