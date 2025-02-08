import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import MemberPic from "@/Data/Images.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const QA = () => {
  return (
    <section
      id="Home_Content"
      className="select-text dark:bg-black  cursor-default  px-10 lg:px-20 py-10   h-fit   flex flex-col justify-evenly"
    >
      <div>
        <h1>What's a Hacker?</h1>
        <p>
          A hacker is not always someone who trespasses on banks or plunders a
          friend's V-Bucks. Hackers are individuals who identify problems that
          need to be solved and devise the most practical-efficient solutions.
          These issues frequently call for an inventive mentality, technological
          know-how, and exposure to new ideas. Many can be solved with computers
          or clever engineering. At STEM Egypt Hack Club, we want our hackers to
          be creative problem solvers who are also proficient in coding,
          engineering, and problem-solving.
          <br /> <br />
          Coding and computer science not only apply to specific problems - it
          fundamentally teaches how to solve complex problems using step-by-step
          logic. Coding teaches you how to dissect the issues and find
          solutions, so knowing it is valuable regardless of the job you end up
          choosing. STEM Egypt Hack Club cards are mainly focused on coding and
          engineering, including building unique-new software projects,
          protecting the community's network, conducting research projects and
          articles and much more!
        </p>
      </div>

      <div>
        <h1>What is Hack Club?</h1>
        <p>
          We have an official affiliation with the student organization
          <a href="https://hackclub.com" id="hackclub" target="_blank">
            {" "}
            Hack Club{" "}
          </a>
          , which brings together like-minded makers, coders, and hackers on the
          <a href="https://hackclub.com/slack/" target="_blank">
            {" "}
            Slack{" "}
          </a>
          platform. Numerous unique chances are provided by Hack Club, including
          <a href="https://hackclub.com/amas/" target="_blank">
            {" "}
            AMAs{" "}
          </a>
          with well-known figures in the tech space, including
          <a
            href="https://www.forbes.com/profile/elon-musk/?sh=eddbb347999b"
            target="_blank"
          >
            {" "}
            Elon Musk{" "}
          </a>
          ,
          <a
            href="https://www.forbes.com/profile/gwynne-shotwell/"
            target="_blank"
          >
            {" "}
            Gwen Shotwell{" "}
          </a>
          ,
          <a
            href="https://www.forbes.com/profile/patrick-collison/?sh=42ce855f2727"
            target="_blank"
          >
            {" "}
            Patrick Collison{" "}
          </a>
          , and
          <a href="https://www.youtube.com/watch?v=icyTUMjlvMg" target="_blank">
            {" "}
            Tommy Devoss{" "}
          </a>
          . Additionally, Hack Club hosts international coding competitions
          <i>(in-person and online)</i>
          that are a fantastic opportunity for students to bond and learn what
          it's like to hack in a group setting.
        </p>
      </div>

      <div className=" py-20 w-full flex flex-col lg:flex-row  gap-5 justify-between  items-center select-none ">
        {/* left side */}
        <div className="w-full lg:w-2/5  ">
          <h1 className="mb-10">some pictures of us </h1>
          <p className="text-lg text-gray-700">
            Our community is full of creativity and mutual support. We’re always
            there for each other, sharing knowledge and experiences, and
            everyone adds great value to one another. The atmosphere here is
            warm, positive, and welcoming, something you don’t easily find
            anywhere else. On top of that, the community is constantly evolving,
            keeping up with the latest advancements in technology, which makes
            our collaboration even more productive and efficient. We’re all on a
            continuous journey of growth and development, learning new things
            from each other every day. Proud to be a part of such a strong and
            collaborative community!
          </p>
        </div>

        {/* right side */}
        <Carousel className="w-full md:w-2/4 max-w-96  md:max-w-2xl ">
          <CarouselContent className="-ml-1">
            {MemberPic.members.map((Pictures, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3  cursor-grab active:cursor-grabbing "
              >
                <div className=" p-1">
                  <Card className="border-white overflow-hidden">
                    <CardContent className=" flex aspect-square items-center justify-center  p-0 ">
                      <Image
                        src={`${Pictures.src}`}
                        alt={`${Pictures.alt}`}
                        width={1000}  
                        height={1000} 
                        quality={100}
                        className="object-cover  h-full w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-black text-black dark:text-white dark:border-white scale-0 lg:scale-100" />
          <CarouselNext className="border-black text-black dark:text-white dark:border-white scale-0 lg:scale-100" />
        </Carousel>
      </div>
    </section>
  );
};

export default QA;
