"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const basePath = "/personal-website2026";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Define navigation items with IDs and labels
  const navItems = [
    { id: "hero", label: "Home" },
    // { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    
  ];

  // Handle scroll events to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const sectionElements = sections.map((id) => document.getElementById(id));

      sectionElements.forEach((section, index) => {
        if (section) {
          // Adjusted threshold for active section detection
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md py-2" : "py-4",
        className,
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          href="/"
          className="text-xl font-bold text-navy hover:text-light-blue transition-colors"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">Daniel Wang</span>
          {/* <span className="text-[#005ab3]">Wang</span> */}
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative group capitalize text-gray-600 transition-colors duration-100",
                activeSection === item.id && "text-[#98d6ff] font-medium"
              )}
            >
              {item.label}
              <span
                className={
                  "absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transform bg-[#98d6ff] group-hover:animate-underline-hover duration-400"
                }
              />
            </button>
          ))}
        </div>

        {/* Right side: PDF icon */}
        <div className="hidden md:flex items-center">
          <a
            href={`/Daniel_A_Wang_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center hover:text-blue-400 transition-colors"
            aria-label="Resume"
          >
            <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-light-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "capitalize text-left py-2 px-4 rounded-md hover:bg-gray-50",
                  activeSection === item.id
                    ? "text-light-blue font-medium"
                    : "text-gray-600",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
