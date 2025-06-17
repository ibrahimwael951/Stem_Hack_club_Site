import React from "react";
// react icons
import { FaHandshake } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiBookBookmark } from "react-icons/bi";

const QA = () => {
  const GoalsList = [
    {
      Icon: IoSpeedometerOutline,
      p: "Develop your skills by building quirky, unique projects",
    },
    {
      Icon: FaHandshake,
      p: "Together, we utilize our expertise to build each other up to become better makers and hackers as a whole!",
    },
    {
      Icon: BiBookBookmark,
      p: "Free sessions for everyone to participate and learn something new",
    },
  ];
  return (
    <section
      id="Home_Content"
      className="overflow-hidden select-text cursor-default  h-fit flex flex-col gap-20 justify-evenly"
    >
      {/* our club goals */}
      <div className=" ">
        <h1 className="mb-10">Our Club Goals</h1>
        <div className="flex flex-col gap-5 lg:gap-10 md:flex-row flex-wrap justify-evenly items-center  ">
          {GoalsList.map((List, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="flex flex-col justify-center gap-5 items-center  w-full h-52 max-w-96 border border-neutral-500 px-5 rounded-xl"
            >
              {React.createElement(List.Icon, {
                size: 50,
                className: "text-black dark:text-white",
              })}
              <p className="text-sm text-center">{List.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* questions */}
      <div data-aos="fade-right">
        <h1 className="mb-3">What's a Hacker?</h1>
        <p className="pl-5">
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

      <div data-aos="fade-right">
        <h1 className="mb-3">What is Hack Club?</h1>
        <p className="pl-5">
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

      {/* Components */}
    </section>
  );
};

export default QA;
