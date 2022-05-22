import React, { useState } from 'react';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('');
    const[category,setcategory]=useState('');
    
  
    async function loginUser(e){
      e.preventDefault();
      const response=await fetch('http://localhost:1337/api/login',{
        method : 'POST',
        headers :{
        'Content-Type':'application/json'
        },
        body:JSON.stringify({         
          email,
          password,
          category,
        })
      })
  
      const data=await response.json();
      if(data.user){
        localStorage.setItem('token',data.user)
        alert('User Logged in Successfully')
        window.location.href='/dashboard'
      }
      else
        alert('Error')

     
    }
    return (
      <div className='w-[80%] sm:w-1/3 bg-orange-200 py-10 px-5  mx-auto my-32 shadow-lg shadow-orange-900 '>
        <h1 className='text-3xl text-center text-orange-900 font-bold mb-3'>Login</h1>
        <div>
          <form onSubmit={loginUser} className="flex flex-col space-y-4"> 
            <div className='form-radio mt-4'>
              <select name='category' className=' bg-black px-2 w-full py-1 bg-opacity-30 outline-none' onChange={(e)=>setcategory(e.target.value)}  required>
                <option>--Select--</option>
                <option value="hrm">HR Manager</option>
                <option value="hr">HR </option>
                <option value="emp">Employee</option>
            </select>
            </div>  
          <input value={email} type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className="px-2 py-2"></input>
          <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className="px-2 py-2"></input>
          <input type='submit' value="Submit" className='bg-orange-900 hover:bg-orange-700 px-3 py-2 text-white'></input>
          </form>
        </div>
      </div>
    )
}

export default Login