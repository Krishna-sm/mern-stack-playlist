const jwt = require("jsonwebtoken")
class JWTService{
        static jwt_auth ="$%^&*(O%^&*()_{"
    static generateToken = (payload)=>{
        const token = jwt.sign(payload,JWTService.jwt_auth,{
            expiresIn:"30d"
        })
        return token
    }

    static verifyToken = (token,key)=>{
        const payload = jwt.verify(token,JWTService.jwt_auth)
        return payload[key]
    }
}

module.exports= JWTService