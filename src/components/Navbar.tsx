"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
//Logo
import HackCLubLogo from "../../public/flag-hc-top.svg";
//components
import { ModeToggle } from "./ThemeSwitcher";
// React icons
import { CiMenuFries } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
//Data
import NLink from "@/Data/Links.json";
// ui
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

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
    <motion.div
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`${
        hasScrolled ? "bg-white dark:bg-black bg-opacity-90" : ""
      } h-14 w-full py-2 px-5 z-20 fixed flex justify-between lg:justify-evenly items-center duration-200 `}
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
      <div className="hidden lg:flex gap-7 items-center select-none">
        {NLink.Nav.slice(0, 4).map((link, index) => (
          <Link
            className={`cursor-pointer dark:text-white hover:translate-y-[-1px] duration-200    

            ${
              hasScrolled
                ? pathname === link.href
                  ? "text-red-600 dark:text-red-600   font-semibold"
                  : "text-black hover:text-red-500 dark:hover:text-red-500"
                : "text-white hover:text-white"
            }
            `}
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`bg-transparent   duration-0   ${
                  hasScrolled
                    ? "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 "
                    : "text-white "
                }`}
              >
                Tracks
              </NavigationMenuTrigger>
              <NavigationMenuContent className="duration-200">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/tracks/Competitive-Programming"
                      >
                        Competitive-Programming
                        <div className="mb-2 mt-4 text-lg font-medium"></div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Code fast, debug faster—where brainpower meets the
                          ultimate algorithmic showdown!
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {NLink.Tracks.slice(1, 4).map((track, index) => (
                    <Link
                      key={index}
                      href={track.href}
                      className="hover:bg-slate-300 dark:hover:bg-neutral-800  p-2 rounded-xl cursor-pointer duration-200"
                    >
                      <h1 className="text-red-500 dark:text-red-500 text-sm">
                        {track.title}
                      </h1>
                      <p className="text-sm cursor-pointer">
                        {track.description}
                      </p>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`bg-transparent   duration-0   ${
                  hasScrolled
                    ? "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 "
                    : "text-white "
                }`}
              >
                Events & Competitions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="duration-200">
                <ul className="p-2 lg:w-[400px] 2xl:w-[500px]">
                  {NLink.challenges.map((component) => (
                    <Link
                      className="cursor-pointer"
                      key={component.title}
                      href={component.href}
                    >
                      <div className="p-2 hover:bg-slate-300 dark:hover:bg-neutral-900 rounded-xl">
                        {component.title}
                        <p className="text-sm cursor-pointer">
                          {component.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          title="Donation"
          href="/donation"
          className={`
            p-3 border rounded-2xl active:scale-90 hover:bg-transparent duration-200 -ml-5 -mr-3
            ${
              hasScrolled ?
                  "text-white bg-red-600 hover:text-red-600 hover:border-red-600"
                : "text-red-600 bg-white  hover:text-white  border-white"
            }
            `}
        >
          Donation
        </Link>
        <ModeToggle />
      </div>

      {/* Mobile Nav Menu Button */}
      <button
        className={`lg:hidden inline text-3xl ${
          hasScrolled ? "text-black dark:text-white" : "text-white"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <CiMenuFries />
      </button>

      {/* Mobile Nav Menu   */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-black h-screen flex items-center   justify-center z-30 select-none duration-200 "
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:hidden z-10 text-3xl absolute top-4 right-4 text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaWindowClose />
            </motion.button>
            <div className="absolute left-4 top-4">
              <ModeToggle />
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col justify-center items-center gap-7"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-black h-screen flex items-center   justify-center z-30 select-none duration-200 ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } `}
      >
        <button
          className="lg:hidden z-10 text-3xl absolute top-4 right-4 text-black dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaWindowClose />
        </button>

        <div className="absolute left-4 top-4">
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          {[
            { title: "Stem Hack Club", data: NLink.Nav },
            { title: "Tracks", data: NLink.Tracks },
            { title: "Event & Competitions", data: NLink.challenges },
          ].map((section, i) => (
            <div className="flex flex-col justify-center items-center" key={i}>
              <h1 className="text-xl text-black dark:text-white">
                {section.title}
              </h1>
              {section.data.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pl-4 my-1 text-lg cursor-pointer transition text-gray-600 dark:text-neutral-400 hover:-translate-y-[1px] dark:hover:text-red-600 hover:text-red-500 duration-150"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
