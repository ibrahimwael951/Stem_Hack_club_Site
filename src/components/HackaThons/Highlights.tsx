"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface props {
  Highlights: {
    caption?: string;
    Image: string;
  }[];
  title?: string;
}

const Highlights: React.FC<props> = ({ Highlights, title = "Highlights" }) => {
  const Animate = {
    viewport: { once: true, amount: 0.5 },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <section className=" my-20 ">
      <h1 className="mb-10">{title}</h1>

      <motion.div {...Animate} className="w-full mx-auto md:max-w-6xl">
        <Carousel className="max-w-6xl">
          <CarouselContent className="-ml-1">
            {Highlights.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-full sm:basis-1/2 lg:basis-1/2 2xl:basis-1/3 cursor-grab active:cursor-grabbing select-none duration-75 "
              >
                <div className="w-full aspect-[2/2.3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.Image}
                    alt={item.caption || "image"}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="w-full text-center text-base animate-bounce pt-4 text-black dark:text-white duration-1000">
          Swipe to see more pictures
        </p>
      </motion.div>
    </section>
  );
};

export default Highlights;
