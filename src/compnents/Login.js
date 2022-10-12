import React, { useState } from 'react'
import '../App.css';
import { Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .required('Email is required')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid Email Format"),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});
const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const eye_Password = () => {
        if (!showPassword) {
            setShowPassword(true)
        } else {
            setShowPassword(false)
        }
    }

    return (
        <>
            <div className="bg-blue-100">
                {/*---------------------HEADER*/}
                <nav className="bg-white border-b border-slate-300">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                                <div className="flex space-x-4">
                                    <a href="login.html" className="text-black hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/*---------------------HEADER*/}
                {/*------------------------------------registeration form*/}
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 px-4  rounded-lg shadow-lg border border-gray-300 py-10 bg-white">
                        <div className="text-center">
                            <i className="fa-solid fa-lock text-4xl font-semibold  text-blue-800" />
                            <h2 className=" text-center text-2xl font-semibold tracking-tight text-gray-900"> <a href="login.html"> Login</a></h2>
                        </div>
                        <Formik
                            initialValues={{ email:'', password:'' }}
                            validationSchema={validationSchema} 
                            onSubmit={(values) => {
                             console.log(values,"login Data")
                             localStorage.setItem('token','id')
                             toast.success("Your Login SuccessFully", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme:'colored'
                                });
                              setTimeout(() => {
                                  navigate('/')
                              }, 2000);
                            }}>
                             {({ errors, touched }) => (
                            <Form className="mt-8 space-y-4">
                                {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                                <div className="mt-8 space-y-4 rounded-md shadow-sm">
                                    <div className="mb-4">
                                        <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                                            Email ID
                                        </label>
                                        <Field id="username" type="text" name="email" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.email ? " " : "border-red-500"}`} placeholder="Enter Email ID" />
                                        {errors.email && touched.email ? (
                                         <div className='text-red-700 text-xs font-bold'>{errors.email}</div>
                                         ) : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                                            Password
                                        </label>
                                        <Field name="password" id="username" type={!showPassword ? "password" : "text"} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${!errors.password ? " " : "border-red-500"}`} placeholder="Enter Password" />
                                        <span className="flex justify-end password-eye">{!showPassword ? <i onClick={eye_Password} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Password} className="fa-solid fa-eye"></i>}</span>
                                        {errors.password && touched.password ? (
                                         <div className='text-red-700 text-xs font-bold'>{errors.password}</div>
                                         ) : null}
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <div className="text-sm">
                                            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Forgot your password?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 py-2 px-4 text-sm font-medium text-white ">
                                             {/* <NavLink to="/login"> */}
                                                Login
                                            {/* </NavLink>  */}
                                        </button>
                                        <ToastContainer />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-sm">
                                            Don't have account?&nbsp;<NavLink to="/signup" className="text-blue-600 hover:underline dark:text-blue-500">Register</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                          )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
