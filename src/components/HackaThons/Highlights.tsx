"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="min-h-screen my-20">
      <h1 className="mb-10 ">{title}</h1>

      <motion.div
        className="w-full  bg-red-500 mx-auto md:max-w-6xl bg-transparent " 
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel >
          <CarouselContent  className="-ml-1">
            {Highlights.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 max-h-[500px] w-[300px] mx-auto     cursor-grab active:cursor-grabbing select-none duration-75 flex   h-full items-center justify-center p-1 rounded-2xl border-white overflow-hidden"
              >
                      <Image
                        src={item.Image}
                        alt={item.caption || "image"}
                        width={1000}
                        height={1000}
                        quality={100}
                        className="object-cover  h-full w-full"
                      />
              </CarouselItem>
            ))}
          </CarouselContent>
          <p className="w-full text-center text-base animate-bounce pt-4 text-black dark:text-white duration-1000">
            Swipe to see more pictures
          </p>
        </Carousel>
      </motion.div>
      
    </section>
  );
};

export default Highlights;
