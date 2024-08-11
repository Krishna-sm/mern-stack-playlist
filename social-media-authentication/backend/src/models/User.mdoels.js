const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
        node_id:String,
        displayName:String,
        photo:String,
        email:String
},{timestamps:true})

const UserModel = mongoose.model("user",Schema);


module.exports = UserModel