import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-black z-10">
        <div className="px-4 md:px-10 lg:px-40 py-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-white items-center">
            <Image
              src="/logo-full.svg"
              alt="Equantra Logo"
              width={100}
              height={100}
              className="h-14 md:h-20 lg:h-24 mb-10 md:mb-0 w-auto"
            />
            <div className="flex gap-5 md:gap-20 text-white">
              <div className="flex flex-col justify-center items-start">
                <h2 className="md:text-2xl mb-4 font-semibold">Company</h2>
                <a href="/#services" className="font-light md:text-lg hover:text-gray-300 transition">Services</a>
                <a href="/#case-studies" className="font-light md:text-lg hover:text-gray-300 transition">Case Studies</a>
                <a href="/#blog" className="font-light md:text-lg hover:text-gray-300 transition">Blog</a>
                <a href="/about" className="font-light md:text-lg hover:text-gray-300 transition">About</a>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h2 className="md:text-2xl mb-4 font-semibold">Services</h2>
                <a href="/#services" className="font-light md:text-lg hover:text-gray-300 transition">Mobile Apps</a>
                <a href="/#services" className="font-light md:text-lg hover:text-gray-300 transition">Web Development</a>
                <a href="/#services" className="font-light md:text-lg hover:text-gray-300 transition">Desktop Apps</a>
                <a href="/hire-developers" className="font-light md:text-lg hover:text-gray-300 transition">Hire Developers</a>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h2 className="md:text-2xl mb-4 font-semibold">Contact</h2>
                <a href="mailto:rahul@equantra.in" className="font-light md:text-lg hover:text-gray-300 transition">rahul@equantra.in</a>
                <a href="https://wa.me/917906551854" target="_blank" rel="noopener noreferrer" className="font-light md:text-lg hover:text-gray-300 transition">+91 7906551854</a>
                <p className="font-light md:text-lg">Delhi NCR, India</p>
                <a href="https://www.linkedin.com/company/equantra/" target="_blank" rel="noopener noreferrer" className="font-light md:text-lg hover:text-gray-300 transition mt-2">LinkedIn →</a>
              </div>
            </div>
          </div>
          <p className="text-white text-lg font-light mt-6">Copyright © {new Date().getFullYear()} Equantra Tech LLP. All rights reserved.</p>
          <div className="flex gap-4 mt-2">
            <a href="/privacy" className="text-white text-sm hover:text-gray-300 transition">Privacy Policy</a>
            <span className="text-white text-sm">•</span>
            <a href="/terms" className="text-white text-sm hover:text-gray-300 transition">Terms of Service</a>
          </div>
        </div>
      </footer>

    </React.Fragment>
  )
}

export default Footer;