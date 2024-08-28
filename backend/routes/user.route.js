const express=require('express');
const userRouter=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const UserModel = require('../models/user.model');

userRouter.post('/signup',async(req,res)=>{
    const {name,email,mobile,gender,isAdmin}=req.body;
    try {
        bcrypt.hash(mobile,5,async(err,hash)=>{
            if(err){
                return res.status(401).json({message:`Internal Server error ${err}`})
            }
            const user=new UserModel({
                name,
                email,
                mobile:hash,
                gender,
                isAdmin
            })
            await user.save();
            res.status(201).json({message:"User registered Sucessfully"})
        })
    } catch (error) {
        res.status(500).json({message:`Failed to register ${error}`})
    }
})

userRouter.post('/login',async(req,res)=>{
    const {name,mobile}=req.body;
    try {
        const user=await UserModel.findOne({name})
        if(!user){
            return res.status(500).json({message:"User Not found"})
        }
        if(user){
            bcrypt.compare(mobile,user.mobile,(err,result)=>{
                if(err){
                    res.status(500).json({message:`Internal Server error ${err}`})
                }
                if(result){
                    const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY)
                    res.status(200).json({message:"User logged in sucessfully",token})
                }
            })
        }
        
    } catch (error) {
        res.status(400).json({message:`wrong password ${error}`})
    }
})
module.exports=userRouter
