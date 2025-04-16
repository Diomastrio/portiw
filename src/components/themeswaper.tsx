"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    // Check for system preference or stored preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const root = document.documentElement;

    if (theme === "dark") {
      // Apply dark theme variables
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
      root.style.setProperty("--primary", "#6366f1");
      root.style.setProperty("--muted", "#27272a");
      root.style.setProperty("--muted-foreground", "#a1a1aa");
      // Keep the dark class for any components still using Tailwind
      root.classList.add("dark");
    } else {
      // Apply light theme variables
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
      root.style.setProperty("--primary", "#4f46e5");
      root.style.setProperty("--muted", "#f4f4f5");
      root.style.setProperty("--muted-foreground", "#71717a");
      // Remove dark class
      root.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
