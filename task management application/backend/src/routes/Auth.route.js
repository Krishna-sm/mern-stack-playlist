const express = require("express")
const AuthController = require("../controllers/Auth.controller")
const AuthValidation = require("../validations/Auth.validation")
const ValidationError = require("../middlwares/ValidationError")
const AuthValidator = require("../middlwares/AuthValidator")
const router = express.Router()

router.route("/register")
.post(AuthValidation.registerUser,ValidationError, AuthController.registerUser)

router.route("/login")
.post(AuthValidation.loginUser,ValidationError, AuthController.loginUser)


router.route("/profile")
.get(AuthValidator, AuthController.profileUser)

module.exports = router