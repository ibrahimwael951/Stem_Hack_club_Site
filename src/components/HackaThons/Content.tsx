"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface props {
  image: string;
  title: string;
  desc_1: string;
  desc_2: string;
  desc_3: string;
  desc_4: string;
  Link: {
    title: string;
    href: string;
  };
}
const Content: React.FC<props> = ({
  Link,
  desc_1,
  desc_2,
  desc_3,
  desc_4,
  title,
  image,
}) => {
  return (
    <section className="    h-fit flex flex-col lg:flex-row gap-20 justify-evenly items-center">
      <div className="w-full lg:w-2/4 ">
        <motion.h1
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          {title}
        </motion.h1>
        <motion.p
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="ml-4 "
        >
          {desc_1}
          <a href={Link.href}> {Link.title} </a>
          {desc_2}
          <br /> <br />
          {desc_3}
          <br />
          <br />
          {desc_4}
        </motion.p>
      </div>
      <Image
        className="w-full lg:w-2/4 rounded-2xl"
        src={image}
        alt={title}
        width={1000}
        height={1000}
      />
    </section>
  );
};

export default Content;
