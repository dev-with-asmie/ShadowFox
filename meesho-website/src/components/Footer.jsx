import React from 'react'
import logo from '../assets/Meesho-logo.png'

const Footer = () => {
  return (
    <div className='mt-40 bg-white text-pink-900'>
      
      {/* CONTAINER */}
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10'>
        
        {/* MAIN GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 items-start'>
          
          {/* LEFT */}
          <div className='space-y-4'>
            <img src={logo} className='w-32' alt="logo"/>
            <p className='text-pink-600 leading-relaxed'>
              Discover affordable fashion and everyday essentials with ease. 
              Shop smarter with trusted quality and great prices.
            </p>
          </div>

          {/* CENTER */}
          <div className='flex flex-col items-center md:items-start'>
            <p className='text-lg font-semibold mb-4'>COMPANY</p>
            <ul className='space-y-2 text-gray-600'>
              <li className='hover:text-pink-700 cursor-pointer'>Home</li>
              <li className='hover:text-pink-700 cursor-pointer'>About us</li>
              <li className='hover:text-pink-700 cursor-pointer'>Delivery</li>
              <li className='hover:text-pink-700 cursor-pointer'>Privacy Policy</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className='flex flex-col items-center md:items-end text-center md:text-right'>
            <p className='text-lg font-semibold mb-4'>GET IN TOUCH</p>
            <ul className='space-y-2 text-gray-600'>
              <li>+91 9745930000032</li>
              <li>query@meesho.com</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className='mt-12 border-t pt-6 text-center text-gray-600 text-sm'>
          © 2026 meesho.com — All Rights Reserved
        </div>

      </div>
    </div>
  )
}

export default Footer