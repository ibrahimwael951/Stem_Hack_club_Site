"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Function to handle the theme change
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
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
    <button
      title="Toggle theme"
      onClick={handleThemeChange}
      className={`relative flex items-center justify-center rounded-lg ${
        hasScrolled ? "text-black dark:text-white" : "text-white"
      }  `}
    >
      {theme == "dark" ? (
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300  `}
        />
      ) : (
        <Moon
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300   `}
        />
      )}
    </button>
  );
}
