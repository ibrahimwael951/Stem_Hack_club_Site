"use client";
import { motion } from "framer-motion";
import React from "react";
interface props {
  card: {
    title: string;
    p: string;
  }[];
}

const Timeline: React.FC<props> = ({ card }) => {
  return (
    <section className="min-h-screen">
      <h1>Day Timeline</h1>
      <div className="relative md:p-10 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 w-full sm:w-fit mt-10 m-auto">
        {card.map((Item, i) => (
          <motion.div
            key={i}
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0 ,y:20}}
            whileInView={{ opacity: 1 ,y:0}}
            className="w-full sm:w-72 h-60 rounded-2xl bg-neutral-200 dark:bg-neutral-950 border  p-5 flex flex-col justify-center items-center  "
          >
            <h1 className="text-2xl text-center  ">{Item.p}</h1>
            <p>{Item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
