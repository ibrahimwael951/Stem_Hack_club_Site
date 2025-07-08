import Image from "next/image";

import React from "react";
interface props {
  sponsors: {
    title: string;
    image: string;
    link: string;
  }[];
}
const Sponsors: React.FC<props> = ({ sponsors }) => {
  return (
    <section>
      <h1>Partners and Sponsors</h1>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row my-10">
        {sponsors.map((item, i) => (
          <a
            key={item.title || i}
            target="_blank"
            href={item.link}
            className=" bg-neutral-200 dark:bg-neutral-950 cursor-pointer flex flex-col justify-evenly gap-5 items-center w-60 h-60 rounded-2xl p-5 overflow-hidden border"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className=" rounded-xl w-full h-3/4 object-cover "
            />
            <p className="text-sm text-center">{item.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
