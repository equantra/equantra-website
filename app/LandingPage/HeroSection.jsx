"use client"

import React, { useRef, useState, useEffect } from "react"

import { Montserrat } from "next/font/google";


import { motion, useInView } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-50px", threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      <section id="home" className="z-4 h-[30rem] md:h-[36rem] relative flex flex-col items-center justify-center px-4 md:px-6">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-12 text-center flex flex-col items-center space-y-4 md:space-y-10 max-w-xl mx-auto">
          <h1 className={`${montserrat.className} z-20 text-4xl lg:text-9xl md:text-6xl sm:text-5xl font-bold text-white tracking-tight text-center`}>
            EQUANTRA
          </h1>
          <p className="text-sm lg:text-2xl md:text-2xl text-gray-300">
            Crafting the Future, One Solution at a Time.
          </p>
          <button
            onClick={() => handleScroll("contact")}
            className="relative mt-8 px-8 py-3 text-sm md:text-lg lg:text-xl rounded-full bg-white text-black font-medium overflow-hidden transition-all duration-300
          before:absolute before:inset-0 before:w-0 before:bg-[#4C02E0] before:transition-all before:duration-500 
          hover:before:w-full hover:text-white"
          >
            <span className="relative z-10">Get in touch →</span>
          </button>
        </motion.div>

        <div className="z-8 absolute top-0 w-full">
          <img className="absolute left-0 top-0 h-[400px]  md:h-[600px]" src="/other/HeroSide-filled.svg"></img>
          <img className="absolute right-0 top-0 scale-x-[-1] h-[400px] md:h-[600px]" src="./other/HeroSide-filled.svg"></img>
        </div>
        <div className="z-8 absolute top-10 w-2/3">
          <img className="absolute left-0 top-0 h-[80px] md:h-[140px]" src="/other/SkewRect.svg"></img>
          <img className="absolute right-0 top-0 scale-x-[-1] h-[80px] md:h-[140px]" src="./other/SkewRect.svg"></img>
        </div>
        <div className="z-8 absolute top-42 w-3/4">
          <img className="absolute left-0 top-0 h-[80px] md:h-[140px]" src="/other/SkewRect.svg"></img>
          <img className="absolute right-0 top-0 scale-x-[-1] h-[80px] md:h-[140px]" src="./other/SkewRect.svg"></img>
        </div>
        <div className="z-8 absolute bottom-40 w-1/2">
          <img className="absolute left-0 top-0 h-[80px] md:h-[140px]" src="/other/SkewRect.svg"></img>
          <img className="absolute right-0 top-0 scale-x-[-1] h-[80px] md:h-[140px]" src="./other/SkewRect.svg"></img>
        </div>
      </section>
      <div ref={ref} className="z-4 relative w-2/3 flex flex-col items-center justify-center my-24 md:my-40 mx-auto">
        <motion.img className="size-1/2 mb-6" src="./other/illustration.png"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ x: [0, -10, 10, 0], y: [0, -10, 10, 0] }}

        ></motion.img>
        <p className="text-md sm:text-lg md:text-2xl text-gray-300">
          Equantra is a premier technology services company dedicated to delivering innovative digital solutions that drive business growth and transformation. We combine technical expertise with creative problem-solving to deliver solutions that exceed client expectations.
        </p>
      </div>
    </React.Fragment>
  )
}


export default HeroSection;