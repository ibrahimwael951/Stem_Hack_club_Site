"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

//components
import Background from "@/components/ui/Background";
export default function page() {
  const hackathons = [
    {
      image: "/images/counterspell-cairo.png",
      title: "Counterspell-Giza",
      link: "https://counterspell.hackclub.com/giza",
    },
    {
      image: "/images/scrapyard.png",
      title: "Scrapyard",
      link: "https://scrapyard.hackclub.com/",
    },
    // {image:"/images/moonlit hacks.png", title:"Moonlit Hack "},
  ];
  return (
    <section className="w-full">
      <Background
        src="/images/Hackthons2.png"
        title="HCSE Hackathon"
        desc="great way to learn and have fun "
      />
      <section className="px-5 lg:px-20 py-10 flex flex-col  gap-14 items-center h-fit md:h-screen">
        <div className="w-full overflow-x-hidden">
          <motion.h1
            viewport={{
              once: true,
              amount: 0.5,
            }}
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            What's a Hackathon
          </motion.h1>
          <motion.p
            viewport={{
              once: true,
              amount: 0.5,
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            A hackathon is a space that helps give makers everything they need
            to start building–mentors, collaborators, inspiration, and a goal to
            work towards. Hackers will leave a hackathon with a project of their
            own, ready and excited to keep hacking once they get home.
          </motion.p>
        </div>

        <motion.h1
          viewport={{
            once: true,
            amount: 0.5,
          }}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          Our last Hackathons
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          {hackathons.map((component, index) => (
            <motion.div
              viewport={{
                once: true,
                amount: 0.5,
              }}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              key={index}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={component.link}
                className=" p-10 h-72 w-80 bg-white shadow-[0_12px_12px_6px_rgba(23,23,23,0.2)] dark:bg-neutral-900  rounded-md flex flex-col gap-4  justify-evenly items-center  select-none"
              >
                <Image
                  src={component.image}
                  width={500}
                  height={500}
                  alt="pic"
                  className=""
                />

                <h1 className="text-lg text-gray-800 dark:text-white">
                  {component.title}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
