const httpStatus = require("http-status");
const AuthService = require("../services/Auth.service");
const CathcAsync = require("../utils/CatchAsync");

class AuthController{

            static registerUser = CathcAsync(async(req,res)=>{
                
                const res_obj = await AuthService.registerUser(req.body);
                res.status(httpStatus.CREATED).send(res_obj)
            })
               static loginUser = CathcAsync(async(req,res)=>{
                
                const res_obj = await AuthService.loginUser(req.body);
                res.status(httpStatus.OK).send(res_obj)
            })    
            static profileUser = CathcAsync(async(req,res)=>{
                
                const res_obj = await AuthService.profileUser(req?.user);
                res.status(httpStatus.OK).send(res_obj)
            })

            
            
}

module.exports = AuthController