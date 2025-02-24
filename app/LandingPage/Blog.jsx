import React from 'react'

const Blog = () => {
  return(
    <React.Fragment>
      <section className='z-10 bg-white w-full min-h-screen flex flex-col'>
        <div className="relative inline-block flex items-center justify-center select-none">
          <img src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-48 md:ml-64">
            <h2 className="text-white text-xl  md:text-3xl">Blog</h2>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-3/4 text-center'>
          <h2 className='text-2xl mt-10 mb-10 md:mb-20'>Featured articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-black'>
            {blogs.map((blog, index) => (
              <div key={index} className='flex flex-col space-y-2 items-start'>
                <img src={blog.imageSource} />
                <h2 className='text-xl'>{blog.title}</h2>
                <p className='text-left'>{blog.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        
        
      </section>
    </React.Fragment>
  )
}


const blogs =  [
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: "./other/blogSampleImg.png"
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: "./other/blogSampleImg.png"
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: "./other/blogSampleImg.png"
  },

]
export default Blog;