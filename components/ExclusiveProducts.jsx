'use client'
import React, { useState, useEffect } from 'react'

const ExclusiveProducts = () => {

  const [data, setData] = useState([]);
  const [productLiked, setProductLiked] = useState(false);

  useEffect(() => {
    fetch('/api/addproducts', {
      method: 'GET'
    })
    .then((response) => (response.json()))
    .then((res) => (setData(res)))
  }, [])

  console.log(data)
  return (
    <div className='w-full py-20'>
      <div>
        <h1 className='text-4xl font-bold text-center'><span className=' gP'>Exclusive</span> Products <span><img className=' w-auto inline-block -rotate-90 ml-10' src="https://img.icons8.com/ios/50/000000/curly-arrow--v1.png" alt="curly-arrow--v1" /></span></h1>
        <p className='text-center font-medium text-gray-400 text-md mt-5'>Search for the latest fashion articles and find amazing products to buy from our huge collections</p>
      </div>
      <div className='flex items-center lg:w-fit mx-auto bg-gray-100 rounded-lg py-2 pl-4 mt-8'>
        {/* <img className='w-5 h-5' src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" /> */}
        <input type="text" className='h-full bg-transparent outline-none px-2 py-4' name="" id="" placeholder='Search Products...' />
        <button className='bg-black w-40 h-14 text-white rounded-lg'>Explore Now</button>
      </div>
      <div className='catFilters flex items-center w-1/2 mx-auto mt-10 justify-between cursor-pointer'>
        <span className='bg-purp w-20 h-10 flex items-center justify-center rounded-md text-white'>All</span>
        <span>Popular</span>
        <span>Recent</span>
        <span className=' bg-gray-200  font-semibold w-20 h-10 flex items-center justify-center rounded-md'>Filters</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">

        {/* Product Sections to be mapped */}
        {data.map((data, index) => (
          <div class="mb-4 md:mb-0 cursor-pointer" key={data.id}>
            <div className='w-full h-96 rounded-xl relative'>
              <span className=' right-5 top-5 absolute'>
                <span className='bg-white opacity-50 w-10 h-10 rounded-full flex items-center justify-center ' onClick={() => setProductLiked(true)}>
                  <img className='hover:scale-125 transition-all' src={`${productLiked ? '/assets/icons/liked.svg' : '/assets/icons/like.svg'}`} alt="" />
                </span>
              </span>
              <img className='object-cover w-full h-full rounded-xl' src={data.productImg} alt={`${data.name} image`} />
            </div>
            <div className='flex items-start justify-between w-full mt-4'>
              <div className='flex flex-col items-start '>
                <span className='text-lg font-semibold '>{data.name}</span>
                <span>{data.category}</span>
              </div>
              <span className='gradienT font-semibold px-3 py-2 flex items-center justify-center rounded-md'><span>$ {data.price}</span></span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ExclusiveProducts