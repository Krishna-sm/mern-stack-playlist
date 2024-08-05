import { ErrorMessage, Field, Form, Formik } from 'formik' 
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useAuth } from '../../../context/Auth.context'
const Register = () => {

  const {registerUser} = useAuth()

  type RegisterType = {
    name: string
    email: string
    password: string
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("EMail must be valid").required("Email is required"),
    password: yup.string().required("password is Required")
  })

  const initalValues: RegisterType = {
      name:'',
    email: '',
    password: ''
  }

  const onSubmitHandler = async (e: RegisterType, { resetForm }: any) => {
      try {
       const data=  await registerUser(e.name, e.email, e.password)

        toast.success((data && data.msg) || "Register Successful")

      } catch (error:any) {

        toast.error(error.message)
      }
    resetForm();

  }
  return (
    <>
    
      <div className="container">
        <Formik validationSchema={validationSchema} initialValues={initalValues} onSubmit={onSubmitHandler} >
          <Form className='col-sm-12 col-md-6 col-lg-4 mx-auto border px-4 py-4 my-5 rounded'>
            <div className="mb-3 py-4">
              <h1>Register</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name">Name <span className="text-danger">*</span> </label>
              <Field name="name" id="name" type="text" className="form-control" placeholder="john Doe" />
              <ErrorMessage name='name' component={'p'} className='text-sm text-danger' />
            </div>
            <div className="mb-3">
              <label htmlFor="email">EMail <span className="text-danger">*</span> </label>
              <Field name="email" id="email" type="text" className="form-control" placeholder="john@gmail.com" />
              <ErrorMessage name='email' component={'p'} className='text-sm text-danger' />
            </div>
            <div className="mb-3">
              <label htmlFor="password">password <span className="text-danger">*</span> </label>
              <Field name="password" id="password" type="password" className="form-control" placeholder="******" />
              <ErrorMessage name='password' component={'p'} className='text-sm text-danger' />
            </div>
            <div className="mb-3">
              <button type='submit' className="btn btn-dark">Register</button>
            </div>
            <div className="mb-3">
              <p className='text-secondary text-end'>Alredy Have An Account? <Link to={'/auth/login'}>Login</Link> </p>
            </div>
          </Form>
        </Formik>

      </div> 
    
    </>
  )
}

export default Register