import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'


import bestseller1 from '../assets/bestseller1.avif'
import bestseller2 from '../assets/bestseller2.jpg'
import bestseller3 from '../assets/best-seller3.webp'

const BestSeller = () => {

  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-10'>

      {/* Title */}
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />

        {/* 🔥 Banner Section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 px-5'>

          {/* Banner 1 */}
          <div className='relative overflow-hidden rounded-2xl shadow-md group cursor-pointer transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl'>
            <img 
              src={bestseller1} 
              alt="banner1"
              className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold'>Shop Now</p>
            </div>
          </div>

          {/* Banner 2 */}
          <div className='relative overflow-hidden rounded-2xl shadow-md group cursor-pointer transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl'>
            <img 
              src={bestseller2} 
              alt="banner2"
              className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold'>Explore</p>
            </div>
          </div>

          {/* Banner 3 */}
          <div className='relative overflow-hidden rounded-2xl shadow-md group cursor-pointer transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl'>
            <img 
              src={bestseller3} 
              alt="banner3"
              className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold'>Trending</p>
            </div>
          </div>

        </div>
      </div>

      

    </div>
  )
}

export default BestSeller 