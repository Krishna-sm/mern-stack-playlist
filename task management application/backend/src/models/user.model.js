const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = new mongoose.Schema({


    name:{
        type:String,
        required:true,
        trim:true,
        lower:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        lower:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true})


Schema.pre("save",async function(next){
    const user = this;

    if(user.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(user.password,salt);
    }
    next()
})


Schema.methods.comparePassword = async function(string_pass){
    
    const isMatch = await bcrypt.compare(string_pass,this.password);
    return isMatch

}


const model = mongoose.model("user",Schema)

module.exports = model