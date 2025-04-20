import React from "react";

const THCContent = () => {
  return (
    <section className=" px-5 lg:px-20 py-32 min-h-screen w-full">
      <div>
        <h1 className="mb-2">Teen Hack Challenge</h1>
        <p className="ml-4">
          Teen Hack Challenge is an international competitive Programming
          Competition Founded and Organized by STEM Egypt Hack Clubʼs
          Competitive Programming Council.
        </p>

        <p className="ml-4">
          The competition will be in CPC style which means you have 8 problems
          with ranged difficulties to solve as fast as possible within 3 hours.
          The competition will be individual. All codes will be checked for AI
          detection and any overlapping between two codes will lead to immediate
          elimination.
        </p>

        <p className="ml-4">
          Click
          <a
            className="mx-1 "
            href="https://www.whatsapp.com/channel/0029ValGIZT3wtbFrbpNFU0I"
          >
            Here
          </a>
          to join the whatsapp channel of the competition to stay updated
        </p>
      </div>

      <div className=" flex flex-col gap-10 my-10">
        <h1>The Syllabus</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative">
            <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
            <h2 className="mb-2">Junior Division</h2>
            <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
              <li>STLs</li>
              <li>Greedy Algorithms</li>
              <li>Static Ranged Queries</li>
              <li>Binary Search</li>
              <li>2 Pointers</li>
              <li>Iterative and Recursive Complete Search</li>
              <li>
                Number Theory (GCD - LCM - Primes & Factors - Sieve of
                Eratosthenes & Basics of Counting)
              </li>
              <li>Bitwise operators and Bitmasking</li>
            </ul>
          </div>

          <div className="relative">
            <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
            <h2 className="mb-2">Senior Division</h2>
            <p>
              All knowledge from junior division, but harder versions from each
              topic in addition to:
            </p>
            <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
              <li>Graph Theory</li>
              <li>Dynamic Programming</li>
              <li>Segment Trees</li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <span className="w-1 h-full bg-red-600 absolute -left-4  top-0 " />
          <h2 className="mb-2">Rules & Guidlines</h2>
          <ul className="ml-7 text-neutral-700 dark:text-neutral-400 list-disc">
            <li>
              All codes will be checked for AI detection and any overlapping
              between two codes will lead to immediate elimination.
            </li>
            <li>
              The competition will be in CPC style which means you have 8
              problems with ranged difficulties to solve as fast as possible
              within 3 hours.
            </li>
            <li>The competition will be individual</li>
            <li>
              Official candidates for the round's rewards will be students
              enrolled in grades 7 through 12. Other pupils, such as graduates,
              won't be taken into consideration
            </li>
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

export default THCContent;
