import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosReq } from './Axios.Provider';
const App = () => {
  const data = useLoaderData()
  // const navigate = useNavigate()
  // const [user,setUser] = useState({
  //   name:'',
  //   email:'',
  //   role:''
  // })

  // const [loading,setLoading] = useState(true)
  // const fetchUser =async(token:string)=>{
  //       try {
  //         const res = await AxiosReq.get("/profile",{
  //           headers:{
  //             'Authorization':'Bearer '+token
  //           }
  //         })
  //         const data = await res.data;
  //             setUser({
  //               ...data
  //             })

            

  //       } catch (error:any) {
  //           toast.error(error.message)
  //           navigate("/login")
  //       }finally{
  //         setLoading(false)
  //       }


  // }

  // // useEffect(()=>{

  // // },[])

  // if(loading){
  //   return <div>loading...</div>
  // }

  return (
    <div>
      <ToastContainer/>
      <Header user={{}} />
          <Outlet/>

      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default App