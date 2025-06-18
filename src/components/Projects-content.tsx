"use client"
import Image from "next/image";
import projectsData from "@/Data/Projects.json";
import { motion } from "framer-motion";

const bgProjects = () => {
  return (
    <div className=" py-20 px-10 lg:px-20 h-fit w-full flex flex-wrap justify-center items-center gap-x-5 gap-y-10">
      {projectsData.map((project, index) => (
        <motion.a
        viewport={{
            once:true,
            amount:0.5,
          }} 
          initial={{
            scale:0,
            opacity:0
          }}
          whileInView={{
            scale:1,
            opacity:1
          }}
          whileHover={{
           y:-20
          }}
          whileTap={{
            scale:0.9,
          transition:{duration:0.1}
          }}
          transition={{duration:0.3 , type:"spring" , stiffness:100 }}
          key={index}
          href={project.link}
          target="_blank"
          className="cursor-pointer"
        >
          <div className=" relative group overflow-hidden  flex flex-col justify-evenly items-center  h-[250px]   w-80 sm:w-[250px] rounded-2xl border-2 dark:border-neutral-800 border-gray-200 duration-200">
            <Image
              src={`${project.image}`}
              alt={project.Title}
              width={500}
              height={500}
              quality={100}
              className="object-cover group-hover:brightness-75  h-full w-full duration-200"
            />
            <div className="bg-gray-200 dark:bg-neutral-800  w-full px-5 absolute bottom-0 left-0  ">
              <h3 className=" text-neutral-900 dark:text-white text-sm font-semibold mt-2">
                {project.Title}
              </h3>
              <p className=" text-xs ml-2 text-neutral-700  dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default bgProjects;
