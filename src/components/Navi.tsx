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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hackathons",
    href: "/Hackathons",
    description:
      " Find and participate in hackathons, coding challenges, and other tech events.",
  },
  {
    title: "Competitive-Programming",
    href: "/Competitive-Programming",
    description: "its a competitive programming by C++ ",
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
            Challenges
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 md:w-[300px]">
              {components.map((component) => (
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
