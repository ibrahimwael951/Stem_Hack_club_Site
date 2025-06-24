"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface props {
  image: string;
  name: string;
  position: string;
  description: string;
}

const CommentCard: React.FC<props> = ({
  image,
  name,
  position,
  description,
}) => {
  return (
    <div className="relative  lg:w-[500px] lg:h-[400px] min-h-[300px] sm:h-[300px] rounded-2xl flex flex-col justify-between lg:justify-normal  sm:flex-row lg:mb-20 border border-red-600 lg:border-0 ">
      <div
        className=" m-2 sm:m-0 bg-red-500 w-10 h-10 sm:h-full sm:min-w-[200px] lg:w-[250px] lg:h-[400px] flex justify-center items-center overflow-hidden rounded-2xl border-t border-l border-red-600"
      >
        {image ? (
          <Image
            src={image}
            alt={name + "image"}
            width={1000}
            height={1000}
            draggable={false}
            className="object-cover w-full h-full"
          />
        ) : (
            <div className="flex justify-center items-center">

          <p className="hidden sm:inline text-white dark:text-white text-center">
            NO Image Sends
          </p>
          <span className="text-white sm:hidden">{name.charAt(0)}</span>
            </div>
        )}
      </div>
      <motion.div
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 flex flex-col justify-center items-center text-center sm:text-start w-full   sm:w-4/5  h-fit sm:h-full lg:h-fit lg:absolute lg:-bottom-32 lg:right-0  rounded-2xl overflow-hidden lg:border-r lg:border-b border-red-600 z-10"
      >
        <div className="hidden lg:inline absolute top-0 left-0 w-full h-full blur-3xl dark:bg-black bg-white -z-[1]" />
        <p className=" w-full">{description}</p>
        <h1 className="text-lg text-red-600 ">
          — {name}
          <span className="text-xs text-neutral-700 dark:text-neutral-400 ml-1">
           , {position}
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default CommentCard;
 //