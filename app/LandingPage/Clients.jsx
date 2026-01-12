"use client"

import React, { useRef, useEffect, useState } from "react"

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

  return (
    <React.Fragment>
      <section className="overflow-hidden">
        <div className="relative flex items-center justify-center select-none w-full">
          <img className="invert w-full" src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-16 sm:ml-32 md:ml-36 lg:ml-64">
            <h2 className="text-black text-xl md:text-3xl">Client Testimonials</h2>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center space-x-20 pt-5 pb-20">
          <div className="w-full md:w-4/5 flex flex-col space-y-8">

            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Equantra delivered our mobile app 2 weeks ahead of schedule. Their team's expertise in React Native and attention to detail exceeded our expectations. The app is running smoothly with excellent performance."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-600">CTO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  SP
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Working with Equantra has been a game-changer for our business. They built a scalable web platform that handles our growing user base effortlessly. Professional, responsive, and technically excellent."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Patel</p>
                    <p className="text-sm text-gray-600">Product Manager, HealthTech India</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Clients;