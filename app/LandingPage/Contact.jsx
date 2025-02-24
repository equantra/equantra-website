import React from "react";

const Contact = () => {

  return(
    <React.Fragment>
  <section className="bg-white z-10 relative">
  <div className="relative inline-block flex items-center justify-center select-none">
          <img src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-48 md:ml-64">
            <h2 className="text-white text-3xl">Contact us</h2>
          </div>
        </div>
  <div className="w-full relative flex  justify-center items-center my-20">
    <div className="flex w-full md:w-4/5 xs:items-center flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2 bg-black text-white p-10 flex justify-center items-center rounded-t-lg md:rounded-l-lg">

        <h2 className="text-center text-3xl">
          Got ideas? <br />
          <br></br>
          We’ve got the skills. <br />
          <br></br>
          Let’s team up!
        </h2>
      </div>

      <div className="w-full md:w-1/2 bg-white p-10 drop-shadow-xl rounded-r-lg flex flex-col justify-center items-center">
        <h3 className="text-black text-xl font-bold">Get in touch</h3>
        <div className="space-y-8 w-full px-8">
        <input type="text" placeholder="Your name" className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-black transition" />
        <input type="email" placeholder="Your email ID" className="w-full p-2 mt-2 border-b border-gray-500 outline-none focus:border-black transition" />
        <div className="flex space-x-2">
          <input type="text" placeholder="+91" className="w-1/6 p-2 border-b border-gray-500 outline-none focus:border-black transition text-center" />
          <input type="text" placeholder="Phone no" className="w-5/6 p-2 border-b border-gray-500 outline-none focus:border-black transition" />
        </div>
       
        <textarea placeholder="How can we help?" className="w-full p-2 mt-2 border border-gray-500 focus:border-gray-800 transition rounded-lg"></textarea>
        <button className="w-full bg-[#4C02E0] text-white px-8 py-2 mt-4 rounded-full ">Submit</button>

        </div>
        
      </div>
    </div>
  </div>
</section>

</React.Fragment>

  )
}


export default Contact;