"use client"
import { useState } from 'react';
import Image from 'next/image'
import projectsData from "@/Data/Images.json"
const bgProjects = () => {

   
  
  return (
    <div className=" mt-32  mb-10 h-fit flex flex-wrap justify-center items-center gap-x-5 gap-y-10 px-20">

      {projectsData.Projects.map((project) => (
        <div 
          key={project.id} 
          className="hover:-translate-y-2 hover:scale-105    flex flex-col justify-evenly items-center p-5 h-[250px] w-[250px] rounded-2xl border border-black dark:border-white cursor-default"
        >
          <Image
            src={`${project.image}`}  
            alt={project.Title}
            width={500}  
            height={500}  
            quality={100}   
            className="object-cover  h-2/5 w-full" 
            />

          <h3 className="text-sm font-semibold mt-2">{project.Title}</h3>
          <p className="text-xs text-gray-700">{project.description}</p>
          <a href={project.link} target='_blank' className="text-blue-500 hover:underline">View Project</a>
        </div>
      ))}
 
    </div>
  )
}

export default bgProjects

          