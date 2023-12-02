import React from 'react'

const ExclusiveProducts = () => {
  return (
    <div className='w-full py-20'>
        <div>
            <h1 className='text-4xl font-bold text-center'><span className=' gP'>Exclusive</span> Products <span><img className=' w-auto inline-block -rotate-90 ml-10' src="https://img.icons8.com/ios/50/000000/curly-arrow--v1.png" alt="curly-arrow--v1" /></span></h1>
            <p className='text-center font-medium text-gray-400 text-lg mt-5'>Search for the latest fashion articles and find amazing products to buy from our huge collections</p>
        </div>
        <div className='flex items-center lg:w-1/4 bg-gray-100'>
            <input type="text" name="" id="" />
            <button></button>
        </div>
    </div>
  )
}

export default ExclusiveProducts