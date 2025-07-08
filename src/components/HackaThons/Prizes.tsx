"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PrizesProps {
  Prizes: {
    position: string;
    gifts: string;
    image: string;
  }[];
}

interface CardProps {
  position: string;
  gifts: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ image, gifts, position }) => {
  return (
    <motion.div
      viewport={{
        once: true,
        amount: 0.5,
      }}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative w-72 h-60  border bg-neutral-200 dark:bg-neutral-950 border- red-600 pt-28 px-5 text-center rounded-2xl"
    >
      <motion.div
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.3,
          delay: 0.34,
        }}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        className="absolute w-full h-52 -top-28 left-0"
      >
        <Image
          src={image}
          alt={gifts}
          width={500}
          height={500}
          className=" object-cover  w-full h-full "
        />
      </motion.div>
      <h1 className="text-red-600  dark:text-red-600 font-bold"> {position}</h1>
      <p className="text-neutral-500 dark:text-neutral-200 text-center mt-2">{gifts}</p>
    </motion.div>
  );
};

const Prizes: React.FC<PrizesProps> = ({ Prizes }) => {
  return (
    <section className=" my-20">
      <h1>Prizes</h1>
      <div className=" w-fit m-auto flex flex-col md:flex-row flex-wrap  justify-center items-end gap-y-40 gap-10 mt-28 ">
        {Prizes.map((item) => (
          <Card
            key={item.position} 
            gifts={item.gifts}
            image={item.image}
            position={item.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Prizes;
