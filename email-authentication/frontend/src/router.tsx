import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:Dashboard
            },
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])