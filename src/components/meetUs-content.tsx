"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
// data
import BoardData from "../Data/ourBoard.json";

const MeetUsContent = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 px-20">
      <motion.h1
        className="text-5xl"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
      >
        Meet Us
      </motion.h1>

      <div className="flex gap-4 mb-4">
        {["2025", "2024", "2023", "2022"].map((year) => (
          <motion.button
            viewport={{
              once: true,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.2,
              fontSize: "20px",
            }}
            whileTap={{
              scale:0.8,
              transition:{duration:0.1}
            }}
            transition={{ duration: 0.2 }}
            key={year}
            onClick={() => handleYearChange(year)}
            className="p-4 border border-red-500   hover:text-white hover:bg-red-600    rounded-2xl"
          >
            {year}
          </motion.button>
        ))}
      </div>

      <div
        className="flex flex-wrap gap-5 justify-center items-center"
        key={selectedYear}
      >
        {BoardData.map(
          (member, index) =>
            (selectedYear === null ||
              String(member.year) === String(selectedYear)) && (
              <motion.div
                viewport={{
                  once: true,
                }}
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
              
                transition={{ duration: 0.4 ,type:"spring",stiffness:100 }}
                key={index}
                className="group  relative overflow-hidden h-fit w-fit flex flex-col justify-end items-center rounded-xl"
              >
                <Image
                  className=" group-hover:scale-110 h-auto md:w-64 -z-0 select-none bg-white duration-200"
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                />
                <div className="absolute -bottom-1 left-0 w-full flex flex-col justify-center items-center bg-gradient-to-t from-black via-[#000000a1] to-transparent bg-opacity-45">
                  <h2 className="text-white dark:text-white  text-lg text-shadow">
                    {member.name}
                  </h2>
                  <p className="text-white dark:text-white  text-xs flex text-center text-shadow">
                    {member.description}
                  </p>
                </div>

                <div className="group-hover:opacity-100  opacity-0 absolute bottom-0 h-full w-full bg-black bg-opacity-55 z-0   flex gap-4  flex-col justify-center items-center p-4  duration-200 ">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 translate-x-12 duration-200"
                    >
                      <FaGithub size={30} />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 -translate-x-12 duration-200"
                    >
                      <FaFacebook size={30} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 translate-x-12 duration-200"
                    >
                      <FaEnvelope size={30} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 -translate-x-12 duration-200"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default MeetUsContent;
