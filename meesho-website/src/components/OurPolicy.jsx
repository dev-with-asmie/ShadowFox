import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-900'>

        <div>
           <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
             <p className='font-semibold'>7 Days Easy Return</p>
             <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>

        <div>
           <img src={assets.cash_on_delivery} className='w-12 m-auto mb-5' alt="" />
             <p className='font-semibold'>Cash on Delivery</p>
             <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>

        <div>
           <img src={assets.lowest_price} className='w-12 m-auto mb-5' alt="" />
             <p className='font-semibold'>Lowest Price</p>
             <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>

    </div>
  )
}

export default OurPolicy