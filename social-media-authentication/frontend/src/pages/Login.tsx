import React from 'react'

const LoginWithGoogle = () => {
    console.log("hi");
    

    const LoginWithGoogle =()=>{
                window.open("http://localhost:4000/api/v1/auth/login-with-google")
    }


  return (
    <>
                <h1>Login With Google</h1>
          <button onClick={LoginWithGoogle}>Login With Google</button>
    </>
  )
}

export default LoginWithGoogle