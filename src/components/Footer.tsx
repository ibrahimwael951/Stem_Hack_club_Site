import Link from "next/link";
// icon
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHackclub } from "react-icons/si";
// data
import FLink from "@/Data/Links.json";

const Footer = () => {
  

  return (
    <section className="p-10 bg-slate-700 dark:bg-neutral-900  flex flex-col sm:flex-row   justify-evenly items-center  gap-10">
      <div className=" flex flex-col justify-evenly items-center sm:items-start">
        <h1 className="text-xl text-white ">Stem Hack Club</h1>
        {FLink.Footer.map((link, index) => (
          <Link className=" pl-4 my-1  text-lg cursor-pointer transition text-gray-400 dark:text-neutral-400  hover:translate-y-[-1px]  dark:hover:text-red-500 hover:text-red-500 duration-150" href={link.href} key={index}>
            {link.Title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-6 ">
        <SiHackclub className="text-5xl text-white" />

        <div className="flex justify-center items-center ">
          <a
            className="m-4"
            href="https://github.com/Geo-sudo/Hack-Club-STEM-Egypt-Data"
            target="_blank"
          >
            <FaGithub className="text-white text-4xl hover:text-red-500 hover:-translate-y-1 duration-100" />
          </a>

          <a
            className="m-4 "
            href="mailto:hackclub@stemegypt.edu.eg"
            target="_blank"
          >
            <MdEmail className="text-white text-4xl hover:text-red-500 hover:-translate-y-1 duration-100" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
