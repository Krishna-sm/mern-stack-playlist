import React, { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth.context'

const ProtectedRoute = ({children}:{children:ReactNode}) => {
    const router = useNavigate()
    const [loading,setLoading] = useState(true)
    const {user,profileUser} = useAuth()

    useEffect(()=>{
            const token = localStorage.getItem("token") || ''
            if(token){
                        // set user api call
                        (async()=>{
                            await profileUser(token )
                        })()
                setLoading(false)
            }
            else{
                router("/auth/login")
            }




    },[])

        if(loading){
            return <div>loading...</div>
        }

  return (
    <>
 
          {children}
    </>
  )
}

export default ProtectedRoute