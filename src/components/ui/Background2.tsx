"use client"
import { motion, spring } from "framer-motion"

import React from "react";

interface Background2 {
  first: string;
  second: string;
  third: string;
  fourth: string;
  color1:string;
  color2:string;
  color3:string;
}
const Background2: React.FC<Background2> = ({
  first,
  second,
  third,
  fourth,
  color1,
  color2,
  color3,
}) => {
  const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
  const animate = {
    viewport: { once: true, amount: 0.5 },
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 , type: spring , stiffness:400},
  }
  return (
    <div className={`h-[75vh] overflow-hidden  w-full  flex items-center justify-center bg-gradient-to-r from- ${color1} via- ${color2} to- ${color3} dark:bg-gradient-to-l`}>
      <p className="   w-full h-full flex flex-col justify-center items-center ">
        <motion.span {...animate} className={`lg:ml-[-40rem]  ${SpanTitle}`}> {first} </motion.span>
        <motion.span {...animate} className={`lg:ml-[-10rem]  ${SpanTitle}`}>{second} </motion.span>
        <motion.span {...animate} className={`lg:ml-[10rem]   ${SpanTitle}`}> {third} </motion.span>
        <motion.span {...animate} className={`lg:ml-[40rem]   ${SpanTitle}`}> {fourth} </motion.span>
      </p>
    </div>
  );
};

export default Background2;
