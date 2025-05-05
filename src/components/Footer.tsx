import Link from "next/link";
// icon
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHackclub } from "react-icons/si";
// data
import FLink from "@/Data/Links.json";

const Footer = () => {
  return (
    <section className="p-10 bg-gray-200 dark:bg-neutral-900  flex flex-col lg:flex-row overflow-hidden justify-evenly items-center lg:items-start  gap-10">
      <div className=" flex flex-col justify-evenly items-center lg:items-start ">
        <h1 className=" relative text-xl text-neutral-900 dark:text-white flex flex-col justify-center items-center  gap-3 ">
          <SiHackclub className="text-5xl lg:absolute -top-3 -left-16" />
          Stem Hack Club
        </h1>
        {FLink.Nav.slice(0, 5).map((link, index) => (
          <Link
            className=" pl-4 my-1  text-lg cursor-pointer transition text-neutral-700  dark:text-neutral-400  hover:translate-y-[-1px]  dark:hover:text-red-600 hover:text-red-500 duration-150"
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-evenly items-center lg:items-start">
        <h1 className="text-xl text-neutral-900 dark:text-white">Tracks</h1>
        {FLink.Tracks.map((link, index) => (
          <Link
            className=" pl-4 my-1  text-lg cursor-pointer transition text-neutral-700  dark:text-neutral-400  hover:translate-y-[-1px]  dark:hover:text-red-600 hover:text-red-500 duration-150"
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-evenly items-center lg:items-start">
        <h1 className="text-xl text-neutral-900 dark:text-white">
          Events & Competitions
        </h1>
        {FLink.challenges.map((link, index) => (
          <Link
            className=" pl-4 my-1  text-lg cursor-pointer transition text-neutral-700  dark:text-neutral-400  hover:translate-y-[-1px]  dark:hover:text-red-600 hover:text-red-500 duration-150"
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-6 ">
        <SiHackclub className="text-5xl text-neutral-900 dark:text-white" />

        <div className="flex justify-center items-center ">
          <a
            className="m-4"
            href="https://github.com/Geo-sudo/Hack-Club-STEM-Egypt-Data"
            target="_blank"
          >
            <FaGithub className="text-neutral-900 dark:text-white text-4xl dark:hover:text-red-600 hover:text-red-500 hover:-translate-y-1 duration-100" />
          </a>

          <a
            className="m-4 "
            href="mailto:hackclub@stemegypt.edu.eg"
            target="_blank"
          >
            <MdEmail className="text-neutral-900 dark:text-white text-4xl dark:hover:text-red-600 hover:text-red-500 hover:-translate-y-1 duration-100" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
