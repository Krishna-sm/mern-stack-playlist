import React from 'react'
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { Task, useTask } from '../../../context/Task.context';
const AllTask = () => {

        const {tasks,deleteTaskById,editTaskById} = useTask()

  return (
            <>
                    <div className="mb-3">
              <h1>All Task ({tasks.length})</h1>
                    </div>
                        <div className="flex-wrap d-flex justify-content-center align-items-center">

                        
          
                {
                  tasks && tasks.length > 0 ? tasks.map((cur:Task,i)=>{
                        return <div key={i} className="card border py-4 px-4 mx-2 my-2 col-sm-12 col-md-6 col-lg-3 ">
                            <h1 className={`card-heading ${cur.isComplete ?'text-decoration-line-through':''} `}>{cur.title}</h1>
                                        <p className="card-body">{cur.description}</p>
                                            <div className="d-flex">
                                <button onClick={() => deleteTaskById(cur._id)} title='delete' className='btn btn-outline-danger rounded-pill '>
                                    <RxCross2 />
                                </button>
                               { !cur.isComplete && <button onClick={() => editTaskById(cur._id)} title='isComplete' className='btn btn-outline-primary rounded-pill '>
                                    <MdOutlineDone />
                                </button>}
                                            </div>
                        </div>
                    }):
                    <>
                            <h1 className="text-center text-decoration-underline">No Task Avilable</h1>
                    
                    </>
                }
                    </div>
    
    </>
  )
}

export default AllTask