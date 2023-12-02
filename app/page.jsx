'use client'
import React, { useState, useEffect } from 'react';
import './globals.css';
import Home from '@/components/Home';
import Footer from '@/components/Footer';
import ExclusiveProducts from '@/components/ExclusiveProducts';
import Products from '@/components/Products';
import Accecories from '@/components/Accecories';

const Page = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, [activeSection]);

  return (
    isLoading ? (
    <div className="loader-5 center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><span></span></div>
   ) : (<>
      <div className='p-7 font-satoshi border-b-2 '>
        <nav className='flex items-center justify-between'>
          <span className='w-52'>
            <img src="/assets/icons/bska.png" alt="logo" />
          </span>
          <div className='flex items-center justify-between font-medium w-1/3 cursor-pointer'>
            <span onClick={() => handleSectionChange('home')}>Home</span>
            <span onClick={() => handleSectionChange('products')}>Products</span>
            <span onClick={() => handleSectionChange('categories')}>Categories</span>
            <span onClick={() => handleSectionChange('accessories')}>Accessories</span>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 rounded-xl bg-gray-100 py-2 px-3'>
            <img className='w-6 h-6' src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search--v1" />
              <input type="text" className='outline-none text-xs bg-transparent' placeholder='eg. A Backpack' name="" id="" />
            </div>
            <div className='flex items-center gap-4'>
              {/* <img className='w-6 h-6' src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" /> */}
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png" alt="like--v1" />
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart.png" alt="shopping-cart" />
              <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-regular/48/user--v1.png" alt="user--v1" />
            </div>
          </div>
        </nav>
      </div>
      <div className='p-7'>
        
          <>
            {activeSection === 'home' && (
              <>
                <Home />
                <ExclusiveProducts />
              </>
            )}
            {activeSection === 'products' && <Products />}
            {activeSection === 'accessories' && <Accecories />}
          </>
        
      </div>
      <Footer />
    </>)
  );
};

export default Page;
