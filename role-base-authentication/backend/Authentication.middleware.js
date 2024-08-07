const httpStatus = require("http-status");
const JWTService = require("./jwt.service");

const AuthValidation = (req,res,next)=>{

            try {
                
                let authHeader = req.headers['authorization'] || ''

                if(!authHeader || !authHeader.startsWith("Bearer ")){
                        throw new Error("Please Login First");
                }

                authHeader = authHeader.split(" ")[1]

                 if(!authHeader){
                        throw new Error("Please Provide Valid Token");
                }

                const payload = JWTService.verifyToken(authHeader) 

                req.user = payload.userId;
                req.role = payload.role;

                    next()
            } catch (error) {
                         return   res.status(httpStatus.UNAUTHORIZED).send({
            message:error.message
        })
            }

}



const Authorized = (...roles)=>(req,res,next)=>{
    if(!roles.includes(req.role)){
          return   res.status(httpStatus.UNAUTHORIZED).send({
            message:"can not accessable"
        })
    }

    next()
}

module.exports = {
    AuthValidation,
    Authorized
}