const express = require("express")
const router = express.Router()
const apply =require("../models/applyModel")
var jwt = require('jsonwebtoken');
const user = require("../models/userModel");
const jobo =require('../models/jobModel')

function authorizeUser(req,res,next){
    const authorizationString = req.headers.authorization
    if(!authorizationString){
        res.send("login first")
    }
    const stringToArray = authorizationString.split(" ")
    const token=stringToArray[1]
    if(token){
        jwt.verify(token,process.env.TOKEN_SECRET,function(err,decoded){
            if (err) {
                res.send("unauthorized user")
            }
            if(decoded){
                req.user=decoded
                next()
            }
        })
    }  }


router.get("/",authorizeUser,async(req,res)=>{
    try{
        const userId = req.user._id;
        const apply1= await apply.find({user:userId},"-user").populate("job")
        res.json(apply1)
    }catch(err){
        res.send("error"+err)
    }
})

router.post("/",authorizeUser,async(req,res)=>{
    const userId=req.user._id
    const apply3 =new apply({user:userId,job:req.body.job})
    try{
        const newApply =await apply3.save()
        res.json(newApply)
    }catch(err){
        res.send(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const savedJobs=await apply.findById(req.params.id).populate("job")
        res.json(savedJobs)
    }catch{
        res.send(err+ "There is no saved jobs in this id")
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const savedJobs = await apply.findByIdAndUpdate(req.params.id,req.body)
        if(!apply){
            return error;
        }
        res.json(savedJobs)
    }catch{
        res.send("Can't update this savedJobs" +err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const savedJobs = await apply.findByIdAndDelete(req.params.id)
        if(!apply){
            return error
        }
        res.json(savedJobs)
    }catch{
        res.send("Cannot Delete the savedjob" +err)
    }
})

module.exports=router