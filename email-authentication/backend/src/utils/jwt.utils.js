const jwt = require("jsonwebtoken")
class JWTService{
    static jwt_auth = process.env.JWT_AUTH ||"$%^&*()OP{%^&*()"


    static generateToken = async(payload)=>{
        const token =  await jwt.sign(payload,JWTService.jwt_auth,{
            expiresIn:'30d'
        })

        return token
    }

     static verifyToken = async(token,key)=>{
        const payload =  await jwt.verify(token,JWTService.jwt_auth)

        return payload[key]
    }


}

module.exports= JWTService