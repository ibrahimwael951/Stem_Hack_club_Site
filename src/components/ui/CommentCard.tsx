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
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:max-w-[800px] 2xl:w-[600px] 2xl:h-[400px] min-h-[300px] sm:h-[300px] rounded-2xl flex flex-col justify-between 2xl:justify-normal  sm:flex-row 2xl:mb-10 border border-red-600 "
    >
      <div className="m-2 sm:m-0 bg-red-500 w-10 h-10 sm:h-full sm:min-w-[200px]  flex justify-center items-center overflow-hidden rounded-2xl border-t border-l border-red-600">
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
      <div className="p-6 flex flex-col justify-center items-center text-center sm:text-start w-full   sm:w-4/5  h-fit sm:h-full   2xl:w-full 2xl:h-full     rounded-2xl overflow-hidden   ">
        <p className=" w-full">{description}</p>
        <h1 className="text-lg text-red-600 ">
          — {name}
          <span className="text-xs text-neutral-700 dark:text-neutral-400 ml-1">
            , {position}
          </span>
        </h1>
      </div>
    </motion.div>
  );
};

export default CommentCard;
//
