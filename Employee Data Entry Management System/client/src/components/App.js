import { useState } from "react"

const App = ()=>{

            const [state,setState]= useState({
                name:'',
                email:'',
                role:'',
                date:''
            })

            const onChangeHandler=(e)=>{
                setState({
                    ...state,
                    [e.target.name]:e.target.value
                })

               
            }

            const onSubmitHandler =async(e)=>{
                e.preventDefault()

                try {

                    const  response = await fetch("http://localhost:4000/register",{
                        body:JSON.stringify(state),
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    const data = await response.json()
                    alert(data.msg);
                     setState({
                          name:'',
                email:'',
                role:'',
                date:''
                })
                    
                            
                } catch (error) {
                    alert(error.message);
                    
                }
            }


    return <>
              <div className="container py-5 px-5">
                 <form onSubmit={onSubmitHandler}> 
                    <div className="mb-3">
                        <h1 className="text-decoration-underline">Employee Entry MS</h1>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name <span className="text-danger">*</span></label>
                        <input className="form-control" value={state.name} onChange={onChangeHandler} placeholder="Enter Emp Name" name="name" />
                    </div>
  <div className="mb-3">
    <label   className="form-label">Email address<span className="text-danger">*</span></label>
    <input type="email" className="form-control" value={state.email} onChange={onChangeHandler} placeholder="Enter Emp Email" name="email"  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Role<span className="text-danger">*</span></label>
    <select className="form-control" name="role" value={state.role} onChange={onChangeHandler}>
        <option>Web Developer</option>
        <option>Android Developer</option>
        <option>QA</option>
        <option>UI/UX</option>
    </select>
  </div>
  <div className="mb-3">
    <label   className="form-label">Date<span className="text-danger">*</span></label>
    <input type="date" className="form-control"  value={state.date} onChange={onChangeHandler}  name="date"  />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                   

              </div>
 
    
    </>
}

export default App