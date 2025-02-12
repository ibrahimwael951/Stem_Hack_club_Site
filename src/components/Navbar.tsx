"use client";  
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//Logo
import HackCLubLogo from "../../public/flag-hc-top.svg";

//components
import { ModeToggle } from "./ThemeSwitcher";
 
// React icons
import { CiMenuFries } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
//Data
import NLink from "@/Data/Links.json";

const Navbar = () => {
  const LiStyle =
    "cursor-pointer transition dark:text-white hover:translate-y-[-1px] duration-150";


   
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      const offset = 0;
      if (window.scrollY > offset) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        hasScrolled ? "bg-white dark:bg-black bg-opacity-90" : ""
      } h-14 w-full py-2 px-5 z-20 fixed flex justify-between xl:justify-evenly items-center duration-200`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={HackCLubLogo}
          alt="My Icon"
          className={`duration-200 ${hasScrolled ? "h-28 w-28" : "h-32 w-32"}`}
        />
      </Link>

      {/* Desktop/Tablet Nav List */}
      <div className="hidden lg:flex gap-3 select-none">
        {NLink.Nav.map((link, index) => (
          <Link
            className={`${LiStyle} ${
              hasScrolled
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-100"
            }`}
            href={link.href}
            key={index}
          >
            {link.Title}
          </Link>
        ))}


      <ModeToggle />
      </div>



      {/* Mobile Nav Menu Button */}
      <button
        className={`lg:hidden inline text-3xl ${hasScrolled ? "text-black dark:text-white" : "text-white"}` }
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <CiMenuFries />
      </button>


      {/* Mobile Nav Menu   */}
        <div 
           className={`lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-black h-screen flex items-center   justify-center z-30 select-none ${isMobileMenuOpen? "opacity-100 translate-x-0": "opacity-0 translate-x-full"} `}
           >
 
                
          
          <button
            className="lg:hidden z-10 text-3xl absolute top-4 right-4 text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaWindowClose />
          </button>
          

          <div 
            className={`
                       flex flex-col justify-center items-center gap-7   
                ${isMobileMenuOpen ? "scale-100" : "scale-0"} 
                `}
          >
            {NLink.Nav.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block   text-lg font-semibold text-black dark:text-white hover:text-red-600 dark:hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}  
              >
                {link.Title}
              </Link>
              
            ))}
            <ModeToggle/>
          </div>
        </div>
      
    </div>
  );
};

export default Navbar;
