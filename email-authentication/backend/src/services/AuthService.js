const httpStatus = require("http-status")
const ApiError = require("../utils/ApiError")
const UserModel = require("../model/User.model");
const NodeMailer = require("../utils/nodemailer");
const JWTService = require("../utils/jwt.utils");

class AuthService{

   static generateOTP(digit)
{

    var digits = '0123456789';


    var otp = '';

    for(let i=1; i<=digit; i++)

    {

        var index = Math.floor(Math.random()*(digits.length));

        otp = otp + digits[index];

    }

    return otp;

}

    static  async loginUser(body){
        // return body

        if(!body.email){
            throw new ApiError(httpStatus.BAD_REQUEST,"Plese provide Email")
        }

        const chk_user = await UserModel.findOne({email:body.email.toLowerCase()})


        if(chk_user){
            // already verified
            /// block of code
            const otp  = AuthService.generateOTP(5)

                    await NodeMailer.SendEmailForOtp(otp,body.email)

                  await UserModel.findOneAndUpdate({email:body.email.toLowerCase()},{
                    otp:otp,
                    isVerified:false
                   }) 
            return {
                msg:"Code Send on Your Email"
            }
        }


                // not verified
                  const otp  = AuthService.generateOTP(5)
                   await NodeMailer.SendEmailForOtp(otp,body.email)
 

                await UserModel.create({
otp,
email:body.email.toLowerCase()
                })

                return {
                    msg:"COde Send on your email"
                }





    }

    static  verifyOtp =async (body)=>{
            const {email,otp}  = body
                if(!email || !otp){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Please Fill Valid Details");
                }
                    if( isNaN(otp)){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Please Valid OTP");
                }

   const chk_user = await UserModel.findOne({email:body.email.toLowerCase()})


        if(!chk_user){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Account not Found");

        }

                if(chk_user.otp !=  otp){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Invalid OTP");

                }
                const token = await JWTService.generateToken({userId:chk_user._id})

                return {
                    msg:"Login Success",
                    "token":token
                }



    }
}

module.exports = AuthService