import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
const location = useLocation()
      useEffect(()=>{
        const token = localStorage.getItem("token") || ''

     
            
          if(!token){     
              navigate("/login",{
                
              })
          }

          else{
            setLoading(false)
          }
      }, [location])
  if (loading){
    return <div>loading...</div>
  }

  const logoutButton = ()=>{
        localStorage.removeItem("token");

        toast.success("logout success")
        navigate("/login")
  }

  return (
    <div className='w-full flex items-center justify-center min-h-[80vh]'>
              <div className="lg:w-1/3 w-full min-h-60 flex items-center justify-center bg-white shadow border rounded-md">
              
        <button onClick={logoutButton} className="px-5 py-2 bg-red-500 rounded-md text-white" >Logout</button>
              </div>

    </div>
  )
}

export default Dashboard