import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import BaseUrl from '../../../config/BaseUrl'

const validationSchema = yup.object({
    officialemail: yup
        .string('Enter your officialemail')
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
    useEffect(() => {
        let login = localStorage.getItem('token');
        if(login){
            navigate(`/company/profile/${window.localStorage.getItem('id')}`)
        }
      })
    return (
        <>
            <div className="bg-blue-100">
                {/*---------------------HEADER*/}
                <nav className="bg-white border-b border-slate-300">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                                <div className="flex space-x-4">
                                    <NavLink to="/signup" className="text-black hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium">signup</NavLink>
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
                            initialValues={{ officialemail:'',  password:'' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                axios({
                                method: 'POST',
                                url: `${BaseUrl.url}/login`,
                                data:{
                                    officialemail:values.officialemail,
                                    password:values.password,
                                }
                                }).then((res)=>{
                                    
                                    setTimeout(() => {
                                        navigate(`/company/profile/${res.data.id}`)
                                },3000);
                                localStorage.setItem('token',res.data.token,true)
                                localStorage.setItem('id',res.data.id)
                                toast.success(res.data.message, {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme:'colored'
                                    });
                                })
                                .catch((err)=>{
                                setIsLoading(true)
                                    setBtnDisable(true)
                                    setTimeout(() => {
                                    setIsLoading(false)
                                    setBtnDisable(false)
                                    },3000);
                                toast.error(err.response.data.message, {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme:'colored'
                                    });
                                })
                            }}
                            >
                             {({ errors, touched }) => (
                            <Form className="mt-8 space-y-4">
                                <div className="mt-8 space-y-4 rounded-md shadow-sm">
                                    <div className="mb-4">
                                        <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                                            Email ID
                                        </label>
                                        <Field id="username" type="text" name="officialemail" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.officialemail ? " " : "border-red-500"}`} placeholder="Enter Email ID" />
                                        {errors.officialemail && touched.officialemail ? (
                                         <div className='text-red-700 text-xs font-bold'>{errors.officialemail}</div>
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
                                                Login
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
