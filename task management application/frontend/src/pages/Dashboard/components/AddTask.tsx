import { ErrorMessage, Field, Form, Formik } from 'formik' 
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useTask } from '../../../context/Task.context'

const AddTask = () => {
    const {addTask} = useTask()
    type AddTask = {
        title: string
        desc: string
    }
    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        desc: yup.string().required("Description is Required")
    })

    const initalValues: AddTask = {
        desc: '',
        title: ''
    }

    const onSubmitHandler = async (e: AddTask, { resetForm }: any) => {
        try {
              await addTask(e.title,e.desc)


        } catch (error: any) {

            toast.error(error.message)
        }
        resetForm();
    }

    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={initalValues} onSubmit={onSubmitHandler} >
                <Form className='col-sm-12 mx-auto'>
                    <div className="mb-3">
                        <h1>Add Task</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title">Title <span className="text-danger">*</span> </label>
                        <Field name="title" id="title" type="text" className="form-control" />
                        <ErrorMessage name='title' component={'p'} className='text-sm text-danger' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc">Desc <span className="text-danger">*</span> </label>
                        <Field as="textarea" rows="3" className="form-control" name="desc" id="desc" />
                        <ErrorMessage name='desc' component={'p'} className='text-sm text-danger' />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-dark">Add Task</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}


export default AddTask