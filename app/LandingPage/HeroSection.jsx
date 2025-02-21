import React from "react"

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return(
    <React.Fragment>
      <section className="z-4 h-[36rem] relative flex flex-col items-center justify-center px-4 md:px-6">   
        {/* Content */}
        <div className="relative z-10 text-center space-y-10 max-w-xl mx-auto">
          <h1 className={`${montserrat.className} text-9xl md:text-8xl font-bold text-white tracking-tight`}>
            EQUANTRA
          </h1>
          <p className="text-2xl md:text-2xl text-gray-300">
            Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          </p>
          <button className="mt-8 px-8 py-3 text-xl rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
            Get in touch →
          </button>
        </div>
       
        <div className="z-10 absolute top-0 w-full">
        <img className="absolute left-0 top-0 h-[600px]" src="./other/HeroSide-filled.svg"></img>
        <img className="absolute right-0 top-0 scale-x-[-1] h-[600px]" src="./other/HeroSide-filled.svg"></img>
      </div>
      <div className="z-10 absolute top-10 w-2/3">
        <img className="absolute left-0 top-0 h-[140px]" src="./other/SkewRect.svg"></img>
        <img className="absolute right-0 top-0 scale-x-[-1] h-[140px]" src="./other/SkewRect.svg"></img>
      </div>
      <div className="z-10 absolute top-42 w-3/4">
        <img className="absolute left-0 top-0 h-[140px]" src="./other/SkewRect.svg"></img>
        <img className="absolute right-0 top-0 scale-x-[-1] h-[140px]" src="./other/SkewRect.svg"></img>
      </div>
      <div className="z-10 absolute bottom-40 w-1/2">
        <img className="absolute left-0 top-0 h-[140px]" src="./other/SkewRect.svg"></img>
        <img className="absolute right-0 top-0 scale-x-[-1] h-[140px]" src="./other/SkewRect.svg"></img>
      </div>
      </section>
      <div className="z-4 relative w-2/3 flex flex-col items-center justify-center my-40 mx-auto">
          <img className="size-1/2 mb-6" src="./other/illustration.svg"></img>
          <p className="text-2xl md:text-2xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
    </React.Fragment>
  )
}


export default HeroSection;