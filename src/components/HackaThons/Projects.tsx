"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Podium } from "@/Data/HackaThons";
interface props {
  projectLinks: string;
  podium: Podium[];
}
const Projects: React.FC<props> = ({ podium, projectLinks }) => {
  if(podium && projectLinks)
  return (
    <section className="my-20 ">
      <div>
        <h1>Projects</h1>
        <p className="ml-4">
          From weir inventions to unexpectedly brilliant ideas, these are just a
          few highlights from Scrapyard Giza :
        </p>
      </div>
      <div className="flex gap-10 justify-center items-center">
        {podium.map((item, i) => (
          <motion.div
            key={i}
            className="w-80 h-96 overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-950 p-5"
          >
            <Image src={item.image} alt={item.title} width={500} height={500} className="h-2/4 object-cover rounded-2xl " />
            <h1>{item.title}</h1>
            <p className="p-0 ml-4 m-0">{item.description}</p>
            <span>{item.team}</span>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <a href={projectLinks} className="w-fit mx-auto border-red-600 bg-red-600 border-2 hover:bg-transparent p-3 rounded-2xl text-white dark:text-white hover:text-red-600 hover:dark:text-red-600"> View all Project </a>
      </div>

    </section>
  );
};

export default Projects;
