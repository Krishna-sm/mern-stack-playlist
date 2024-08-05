import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { BACKEND_URI } from "../enviroment";
import { toast } from "react-toastify"; 
 

export type Task ={
    title:string
    description:string
    isComplete:string
    _id:string
}
interface TaskContextIf {
    addTask:(title:string,desc:string)=>void
    getAllTasks:()=>void
    tasks:Task[]
    deleteTaskById: (id: string) => void
    editTaskById: (id: string) => void
}

const AuthContext = createContext<TaskContextIf>({
    addTask: () => { },
    getAllTasks: () => { },
    tasks: [],
    deleteTaskById: () => { },
    editTaskById: () => { }
    
})


export const useTask = ()=>{
    return useContext(AuthContext)
}


export const TaskProvider = ({children}:{children:ReactNode})=>{
   
    const [tasks, setTasks] = useState<Task[]>([])
    // const navigate = useNavigate()
            useEffect(()=>{
                getAllTasks()
            },[])
    const addTask=async(title:string,desc:string)=> {
        //  c

        const response = await fetch(BACKEND_URI+"/task/add",{
            body:JSON.stringify({
                title,
                desc
            }),
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            method:'POST'
        }) 

        const data = await response.json()
            if(data.statusCode ===400){
                throw new Error(data.message)
            }
        console.log(data);
        // return data
        await getAllTasks()
        
        toast.success(data.msg)



    }


    const getAllTasks = async () => {
        //  c

        const response = await fetch(BACKEND_URI + "/task/get-all", {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            method: 'GET'
        })

        const data = await response.json()

        if (data.statusCode === 400) {
            throw new Error(data.message)
        }
        else {
            // setUser(data.user)
            // console.log(data);
            setTasks(data.tasks)

        }
        // console.log(data);
        // return data




    }

    const deleteTaskById = async (id:string) => {
        //  c

        const response = await fetch(BACKEND_URI + "/task/delete/"+id, {
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            method: 'DELETE'
        })

        const data = await response.json()
        if (data.statusCode === 400) {
            throw new Error(data.message)
        }
        console.log(data);
        // return data
        await getAllTasks()

        toast.success(data.msg)



    }
    const editTaskById = async (id: string) => {
        //  c

        const response = await fetch(BACKEND_URI + "/task/edit/" + id, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            method: 'PUT'
        })

        const data = await response.json()
        if (data.statusCode === 400) {
            throw new Error(data.message)
        }
        console.log(data);
        // return data
        await getAllTasks()

        toast.success(data.msg)



    }
    
 
    return <AuthContext.Provider value={{ addTask, getAllTasks, tasks, deleteTaskById, editTaskById }}>
            {children}
        </AuthContext.Provider>
}
