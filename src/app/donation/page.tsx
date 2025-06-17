import React from "react";
import Image from "next/image";
import Background2 from "@/components/ui/Background2";

export default function page() {
  // const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
  return (
    <section>
      <Background2 
        color1="from-[#222A68]"
        color2="via-[#574AE2]"
        color3="to-[#574AE2]"
        first="Help"
        second="Empower the"
        third="Next Generation"
        fourth="of Innovators."
      />
      <section className="px-5 lg:px-20 py-20 h-fit flex flex-col gap-20 justify-evenly">
        <div>
          <h1 className="mb-2"> Hack Club Stem Egypt</h1>

          <p className="ml-4 ">
            The STEM Hack Club is a youth-led initiative bringing together
            passionate teens from across Egypt to learn, build, and create using
            technology and science. Through workshops, hackathons, and
            mentorship, we empower students to explore STEM fields and solve
            real-world problems. But we cant do it without your support.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className=" w-full lg:w-2/3  ">
            <h1 className="mb-5">Why Donate?</h1>
            <ul className="flex flex-col gap-2 my-2 ml-2 opacity-85 text-lg">
              <li>🔧 Fund hands-on workshops and coding challenges</li>
              <li>🎓 Provide learning resources and mentorship</li>
              <li>💻 Help us get tech equipment and software licenses</li>
              <li>
                🏆 Support local hackathons and teen innovation competitions
              </li>
            </ul>
            <p className="ml-4">
              Every donation, big or small, helps us grow the next generation of
              Egyptian tech leaders and changemakers.
            </p>
            <div className="mt-10 w-fit mx-auto">
              <a
                href="https://hcb.hackclub.com/donations/start/stem-egypt-hack-club"
                className="m-5   p-4 border border-red-600 hover:text-white hover:bg-red-600 rounded-xl"
              >
                Donate Now
              </a>
            </div>
          </div>
          <Image
            className=" w-full lg:w-2/4 max-w-xl rounded-3xl"
            src="/images/Members-pictures/bolbol.png"
            alt="Image for bolbol"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </section>
  );
}
