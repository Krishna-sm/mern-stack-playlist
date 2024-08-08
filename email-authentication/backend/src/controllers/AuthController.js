const httpStatus = require("http-status");
const AuthService = require("../services/AuthService")
const CatchAsync = require("../utils/CatchAsync")

class AuthController{
    static loginUser = CatchAsync(async(req,res)=>{

        const res_obj = await AuthService.loginUser(req.body);
        res.status(httpStatus.OK).send(res_obj)
    })

     static verifyOtp = CatchAsync(async(req,res)=>{

        const res_obj = await AuthService.verifyOtp(req.body);
        res.status(httpStatus.OK).send(res_obj)
    })
}

module.exports= AuthController