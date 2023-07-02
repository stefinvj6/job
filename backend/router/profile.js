const express = require("express")
const router =  express.Router()
const profile = require("../models/profileModel")
var jwt = require('jsonwebtoken');

router.get("/",async(req,res)=>{
    try{
        const profile1 = await profile.find(req.query)
        res.json(profile1)
    }catch(err){
        res.send(err)
    }
})

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

    router.post("/",authorizeUser, async(req,res) =>{
        const profile3 = new profile({...req.body,user:req.user._id})
        try{
            const newProfile=await profile3.save()
            res.json(newProfile)
        }catch(err){
            res.send("Error"+err)
        }
    })

module.exports=router