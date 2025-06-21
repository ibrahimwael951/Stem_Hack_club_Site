"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-20 px-5 lg:px-20 py-20 h-fit flex flex-col gap-20 justify-center items-center min-h-screen  z-20   overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="relative rounded-2xl    shadow-2xl p-7 w-full max-w-3xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-25 blur-3xl  -z-10" />
        <h1 className="text-white dark:text-white mb-2">Donate Us </h1>
        <p className="ml-4 mb-5  text-neutral-200 dark:text-neutral-200">
          STEM Egypt Hack Club is a youth-led initiative uniting passionate
          teens from across Egypt to learn, build, and create with technology.
        </p>

        <div className="w-fit">
          <Link href="https://hcb.hackclub.com/donations/start/stem-egypt-hack-club">
            <motion.div
              viewport={{
                once: true,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ duration: 0.2 }}
              className=" border border-red-600   bg-red-600   text-white  font-bold  p-4 my-3 rounded-xl"
            >
              Donate Now
            </motion.div>
          </Link>
        </div>
        <span className="text-neutral-200 text-sm    ">
          Hack Club is a 501(c)(3) nonprofit with the EIN 81-2908499.
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
