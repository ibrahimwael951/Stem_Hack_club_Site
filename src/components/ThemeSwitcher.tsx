"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"

import { gsap } from "gsap"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
 
  // Function to handle the theme change with GSAP animation
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"  // Switch between light and dark

    
    // Animate the background color change
    gsap.to(document.body, {
      backgroundColor: newTheme === "dark" ? "#1a202c" : "#f0f4f8", // Dark background and Light background
      duration: 0.2,
      ease: "power2.inOut",
    })

    // Set theme after animation
    setTimeout(() => {
      setTheme(newTheme)
    }, 200 ) // Wait for animation to finish before switching theme
  }

  return (
    <Button
      onClick={handleThemeChange}
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Sun
       
        className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "hidden" : "block"}`}
      />
      <Moon
         
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "hidden" : "block"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
