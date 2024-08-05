const { body } = require("express-validator")
class AuthValidation {

    static registerUser = [
        body("name").notEmpty().withMessage("Please provide valid name"),
        body("email").notEmpty().withMessage("Please provide valid Email").isEmail().withMessage("email should be valid"),
        body("password").notEmpty().withMessage("password is required")
    ]
     static loginUser = [ 
        body("email").notEmpty().withMessage("Please provide valid Email").isEmail().withMessage("email should be valid"),
        body("password").notEmpty().withMessage("password is required")
    ]


    
}
module.exports =AuthValidation