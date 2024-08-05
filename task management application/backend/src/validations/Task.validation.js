const { body ,param} = require("express-validator")

class TaskValidation {
        static AddTask =[
            body("title").notEmpty().withMessage("Please provide Task Title"),
            body("desc").notEmpty().withMessage("Please provide Task Description"),
        ]
         static paramsId =[
            param("id").isMongoId().withMessage("enter valid mongoid").notEmpty().withMessage("Please provide Task Id"), 
        ]
}

module.exports = TaskValidation