import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Header = ({user}:any) => {
    let data:any = useLoaderData()
    const navigate = useNavigate()
    const logoutUser  = ()=>{
        localStorage.removeItem("token");
        toast.success("Logout Success")
        // navigate("/login")
            // data = {}
            window.location.href="/login"
    }
  return (
    <>
    
            <header className="w-full py-2 shadow ">
                        <nav  className='flex items-center justify-between px-10'>
                            <Link to={'/'} className='text-2xl font-bold  hover:text-white'>MyTech</Link>
                            <ul className="flex items-center gap-x-3">
                                <li>
                                    <Link to={'/'} className='text-white hover:text-orange-500 transition-all duration-300'>Home</Link>
                                </li>
                      {!data.email ? <>
                      
                          <li>
                              <Link to={'/login'} className='text-white hover:text-orange-500 transition-all duration-300'>Login</Link>
                          </li>
                          <li>
                              <Link to={'/register'} className='text-white hover:text-orange-500 transition-all duration-300'>Register</Link>
                          </li>
                      </>:
                          <li>
                              <button onClick={logoutUser} className='text-white hover:text-orange-500 transition-all duration-300'>Logout</button>
                          </li>
                      }
                            </ul>
                        </nav>
            </header>
    </>
  )
}

export default Header