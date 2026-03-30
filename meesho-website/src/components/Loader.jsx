import React from 'react'
import logo from '../assets/Meesho-logo.png'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <img src={logo} alt="logo" className="w-24 mx-auto mb-4" />

        <div className="w-10 h-10 border-4 border-pink-300 border-t-pink-900 rounded-full animate-spin mx-auto"></div>

        <p className="text-sm text-gray-500 mt-3">Loading...</p>
      </div>
    </div>
  )
}

export default Loader 