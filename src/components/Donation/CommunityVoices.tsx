"use client";
import React from "react";
import { motion } from "framer-motion";
import CommentCard from "../ui/CommentCard";
import Comments from "@/Data/DonationComments.json";
import { FaRegHeart } from "react-icons/fa";
const CommunityVoices = () => {
  return (
    <section>
      <div className="text-center">
        <motion.h1
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2  my-10 "
        >
          Voices From Our Community <FaRegHeart className="text-red-600" />
        </motion.h1>
      </div>
      <div className="grid grid-cols-1  2xl:grid-cols-2 gap-y-5 gap-x-10 mx-auto w-fit ">
        {Comments.map((item, i) => (
          <CommentCard
            key={i}
            name={item.name}
            description={item.description}
            image={item.image}
            position={item.position}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunityVoices;
