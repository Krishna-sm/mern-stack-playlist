import ProtectedRoute from "../../compoents/ProtectedRoute"
import AddTask from "./components/AddTask"
import AllTask from "./components/AllTask"

const Dashboard =()=>{
    return <ProtectedRoute>
    
        <div className="coantainer col-sm-12">
            <div className="container py-5 px-5  col-sm-12">

                <AddTask />
                <AllTask />


            </div>

        </div>
    </ProtectedRoute>
}

export default Dashboard