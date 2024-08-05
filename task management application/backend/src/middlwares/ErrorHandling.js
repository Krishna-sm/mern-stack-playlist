const { ApiError } = require("../utils/ApiError");

const ErrorHandling = (err,req,res,next)=>{
            const obj = {
                'statusCode':500
            }
               if(err instanceof ApiError){
                obj['statusCode'] = err.statusCode
                 obj['message'] = err.message;
                obj['stack'] = err.stack;
               }else{
                   obj['message'] = err.message;
                obj['stack'] = err.stack;
               }
               res.status(obj.statusCode).send(obj)

}

module.exports = ErrorHandling