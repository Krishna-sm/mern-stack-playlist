require("dotenv").config({})
require("colors")
const app = require("./src/app");
const { ConnectDB } = require("./src/config/db.config");
const port = process.env.PORT || 8000
ConnectDB()


app.listen(port,()=>{
    console.log(`> the app is listen at http://localhost:${port}`.bgGreen);
    
})