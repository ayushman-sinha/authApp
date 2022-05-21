import React, { useState ,useEffect} from 'react';
import * as jose from 'jose'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
 const navigate=useNavigate();
  async function populateQuote(){
   const req= await fetch('http://localhost:1337/api/quote',{
     headers:{
       'x-access-token':localStorage.getItem('token')
     }
   })
   const data=req.json();
   console.log(data);
  }
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
      const user=jose.decodeJwt(token)
      
      if(!user){
        localStorage.removeItem(token);
       navigate('/login');
      }
      else
      populateQuote();
    }
  },[])
  return (
    <div> 
    Logged in Successfully
    </div>
  )
}

export default Dashboard