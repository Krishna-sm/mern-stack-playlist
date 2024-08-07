const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { Roles } = require("./constant")
const Schema = new mongoose.Schema({

        name:String,
        email:{
            type:String,
            trim:true,
            lower:true,
            unique:true
        },
        password:String,
        role:{
            type:String,
            default:Roles.user,
            enum:Object.values(Roles)
        }


},{timestamps:true})


Schema.pre("save",async function(next){
            if(this.isModified("password")){
                    this.password = await bcrypt.hash(this.password,10)

            }
            next()
})

Schema.methods.ComparePassword = async function(string_pass){
    const isMatch =  await bcrypt.compare(string_pass,this.password);
    return isMatch
}


exports.UserModel = mongoose.model("user",Schema)


