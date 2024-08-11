import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginWithGoogle from './pages/Login'
import success from './pages/success'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
        <Routes>

        <Route path='/' Component={Dashboard} />
        <Route path='/login' Component={LoginWithGoogle} />
        <Route path='/success' Component={success} />
        </Routes>
    </>
  )
}

export default App