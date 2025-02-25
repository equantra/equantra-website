import React from 'react'

const Blog = () => {
  return(
    <React.Fragment>
      <section className='z-10 bg-white w-full pb-10 flex flex-col'>
        <div className="relative inline-block flex items-center justify-center select-none w-full">
          <img className="w-full" src="./other/headingContainerLeft.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-36 lg:ml-64">
            <h2 className="text-white text-xl md:text-3xl">Blog</h2>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-3/4 text-center mb-10'>
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
    title: "The Future of Mobile App Development",
    description:
      "Explore emerging trends in mobile development, from cross-platform frameworks to AI integration. Learn how these innovations are shaping the next generation of mobile applications.",
    imageSource: "./other/blogSampleImg.png"
  },
  {
    title: "Blockchain Technology in Enterprise",
    description:
      "Discover how businesses are leveraging blockchain beyond cryptocurrencies. From supply chain management to secure data sharing, blockchain is transforming enterprise operations.",
    imageSource: "./other/blogSampleImg.png"
  },
  {
    title: "UI/UX Design Best Practices",
    description:
      "Master the fundamentals of creating intuitive user experiences. We cover essential principles of modern interface design, accessibility considerations, and user-centric development.",
    imageSource: "./other/blogSampleImg.png"
  },

]
export default Blog;