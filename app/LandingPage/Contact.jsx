"use client"

import React from "react";

const Contact = () => {

  return (
    <React.Fragment>
      <section id="contact" className="bg-white z-10 relative">
        <div className="relative inline-block flex items-center justify-center select-none w-full">
          <img className="w-full" src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-12 sm:ml-24 md:ml-32 lg:ml-52">
            <h2 className="text-white text-xl md:text-3xl">Contact us</h2>
          </div>
        </div>
        <div className="w-full relative flex  justify-center items-center my-20">
          <div className="flex w-full md:w-4/5 xs:items-center flex-col md:flex-row justify-center">
            <div className="w-full md:w-1/2 bg-white md:bg-gradient-to-r md:from-blue-600 md:to-purple-600 text-black md:text-white p-10 flex flex-col justify-center items-center md:rounded-l-lg">

              <h2 className="text-center text-xl  md:text-3xl mb-8">
                Got ideas? <br />
                <br></br>
                We’ve got the skills. <br />
                <br></br>
                Let’s team up!
              </h2>

              <div className="space-y-4 text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                  <span className="text-2xl md:text-xl mr-2">📧</span>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <a href="mailto:rahul@equantra.in" className="hover:underline text-sm md:text-base">
                      rahul@equantra.in
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                  <span className="text-2xl md:text-xl mr-2">📱</span>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Phone / WhatsApp</p>
                    <a
                      href="https://wa.me/917906551854"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm md:text-base"
                    >
                      +91 7906551854
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                  <span className="text-2xl md:text-xl mr-2">📍</span>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Location</p>
                    <p className="text-sm md:text-base">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-white p-10 drop-shadow-xl  md:rounded-r-lg flex flex-col justify-center items-center">
              <h3 className="text-black text-xl font-bold">Get in touch</h3>
              <form className="space-y-8 w-full px-8">
                <input
                  suppressHydrationWarning
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-blue-600 transition"
                  required
                />
                <input
                  suppressHydrationWarning
                  type="email"
                  name="email"
                  placeholder="Your email ID"
                  className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-blue-600 transition"
                  required
                />
                <div className="flex space-x-2">
                  <input
                    suppressHydrationWarning
                    type="text"
                    name="countryCode"
                    placeholder="+91"
                    className="w-1/6 p-2 border-b border-gray-500 outline-none focus:border-blue-600 transition text-center"
                    required
                  />
                  <input
                    suppressHydrationWarning
                    type="tel"
                    name="phone"
                    placeholder="Phone no"
                    className="w-5/6 p-2 border-b border-gray-500 outline-none focus:border-blue-600 transition"
                    required
                  />
                </div>

                <textarea
                  suppressHydrationWarning
                  name="message"
                  placeholder="How can we help?"
                  className="w-full p-2 mt-2 border border-gray-500 focus:border-blue-600 transition rounded-lg"
                  required
                ></textarea>

                <div className="mt-4">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-full transition-all duration-300"
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