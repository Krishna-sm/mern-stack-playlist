const UserModel = require("../models/User.mdoels")
const JWTService = require("../utils/jwt")

exports.LoginWithGoogle = async(profile,cb)=>{
    // logic


    const chk_user = await UserModel.findOne({node_id:profile?._json.sub})
    if(chk_user){
        //
        const token = JWTService.generateToken({userId:chk_user._id})
        cb(null,token)
        return
    }

   const user=  await UserModel.create({
        node_id:profile?._json.sub,
        displayName:profile?._json.name,
        photo:profile?._json.picture,
        email:profile?._json.email
    })

    // login

    const token = JWTService.generateToken({userId:user._id})
        cb(null,token)
return

}

exports.VerifyToken = async(req,res,next)=>{
    try {
                    const authToken = req.headers['authorization'] || ''

                    if(!authToken || !authToken.startsWith("Bearer "))
                    {
                        throw new Error("please login first")
                    }
                    const token = authToken.split(" ")[1]
                      if(!token)
                    {
                        throw new Error("please provide valid token")
                    }

                    const payload = JWTService.verifyToken(token ,'userId')

                    req.user =payload;
                        next()

    } catch (error) {
                next(new Error(error.message))
    }
}

exports.ProfileController = async(req,res)=>{
         const chk_user = await UserModel.findById(req.user)
    if(!chk_user){
        //
            return res.status(401).send({
                error:"can not find"
            })
    }

    res.status(200).send({
        user:chk_user.toObject()
    })


}