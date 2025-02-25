"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isHovering, setHovering] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking a link
    }
  };
  

  return (
    <nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`z-40 sticky top-0 left-0 w-full px-4 md:px-6 py-4 transition-colors duration-300 ${
        isHovering || scrolling ? "bg-white backdrop-filter backdrop-blur-md bg-opacity-10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center px-4 md:px-20">
        <div className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="Equantra Logo"
            width={150}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => handleScroll("contact")} 
          className="invisible md:visible relative px-6 py-2 rounded-full bg-white text-black font-medium overflow-hidden transition-all duration-300 
          before:absolute before:inset-0 before:w-0 before:bg-[#4C02E0] before:transition-all before:duration-500 
          hover:before:w-full hover:text-white"
          >
            <span className="relative z-10">Contact us</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 text-white `}>
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className={`z-40 absolute top-20 right-10 md:right-24 bg-gray-900 rounded-lg drop-shadow-lg stroke-white ${menuOpen ? "visible" : "invisible"}`}>
        <div className="flex flex-col">
        <ul className="flex flex-col items-center py-2">
          <li><span onClick={() => handleScroll("home")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Home</span></li>
          <li><span onClick={() => handleScroll("services")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Services</span></li>
          <li><span onClick={() => handleScroll("case-studies")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Case Studies</span></li>
          <li><span className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Team</span></li>
          {menuOpen && (
            <li className="md:hidden">
              <span onClick={() => handleScroll("contact")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Contact</span>
            </li>
          )}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
