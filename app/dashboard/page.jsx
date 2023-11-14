'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';
import '../globals.css';
import Analytics from "@/components/Analytics";
import AddProducts from "@/components/AddProducts";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();
    const [active, setActive] = useState('analytics');
    const [isLoading, setIsLoading] = useState(false);

    const handleIconClick = (componentName) => {
        setActive(componentName);
        setIsLoading(true);
    }


    return (
        <>
            {
                session ? (
                    <div className="lg:flex font-satoshi">
                        <div className="lg:w-20 hidden lg:block h-screen p-6 border-r-2">
                            <div className='flex flex-col items-center h-80 justify-between'>
                                <Link href='/' className=''>
                                    <svg id="logo-72" width="30" height="30" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" class="ccustom" fill="#212326"></path> </svg>
                                </Link>
                                <button className={`rounded-full ${active === 'analytics' ? 'bg-purp transition-background duration-300 ease-in-out' : ''} w-10 h-10 flex items-center justify-center mt-9 `} onClick={() => handleIconClick('analytics')}>
                                    <Image src={`/assets/icons/${active === 'analytics' ? 'burger-solid copy.svg' : 'burger-solid.svg'}`} width={18} height={18} />
                                </button>
                                <button className={`rounded-full ${active === 'addProducts' ? 'bg-purp transition-background duration-300 ease-in-out' : ''} w-10 h-10 flex items-center justify-center `} onClick={() => handleIconClick('addProducts')}>
                                    <Image src={`/assets/icons/${active === 'analytics' ? 'store-solid copy.svg' : 'store-solid.svg'}`} width={18} height={18} />
                                </button>
                                <button claclassName={`rounded-full ${active === 'chart' ? 'bg-purp' : ''} w-10 h-10 flex items-center justify-center `} onClick={() => handleIconClick('chart')}>
                                    <Image src={'/assets/icons/chart-simple-solid.svg'} width={18} height={18} />
                                </button>
                                <button className={`rounded-full ${active === 'bell' ? 'bg-purp' : ''} w-10 h-10 flex items-center justify-center`} onClick={() => handleIconClick('bell')}>
                                    <Image src={'/assets/icons/bell-solid (3).svg'} width={18} height={18} />
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-full w-full h-screen p-6 overflow-y-scroll">


                            <div className={`component-transition ${active === 'analytics' ? 'active' : ''}`}>

                                {active === 'analytics' && <Analytics />}
                            </div>
                            <div className={`component-transition ${active === 'addProducts' ? 'active' : ''}`}>

                                {active === 'addProducts' && <AddProducts />}
                            </div>

                            {/* Add more components based on 'active' value */}


                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Admin is not logged in...</p>
                    </div>
                )
            }
        </>
    );
};

export default Dashboard;
