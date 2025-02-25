"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

import { motion, useInView } from "framer-motion";


const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true, margin: "-10px"})
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  console.log("Swiper ref is: ", swiperRef);

  return (
    <div id="case-studies">
      <div className="relative flex items-center justify-center">
        <img className="invert" src="./other/headingContainer.svg" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2 className="text-black text-xl  md:text-3xl">Case Studies</h2>
        </div>
      </div>

      <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative w-full flex justify-center my-10 h-full min-h-540px md:min-h-[580px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={5}
          navigation
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          centerInsufficientSlides={true}
          initialSlide={Math.floor(CaseStudies.length / 2)}
          breakpoints={{
            240: {slidesPerView: 2},
            640: { slidesPerView: 3 }, // From sm (640px) onwards, show 3 slides
            768: { slidesPerView: 4 }, // From md (768px) onwards, show 4 slides
            1024: { slidesPerView: 5 }, // From lg (1024px) onwards, show 5 slides
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {CaseStudiesItems.map((item, index) => {
            let position = index - activeIndex;
            if (position > CaseStudiesItems.length / 2) position -= CaseStudiesItems.length;
            if (position < -CaseStudiesItems.length / 2) position += CaseStudiesItems.length;
            let skewY = 0;
            let translateY = 0;
            if (position === -2) {
              skewY = -15;
              translateY = 100; 
            }
            if (position === -1) {
              skewY = -10;
              translateY = 30;
            }
            if (position === 1) {
              skewY = 10;
              translateY = 30;
            }
            if (position === 2) {
              skewY = 15;
              translateY = 100;  
            }
           

            return (
              <SwiperSlide key={index} className="overflow-visible min-w-[100px] md:min-w-[200px] cursor-pointer select-none">
                <div
                  className="relative bg-black text-white p-4 rounded-2xl transition-transform duration-300 hover:p-2"
                  style={{ transform: `skewY(${skewY}deg) translateY(${translateY}px)` }} 
                >
                  <img src={item.imageSrc} className="w-full h-full object-cover grayscale hover:grayscale-0" alt="" />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-8 hover:p-4">
                    <h2 className="text-sm md:text-md">{item.title}</h2>
                    <p className="hidden md:text-xs">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="z-10 absolute bottom-0  md:bottom-20 left-[44%] flex items-center justify-center">
          <div className="flex space-x-8 text-white">
            <CircleChevronLeft onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer w-10 h-10 md:w-16 md:h-16" />
            <CircleChevronRight onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer w-10 h-10 md:w-16 md:h-16" />
          </div>
        </div>
      </motion.div>
    
    </div>
  );
};

const CaseStudiesItems = [
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "some Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: './other/CSImage.png'
  },
];

export default CaseStudies;
