import Link from "next/link";
// icon
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHackclub } from "react-icons/si";
// data
import FLink from "@/Data/Links.json";

const Footer = () => {
  const LiStyle =
    " pl-4  cursor-pointer transition dark:text-white  hover:translate-y-[-1px] text-gray-400 hover:text-red-500 duration-150";

  return (
    <section className="p-10 bg-slate-800 dark:bg-gray-950  flex   justify-evenly items-center  gap-5">
      <div className="flex flex-col justify-evenly">
        <h1 className="text-xl text-white ">Stem Hack Club</h1>
        {FLink.Footer.map((link, index) => (
          <Link className={LiStyle} href={link.href} key={index}>
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
            <FaGithub className="text-white text-4xl hover:text-red-500" />
          </a>

          <a
            className="m-4 "
            href="mailto:hackclub@stemegypt.edu.eg"
            target="_blank"
          >
            <MdEmail className="text-white text-4xl hover:text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
