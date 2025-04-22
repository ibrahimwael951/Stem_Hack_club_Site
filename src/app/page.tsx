import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stem Hack Club",
  description:
    "Stem Hack Club is a vibrant student-led community where young minds explore, learn, and build projects in STEM fields—especially coding, technology, and innovation.",
  keywords: [
    "STEM",
    "stem",
    "hack club",
    "Hack Club",
    "Coding Club",
    "Programming",
    "Students",
    "Technology",
    "egypt",
  ],
  metadataBase: new URL("https://stemegypt.hackclub.com"),
  alternates: {
    canonical: "https://stemegypt.hackclub.com",
  },
  openGraph: {
    type: "website",
    url: "https://stemegypt.hackclub.com",
    title: "Stem Hack Club - Learn & Code",
    description:
      "Join the Stem Hack Club — a dynamic community of students passionate about STEM, coding, and building cool tech projects together.",
    siteName: "Stem Hack Club",
    images: [
      {
        url: "https://stemegypt.hackclub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stem Hack Club Banner",
      },
    ],
  },
};
//component
import BgHomePage from "@/components/bgHomePage";
import HomeContent from "@/components/Home-Content";
export default function Home() {
  return (
    <div className="text-white">
      <BgHomePage />
      <HomeContent />
    </div>
  );
}
