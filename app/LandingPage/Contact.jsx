"use client"

import React from "react";

const Contact = () => {

  return(
    <React.Fragment>
  <section id="contact" className="bg-white z-10 relative">
    <div className="relative inline-block flex items-center justify-center select-none w-full">
      <img className="w-full"   src="./other/headingContainerLeft.svg" />
      <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-12 sm:ml-24 md:ml-32 lg:ml-52">
        <h2 className="text-white text-xl md:text-3xl">Contact us</h2>
      </div>
    </div>
  <div className="w-full relative flex  justify-center items-center my-20">
    <div className="flex w-full md:w-4/5 xs:items-center flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2 bg-white md:bg-black text-black md:text-white p-10 flex justify-center items-center md:rounded-l-lg">

        <h2 className="text-center text-xl  md:text-3xl">
          Got ideas? <br />
          <br></br>
          We’ve got the skills. <br />
          <br></br>
          Let’s team up!
        </h2>
      </div>

      <div className="w-full md:w-1/2 bg-white p-10 drop-shadow-xl  md:rounded-r-lg flex flex-col justify-center items-center">
        <h3 className="text-black text-xl font-bold">Get in touch</h3>
        <form className="space-y-8 w-full px-8">
          <input 
            suppressHydrationWarning 
            type="text" 
            name="name"
            placeholder="Your name" 
            className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-black transition" 
            required
          />
          <input 
            suppressHydrationWarning 
            type="email" 
            name="email"
            placeholder="Your email ID" 
            className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-black transition"
            required 
          />
          <div className="flex space-x-2">
            <input 
              suppressHydrationWarning 
              type="text" 
              name="countryCode"
              placeholder="+91" 
              className="w-1/6 p-2 border-b border-gray-500 outline-none focus:border-black transition text-center"
              required 
            />
            <input 
              suppressHydrationWarning 
              type="tel" 
              name="phone"
              placeholder="Phone no" 
              className="w-5/6 p-2 border-b border-gray-500 outline-none focus:border-black transition"
              required 
            />
          </div>
         
          <textarea
            suppressHydrationWarning
            name="message"
            placeholder="How can we help?"
            className="w-full p-2 mt-2 border border-gray-500 focus:border-gray-800 transition rounded-lg"
            required
          ></textarea>

          <div className="mt-4">
            <button 
              type="submit"
              suppressHydrationWarning 
              className="w-full bg-[#4C02E0] text-white px-8 py-2 rounded-full"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</React.Fragment>

  )
}


export default Contact;