import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <React.Fragment>
      <section className='z-10 bg-white w-full pb-10 flex flex-col'>
        <div className="relative flex items-center justify-center select-none w-full">
          <Image 
            className="w-full" 
            src="/other/headingContainerLeft.svg" 
            alt="Blog header"
            width={1200}
            height={200}
            priority={false}
          />
          <div className="w-full h-full top-0 left-0 absolute flex justify-start items-center ml-20 sm:ml-32 md:ml-36 lg:ml-64">
            <h2 className="text-white text-xl md:text-3xl">Blog</h2>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='w-3/4 text-center mb-10'>
            <h2 className='text-2xl mt-10 mb-10 md:mb-20'>Featured articles</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-black'>
              {blogs.map((blog, index) => (
                <Link href={blog.url} key={index}>
                  <div className='flex flex-col space-y-2 items-start cursor-pointer hover:opacity-90 transition-opacity'>
                    <div className="relative w-full h-48">
                      <Image 
                        src={blog.imageSource} 
                        alt={blog.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h2 className='text-xl font-semibold'>{blog.title}</h2>
                    <p className='text-left'>{blog.description}</p>
                    <span className="text-black font-medium">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/blogs" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                View all articles
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
    title: "When to Use React Native or Flutter for Mobile App Development",
    description:
      "A comprehensive comparison of React Native and Flutter frameworks to help you choose the right technology for your mobile app development project.",
    imageSource: "/other/blogSampleImg.png",
    url: "/blogs/react-native-vs-flutter"
  },
  {
    title: "The Future of Mobile App Development",
    description:
      "Explore emerging trends in mobile development, from cross-platform frameworks to AI integration. Learn how these innovations are shaping the next generation of mobile applications.",
    imageSource: "/other/blogSampleImg.png",
    url: "/blogs"
  },
  {
    title: "Blockchain Technology in Enterprise",
    description:
      "Discover how businesses are leveraging blockchain beyond cryptocurrencies. From supply chain management to secure data sharing, blockchain is transforming enterprise operations.",
    imageSource: "/other/blogSampleImg.png",
    url: "/blogs"
  },
]
export default Blog;