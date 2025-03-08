import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-black z-10">
        <div className="px-4 md:px-10 lg:px-40 py-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-white items-center">
            <img src="/logo-full.svg" className="h-14 md:h-20 lg:h-24 mb-10 md:mb-0" />
            <div className="flex gap-5 md:gap-20 text-white">
              <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-2xl mb-4">Work</h2>
                <Link href="/services" className="font-light md:text-lg hover:text-gray-300">Services</Link>
                <Link href="/case-studies" className="font-light md:text-lg hover:text-gray-300">Case Studies</Link>
                <Link href="/blogs" className="font-light md:text-lg hover:text-gray-300">Blog</Link>
                <Link href="/portfolio" className="font-light md:text-lg hover:text-gray-300">Portfolio</Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-2xl mb-4">Company</h2>
                <Link href="/about" className="font-light md:text-lg hover:text-gray-300">About Us</Link>
                <Link href="/team" className="font-light md:text-lg hover:text-gray-300">Team</Link>
                <Link href="/careers" className="font-light md:text-lg hover:text-gray-300">Careers</Link>
                <Link href="/contact" className="font-light md:text-lg hover:text-gray-300">Contact</Link>
              </div>
            </div>
          </div>
          <p className="text-white text-lg font-light mt-6">Copyright © {new Date().getFullYear()} Equantra. All rights reserved.</p>
        </div>
      </footer>

    </React.Fragment>
  )
}

export default Footer;