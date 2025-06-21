"use client";
import React, { JSX, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

interface Props {
  title: string;
  value: number;
  icon: JSX.Element;
}

const AnimatedStatCard: React.FC<Props> = ({ title, value, icon }) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex md:flex-col items-center  justify-center gap-16 md:gap-2 bg-neutral-200 dark:bg-neutral-900 p-4 rounded-xl shadow-2xl w-full  md:w-48  my-5 "
    >
      <div className=" text-5xl text-red-500">{icon}</div>
      <div>
        <div className="flex justify-center items-center text-3xl text-red-500">
          <motion.span className="font-bold">{rounded}</motion.span>+
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          {title}
        </p>
      </div>   
    </motion.div>
  );
};

export default AnimatedStatCard;
