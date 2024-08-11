import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const success = () => {
const [searchParams]=  useSearchParams()
const navigate = useNavigate()
    useEffect(() => { 
        const token = searchParams.get("token") ||''
        if (token){
                    localStorage.setItem("token",token)
            navigate("/")
        }else{
            navigate("/login")
        }

    }, [searchParams])


  return (
    <>
          TokenWIthBe:{searchParams.get("token")}
    </>
  )
}

export default success