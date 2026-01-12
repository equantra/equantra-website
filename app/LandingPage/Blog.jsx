import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
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
                <Link key={index} href={blog.link || '/blog'} className='flex flex-col space-y-2 items-start group hover:transform hover:scale-105 transition-all duration-300'>
                  <img src={blog.imageSource} className='rounded-lg shadow-md group-hover:shadow-lg transition-shadow' />
                  <h2 className='text-xl group-hover:text-blue-600 transition-colors'>{blog.title}</h2>
                  <p className='text-left text-gray-600'>{blog.description}</p>
                  <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
                </Link>
              ))}
            </div>
            <div className='mt-12'>
              <Link
                href='/blog'
                className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300'
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>


      </section>
    </React.Fragment>
  )
}


const blogs = [
  {
    title: "Top 5 Benefits of Hiring Web Developers in India for Fast Websites",
    description:
      "Discover why Indian web developers are the perfect choice for building lightning-fast websites. Learn about cost benefits, expertise, and proven strategies.",
    imageSource: "./blogs/hire-web-developer-fast-website-india/header.webp",
    link: "/blog/hire-web-developer-fast-website-india"
  },
  {
    title: "How to Build a Scalable Mobile Application from Day One",
    description:
      "Expert guide on building mobile applications that scale with your business growth.",
    imageSource: "./blogs/build-scalable-mobile-application-from-day-one/header.webp",
    link: "/blog/build-scalable-mobile-application-from-day-one"
  },
  {
    title: "Qualities of Scalable Web App Developers",
    description:
      "Discover the key qualities of scalable web app developers that make them the perfect choice for building fast, reliable, and secure web applications.",
    imageSource: "./blogs/qualities-scalable-web-app-developers-near-you/header.webp",
    link: "/blog/qualities-scalable-web-app-developers-near-you"
  },

]
export default Blog;