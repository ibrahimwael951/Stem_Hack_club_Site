"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Function to handle the theme change
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button
      onClick={handleThemeChange}
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center rounded-lg border dark:border-white border-black"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark" ? "hidden" : "block"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300   ${
          theme === "light" ? "hidden" : "block"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
