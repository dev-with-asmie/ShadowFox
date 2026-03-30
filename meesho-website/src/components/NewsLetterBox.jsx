import React from 'react'
import { assets } from '../assets/assets'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-pink-900'>Up to 35% OFF *Only on App*</p>
        <p className='text-pink-700 mt-3'>
            Scan Now to download App!
        </p>
        <img src={assets.app_qr} className='w-20 m-auto mb-15' alt="" />

    </div>
  )
}

export default NewsLetterBox