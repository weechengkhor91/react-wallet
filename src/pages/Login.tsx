
import {  useCallback } from "react";
import { Formik, Form,Field, ErrorMessage } from "formik"
import { useSelector, useDispatch } from "react-redux";
import * as Yup from 'yup';
import { actionSendRequest } from "../store/login";
import { useNavigate } from "react-router-dom";
import Notification from '../components/Notification';
import { RootState,AppDispatch } from "../store/index";


const Login = () => {

    const notification = useSelector((state:RootState) => state.notify.notification);

    const dispatch = useDispatch<AppDispatch>();
    const gotoPage = useNavigate();


    const initialValues = {
        email: '',
        password:''

    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(8, 
            "Password must be at least 8 characters").matches(/[A-Z]/, "Password must contain one uppercase")
            .matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain one symbol").required("Password is required")
    })

    const handleSubmit = useCallback(async (values: any) =>{

      const response = await dispatch(actionSendRequest(values));
      //response return true
      if(response){
        // go to home page (dashboard page)
        gotoPage("/")
      }
    },[dispatch]);

    return <>
    <section id="sec-login"> 
        <div className="container px-4">

            <div className="min-h-screen relative flex flex-1 flex-col items-center justify-center">       
            <h3 className="header-three-001">Login</h3>
                <div className="login-wrapper">
                    
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                                <Field type="text" id="email" name="email"  className="form-input"/>
                                <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password <span className="required">*</span></label>
                                <Field type="password" id="password" name="password" className="form-input"/>
                                <ErrorMessage name="password" component="div" className="error"/>
                            </div>
                            <button className="btn btn-primary block w-full" type="submit">Login</button>
                            {notification && 
                            (<Notification 
                            status={notification.status} 
                            message={notification.message}/>
                            )}
                            
                        </Form>
                    </Formik>
                </div> {/* login wrapper */}
            </div>
        </div>
    </section>
    </>
}

export default Login