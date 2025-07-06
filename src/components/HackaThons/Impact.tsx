"use client";
import React from "react";
import AnimatedStatCard from "@/components/ui/AnimatedStatCard";
import { PiStudentFill } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { GrWorkshop } from "react-icons/gr";

const Impact = () => {
  const Statistics = [
    { icon: <PiStudentFill />, title: "Sign-ups", value: 281 },
    { icon: <GoProjectRoadmap />, title: "Projects", value: 30 },
    { icon: <GrWorkshop />, title: "Game Dev Workshops", value: 3 },
  ];

  return (
    <section className=" md:flex justify-center items-center gap-10 my-20">
      {Statistics.map((item, i) => (
        <AnimatedStatCard
          key={i}
          title={item.title}
          icon={item.icon}                                                    
          value={item.value} 
        />
      ))}
    </section>
  ); 
}; 

export default Impact;
