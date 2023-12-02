'use client'
import React, { useEffect, useState } from 'react'


const Products = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [productLiked, setProductLiked] = useState(false);


    useEffect(() => {
        fetch('api/addproducts', {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((response) => {
            setData(response);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          })
          .finally(() => {
            setIsLoading(false); // Set loading to false after data is fetched or if there's an error
          });
      }, []);
    
    return (
        <div className='h-screen'>
            {isLoading ? (
                 <div class="loader-5 center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><span></span></div>
            ) :
                (<div>
                     <span className=' bg-gray-200  font-semibold w-20 h-10 flex items-center justify-center rounded-md ml-auto cursor-pointer'>Filters</span>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    
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
                </div>)}
        </div>
    )
}

export default Products