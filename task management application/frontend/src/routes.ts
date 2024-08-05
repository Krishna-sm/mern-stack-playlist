import {createBrowserRouter} from 'react-router-dom'
import App from './App' 
import Profile from './pages/Profile'
import Auth from './pages/auth/Auth'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/auth/Register'
export const router = createBrowserRouter([
            {
                path:'/',
                Component:App,
                children:[
                       {
                        path:'',
                        Component:Dashboard
                       } ,
                       {
                        path:'/profile',
                        Component:Profile
                       } ,
                       {
                        path:'/auth',
                        Component:Auth,
                        children:[
                            {
                                path:'login',
                                Component:Login
                            },
                            {
                                path: 'register',
                                Component: Register
                            }
                        ]
                       }
                ]
            }
])