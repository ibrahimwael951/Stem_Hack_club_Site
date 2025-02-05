import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
export const metadata: Metadata = {
  title: "Stem Hack Club",
  description: " Stem Hack Club is a community of students who are passionate about STEM and coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <main>
          <Navbar  />
           {children}  
          <Footer />
        </main>
      </body>
    </html>
  );
}
