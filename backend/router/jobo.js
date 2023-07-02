const express = require("express")
const router =  express.Router()
const jobo =require('../models/jobModel')

router.get("/", async(req,res)=>{
    try{
        const job1=await jobo.find()
        res.json(job1)
    }catch(err){
        res.send('Error'+err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const showJob=await jobo.findById(req.params.id)
        res.json(showJob)
    }catch(err){
        res.send(err)
    }
})

router.post("/",async(req,res)=>{
    const job4=new jobo(req.body)
    try{
        const newJob=await job4.save()
        res.json(newJob)
    }catch(err){
        res.send('Error'+err)
    }
        
})

router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const job4 =await jobo.findByIdAndUpdate(id,req.body)
        if(!jobo){
            return error;
        }
        res.json(job4)
    }catch(err){
        res.send('error' + err)
    }
  })

router.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const job4 =await jobo.findByIdAndDelete (id)
        if(!jobo){
            return "There is no job in this id"
        }
        res.json(job4)
    }catch{
        res.send(err)
    }
})

module.exports = router;