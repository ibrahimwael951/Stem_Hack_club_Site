import Background2 from "@/components/ui/Background2";
import TeenHackCompetition from "@/components/TeenHackCompetition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teen Hack Competition | Stem Hack Club",
  description:
    "Join the Teen Hack Competition by Stem Hack Club — a student-driven coding challenge in Egypt designed to spark creativity, collaboration, and innovation among teens passionate about technology.",
  keywords: [
    "Teen Hack Competition",
    "Hackathon Egypt",
    "Student coding challenge",
    "STEM competition",
    "Hack Club Egypt",
    "Teen programmers",
    "Tech event for students",
    "Stem Hack Club competition",
  ],
  openGraph: {
    title: "Teen Hack Competition | Stem Hack Club",
    description:
      "A thrilling hackathon for teenagers in Egypt! Compete, learn, and build cool projects with fellow student coders.",
    url: "https://stemegypt.hackclub.com/Teen-hack-competition",
    siteName: "Stem Hack Club",
    images: [
      {
        url: "https://stemegypt.hackclub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teen Hack Competition Banner",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://stemegypt.hackclub.com/Teen-hack-competition",
  },
};

export default function Page() {
  return (
    <>
      <Background2
        color1="from-cyan-500"
        color2="via-[#e42d42]"
        color3="to-[#ce293c]"
        first="Teen"
        second="Hack club"
        third="Competitive"
        fourth="Challenge"
      />
      <TeenHackCompetition/>
       
    </>
  );
}
