import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import { AxiosReq } from "./Axios.Provider";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        loader:async function(){
                const token = localStorage.getItem("token") || ''
                if(!token){
                    return ''
                }

                const res = await AxiosReq.get("/profile",{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                const data = await res.data;
                return data

        },
        children:[
            {
                path:'login',
                Component:Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path:'',
                Component:Dashboard
            }

        ]
    }
])