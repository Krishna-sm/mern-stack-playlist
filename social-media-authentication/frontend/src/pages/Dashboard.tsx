import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [user,setuser] = useState<any>({})
    const [loading,setLoading] = useState(true)

    const fetchUser = async(token:string)=>{
        try {
                    const res = await  fetch("http://localhost:4000/api/v1/auth/profile",{
                        headers:{
                            'Authorization':'Bearer '+token,
                            'Content-Type':'application/json' 
                        },
                        method:'GET'
                    })

                    const data = await res.json()
            setuser(data)
        } catch (error) {
            navigate("/login")
        } finally{
            setLoading(false)
        }
    }
const token = localStorage.getItem("token") || ''
    useEffect(()=>{
                if(token){
            (async()=> fetchUser(token))()
                }
                else{
                    navigate("/login")
                }
    },[])
    if(loading){
        return <div>loading....</div>
    }

    const logoutFn = ()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <div>

          <h1>Dashboard</h1>
            <center>
              {JSON.stringify(user)}
              <br /> <br /><br /><button onClick={logoutFn}>logout</button>
            </center>


    </div>
  )
}

export default Dashboard