const express  = require("express")
const AuthController = require("./controllers/AuthController")
const router = express.Router()



router.route("/login")
.post(AuthController.loginUser)


router.route("/verify")
.post(AuthController.verifyOtp)


module.exports = router