import React from "react"
import {CircleUser} from "lucide-react";

const Clients = () => {
  return(
   <React.Fragment>
      <section className="overflow-hidden">
      <div className="relative flex items-center justify-center select-none">
          <img className="invert" src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-48 md:ml-64">
            <h2 className="text-black text-3xl">Clients</h2>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center space-x-20 pt-5">
          <div className="w-2/3 flex flex-col md:flex-row justify-between items-center">
          <div className="w-[32rem] h-[42rem] relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full -translate-y-54" viewBox="0 0 224 288">
              <defs>
                <mask id="imageMask">
                  <image href="./other/mask-shape.svg" width="100%" height="100%" />
                </mask>
              </defs>
              <foreignObject width="100%" height="100%" mask="url(#imageMask)">
                <div className="w-full h-full">
                  <img
                    src="./other/sampleImg.png"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt="Masked Image"
                  />
                </div>
              </foreignObject>
            </svg>
          </div>


          <div className="grid grid-cols-4 text-white gap-10 mb-36 md: mb-0">
              {Array.from({length: 8}).map((item, index) => (
                <div key={index}>
                  <CircleUser size={64} />
                </div>
              ))}
          </div>

          </div>

        </div>
      </section>
   </React.Fragment> 
  )
}

export default Clients;