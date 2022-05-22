import React, { useState } from 'react';


const SignUp = () => {
  
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  async function signUp(e){
    e.preventDefault();
    const response=await fetch('http://localhost:1337/api/signup',{
      method : 'POST',
      headers :{
      'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })

    const data=await response.json();
    console.log(data);
  }
  return (
    <div className='w-[80%] sm:w-1/3 bg-orange-200 py-10 px-5  mx-auto my-32 shadow-lg shadow-orange-900 '>

<h1 className='text-3xl text-center text-orange-900 font-bold mb-3'>Sign Up</h1>

      <div>
        <form onSubmit={signUp} className="flex flex-col space-y-4 mt-10">
        <input value={name} type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}  className='  px-3 py-2'></input>
        <input value={email} type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}  className=' px-3 py-2 '></input>
        <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  className=' px-3 py-2'></input>
        <input type='submit' value="Sign Up"  className='bg-orange-900 hover:bg-orange-700 px-3 py-2 text-white'></input>
        </form>
      </div>
    </div>
  )
}

export default SignUp