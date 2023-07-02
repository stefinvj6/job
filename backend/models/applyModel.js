const mongoose = require("mongoose")
const Schema = mongoose.Schema

const applySchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    job:{
        type:mongoose.Types.ObjectId,
        ref:'jobs'
    }
},{ strictPopulate: false });

const apply = mongoose.model("apply",applySchema)
module.exports=apply
