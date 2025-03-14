"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/themeswaper";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">Dev</span>Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#home"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex items-center">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
