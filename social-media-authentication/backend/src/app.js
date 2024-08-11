const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PasspORt } = require("./utils/passport")
const session = require("express-session")
const { GoogleProvider } = require("./utils/GoogleStregy")
//server
const app = express()

// middleware
app.use(cors())
app.use(morgan("dev"))
app.use(session({
    secret:'#$%^&*($%^&*I',
    resave:false,
    saveUninitialized:false
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(PasspORt.initialize())
app.use(PasspORt.session())

// streagy use karne ke liye
PasspORt.use(GoogleProvider)

// router
app.use("/api/v1/auth",require("./router/index.router"))


module.exports = app