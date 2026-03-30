import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLetterBox from '../components/NewsLetterBox.jsx'
import banner from '../assets/meesho.avif' 

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/> 
      <div className="my-10">
     <img 
      src={banner} 
      alt="banner" 
      className="w-full rounded-lg shadow-md"
     />
    </div> 
      <NewsLetterBox/>
      
    </div>
  )
}

export default Home 