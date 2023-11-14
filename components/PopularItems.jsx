import React from 'react'

export const PopularItems = () => {
  return (
    <div className='p-7'>
        <h1 className='font-bold text-3xl'>Popular Products</h1>
        <div className='flex overflow-x-scroll h-fit mt-10 scrollOFF'>
            <div className='w-72 h-96 bg-red-200'>
                <div className=''>
                    <img src="" className='w-full h-full object-cover' alt="productImg" />
                </div>
            </div>

        </div>
    </div>
  )
}
