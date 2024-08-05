import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/Auth.context'

const Header = () => {


  const {user,logoutUser} = useAuth()
  return (
    <>
    
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand"  >Task Manager</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
              {user && user .email ? 

                         <li className="nav-item dropdown pe-5">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {user.name}
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/profile">profile</Link></li>
    <li><button onClick={logoutUser} className="dropdown-item" >Logout</button></li> 
  </ul>
</li>:<>
                              <li className="nav-item">
                                  <Link to={'/auth/login'} className="  btn btn-primary mx-2"  >Login</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to={'/auth/register'} className="  btn btn-warning mx-2"  >Register</Link>

                              </li>
                </> 

              }
              <li className="nav-item">
                <Link to={'/'} className="  nav-link"  >Home</Link>
              </li>
                         


      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header