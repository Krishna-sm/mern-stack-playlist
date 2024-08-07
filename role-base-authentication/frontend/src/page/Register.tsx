import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AxiosReq } from '../Axios.Provider'
const Register = () => {

    const [state,setState] = useState({
        name:'',
        email:'',
        password:'',
        role:'user'
    })


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = async(e:FormEvent)=>{
        e.preventDefault();

            try {
                const res = await AxiosReq.post("/register",state);
                const data  = await res.data;

                toast.success(data.msg)
            } catch (error:any) {
                toast.error(error.response.data.message || "something went wrong")
            }

    }

  return (
    <>
                  <div className="min-h-[80vh] flex justify-center items-center">
              <form onSubmit={onSubmitHandler} className="flex items-center flex-col w-full justify-center gap-y-4">
                            <div className="mb-3 w-full lg:w-1/3 ">
                                <input onChange={onChangeHandler} value={state.name} type="text" name="name" placeholder='Enter Your Name' className='rounded-md bg-gray-500 w-full px-3 py-2' />
                            </div>
                  <div className="mb-3 w-full lg:w-1/3 ">
                      <input onChange={onChangeHandler} value={state.email} type="email" name="email" placeholder='Enter Your Email' className='rounded-md bg-gray-500 w-full px-3 py-2' />
                  </div>
                  <div className="mb-3 w-full lg:w-1/3 ">
                      <input onChange={onChangeHandler} value={state.password} type="password" name="password" placeholder='Enter Your password' className='rounded-md bg-gray-500 w-full px-3 py-2' />
                  </div>
                  <div className="mb-3 w-full lg:w-1/3 ">
                     
                      <select onChange={onChangeHandler} value={state.role} name="role" className='rounded-md bg-gray-500 w-full px-3 py-2' id="">
                        <option disabled>select one...</option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                          <option value="superadmin">Super Admin</option>
                      </select>
                  </div>
                  <div className="mb-3 w-full lg:w-1/3">
                    <button className="w-full bg-gray-900 py-2 px-3 text-center">Register</button>
                  </div>

                  {JSON.stringify(state)}
              </form>
                  </div>
    </>
  )
}

export default Register