class ApiError extends Error{
    constructor(statusCode=500,msg,stack=''){
        super(msg);


        this.statusCode = statusCode;
        this.message = msg;
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = {
    ApiError
}