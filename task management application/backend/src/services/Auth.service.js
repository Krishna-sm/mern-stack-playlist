const httpStatus = require("http-status");
const { UserModel } = require("../models")
const { ApiError } = require("../utils/ApiError");
const JWTService = require("../utils/jwt");

class AuthService{
     static async registerUser(body){ 
        
        const chk_user = await UserModel.findOne({email:body.email.toLowerCase()});
        if(chk_user){
            throw new ApiError(httpStatus.BAD_REQUEST,"user Alredy exist")
        }

        await UserModel.create(body);

        return {
            msg:"User Register Successfully"
        }


    }

     static async loginUser(body){ 
        
        const chk_user = await UserModel.findOne({email:body.email.toLowerCase()});
        if(!chk_user){
            throw new ApiError(httpStatus.BAD_REQUEST,"user not exist")
        }
 

                const isMatch = await chk_user.comparePassword(body.password)
  if(!isMatch){
            throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Credentials")
        }
        const token  = JWTService.generateToken({userId:chk_user._id})

        return {
            msg:"User Login Successfully",
            token
        }


    }

    static async profileUser(user){ 
        
        const chk_user = await UserModel.findById(user);
        if(!chk_user){
            throw new ApiError(httpStatus.BAD_REQUEST,"user not exist")
        }
 
 

        return {
            msg:"User Profile Fetched",
            user:{
                name:chk_user.name,
                email:chk_user.email,
            }
        }


    }
}

module.exports = AuthService