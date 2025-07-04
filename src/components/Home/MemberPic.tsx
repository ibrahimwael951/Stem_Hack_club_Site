"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import MemberPic from "@/Data/Images.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HomeMemberPic = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row  gap-5 justify-between  items-center select-text ">
      {/* left side */}
      <div className="w-full lg:w-2/5  ">
        <motion.h1
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          Our Community
        </motion.h1>
        <motion.p
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 pl-5"
        >
          Our community is full of creativity and mutual support. We’re always
          there for each other, sharing knowledge and experiences, and everyone
          adds great value to one another. The atmosphere here is warm,
          positive, and welcoming, something you don’t easily find anywhere
          else. On top of that, the community is constantly evolving, keeping up
          with the latest advancements in technology, which makes our
          collaboration even more productive and efficient. We’re all on a
          continuous journey of growth and development
        </motion.p>
      </div>

      {/* right side */}
      <motion.div
        className="w-full lg:w-2/4 max-w-96  md:max-w-2xl bg-transparent "
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel>
          <CarouselContent className="-ml-1">
            {MemberPic.members.map((Pictures, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 2xl:basis-1/3  cursor-grab active:cursor-grabbing select-none duration-75 "
              >
                <div className=" p-1">
                  <Card className="border-white overflow-hidden">
                    <CardContent className=" flex  items-center justify-center  p-0 ">
                      <Image
                        src={`${Pictures.src}`}
                        alt={`${Pictures.alt}`}
                        width={1000}
                        height={1000}
                        quality={100}
                        className="object-cover  h-full w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <p className="w-full text-center text-base animate-bounce pt-4 text-black dark:text-white duration-1000">
            Swipe to see more pictures
          </p>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default HomeMemberPic;
