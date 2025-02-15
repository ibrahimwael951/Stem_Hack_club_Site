import Image from "next/image";
import Link from "next/link";

// animation for scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Homehackthon = () => {
  
  // animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row-reverse lg:justify-between gap-10 items-center w-full  ">
      <div
        data-aos="fade-right"
        className="  flex flex-col justify-center items-center gap-2 text-center "
      >
        <h1 className="mb-3">Hackathons</h1>
        <p className="ml-4">
          Hackathons are events where participants are given a set amount of
          time to create a product or solution to a problem. They are often used
          to encourage innovation and creativity, and can be a great way to
          learn new skills and network with others.
        </p>
        <Link
          href="/Hackathons"
          className="bg-red-500 hover:bg-red-700 hover:text-white text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>

      <Image
        className="select-none rounded-xl w-11/12 md:w-2/4 max-w-lg"
        src="/images/Hackthons2.png"
        alt="Hackthons Image"
        width={500}
        height={500}
      />
    </section>
  );
};

export default Homehackthon;
