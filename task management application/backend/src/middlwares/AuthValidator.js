const httpStatus = require("http-status")
const { ApiError } = require("../utils/ApiError")
const JWTService = require("../utils/jwt")

const AuthValidator = (req,res,next)=>{

        try {
                let token = req.headers['authorization'] || ''

                    if(!token || !token.startsWith("Bearer ")){
                        throw new ApiError(httpStatus.UNAUTHORIZED,"please Login First")
                    }
                        token = token.split(" ")[1]

                        if(!token){
                        throw new ApiError(httpStatus.UNAUTHORIZED,"Provide Valid token")

                        }
                        
                        req.user = JWTService.verifyToken(token,'userId');

                        next()

        } catch (error) {
                    next(new ApiError(httpStatus.UNAUTHORIZED,error.message))
        }

}


module.exports = AuthValidator