"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const TraksLinks :{title: string ; href: string; description : string}[]= [
  {
    title: "Game Development",
    href: "/game-development",
    description: "Learn how to create games with our tutorials and courses.",
  },
  {
  title:"App Development ",
  href: "/app-development",
  description: "Learn how to create apps with our tutorials and courses.",
  },
  {
    title: "Cyber Security ",
    href: "/cyber-security",
    description: "Learn how to protect yourself and your business from cyber threats.",
  },
 
]
const EventsLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Hackathons",
    href: "/Hackathons",
    description: "Hackathons are a great way to learn new skills, meet new people, and have fun whil" ,
  },
  {
    title: "Teen-hack-competition",
    href: "/Teen-hack-competition",
    description:
      "for teen hackers to compete with each other and learn from each other.",
  },
];

export function NavigationMenuDemo() {
  const [hasScrolled, setHasScrolled] = useState(false);
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
    <NavigationMenu className="duration-200">
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuTrigger
           className={`bg-transparent ${
            hasScrolled ? "text-black dark:text-white  " : "text-white"
          }`}
          >
            Tracks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 lg:w-[400px] 2xl:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="text-sm flex h-full w-full select-none flex-col justify-center rounded-md bg-slate-300 dark:bg-neutral-800 p-6 "
                    href="/Competitive-Programming"
                  >
                    Competitive-Programming
                    <div className="mb-2 mt-4 text-lg font-medium">
                      
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    its a competitive programming by C++ 
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
             {TraksLinks.map((track,index)=> (
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
            className={`bg-transparent ${
              hasScrolled ? "text-black dark:text-white  " : "text-white"
            }`}
          >
             Events & Competitions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 lg:w-[400px] 2xl:w-[500px]">
              {EventsLinks.map((component) => (
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
  );
}
