"use client";
import React from "react";
import { motion } from "framer-motion";

const DEF = {
  viewport: {
    once: true,
    amount: 0.5,
  },
  transition: {
    duration: 0.5,
  },
};
const h1Motion = {
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
};
const pMotion = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

const TeenHackCompetition = () => {
  return (
    <section className="overflow-x-hidden px-5 lg:px-20 py-32 min-h-screen w-full">
      <div>
        <motion.h1 {...DEF} {...h1Motion} className="mb-2">
          Teen Hack Challenge
        </motion.h1>
        <motion.p {...DEF} {...pMotion} className="ml-4">
          Teen Hack Challenge is an international competitive Programming
          Competition Founded and Organized by STEM Egypt Hack Clubʼs
          Competitive Programming Council.
        </motion.p>

        <motion.p {...DEF} {...pMotion} className="ml-4">
          The competition will be in CPC style which means you have 8 problems
          with ranged difficulties to solve as fast as possible within 3 hours.
          The competition will be individual. All codes will be checked for AI
          detection and any overlapping between two codes will lead to immediate
          elimination.
        </motion.p>

        <motion.p {...DEF} {...pMotion} className="ml-4">
          Click
          <a
            className="mx-1 "
            href="https://www.whatsapp.com/channel/0029ValGIZT3wtbFrbpNFU0I"
          >
            Here
          </a>
          to join the whatsapp channel of the competition to stay updated
        </motion.p>
      </div>

      <div className=" flex flex-col gap-10 my-10">
        <h1>The Syllabus</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative">
            <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
            <h2 className="mb-2">Junior Division</h2>
            <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
              {[
                "STLs",
                "Greedy Algorithms",
                "Static Ranged Queries",
                "Binary Search",
                "2 Pointers",
                "Iterative and Recursive Complete Search",
                `Number Theory (GCD - LCM - Primes & Factors - Sieve of
                Eratosthenes & Basics of Counting)`,
                "Bitwise operators and Bitmasking",
              ].map((item, index) => (
                <motion.li
                  {...DEF}
                  {...h1Motion}
                  key={item}
                  transition={{ delay: index / 6 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
            <h2 className="mb-2">Senior Division</h2>
            <motion.p {...DEF} {...h1Motion}>
              All knowledge from junior division, but harder versions from each
              topic in addition to:
            </motion.p>
            <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
              {["Graph Theory", "Dynamic Programming", "Segment Trees"].map(
                (item, index) => (
                  <motion.li
                    {...DEF}
                    {...h1Motion}
                    key={item}
                    transition={{ delay: index / 6 }}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="relative">
          <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
          <h2 className="mb-2">Rules & Guidlines</h2>
          <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
            {[
              `  All codes will be checked for AI detection and any overlapping
              between two codes will lead to immediate elimination.`,
              `The competition will be in CPC style which means you have 8
              problems with ranged difficulties to solve as fast as possible
              within 3 hours.`,
              ` The competition will be individual`,
              `Official candidates for the round's rewards will be students
              enrolled in grades 7 through 12. Other pupils, such as graduates,
              won't be taken into consideration`,
            ].map((item, index) => (
              <motion.li
                {...DEF}
                {...h1Motion}
                key={item}
                transition={{ delay: index / 6 }}
              >
                {item}
              </motion.li>
            ))}
            
          </ul>
        </div>
      </div>
      <div>
        <h1 className="w-full h-40 rounded-2xl flex justify-center items-center bg-red-600  text-white">
          Will Be Available Soon
        </h1>
      </div>
    </section>
  );
};

export default TeenHackCompetition;
