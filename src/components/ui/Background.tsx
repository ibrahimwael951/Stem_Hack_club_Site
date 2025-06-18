"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Background {
  title: string;
  src: string;
}
const Background: React.FC<Background> = ({ src, title }) => {
  return (
    <div className="relative h-[75vh] flex justify-center items-center flex-col select-none">
      <Image
        className="object-cover brightness-50 w-full h-full absolute top-0 left-0 "
        src={src}
        alt="Image"
        width={3000}
        height={3000}
      />
      <motion.h1
        viewport={{ once: true, amount: 0.2 }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 ,type:"spring" , stiffness:250 }}
        className=" text-white text-center dark:text-white  text-7xl lg:m-4 z-10 "
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Background;
