import React, { useState } from 'react';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('');
  
    async function loginUser(e){
      e.preventDefault();
      const response=await fetch('http://localhost:1337/api/login',{
        method : 'POST',
        headers :{
        'Content-Type':'application/json'
        },
        body:JSON.stringify({         
          email,
          password
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
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={loginUser}>         
          <input value={email} type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
          <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
          <input type='submit' value="Submit"></input>
          </form>
        </div>
      </div>
    )
}

export default Login