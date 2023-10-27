"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


const RegisterAdmin = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ data })
    })
    if (response.ok) {
      const userInfo = await response.json();
      console.log(userInfo);
      router.push('/admin');
    } else {
      console.error('Request failed with status: ', response.status);
    }
    
  };

  return (
    <div>
      <form onSubmit={register}>
        <input type="email" name="email" value={data.email} id="email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
        <input type="password" name="password" value={data.password} id="password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterAdmin