"use client";
import React from "react";
import AnimatedStatCard from "../ui/AnimatedStatCard";
import { PiStudentFill } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdDoneAll } from "react-icons/io";

const Impact = () => {
  const Statistics = [
    { icon: <PiStudentFill />, title: "Students Reached", value: 1500 },
    { icon: <GoProjectRoadmap />, title: "Students Projects", value: 235 },
    { icon: <IoMdDoneAll />, title: "Sessions Delivered", value: 380 },
  ];
  return (
    <section className="py-10 md:flex justify-center items-center gap-10 ">
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
