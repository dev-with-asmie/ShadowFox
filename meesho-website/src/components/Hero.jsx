import React from 'react'
import img1 from '../assets/meesho1.avif'
import img2 from '../assets/meesho2.avif'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hero = () => {
  return ( 
    <Swiper
      modules={[Autoplay]} 
      autoplay={{ delay: 3000 }}
      loop={true}
    >

      {/* SLIDE 1 */}
      <SwiperSlide>
        <div className='flex flex-col sm:flex-row border border-gray-400'>
          
          <div className='w-full sm:w-1/2 flex items-center justify-center py-10'>
            <div>
              <p className='text-sm'>OUR BESTSELLERS</p>
              <h1 className='text-3xl sm:text-5xl'>Latest Arrivals</h1>
              <p className='mt-2'>SHOP NOW</p>
            </div>
          </div>

          <div className='w-full sm:w-1/2'>
            <img src={img1} className='w-full h-auto' alt="" />
          </div>

        </div>
      </SwiperSlide>

      
      <SwiperSlide>
        <img src={img2} className='w-full h-[500px] object-cover' alt="" />
      </SwiperSlide>

    </Swiper>
  )
}

export default Hero