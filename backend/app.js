const express = require("express")
const app=express()
const port = 6302
const mongoose=require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config();

mongoose.set('strictQuery', false);

main().then(()=>{
  console.log("connected to mongodb")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB);
}

app.use(express.json())
app.use(cors())

const job2 = require("./router/jobo");
app.use("/jobo",job2)

const user2=require("./router/user")
app.use("/user",user2)

const username2=require("./router/user")
app.use("/user/username",username2)

const login2=require("./router/user")
app.use("/user/login",login2)

const profile6=require("./router/profile")
app.use("/profile",profile6)

const profileMe1=require("./router/profileMe")
app.use("/profileMe",profileMe1)

const random2=require("./router/user")
app.use("/user/random",random2)

// const apply5 =require("./router/user")
// app.use("/user/apply",apply5)

const apply2 =require("./router/apply")
app.use("/apply",apply2)

app.listen(port,()=>{
    console.log(`app is listening on port:${port}`)
})

