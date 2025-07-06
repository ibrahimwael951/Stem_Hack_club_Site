import { IconType } from "react-icons/lib";

// icons imports
import { GoProjectRoadmap } from "react-icons/go";
import { PiStudentFill } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";

import { FaShirt } from "react-icons/fa6";
import { TbSticker} from "react-icons/tb";
import {GiHotMeal } from "react-icons/gi";

export interface Hero {
  desc: string;
  title: string;
  src: string;
}

export interface Link {
  title: string;
  href: string;
}

export interface Content {
  Image: string;
  title: string;
  Desc_1: string;
  Desc_2: string;
  Desc_3: string;
  Desc_4: string;
  Link: Link;
}

export interface Impact {
  title: string;
  value: number;
  icon: IconType;
}

export interface Participant {
  description: string;
  title: string;
  icon: IconType;
}

export interface Timeline {
  title: string;
  p: string;
}

export interface Highlight {
  caption: string;
  Image: string;
}
export interface Prizes {
  position:string;
  gifts:string;
  image:string;
}

export interface Hackathon {
  name: string;
  Hero: Hero;
  Content: Content;
  impact: Impact[];
  Participant: Participant[];
  timeline: Timeline[];
  Highlights: Highlight[];
  Prizes:Prizes[];
}

export const HACKATHONS: Hackathon[] = [
  {
    name: "counterspell",
    Hero: {
      desc: "November 23, 2024",
      title: "Counterspell-Giza",
      src: "/Hackathons/CounterSpell/counterspell bg.png",
    },
    Content: {
      Image: "/images/Home_page.jpg",
      title: "Counterspell Giza",
      Desc_1:
        "Counterspell Giza was a 12-hour game jam hosted at STEM High School for Boys – 6th of October, where 100+ high school students came together to build games from scratch. As part of Hack Club's global ",
      Desc_2:
        ", it ranked #1 out of 49+ cities, making it the top event worldwide.",
      Desc_3:
        "Students formed teams of 3–4 and spent the day learning, coding, and creating playable games — many for the first time. Whether beginners or experienced builders, everyone left with a project and new skills.",
      Desc_4:
        "Led by 11 student organizers, Counterspell Giza became the largest game jam ever held in Egypt, setting a new standard for youth-led tech events in the region.",
      Link: {
        title: "Counterspell series",
        href: "https://counterspell.hackclub.com/",
      },
    },
    impact: [
      { title: "Sign-ups", value: 281, icon: PiStudentFill },
      { title: "Projects", value: 30, icon: GoProjectRoadmap },
      { title: "Game Dev Workshops", value: 3, icon: GrWorkshop },
    ],
    Participant: [
      {
        description: "Custom event T-shirt for every participant",
        title: "Custom T-shirt",
        icon: FaShirt,
      },
      {
        description: "Laptop stickers, pins, and other cool merch",
        title: "Stickers & Swag",
        icon: TbSticker,
      },
      {
        description: "Breakfast, lunch, and dinner provided",
        title: "Meals & Snacks",
        icon: GiHotMeal,
      },
    ],
    timeline: [
      { title: "8:00 AM", p: "Opening Ceremony" },
      { title: "9:00 AM", p: "Start Building Games" },
      { title: "10:00 AM", p: "Workshops & Activities" },
      { title: "2:00 PM", p: "Lunch Break" },
      { title: "4:30 PM", p: "Lightning Talks" },
      { title: "6:30 PM", p: "Game Demos" },
      { title: "8:00 PM", p: "Closing Ceremony" },
    ],
    Highlights: [
      {
        caption:
          "Kicking off the day with energy and excitement — the opening ceremony sets the tone.",
        Image: "/Hackathons/CounterSpell/Opening Ceremony 1.png",
      },
      {
        caption:
          "Matching shirts, shared goals — the Counterspell Giza experience begins.",
        Image: "/Hackathons/CounterSpell/Construct 3 Workshop.jpg",
      },
      {
        caption: "Zaki and Zoro dropping the coolest pose of the day.",
        Image: "/Hackathons/CounterSpell/Modeling lol.png",
      },
      {
        caption:
          "A quick snippet from the Pygame workshop with Kareem in action.",
        Image: "/Hackathons/CounterSpell/Pygame Workshop - Instructor.jpg",
      },
      {
        caption: "Lillith pulled up and instantly stole the show.",
        Image: "/Hackathons/CounterSpell/Hooman.jpg",
      },
      {
        caption: "Working on their game — and their plates.",
        Image: "/Hackathons/CounterSpell/صورة 37.png",
      },
      {
        caption:
          "Laughter, code, and shawerma — the essentials of a great hackathon.",
        Image: "/Hackathons/CounterSpell/IMG-20241124-WA0107.jpg",
      },
      {
        caption: "Locked in — the focus that led them to 1st place.",
        Image: "/Hackathons/CounterSpell/IMG-20241124-WA0097.jpg",
      },
      {
        caption: "The force behind Counterspell Giza — thank you, team!",
        Image: "/Hackathons/CounterSpell/Organizers!.jpg",
      },
    ], Prizes:[
      {
        position:"",
        gifts:"",
        image:"",
      },
    ]   
  },
  {
    name: "scrapyard",
    Hero: {
      desc: "March 15, 2025",
      title: "Scrapyard Giza",
      src: "/Hackathons/scrapyard/sora.jpg",
    },    
    Content: {
      Image: "/Hackathons/scrapyard/sora.jpg",
      title: "Scrapyard Giza",
      Desc_1:
        "Scrapyard Giza was a 12-hour programming hackathon for high school students, held during Ramadan at Masters Language School. Part of Hack Club’s global",
      Desc_2: " it ranked #1 among 60+ cities worldwide.",
      Desc_3:
        "With a scrappy theme of creating “stupid inventions using code,” students embraced the chaos, creativity, and fun of making quirky, unconventional tech. 160 participants formed teams and brought their weirdest ideas to life — from hilarious web tools to offbeat games.",
      Desc_4:
        "Throughout the day, students took workshops in web development and game development, learned about control systems and Arduino, and applied what they picked up straight into their projects. The vibes were unmatched — fueled by laughter, collaboration, and a shared Ramadan Iftar at sunset. Following the momentum of Counterspell Giza, this event scaled up the energy and spirit of youth-led hackathons in Egypt.",
      Link: {
        title: "Scrapyard series",
        href: "https://scrapyard.hackclub.com", 
      },
    },
    impact: [
      { title: "Sign-ups", value: 440, icon: PiStudentFill },
      { title: "Projects", value: 48, icon: GoProjectRoadmap },
      { title: "Workshops", value: 4, icon: GrWorkshop },
    ],
    Participant: [
      {
        description: "Custom event T-shirt for every participant",
        title: "Custom T-shirt",
        icon: FaShirt,
      },
      {
        description: "Laptop stickers, pins, and other cool merch",
        title: "Stickers & Swag",
        icon: TbSticker,
      },
      {
        description: "Breakfast, lunch, and dinner provided",
        title: "Ramdan Iftar",
        icon: GiHotMeal,
      },
    ],
    timeline: [
      { title: "9:00 AM", p: "Opening Ceremony & Kickoff" },
      { title: "10:00 AM", p: "Workshops Begin" },
      { title: "12:30 PM", p: "Project Building Starts" },
      { title: "6:00 PM", p: "Iftar (Ramadan Breakfast)" },
      { title: "8:00 PM", p: "Demos & Project Showcase" },
      { title: "9:00 PM ", p: "Closing Ceremony" },
    ],
    Highlights: [
      {
        caption: "", 
        Image: "/Hackathons/scrapyard/KEP_1777.JPG",
      },
      { 
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1844.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1852.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1865.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1878.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1884.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1895.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1909.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1914.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/KEP_1929.JPG",
      },
      {
        caption: "",
        Image: "/Hackathons/scrapyard/Orgs.jpeg",
      }
    ],
    Prizes:[
      {
        position:"1ST",
        gifts:"30$ gift card + raspberry pi",
        image:"/Hackathons/scrapyard/raspberry pi.png",
      },
      {
        position:"2ND",
        gifts:"Custom PCB Badge + 3 Arduino UNO",
        image:"/Hackathons/scrapyard/3 Arduino UNO.png",
      },
      {
        position:"3RD",
        gifts:"3 Arduino Nano",
        image:"/Hackathons/scrapyard/ArduinoNano.png",
      },
    ]
  },
];

export const getHackathonByName = (name: string): Hackathon | undefined => {
  return HACKATHONS.find((hackathon) => hackathon.name === name);
};

export const getAllHackathonNames = (): string[] => {
  return HACKATHONS.map((hackathon) => hackathon.name);
};

export const getHackathonHighlights = (name: string): Highlight[] => {
  const hackathon = getHackathonByName(name);
  return hackathon?.Highlights || [];
};

export const getHackathonTimeline = (name: string): Timeline[] => {
  const hackathon = getHackathonByName(name);
  return hackathon?.timeline || [];
};

export const getHackathonImpact = (name: string): Impact[] => {
  const hackathon = getHackathonByName(name);
  return hackathon?.impact || [];
};

export const COUNTERSPELL = HACKATHONS[0];
export const SCRAPYARD = HACKATHONS[1];

export default HACKATHONS;
