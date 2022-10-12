import React from 'react'
import '../App.css';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { NavLink,useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
      email: yup
        .string('Enter your email')
        .required('Email is required')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid Email Format"),
      name: yup
          .string('Enter Your First Name')
          .matches(/^[a-zA-Z ]{2,}$/,'Enter vaild name')
          .required('Name is required'),
      number: yup
        .number('Only Number Allowed')
        .required('Phone number is required'),
      personName: yup
          .string('Enter Your Contact Person Name')
          .matches(/^[a-zA-Z]{2,}$/,'Enter Vaild Contact Person Name')
          .required('Contact Person Name is required'),
      });

 const Signup=()=> {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-blue-100">
        {/*---------------------HEADER*/}
        <nav className="bg-white border-b border-slate-300">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                <div className="flex space-x-4">
                  <a href="#" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*---------------------HEADER*/}
        {/*------------------------------------registeration form*/}
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 px-4  rounded-lg shadow-lg border border-gray-300 py-10 bg-white">
            <div>
              <h2 className=" text-center text-2xl font-semibold tracking-tight text-gray-900">Register</h2>
            </div>
             <Formik
               initialValues={{ name:'', email:'', number:'', personName:'', gstno:'', terms:''}}
                 validationSchema={validationSchema}
                   onSubmit={(values) => {
                    console.log(values,'signupdata')
                     toast.success("Your Ragiser SuccessFully", {
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
                          navigate('/login')
                      }, 2000);
                  }}
                  >
                  {({ errors, touched }) => (
            <Form className="mt-8 space-y-4">
              <div className="mt-8 space-y-4 rounded-md shadow-sm">
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <Field id="username" type="text" name='name' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.name ? " " : "border-red-500"}`} placeholder="What is your name?" />
                  {errors.name && touched.name ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.name}</div>
                  ) : null}    
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Official Email
                  </label>
                  <Field id="username" type="email" name='email' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.email ? " " : "border-red-500"}`} placeholder="Tell us your Official Email" />
                  {errors.email && touched.email ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.email}</div>
                  ) : null}
                  <p className="block text-black text-sm font-normal mb-2 mt-1">We'll update you in your mail</p>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Phone Number
                  </label>
                  <Field id="username" type="text" name='number' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.number ? " " : "border-red-500"}`} placeholder="What's your phone number?" />
                  {errors.number && touched.number ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.number}</div>
                  ) : null}
                  <p className="block text-black text-sm font-normal mb-2 mt-1">We'll call you on this number</p>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Contact Person Name
                  </label>
                  <Field id="username" type="text" name='personName' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.personName ? " " : "border-red-500"}`} placeholder="Enter contact person name" />
                  {errors.personName && touched.personName ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.personName}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Location</label>
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    GSTIN(Optional)
                  </label>
                  <Field id="username" type="text" name='gstno' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="XXXXXXXXXXXXXXX" />
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <Field id="remember" type="checkbox" name="terms" className='w-4 h-4 bg-gray-50 rounded border border-red-500 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' required/>
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
              </div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 py-2 px-4 text-sm font-medium text-white ">
                Register Now
              </button>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  Allready have a account?&nbsp;<NavLink to="/login" className="text-blue-600 hover:underline dark:text-blue-500">Login</NavLink>
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
export default Signup;