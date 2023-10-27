'use client'
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();

    // useEffect(() => {
    //     if (!session) {
    //         router.push('/admin');
    //     }
    // }, [session, router]);

    return (
        <div className="lg:flex font-satoshi">
            <div className="lg:w-14 hidden lg:block h-screen p-6 border-r-2">
                <div className='flex flex-col items-center h-80 justify-between'>
                    <Link href='/' className=''>
                        <svg id="logo-72" width="30" height="30" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" class="ccustom" fill="#212326"></path> </svg>
                    </Link>
                    <Link href='/' className='rounded-full bg-purp  w-10 h-10 flex items-center justify-center'>
                        <Image src={'/assets/icons/burger-solid copy.svg'} width={18} height={18} />
                    </Link>
                    <Link href='/' className='rounded-full  w-10 h-10 flex items-center justify-center'>
                        <Image src={'/assets/icons/store-solid.svg'} width={18} height={18} />
                    </Link>
                    <Link href='/' className='rounded-full  w-10 h-10 flex items-center justify-center'>
                        <Image src={'/assets/icons/chart-simple-solid.svg'} width={18} height={18} />
                    </Link>
                    <Link href='/' className='rounded-full  w-10 h-10 flex items-center justify-center'>
                        <Image src={'/assets/icons/bell-solid (3).svg'} width={18} height={18} />
                    </Link>
                </div>
            </div>
            <div className="lg:w-full w-full h-screen p-6">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='font-bold text-3xl'>Good Evening, Admin</h1>
                        <p className='text-sm text-gray-500'>Your dashboard is ready to be customised!</p>
                    </div>
                    <div className='flex gap-3 w-96 items-center'>
                        <input type="text" placeholder='Search' className='border rounded-full bg-gray-100 w-56 h-10 px-5 outline-none' />
                        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                            <img src="/assets/icons/bellB.svg" alt="" />
                        </div>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden">
                            <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
