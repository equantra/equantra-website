"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

import { motion } from "framer-motion";


const CaseStudies = () => {
  const ref = useRef(null);
 const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-50px", threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="case-studies">
      <div className="relative flex items-center justify-center w-full">
        <img className="invert w-full" src="./other/headingContainer.svg" />
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
    title: "Mobile Apps Development", 
    description:
      "Creating intuitive and performant mobile applications that deliver exceptional user experiences. We specialize in native and cross-platform development using cutting-edge technologies.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Blockchain Development",
    description:
      "Building secure and scalable blockchain solutions that revolutionize business processes. From smart contracts to decentralized applications, we help organizations embrace blockchain innovation.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Web Development",
    description:
      "Developing modern, responsive web applications that engage users and drive results. Our web solutions combine beautiful design with robust functionality to create compelling online experiences.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Game Development",
    description:
      "Creating immersive gaming experiences across multiple platforms. We blend creative storytelling with technical excellence to develop engaging games that captivate and entertain.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Big Data Development",
    description:
      "Leveraging advanced analytics and machine learning to transform massive datasets into actionable insights. Our big data solutions help businesses make data-driven decisions and uncover hidden opportunities.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Software Development",
    description:
      "Delivering custom software solutions that solve complex business challenges. Our expertise spans enterprise applications, cloud services, and specialized tools built with modern technologies.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "UI/UX Development",
    description:
        "Creating intuitive and user-centric digital experiences through thoughtful interface design and interaction flows. We focus on user research, wireframing, and prototyping to deliver seamless and engaging user experiences.",
    imageSrc: './other/CSImage.png'
  },
  {
    title: "Logo/Website Design",
    description:
      "Crafting distinctive brand identities and visually stunning websites that leave lasting impressions. Our design team combines creativity with strategic thinking to create memorable logos and compelling website designs that elevate your brand.",
    imageSrc: './other/CSImage.png'
  },
];

export default CaseStudies;
