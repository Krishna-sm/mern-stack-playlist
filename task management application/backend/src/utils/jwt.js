const jwt = require("jsonwebtoken")

const JWT_AUTH  = process.env.JWT_AUTH || "$%^&*O$%^&*("

class JWTService{

    static generateToken = (payload)=>{

            const token = jwt.sign(payload,JWT_AUTH,{
                expiresIn:"2d"
            })
                return token
    }
     static verifyToken = (token,key)=>{

            const payload = jwt.verify(token,JWT_AUTH)
                return payload[key]
    }

}


module.exports =JWTService