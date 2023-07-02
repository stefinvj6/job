const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({

    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    firstName:{
        type:String,
        required:true
        },
    lastName:{
        type:String,
        required:true
        },  
    profilePicture:{
        type:String,
        // required:true
        },
    domain:{
        type:String,
        required:true
        },
    contactNumber:{
        type:String,
        required:true
        },
    eMail:{
        type:String,
        required:true
        },
    github:{
        type:String,
        // required:true
        },
    place:{
        type:String,
        // required:true
        },
    description:{
        type:String,
        // required:true
        },
    education:{
        type:String,
        // required:true
        },
    certificates:{
        type:String,
        // required:true
        },
    skills:{
        type:String,
        // required:true
        },
    projects:{
        type:String,
        // required:true
        },
    
  });

  const profile = mongoose.model("profile", profileSchema);
  module.exports=profile