const express = require("express")
const dotenv = require('dotenv');
const router =  express.Router()
const User = require("../models/userModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const crypto = require("crypto")
const Profile=require("../models/profileModel")
const apply =require("../models/applyModel")

dotenv.config();
const saltRounds = 10;

// TO GET THE USER

router.get("/",async(req,res)=>{
    try{
        const user1 = await User.find()
        res.json(user1)
    }catch(err){
        res.send(err)
    }
})

// TO GET THE USER USING USERNAME

router.get("/:username",async(req,res)=>{
    try{
        const username = req.params.username
        const username1 = await User.find({username:username},"-password")
        res.json(username1[0])
    }
    catch(err){
        console.log(err)
    }
})

// TO ADD USER

router.post("/",async(req,res)=>{

    try{
        let user3=new User(req.body)
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        user3["password"]=hashedPassword
        const newUser=await user3.save()
        res.status(201).send("signup sucess")
        res.json(newUser)
    }catch(err){
        res.send('signup failed'+err)
        return;
    }
})

// TO ACCESS THE TOKEN

function generateAccessToken(username) {
    const token = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
}

// LOGIN ROUTE

router.post("/login",async(req,res)=>{
    try{
        const username = req.body.username
        const user = await User.find({username:username});
        const password = req.body.password
        const hashedPassword=user[0].password
        const comparisionResult = await bcrypt.compare(password, hashedPassword);

        if(comparisionResult){
            const token = generateAccessToken({
                username:username,
                _id:user[0]._id
            })
            res.json({
                token:token,
            })
        }else{
            throw "login failed"
        }

    }catch(err){    
        console.log('cannot find user' +err)
        res.status(404).send("user not found")
        return;
    }     
})

// TO GET THE SECERT KEY

router.get("/random",async(req,res)=>{
    const secret = crypto.randomBytes(64).toString('hex')
    res.send(secret)
})

// PROFILE
// TO GET THE PROFILE

router.get("/profile",async(req,res)=>{
    try{
        const profile1 = await Profile.find()
        res.json(profile1)
        console.log("hi")
    }catch(err){
        res.send(err)
    }
})



// // TO GET THE AUTHORIZEUSER

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
    }
}

router.get("/apply",async(req,res)=>{
    try{
        console.log("hi")
        const userId = req.user._id;
        const apply1= await apply.find({user:userId}).populate("jobo")
        console.log(apply1)
        res.json(apply1)
    }catch(err){
        res.send(err)
    }
})

// // TO GET THE LOGINED USER

router.get("/profile/me",authorizeUser, async(req,res)=>{
    try{
        if(req.user){
            const profiles = await Profile.find({user:req.user._id})
            res.json(profiles[0])
        }else{
            throw "invalid user";
        }

    }catch(err){
        res.send("profile not found" +err)
    }
})

// // TO POST THE PROFILE

router.post("/profile",async(req,res)=>{
    const profile3=new Profile(req.body)
    try{
        const newProfile=await profile3.save()
        res.json(newProfile)
    }catch(err){
        res.send('Error'+err)}
        
})

module.exports=router