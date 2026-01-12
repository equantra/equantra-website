"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ overlay = false }: { overlay?: boolean }) => {
  const [isHovering, setHovering] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      className={`z-40 ${overlay ? 'fixed' : 'sticky'} top-0 left-0 w-full px-4 md:px-6 py-4 transition-colors duration-300 ${isHovering || scrolling ? "bg-white backdrop-filter backdrop-blur-md bg-opacity-95 shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex justify-between items-center px-4 md:px-20">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={isHovering || scrolling ? "/logo-full-black.svg" : "/logo-full.svg"}
              alt="Equantra Logo"
              width={150}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {pathname === '/' ? (
            <button onClick={() => handleScroll("contact")}
              className="invisible md:visible relative px-6 py-2 rounded-full bg-white text-black font-medium overflow-hidden transition-all duration-300 
            before:absolute before:inset-0 before:w-0 before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 before:transition-all before:duration-500 
            hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">Contact us</span>
            </button>
          ) : (
            <Link href="/#contact"
              className="invisible md:visible relative px-6 py-2 rounded-full bg-white text-black font-medium overflow-hidden transition-all duration-300 
            before:absolute before:inset-0 before:w-0 before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 before:transition-all before:duration-500 
            hover:before:w-full hover:text-white inline-block"
            >
              <span className="relative z-10">Contact us</span>
            </Link>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 ${isHovering || scrolling ? "text-black" : "text-white"}`}>
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className={`z-40 absolute top-20 right-10 md:right-24 bg-gray-900 rounded-lg drop-shadow-lg stroke-white ${menuOpen ? "visible" : "invisible"}`}>
        <div className="flex flex-col">
          <ul className="flex flex-col items-center py-2">
            {pathname === '/' ? (
              <>
                <li><span onClick={() => handleScroll("home")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Home</span></li>
                <li><span onClick={() => handleScroll("services")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Services</span></li>
                <li><span onClick={() => handleScroll("case-studies")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Case Studies</span></li>
                <li><Link href="/about" className="block text-white px-8 py-2 hover:bg-gray-700">About</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/" className="block text-white px-8 py-2 hover:bg-gray-700">Home</Link></li>
                <li><Link href="/#services" className="block text-white px-8 py-2 hover:bg-gray-700">Services</Link></li>
                <li><Link href="/#case-studies" className="block text-white px-8 py-2 hover:bg-gray-700">Case Studies</Link></li>
                <li><Link href="/about" className="block text-white px-8 py-2 hover:bg-gray-700">About</Link></li>
              </>
            )}
            <li><Link href="/blog" className="block text-white px-8 py-2 hover:bg-gray-700">Blog</Link></li>
            {menuOpen && (
              <li className="md:hidden">
                {pathname === '/' ? (
                  <span onClick={() => handleScroll("contact")} className="block text-white px-8 py-2 hover:bg-gray-700 cursor-pointer">Contact</span>
                ) : (
                  <Link href="/#contact" className="block text-white px-8 py-2 hover:bg-gray-700">Contact</Link>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
