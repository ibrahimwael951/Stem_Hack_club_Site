"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface props {
  title: string;
  href: string;
}

const Button: React.FC<props> = ({ href, title }) => {
  return (
    <motion.div
      viewport={{
        once: true,
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1 , opacity: 1 }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className=" border border-red-600 hover:bg-red-500 hover:text-white text-red-600 font-bold  p-4 my-3 rounded-xl"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Button;
