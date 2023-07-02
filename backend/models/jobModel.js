const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company_logo:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
        },
    job_role:{
        type:String,
        required:true
        },  
    job_salery:{
        type:String,
        required:true
        },
    job_type:{
        type:String,
        required:true
        },
    job_requirements:{
        type:String,
        required:true
        },
    job_description:{
        type:String,
        required:true
        },
    contact_number:{
        type:String,
        required:true
        },
    company_Address:{
        type:String,
        required:true
        },
    about:{
        type:String,
        required:true
    },
    job_Posted:{
        type:String,
        default:Date.now()
        },
  });

  const jobs = mongoose.model("jobs", jobSchema);
  module.exports=jobs