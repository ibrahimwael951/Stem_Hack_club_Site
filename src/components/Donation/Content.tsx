"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../ui/Button";
const DonationContent = () => {


  return (
    <section className="py-10 h-fit flex flex-col gap-20 justify-evenly">
      <div>
        <motion.h1
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          {" "}
          Hack Club of STEM Egypt
        </motion.h1>

        <motion.p
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="ml-4 "
        >
          STEM Egypt Hack Club is a youth-led initiative uniting passionate
          teens from across Egypt to learn, build, and create with technology.
          Through hands-on workshops, hackathons, and peer mentorship, we
          provide a space where students turn their ideas into real projects—all
          completely free. We believe that access to technology and learning
          should never depend on money, and we’re committed to keeping it that
          way. We can’t do that without your help.
        </motion.p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className=" w-full lg:w-2/3  ">
          <motion.h1
            viewport={{
              once: true,
              amount: 0.5,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            Why Donate?
          </motion.h1>
          <motion.p
            viewport={{
              once: true,
              amount: 0.5,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            STEM Egypt Hack Club is part of Hack Club, a global{" "}
            <span className="text-red-600"> nonprofit </span> that empowers
            student-led coding communities. As a non-profit organization, every
            contribution goes directly toward helping us organize more free,
            high-quality events for teens across Egypt. Your support enables us
            to run unforgettable experiences like Scrapyard Giza, the #1
            hackathon worldwide for high school students. Hack Club is a
            registered{" "}
            <span className="text-red-600"> 501(c)(3) nonprofit </span> in the
            United States, and your contribution is tax-deductible (EIN
            81-2908499). We’re committed to building a future where every
            student has access to the tools and community they need to build
            with technology.
          </motion.p>
          <div className="mt-10 w-fit mx-auto">
            <Button
              title="Donate Now"
              href="https://hcb.hackclub.com/donations/start/stem-egypt-hack-club"
            />
          </div>
        </div>
        <motion.div
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/4"
        >
          <Image
            className=" w-full  max-w-xl rounded-3xl"
            src="/images/Members-pictures/bolbol.png"
            alt="Image for bolbol"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
      
    </section> 
  );
};

export default DonationContent;
