import React, { useContext, useState } from 'react'
import logo from '../assets/Meesho-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


function Navbar() {

    const [visible, setVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext) 
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

    <Link to='/login'><img src={logo} className="w-36" alt="" /></Link>

     <ul className='hidden sm:flex gap-5 text-sm text-pink-900'>
       
       <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-pink-600 hidden' />

       </NavLink>

       <NavLink to='/collections' className='flex flex-col items-center gap-1'>
        <p>COLLECTIONS</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-pink-600 hidden' />

       </NavLink>

       <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-pink-600 hidden' />

       </NavLink>

       <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-pink-600 hidden' />

       </NavLink>

     </ul>

     <div className='flex items-center gap-6'>
         <i onClick={()=>setShowSearch(prev => !prev)} className="ri-search-line cursor-pointer text-xl"></i>

         <div className='group relative'> 
           <Link to='/logo'><i className="ri-user-3-line cursor-pointer text-xl"></i></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-pink-500 rounded '>
                          <p className='cursor-pointer hover:text-pink-700'>My Profile</p>
                          <p className='cursor-pointer hover:text-pink-700'>Orders</p>
                          <p className='cursor-pointer hover:text-pink-700'>Logout</p>   
                    </div>
            </div>

         </div>

        <Link to='/cart' className='relative'>
             <i className="ri-shopping-bag-line cursor-pointer text-xl"></i>
             <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-pink-900 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

        </Link>
        <i onClick={()=>setVisible(true)} className='ri-menu-line cursor-pointer text-xl w-5 sm:hidden'></i>
     </div>

     {/*Sidebar menu for small screens */}
     <div className={`absolute top-0 right-0 bottkom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                          <i className="ri-arrow-drop-left-line h-4 rotate-180"></i>
                          <p>Back</p>
                    </div>
                </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink> 
    </div>
    </div>
    
  )
}

export default Navbar