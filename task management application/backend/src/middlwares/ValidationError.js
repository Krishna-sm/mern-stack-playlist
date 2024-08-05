const {validationResult} = require("express-validator");
const { ApiError } = require("../utils/ApiError");
const httpStatus = require("http-status");
const ValidationError  =(req,res,next)=>{
            const result = validationResult(req);

            if(!result.isEmpty()){
                    const err = result.array()[0].msg
                    next(new ApiError(httpStatus.BAD_REQUEST,err))
            }

            next()
}

module.exports =ValidationError