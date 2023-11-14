import React from 'react'

const Home = () => {
    return (
        <>
            <div className='flex items-center justify-between w-full gap-4'>
                <div className='h-fit w-full lg:w-1/2 flex flex-col gap-4'>
                    <p className='text-lg w-1/2 text-gray-400'>Absolutely hot collections 🔥</p>
                    <h1 className='text-6xl w-3/4 font-bold'>The Best Place to Find And Buy <span><img className=' w-auto inline-block rotate-180' src="https://img.icons8.com/ios/50/000000/curly-arrow--v1.png" alt="curly-arrow--v1"/></span> Amazing <span className='gP'>Products</span></h1>
                    <p className='w-2/3 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, deserunt. Lorem ipsum dolor sit amet.</p>
                    <button className='text-md font-semibold text-white bg-black w-1/4 py-5 rounded-xl'>Explore Now</button>
                </div>
                <div className='h-fit w-full lg:w-1/2 flex flex-col gap-7'>
                    <div className='hM'>
                        <img
                            src="/assets/icons/h1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                </div>

            </div>
            <div className='mt-20'>
                <div className='hM relative'>
                    <img
                        src="https://images.pexels.com/photos/63776/pexels-photo-63776.jpeg"
                        alt=""
                        className="w-full h-full object-cover object-top"
                    />
                    <div className='absolute top-1/3 right-20 w-60'>
                        <p className='font-semibold mb-1'>Leather Bag</p>
                    <p className='text-sm mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                    <button className=" border-2 border-black font-semibold px-6 py-2 w-2/3 hover:bg-black hover:text-white transition-all">Shop now</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home