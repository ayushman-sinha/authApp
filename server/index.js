const express=require('express');
const cors=require('cors');
const app=express();
const crypto = require("crypto")

const mongoose=require('mongoose');
const User=require('./models/user.model');
const jwt=require('jsonwebtoken');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user-contain-data')
app.post('/api/signup', async (req,res)=>{
    console.log(req.body);
    try{
        await User.create({
            name : req.body.name,
            email: req.body.email,
            password : req.body.password
        })
        
        res.json({
            status: 'ok'
        })
    }
    catch(err){
        res.json({
            status:'Duplicate Email'
        })
    }
});

app.post('/api/login', async (req,res)=>{
    console.log(req.body);
    const user=await User.findOne({email : req.body.email, password : req.body.password})
    if(user){
        const token=jwt.sign({
            name : user.name,
            email : user.email
        },'topsecret123')
        res.json({ status : 'ok',user : token})
    }
    else{
        res.json({ status : 'User Does not Exists',user : false})
    }
});

app.listen(1337,()=>{
    console.log('Server stated on 1337');
})