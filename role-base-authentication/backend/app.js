const express = require("express")

const app = express()
const cors = require("cors")
const { default: mongoose } = require("mongoose")

const ConnectDB =async()=>{
        try {
                    await mongoose.connect("/*Your MONGODB STRING */")
                    console.log(`the db is connect with ${mongoose.connection.host}`);
                    
        } catch (error) {
                mongoose.disconnect()
                process.exit(1)
        }

}

ConnectDB()

// middlware
app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))




//routes
app.use("/api/v1/auth",require("./auth.routes"))


app.listen(4000,()=>{
    console.log(`the app is listen at http://localhost:${4000}`);
    
})