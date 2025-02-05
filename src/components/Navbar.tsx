"use client";  // Client-side only rendering (important to avoid SSR hydration issues)

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import HackCLubLogo from "../../public/flag-hc-top.svg";

// React icons
import { CiMenuFries } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const LiStyle =
    "cursor-pointer transition dark:text-white hover:translate-y-[-1px] duration-150";

    const links = [
      { href: '/',                        label: 'Home'                       },
      { href: '/Why-Us',                  label: 'Why Us'                     },
      { href: '/Meet-Us',                 label: 'Meet Us'                    },
      { href: '/Hackathons',              label: 'Hackathons'                 },
      { href: '/Projects',                label: 'Projects'                   },
      { href: '/Competitive-Programming', label: 'Competitive Programming'    },
      { href: '/Teen-hack-competition',   label: 'Teen hack competition'      }
    ];

  // Track the navbar background color on scroll
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle the background change on scroll
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
        hasScrolled ? "bg-white bg-opacity-90" : ""
      } h-14 w-full py-2 px-14 z-20 fixed flex justify-between lg:justify-evenly items-center duration-200`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={HackCLubLogo}
          alt="My Icon"
          className={`duration-200 ${
            hasScrolled ? "h-28 w-28" : "h-32 w-32"
          }`}
        />
      </Link>

      {/* Desktop/Tablet Nav List */}
      <div className="hidden lg:flex gap-6 select-none">
        {links.map((link, index) => (
          <Link
            className={`${
              LiStyle
            } ${hasScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-100"}`}
            href={link.href}
            key={index}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav Menu Button */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <CiMenuFries />
      </button>

      {/* Mobile Nav Menu   */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex items-center justify-center z-30">

          <button  
            className="text-white lg:hidden text-3xl absolute top-4 right-16"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaWindowClose />
          </button>


          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-2 text-lg font-semibold text-black hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
