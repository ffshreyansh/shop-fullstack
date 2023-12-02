import React from 'react'

const Home = () => {
    return (
        <>
            <div className='flex items-center justify-between w-full relative'>
                <div className='h-fit w-full lg:w-2/3 flex flex-col pl-10 gap-8'>
                    <p className='text-lg w-1/2 text-gray-400 font-medium'>Absolutely hot collections 🔥</p>
                    <h1 className=' text-7xl w-4/5 font-bold'>The Best Place to Find And Buy <span><img className=' w-auto inline-block rotate-180' src="https://img.icons8.com/ios/50/000000/curly-arrow--v1.png" alt="curly-arrow--v1" /></span> Amazing <span className='gP'>Products</span></h1>
                    <p className='w-2/3 text-gray-400 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, deserunt. Lorem ipsum dolor sit amet.</p>
                    <button className='text-md font-semibold text-white bg-black w-1/5 py-5 rounded-xl'>Explore Now</button>
                    <div className='flex items-center gap-7'>
                        <div className='flex flex-col items-start'>
                            <span className='text-2xl font-bold'>20k+</span>
                            <span className='text-xs font-medium'>Collections</span>
                        </div>
                        <span className=' text-gray-300'>|</span>
                        <div className='flex flex-col items-start'>
                            <span className='text-2xl font-bold'>16k</span>
                            <span className='text-xs font-medium'>Users</span>
                        </div>
                    </div>
                </div>
                <img src="/assets/rtt-01.png" class='rotate-image absolute'  alt="" />
                <div className='h-fit w-full lg:w-1/3 flex flex-col gap-7'>
                    <div className='hM'>
                        <img
                            src="/assets/icons/h1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
          
        </>

    )
}

export default Home