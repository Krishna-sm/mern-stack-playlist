import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { AxiosReq } from '../Axios.Provider'
import { toast } from 'react-toastify'
import User from '../components/roles/User'
import Admin from '../components/roles/Admin'
import SuperAdmin from '../components/roles/SuperAdmin'

const Dashboard = () => {
    const navigate = useNavigate()
    const location=  useLocation()
  const [user,setUser] = useState({
    name:'',
    email:'',
    role:''
  })

  const [loading,setLoading] = useState(true)
  const fetchUser =async(token:string)=>{
        try {
          const res = await AxiosReq.get("/profile",{
            headers:{
              'Authorization':'Bearer '+token
            }
          })
          const data = await res.data;
              setUser({
                ...data
              })

            

        } catch (error:any) {
            toast.error(error.message)
            navigate("/login")
        }finally{
          setLoading(false)
        }


  }
 
  useEffect(()=>{
      const token = localStorage.getItem("token")  || ''

      if(!token){
        navigate("/login")
        return
        }
        else if(!user.email){
            try {
                  (async()=>{
                    await fetchUser(token)
                  })()
            } catch (error) {
                navigate("/login")
            }finally{
              setLoading(false)
            }
        }else{
        navigate("/login")
        return
        }


  }, [location])

  if(loading){
    return <div>loading...</div>
  }
  return (
    <>
      {/* data:  {JSON.stringify(user)} */}


          <div className="flex items-center justify-center text-3xl font-bold min-h-[50vh]">
        Hello, {
          user.role === 'mt_user' && <User />
        }
        {
          user.role === 'mt_admin' && <Admin />
        }
        {
          user.role === 'mt_super_admin' && <SuperAdmin />
        }
          </div>

    </>
  )
}

export default Dashboard