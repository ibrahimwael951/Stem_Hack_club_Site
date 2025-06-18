"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Homehackthon = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:justify-between gap-10 items-center w-full  ">
      <div className="lg:w-2/4  flex flex-col justify-center items-center gap-2 text-center ">
        <motion.h1
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          Hackathons
        </motion.h1>
        <motion.p
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-4"
        >
          Hackathons are events where participants are given a set amount of
          time to create a product or solution to a problem. They are often used
          to encourage innovation and creativity, and can be a great way to
          learn new skills and network with others.
        </motion.p>
        <Link
          href="/Hackathons"
          className="bg-red-500 hover:bg-red-700 hover:text-white text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>

      <motion.div
        viewport={{
          once: true,
          amount: 0.5,
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" select-none rounded-xl w-full md:w-2/4 max-w-lg overflow-hidden"
      >
        <Image
          className="w-full h-full "
          src="/images/Hackthons2.png"
          alt="Hackthons Image"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
};

export default Homehackthon;
