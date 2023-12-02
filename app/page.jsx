import React from 'react'
import './globals.css'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import { PopularItems } from '@/components/PopularItems'
import ExclusiveProducts from '@/components/ExclusiveProducts'

const page = () => {
  return (
    <>
      <div className='p-7 font-satoshi border-b-2 '>
        <nav className='flex items-center justify-between'>
         
          <span className='w-52'>
            <img src="/assets/icons/bska.png" alt="logo" />
          </span>
          <div className='flex items-center justify-between font-medium w-1/3 cursor-pointer'>
            <span>Home</span>
            <span>Products</span>
            <span>Categories</span>
            <span>Accecories</span>
          </div>
          <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2 rounded-xl bg-gray-100 py-2 px-3'>
            <img className='w-6 h-6' src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search--v1" />
            <input type="text" className='outline-none text-xs bg-transparent' placeholder='eg. A Backpack' name="" id="" />
          </div>
            <div className='flex items-center gap-4'>
              {/* <img className='w-6 h-6' src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" /> */}
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png" alt="like--v1" />
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart.png" alt="shopping-cart"/>
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/user--v1.png" alt="user--v1" />
            </div>
          </div>
        </nav>

      </div>
      <div className='p-7'>
        <Home />
        <ExclusiveProducts/>
      </div>
      <Footer/>
    </>
  )
}

export default page