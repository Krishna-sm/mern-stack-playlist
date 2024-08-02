const express = require("express")
const { ConnectDb } = require("./db.config")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

ConnectDb()


const Schema = new mongoose.Schema({
  name:String,
  email:String,
  role:String,
  date:String
})

const EmpModel = mongoose.model("user",Schema)


app.post("/register",async(req,res)=>{
if(!req || !req.body){
  return    res.status(400).send({
      error:"please send data"
    })
}
  const {email,role,name,date} = req?.body;
  if(!email || !role || !name ||!date){
    return res.status(400).send({
      error:"All Filed are required"
    })
  }

      await EmpModel.create({
        email,role,name,date
      })
 return res.status(201).send({
      msg:"Employee register Successully"
    })

})

app.listen(4000,()=>{
  console.log(`the app is listen at http://localhost:4000`)
})