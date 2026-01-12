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
            240: { slidesPerView: 2 },
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
                  className="relative bg-gradient-to-br from-gray-900 to-black text-white p-4 rounded-2xl transition-transform duration-300 hover:p-2 border border-blue-900/20"
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
        <div className="z-10 absolute bottom-0  md:bottom-20 left-[36%] md:left-[44%] flex items-center justify-center">
          <div className="flex space-x-8 text-white">
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <CircleChevronLeft onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer w-6 h-6 md:w-12 md:h-12" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <CircleChevronRight onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer w-6 h-6 md:w-12 md:h-12" />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

const CaseStudiesItems = [
  {
    title: "Real Estate Investment Platform",
    description:
      "Developed a comprehensive mobile application for real estate fund management, enabling investors to track portfolios, view property analytics, and manage investments seamlessly. Built with React Native for cross-platform compatibility and robust backend infrastructure.",
    imageSrc: './other/CSImage.png',
    technologies: "React Native, Node.js, PostgreSQL, AWS",
    impact: "Streamlined fund operations for 500+ investors"
  },
  {
    title: "Healthcare Management System",
    description:
      "Created an end-to-end healthcare mobile application and backend system for patient management, appointment scheduling, and medical records. Ensured HIPAA-compliant data handling with secure authentication and encrypted communications.",
    imageSrc: './other/CSImage.png',
    technologies: "React Native, Python, PostgreSQL, AWS",
    impact: "Serving 1000+ patients with 99.9% uptime"
  },
  {
    title: "E-commerce Platform",
    description:
      "Built a scalable e-commerce platform with real-time inventory management, payment gateway integration, and analytics dashboard. Optimized for high traffic with Redis caching and CDN implementation for faster load times.",
    imageSrc: './other/CSImage.png',
    technologies: "Next.js, Node.js, MongoDB, Stripe",
    impact: "Processing $50K+ monthly transactions"
  },
  {
    title: "FinTech Mobile Application",
    description:
      "Developed a secure mobile banking application with features including fund transfers, bill payments, and investment tracking. Implemented multi-factor authentication and end-to-end encryption for maximum security.",
    imageSrc: './other/CSImage.png',
    technologies: "Flutter, Java, PostgreSQL, Azure",
    impact: "Trusted by 2000+ users for daily transactions"
  },
  {
    title: "Learning Management System",
    description:
      "Built a comprehensive LMS platform for online education with video streaming, interactive quizzes, progress tracking, and certificate generation. Integrated with payment systems for course purchases and subscriptions.",
    imageSrc: './other/CSImage.png',
    technologies: "React, Django, MongoDB, AWS S3",
    impact: "Empowering 5000+ students worldwide"
  },
  {
    title: "Logistics & Fleet Management",
    description:
      "Created a real-time fleet tracking and logistics management system with GPS integration, route optimization, and delivery scheduling. Mobile apps for drivers and dispatchers ensure seamless operations.",
    imageSrc: './other/CSImage.png',
    technologies: "React Native, Node.js, Redis, Google Maps API",
    impact: "Managing 100+ vehicles daily"
  },
  {
    title: "Social Networking Platform",
    description:
      "Developed a niche social networking platform with user profiles, real-time messaging, content feeds, and community features. Implemented sophisticated recommendation algorithms for content discovery.",
    imageSrc: './other/CSImage.png',
    technologies: "Vue.js, Node.js, MongoDB, Socket.io",
    impact: "Growing community of 10K+ active users"
  },
];

export default CaseStudies;
