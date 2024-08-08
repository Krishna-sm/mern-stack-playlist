import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { AxiosClient } from '../enviroment'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
type Input={
    email:string
    otp: string
}
    const [state, setState] = useState<Input>({
        email: localStorage.getItem("email") ||'',
            otp:''
        })


        const [loading,setLoading] = useState(false)

    const [disableEmail, setDisableEmail] = useState<boolean>(JSON.parse(localStorage.getItem("disableEmail") || "false") )

    const [isEMailSend, setIsEmailSend] = useState(JSON.parse(localStorage.getItem("isEMailSend") || "false"))

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
            setState({
                ...state,
                [e.target.name]:e.target.value
            })
        }

        const onSubmitHandlerForLogin =async ()=>{
            if(!state.email){
                toast.error("please enter email")
                return
            }
            setLoading(true)
                        // req

                        try {
                            const res = await AxiosClient.post("/login",{
                                email:state.email
                            })
                            const data = await res.data;
                            setDisableEmail(true)
                            setIsEmailSend(true)
                            localStorage.setItem("email", state.email)
                            localStorage.setItem("disableEmail", JSON.stringify(true))
                            localStorage.setItem("isEMailSend", JSON.stringify(true))

                            toast.success(data.msg)

                        } catch (error:any) {
                            toast.error(error.data.response.message)
                        }finally{
                            setLoading(false)
                        }

        }

    const onSubmitHandlerForVerifyOtp = async()=>{
        if (!state.email) {
            toast.error("please enter email")
            return
        }
        if (!state.otp) {
            toast.error("please enter email")
            return
        }
        setLoading(true)
        try {
            const res = await AxiosClient.post("/verify",{
                email:state.email,
                otp:state.otp
            })
            const data = await res.data;
            setDisableEmail(true)
            setIsEmailSend(false)
            localStorage.removeItem("disableEmail")
            localStorage.removeItem("isEMailSend")
            localStorage.removeItem("email")

            localStorage.setItem("token",data.token)

            toast.success(data.msg)

            // navigate
            navigate("/")

        } catch (error: any) {
            toast.error(error.data.response.message)
        }finally{
            setLoading(false)
        }
    } 

  return (
    <>
                        <div className="w-full flex items-center justify-center min-h-[80vh]">
                                    <div className=" w-[96%] mx-auto lg:w-1/3 bg-white border rounded-md min-h-60 shadow-md">
                                                <div className="mb-3">
                      <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" className='w-1/3 mx-auto' />
                                                </div>
                                                <div   className="w-full px-10">
                      <div className="mb-3 ">
                          <label htmlFor="email" className='text-zinc-600 '>Email</label>
                          <input disabled={disableEmail} readOnly={disableEmail} value={state.email} onChange={onChangeHandler} type="text" id='email' name="email" className="w-full py-4 px-3 border bg-zinc-100 outline-none rounded-md" placeholder='Enter Email' />
                      </div>
                      {isEMailSend&&   <div className="mb-3 ">
                          <label htmlFor="otp" className='text-zinc-600 '>OTP</label>
                          <input value={state.otp} onChange={onChangeHandler} type="text" id='otp' name="otp" className="w-full py-4 px-3 border bg-zinc-100 outline-none rounded-md" placeholder='Enter OTP' />
                      </div>}
                      {isEMailSend  ?<div className="mb-3 pb-5">
                          <button disabled={loading} onClick={onSubmitHandlerForVerifyOtp} className="w-full bg-blue-500 disabled:bg-red-300  py-3 text-center text-white rounded-md">{loading ? `loading....` :` Verify OTP`}</button>
                      </div>:
                      <div className="mb-3 pb-5">
                              <button disabled={loading} onClick={onSubmitHandlerForLogin} className="w-full bg-blue-500 disabled:bg-red-300  py-3 text-center text-white rounded-md">{loading ? `loading....` : ` Login`}</button>
                      </div>}
                                                </div>
                                    {/* {JSON.stringify(state)} */}
                                    </div>


                        </div>
        </>
  )
}

export default Login