'use client'
import React, { useState } from "react";
import { signOut, useSession } from 'next-auth/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "@ramonak/react-progress-bar";
import '../globals.css';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [profileClicked, setProfileClicked] = useState(false);

    const handleProfile = () => {
        setProfileClicked(!profileClicked);
    }

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                backgroundColor: '#f5f5f5', // Grey color for all bars
                hoverBackgroundColor: '#beb1ff',
                data: [65, 59, 80, 81, 56, 65],
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Hide the x-axis grid lines
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false, // Hide the y-axis grid lines
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the dataset label
            },
        },
        layout: {
            padding: {
                top: 20, // Change the top padding
                right: 20, // Change the right padding
                bottom: 20, // Change the bottom padding
                left: 20, // Change the left padding
            },
        },
    };

    const data2 = {
        labels: ['1st Oct', '3th Oct', '5th Oct', '7th Oct'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [80, 19, 3, 100],
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 2,
          },
        ],
      };
    
      // Chart options
      const options2 = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    return (
        <div className="lg:flex font-satoshi">
            <div className="lg:w-20 hidden lg:block h-screen p-6 border-r-2">
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

            <div className="lg:w-full w-full h-screen p-6 overflow-y-scroll">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='font-bold text-3xl'>Good Evening, Admin</h1>
                        <p className='text-sm text-gray-500'>Your dashboard is ready to be customised!</p>
                    </div>
                    <div className='flex gap-3 w-96 items-center justify-end'>
                        <input type="text" placeholder='Search' className='border rounded-full bg-gray-100 w-56 h-10 px-5 outline-none' />
                        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                            <img src="/assets/icons/bellB.svg" alt="" />
                        </div>
                        <div className="h-10 w-10 relative flex items-center justify-center rounded-full overflow-hidden" onClick={handleProfile}>
                            <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />

                        </div>
                        <div className={profileClicked ? 'w-32 h-fit prp absolute top-20 hover:bg-slate-100 border-2 rounded-2xl p-4 bg-white' : 'hidden  w-32 h-20'} >
                            <Link href='/' onClick={() => signOut({ redirect: false })}>Log Out</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-between w-full md:gap-2 sm:gap-2  mt-8 h-72'>
                    <div className='w-1/5 p-4 border-2 h-full rounded-xl overflow-hidden'>
                        <h2 className='font-semibold text-lg'>Total Sales</h2>
                        <p className='text-xs text-gray-600'>This year total data</p>
                        <div className='w-fit h-fit -rotate-90 relative barr'>
                            <CircularProgressbar
                                text="+85%"
                                value={78}
                                maxValue={100}
                                strokeWidth={12}
                                circleRatio={0.5}
                                styles={buildStyles({
                                    pathColor: '#beb1ff',
                                    trailColor: '#f5f5f5',
                                    pathTransitionDuration: 0.5,
                                    textColor: '#000000',
                                })}
                            />
                            <div className="absolute top-1/2 lft transform -translate-x-1/2 -translate-y-1/2 font-bold rotate-90">
                                <p className='text-center text-3xl font-semibold'>+85%</p>
                                <p className='text-xs font-semibold sml'>Incresed this month</p>
                            </div>
                        </div>
                        <p className='text-xs font-bold mt-8'>Sales volume increased <br /> intensely!</p>
                    </div>
                    <div className='w-2/5 border-2 h-full rounded-xl p-4'>
                        <h1 className='text-lg font-semibold mb-2'>Best Selling Products</h1>
                        <ul className="flex flex-col justify-between h-fit">
                            <li className="my-1">
                                <p className='text-md font-medium'>Omega Luxury Watch</p>
                                <p className='text-xs text-gray-500 mb-1'>Best for fashionable casual</p>
                                <ProgressBar completed={85} maxCompleted={100} bgColor="#beb1ff" customLabel={920} baseBgColor="#f5f5f5" height="18px" />
                            </li>
                            <li className="my-1">
                                <p className='text-md font-medium'>Omega Luxury Watch</p>
                                <p className='text-xs text-gray-500 mb-1'>Best for fashionable casual</p>
                                <ProgressBar completed={85} maxCompleted={100} bgColor="#beb1ff" customLabel={920} baseBgColor="#f5f5f5" height="18px" />
                            </li>
                            <li className="my-1">
                                <p className='text-md font-medium'>Omega Luxury Watch</p>
                                <p className='text-xs text-gray-500 mb-1'>Best for fashionable casual</p>
                                <ProgressBar completed={85} maxCompleted={100} bgColor="#beb1ff" customLabel={920} baseBgColor="#f5f5f5" height="18px" />
                            </li>

                        </ul>
                    </div>
                    <div className='w-2/5 border-2 h-full rounded-xl p-4'>
                        <h1 className='text-lg font-semibold mb-2'>Website Visitors</h1>
                        <p className='text-xs text-gray-500 mb-1'>Chart is showing every month's number</p>
                        <div className="w-full h-52">
                            <Bar
                                options={options}
                                data={data}

                            />
                        </div>
                    </div>

                </div>
                <div className="w-full flex h-fit items-start justify-between mt-8 gap-2 ">
                    <div className="w-3/5 border-2 p-4 rounded-xl">
                        <h2 className='font-semibold text-md'>Product Stock</h2>
                        <p className='text-xs text-gray-500 font-medium'>Total 4376 items are in Stock</p>

                        <table className="w-full mt-4">
                            <thead>
                                <tr className="text-left border-b-2 text-gray-400 font-medium text-sm">
                                    <th className="py-3">Item</th>
                                    <th className="py-3">Product Code</th>
                                    <th className="py-3">Qty left</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-md font-medium">
                                    <td className="py-3 flex items-center gap-1">
                                        <span className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden" onClick={handleProfile}>
                                            <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />

                                        </span>

                                        <span>Robert Carter</span>
                                    </td>
                                    <td className="py-3">#2fc435</td>
                                    <td className="py-3">924</td>
                                    <td className="py-3">
                                        <span className=" text-xs bg-purple-100 px-2 py-1 text-purple-600 hidden rounded-full">In Stock</span>
                                        <span className=" text-xs bg-orange-100 text-orange-500 hidden px-2 py-1 rounded-full ">Low Stock</span>
                                        <span className=" text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full ">Out of Stock</span>
                                    </td>
                                    <td className="py-3">$2600</td>
                                </tr>
                                <tr className="text-md font-medium">
                                    <td className="py-3 flex items-center gap-1">
                                        <span className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden" onClick={handleProfile}>
                                            <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />

                                        </span>

                                        <span>Robert Carter</span>
                                    </td>
                                    <td className="py-3">#2fc435</td>
                                    <td className="py-3">924</td>
                                    <td className="py-3">
                                        <span className=" text-xs bg-purple-100 px-2 py-1 text-purple-600  rounded-full">In Stock</span>
                                        <span className=" text-xs bg-orange-100 text-orange-500 hidden px-2 py-1 rounded-full ">Low Stock</span>
                                        <span className=" text-xs bg-red-100 text-red-500 px-2 py-1 hidden rounded-full ">Out of Stock</span>
                                    </td>
                                    <td className="py-3">$2600</td>
                                </tr>
                                <tr className="text-md font-medium">
                                    <td className="py-3 flex items-center gap-1">
                                        <span className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden" onClick={handleProfile}>
                                            <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />

                                        </span>

                                        <span>Robert Carter</span>
                                    </td>
                                    <td className="py-3">#2fc435</td>
                                    <td className="py-3">924</td>
                                    <td className="py-3">
                                        <span className=" text-xs bg-purple-100 px-2 py-1 text-purple-600 hidden rounded-full">In Stock</span>
                                        <span className=" text-xs bg-orange-100 text-orange-500  px-2 py-1 rounded-full ">Low Stock</span>
                                        <span className=" text-xs bg-red-100 text-red-500 px-2 py-1 hidden rounded-full ">Out of Stock</span>
                                    </td>
                                    <td className="py-3">$2600</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="w-2/5 border-2 p-4 rounded-xl">
                        <h2 className='font-semibold text-md'>Sales Analytics</h2>
                        <p className='text-xs text-gray-500 font-medium'>Will show in every 7 days data</p>
                           <div className="h-80">
                           <Line data={data2} options={options2} />
                            </div>                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
