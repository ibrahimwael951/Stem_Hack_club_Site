import { Metadata } from "next";

//component
import BgWhyUs from "@/components/bgWhyUs";
import Content from "@/components/Why-Us-content";

export const metadata: Metadata = {
  title: "About | Stem Hack Club",
  description:
    "Learn more about Stem Hack Club — a student-led community in Egypt where passionate high schoolers explore STEM, code together, and build innovative projects.",
  keywords: [
    "About Stem Hack Club",
    "STEM students Egypt",
    "Student coding community",
    "Hack Club Egypt",
    "STEM education",
    "Technology Club",
    "Student programmers",
  ],
  openGraph: {
    title: "Why | Stem Hack Club",
    description:
      "Get to know the mission behind Stem Hack Club — a tech-driven space for students in Egypt to grow their STEM skills, build projects, and collaborate.",
    url: "https://stemegypt.hackclub.com/Why-Us",
    siteName: "Stem Hack Club",
    images: [
      {
        url: "https://stemegypt.hackclub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stem Hack Club About Banner",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://stemegypt.hackclub.com/Why-Us",
  },
};

export default function page() {
  return (
    <section className="h-fit flex flex-col select-text cursor-default    ">
      <BgWhyUs />
      <Content />
    </section>
  );
}
