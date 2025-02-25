"use client"

import React, {useRef, useEffect, useState} from "react"
import {CircleUser} from "lucide-react";

import { motion } from "framer-motion";

const Clients = () => {
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
  
  return(
   <React.Fragment>
      <section className="overflow-hidden">
      <div className="relative flex items-center justify-center select-none">
          <img className="invert" src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-36 lg:ml-64">
            <h2 className="text-black text-xl md:text-3xl">Clients</h2>
          </div>
        </div>

        <div ref={ref} className="relative w-full flex justify-center items-center space-x-20 pt-5">
          <div className="w-2/3 flex flex-col md:flex-row justify-between items-center">
          <div className="w-[32rem] h-[42rem] relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full -translate-y-54" viewBox="0 0 224 288">
              <defs>
                <mask id="imageMask">
                  <image href="./other/mask-shape.svg" width="100%" height="100%" />
                </mask>
              </defs>
              <foreignObject width="100%" height="100%" mask="url(#imageMask)">
                <span className="w-full h-full">
                  <img
                    src="./other/sampleImg.png"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt="Masked Image"
                  />
                </span>
              </foreignObject>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-4 text-white gap-10 mb-36 md: mb-0">
              {Array.from({length: 8}).map((item, index) => (
                <div key={index}>
                  <CircleUser size={64} />
                </div>
              ))}
          </motion.div>

          </div>

        </div>
      </section>
   </React.Fragment> 
  )
}

export default Clients;