"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isHovering, setHovering] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`sticky top-0 left-0 w-full z-20 px-4 md:px-6 py-4 transition-colors duration-300 ${
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
          <button className={`invisible px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 hover:text-black transition-colors md:visible`}>
            Contact us
          </button>
          <button className={`p-2 text-white `}>
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
