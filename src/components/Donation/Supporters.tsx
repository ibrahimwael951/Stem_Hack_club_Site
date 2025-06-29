"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const Supporters = () => {
  const Companies = [
    {
      title: "STEM High School for Boys- 6th of October",
      image: "/Supporters/STEM.png",
      description:
        "Home to the STEM Egypt Hack Club, this school serves as our headquarters—where all club meetings, workshops, and planning take place. It also proudly hosted Counterspell Giza, the world’s #1 high school game jam",
    },
    {
      title: "Chucklefish ",
      image: "/Supporters/Chucklefish.webp",
      description:
        "Chucklefish generously supported Counterspell Giza with €300 in funding, helping us provide exciting prizes and personalized touches that made the event stand out.",
    },
    {
      title: "Masters Language School",
      image: "/Supporters/Masters Language School.png",
      description:
        "Masters Language School hosted Scrapyard Giza, welcoming over 220 participants and providing the space and infrastructure needed to bring Egypt’s largest high school hackathon to life.",
    },
    {
      title: "SwishSwoosh ",
      image: "/Supporters/image.jpg",
      description:
        "SwishSwoosh enhanced the experience of Counterspell Giza by providing every participant with their exclusive Game Jam Sound Pack—a rich collection of over 200 high-quality sound effects that made the games built at the event truly unforgettable.",
    },
  ];
  return (
    <section className="my-10">
      <motion.h1
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Supporters & Partners  
      </motion.h1>
      <motion.p
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ml-4"
      >
        We`re proud to have earned the support of organizations that believe in
        the power of youth, creativity, and technology:
      </motion.p>
      <motion.div
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="rounded-xl h-[400px] overflow-hidden cursor-grab active:cursor-grabbing select-none bg-r ed-700 "
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.3 },
            1280: { slidesPerView: 2.7 },
          }}
        >
          {Companies.map((company, i) => (
            <SwiperSlide
              key={i}
              className=" relative w-36 h-full  border border-red-500 rounded-2xl p-5 cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={company.image}
                  alt={company.title}
                  width={200}
                  height={200}
                  className=" max-w-40 w-fit h-32 rounded-2xl object-cover"
                />
                <h2 className=" text-xl lg:text-2xl cursor-grab active:cursor-grabbing">
                  {company.title}
                </h2>
              </div>
              <p className="cursor-grab active:cursor-grabbing    w-full p-5 flex justify-center items-center">
                {company.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Supporters;
