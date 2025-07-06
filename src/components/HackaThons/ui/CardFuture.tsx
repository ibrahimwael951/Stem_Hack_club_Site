"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaShirt } from "react-icons/fa6";
import { TbSticker } from "react-icons/tb";
import { GiHotMeal } from "react-icons/gi";
import { IconType } from "react-icons/lib";

interface CardFutureProps {
  title: string;
  description: string;
  icon: IconType;
}

const CardFuture: React.FC<CardFutureProps> = ({
  title,
  description,
  icon,
}) => {

  return (
    <motion.div
      className={`
        p-6 w-full sm:w-72 h-60 
        bg-neutral-200 dark:bg-neutral-950 
        rounded-2xl 
        flex flex-col justify-center items-center text-center
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 
      `}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {React.createElement(icon, {
                size: 50,
                className: "text-red-600",
              })}
      </motion.div>
      <motion.h1
        className="text-2xl font-semibold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-sm mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  ); 
};

export default CardFuture;
