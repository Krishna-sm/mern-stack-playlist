const jwt = require("jsonwebtoken")
class JWTService{
    static jwt_auth ="@#$%^&*($%^&*("

    static generateToken = (id,role)=>{
        const token  = jwt.sign({userId:id,role},JWTService.jwt_auth,{
            expiresIn:'2d'
        })
        return token
    }
       static verifyToken = (token)=>{
        const payload  = jwt.verify(token,JWTService.jwt_auth)
        return payload
    }
}

module.exports = JWTService