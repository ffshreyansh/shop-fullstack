'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const AdminLogin = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

const handleLogin = async (e) =>{
  e.preventDefault();
  signIn('credentials', {
    ...data,
    redirect:false
  })
  router.push('/dashboard');  
}

  return (
    <div>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1/3 h-fit rounded-lg p-8 bg-white abl'>
                <form onSubmit={handleLogin} className='flex flex-col justify-between h-full gap-3'>
                    <label htmlFor="username">Email <br />
                    <input type="email" name="email" value={data.email} onChange={(e)=>{setData({...data, email: e.target.value})}} className='p-4 rounded-xl border-2 w-full outline-none mt-3' placeholder="Admin's Email" /></label>
                    <label htmlFor="password">Password <br />
                    <input type="password" name='password' className='p-4 rounded-xl border-2 w-full outline-none mt-3 decoration-none' value={data.password} onChange={(e)=>{setData({...data, password: e.target.value})}} placeholder='Password' /></label>
                    <button type='submit' className='bg-black p-4 bblogin rounded-xl text-white mt-4'>Log In</button>
                </form>
        </div>
    </div>
  )
}

export default AdminLogin