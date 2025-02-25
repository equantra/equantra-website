import React from "react";

const Footer = () => {
  return(
    <React.Fragment>
      <footer className="bg-black z-10">
        <div className="px-4 md:px-40 py-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-white items-center">
            <img src="logo-full.svg" className="h-14 md:h-20 lg:h-24 mb-10 md:mb-0"/>
            <div className="flex gap-20 text-white">
              <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-2xl mb-4">Work</h2>
                <p className="font-light md:text-lg ">Services</p>
                <p className="font-light md:text-lg">Projects</p>
                <p className="font-light md:text-lg">Development</p>
                <p className="font-light md:text-lg">Design</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-2xl mb-4">Work</h2>
                <p className="font-light md:text-lg">Services</p>
                <p className="font-light md:text-lg">Projects</p>
                <p className="font-light md:text-lg">Development</p>
                <p className="font-light md:text-lg">Design</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-2xl mb-4">Work</h2>
                <p className="font-light md:text-lg">Services</p>
                <p className="font-light md:text-lg">Projects</p>
                <p className="font-light md:text-lg">Development</p>
                <p className="font-light md:text-lg">Design</p>
              </div>
            </div>
          </div>
          <p className="text-white text-lg font-light mt-6">Copyright content text lorem ipsum</p>
        </div>
      </footer>
      
    </React.Fragment>
  )
}

export default Footer;