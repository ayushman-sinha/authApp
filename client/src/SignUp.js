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
    <div>
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={signUp}>
        <input value={name} type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
        <input value={email} type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
        <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
        <input type='submit' value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default SignUp