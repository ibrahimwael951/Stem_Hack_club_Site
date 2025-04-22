import { Metadata } from "next";
//components
import Card from "@/components/Projects-content";
import BgProjectPage from "@/components/bgProjectPage";

export const metadata: Metadata = {
  title: "Projects | Stem Hack Club",
  description:
    "Explore student-built projects from Stem Hack Club — creative tech, coding, and STEM innovations made by young developers in Egypt.",
  keywords: [
    "STEM projects",
    "Student coding projects",
    "Hack Club projects",
    "Stem Hack Club creations",
    "Programming projects by students",
    "Tech projects Egypt",
    "Showcase student work",
    "Student innovation",
  ],
  openGraph: {
    title: "Projects | Stem Hack Club",
    description:
      "Browse creative coding and STEM projects built by students in the Stem Hack Club. See what young minds are building!",
    url: "https://stemegypt.hackclub.com/Projects",
    siteName: "Stem Hack Club",
    images: [
      {
        url: "https://stemegypt.hackclub.com/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Student Projects Showcase Banner",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://stemegypt.hackclub.com/Projects",
  },
};

export default function page() {
  return (
    <section className="h-fit bg-white dark:bg-black ">
      <BgProjectPage />
      <Card />
    </section>
  );
}
