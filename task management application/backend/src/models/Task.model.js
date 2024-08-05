const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        trim:true,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    isComplete:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


const model = mongoose.model("task",Schema)

module.exports = model