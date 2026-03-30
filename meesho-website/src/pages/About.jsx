import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='border-t pt-10 text-pink-900'>

      {/* Heading */}
      <div className='text-2xl text-center'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className='text-gray-600 mt-3 text-sm'>
          India’s fastest-growing e-commerce platform for affordable fashion and lifestyle products.
        </p>
      </div>

      {/* Top Section */}
      <div className='my-12 flex flex-col md:flex-row gap-12 items-center'>
        
        <img 
          className='w-full md:max-w-[450px] rounded-lg shadow-md' 
          src={assets.about_img} 
          alt="" 
        />

        <div className='flex flex-col gap-5 md:w-2/4 text-gray-700'>
          <h2 className='text-xl font-semibold text-pink-900'>
            Empowering Millions Through Affordable Shopping
          </h2>

          <p>
            Our platform is built to make online shopping simple, affordable, and accessible for everyone. 
            From fashion to home essentials, we bring you a wide range of products at unbeatable prices.
          </p>

          <p>
            We connect thousands of sellers with millions of customers across India, enabling small 
            businesses to grow while delivering quality products to your doorstep.
          </p>

          <p>
            With a focus on trust, convenience, and value, we are redefining how India shops online.
          </p>
        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className='text-xl py-6 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid md:grid-cols-3 gap-6 mb-16'>

        <div className='border p-6 rounded-lg shadow-sm hover:shadow-md transition'>
          <h3 className='font-semibold text-lg mb-2'>Affordable Prices</h3>
          <p className='text-gray-600 text-sm'>
            Get the best deals on fashion and everyday essentials without compromising on quality.
          </p>
        </div>

        <div className='border p-6 rounded-lg shadow-sm hover:shadow-md transition'>
          <h3 className='font-semibold text-lg mb-2'>Wide Selection</h3>
          <p className='text-gray-600 text-sm'>
            Explore thousands of products across categories tailored to your needs.
          </p>
        </div>

        <div className='border p-6 rounded-lg shadow-sm hover:shadow-md transition'>
          <h3 className='font-semibold text-lg mb-2'>Trusted Platform</h3>
          <p className='text-gray-600 text-sm'>
            Millions of customers trust us for safe, secure, and reliable shopping experiences.
          </p>
        </div>

      </div>

      {/* EXTRA SECTION (LIKE REAL MEESHO) */}
      <div className='bg-pink-50 p-8 rounded-lg text-center mb-20'>
        <h2 className='text-xl font-semibold mb-3'>Our Mission</h2>
        <p className='text-gray-600 text-sm max-w-2xl mx-auto'>
          To empower small businesses and individuals by providing a platform that connects them 
          directly with customers, enabling growth, independence, and success in the digital economy.
        </p>
      </div>

    </div>
  )
}

export default About 