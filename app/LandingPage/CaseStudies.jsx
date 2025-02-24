"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";


const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  console.log("Swiper ref is: ", swiperRef);

  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img className="invert" src="./other/headingContainer.svg" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2 className="text-black text-3xl">Case Studies</h2>
        </div>
      </div>

      <div className="relative w-full flex justify-center my-10 h-full min-h-[500px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView="5"
          spaceBetween={5}
          navigation
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          centerInsufficientSlides={true}
          initialSlide={Math.floor(CaseStudies.length / 2)}

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
              <SwiperSlide key={index} className="overflow-visible min-w-[200px] cursor-pointer select-none">
                <div
                  className="relative bg-black text-white p-4 rounded-2xl transition-transform duration-300 hover:p-2"
                  style={{ transform: `skewY(${skewY}deg) translateY(${translateY}px)` }} 
                >
                  <img src={item.imageSrc} className="w-full h-full object-cover grayscale hover:grayscale-0" alt="" />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-8 hover:p-4">
                    <h2 className="text-md">{item.title}</h2>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="z-10 absolute bottom-2 left-[44%] flex items-center justify-center">
          <div className="flex space-x-8 text-white">
            <CircleChevronLeft onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer" size={48}/>
            <CircleChevronRight onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer" size={48} />
          </div>
        </div>
      </div>
    
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
