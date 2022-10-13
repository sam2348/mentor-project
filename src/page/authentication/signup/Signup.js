import React,{useState,useEffect} from 'react'
import '../../../App.css'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { NavLink,useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import BaseUrl from '../../../config/BaseUrl'
// import LoadingSpinner from '../../../more/LoadingSpinner';


const validationSchema = yup.object({
      officialemail: yup
        .string('Enter your email')
        .required('Email is required')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid Email Format"),
      CompanyName: yup
          .string('Enter Your First Name')
          .matches(/^[a-zA-Z0-9.]{2,}$/,'Enter vaild name')
          .required('Company Name is required'),
      PhoneNumber: yup
        .number('Only Number Allowed')
        .required('Phone number is required'),
      personName: yup
          .string('Enter Your Contact Person Name')
          .matches(/^[a-zA-Z]{2,}$/,'Enter Vaild Contact Person Name')
          .required('Contact Person Name is required'),
      password: yup
          .string('Enter your password')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.")
          .required('Password is required'),
      confirmpassword: yup
          .string('Enter your Confirm Password')
          .oneOf([yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });

 const Signup=()=> {
  const navigate = useNavigate()
  // const [btndisabled,setBtnDisable]=useState(false)
  // const [isLoading, setIsLoading] = useState(false);
  const [showPassword,setShowPassword]=useState(false)
  const [showConfirmpassowrd,setShowConfirmpassowrd]=useState(false)
const eye_Password=()=>{
  if(!showPassword){
    setShowPassword(true)
  }else{
    setShowPassword(false)
  }
}
const eye_Confirmpassowrd=()=>{
  if(!showConfirmpassowrd){
    setShowConfirmpassowrd(true)
  }else{
    setShowConfirmpassowrd(false)
  }
}
useEffect(() => {
  let login = window.localStorage.getItem('token');
  if(login){
    navigate(`/profile/${window.localStorage.getItem('id')}`)
  }
})
  return (
    <>
         {/* ---------------------HEADER */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 ...">
        <h1 className="text-5xl text-white font-bold text-center pt-20"> Register Your Account Instantly</h1>
        <p className="text-xl text-white font-normal text-center pb-20">Lorem ipsum ghet trhaer atgd djjid ld ;lorem </p>
      </div>
      {/*---------------------HEADER*/}
      {/*------------------------------------registeration form*/}
      <section className="max-w-screen-lg px-4 pt-0 pb-8 mx-auto -mt-10">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
          <main className="lg:col-start-1 lg:col-end-7">
            <div className="relative p-4 bg-white rounded shadow-lg lg:p-10">
            <Formik
               initialValues={{ CompanyName:'', officialemail:'', PhoneNumber:'', location:'', personName:'', GSTIN:'', password:'',confirmpassword: ''}}
                 validationSchema={validationSchema}
                   onSubmit={(values) => {
                    axios({
                      method: 'POST',
                      url: `${BaseUrl.url}/register`,
                      data:{
                        CompanyName:values.CompanyName,
                        officialemail:values.officialemail,
                        PhoneNumber:values.PhoneNumber,
                        location:values.location,
                        personName:values.personName,
                        GSTIN:values.GSTIN,
                        password:values.password,
                        confirmpassword:values.confirmpassword,
                      }
                    }).then((res)=>{
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
                      setTimeout(() => {
                        // setIsLoading(true)
                        // setBtnDisable(true)
                        navigate('/login')
                    },3000);
                    })
                    .catch((err)=>{
                      // setIsLoading(true)
                      // setBtnDisable(true)
                      setTimeout(() => {
                        // setIsLoading(false)
                        // setBtnDisable(false)
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
              <Form>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Company Name
                  </label>
                  <Field id="CompanyName" type="text" name='CompanyName' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.CompanyName ? " " : "border-red-500"}`} placeholder="What is your Company Name?" />
                  {errors.CompanyName && touched.CompanyName ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.CompanyName}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Official Email
                  </label>
                  <Field id="officialemail" type="text" name='officialemail' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.officialemail ? " " : "border-red-500"}`} placeholder="Tell us your Official Email" />
                  {errors.officialemail && touched.officialemail ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.officialemail}</div>
                  ) : null}
                  <p className="block text-black text-sm font-normal mb-2 mt-1">We'll update you in your mail</p>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Phone Number
                  </label>
                  <Field id="PhoneNumber" type="text" name='PhoneNumber' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.PhoneNumber ? " " : "border-red-500"}`} placeholder="What's your phone number?" />
                  {errors.PhoneNumber && touched.PhoneNumber ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.PhoneNumber}</div>
                  ) : null}
                  <p className="block text-black text-sm font-normal mb-2 mt-1">We'll call you on this number</p>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Contact Person Name
                  </label>
                  <Field id="personName" type="text" name='personName' className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!errors.personName ? " " : "border-red-500"}`} placeholder="Enter contact person name" />
                  {errors.personName && touched.personName ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.personName}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Location</label>
                  <Field id="location" name="location" as="select" defaultValue="none" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value=" " selected>Choose a loaction</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </Field>
                </div>
                <div className="mb-4 password-eye">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Password
                  </label>
                  <Field id="password" name="password" type={!showPassword ? "password" : "text"}  autoComplete="current-password" className={`relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${!errors.password ? " " : "border-red-500"}`} 
                   placeholder="Enter your password" />
                   <span className="flex justify-end">{!showPassword ? <i onClick={eye_Password} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Password} className="fa-solid fa-eye"></i>}</span>
                   {errors.password && touched.password ? (
                      <div className='text-red-700 text-xs font-bold'>{errors.password}</div>
                   ) : null}
                </div>
                <div className="mb-4 password-eye">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    Confirm Password
                  </label>
                  <Field id="confirm-password" name="confirmpassword"  type={!showConfirmpassowrd ? "password" : "text"} autoComplete="current-password" className={`relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${!errors.confirmpassword ? " " : "border-red-500"}`}
                   placeholder="Re-enter your password" />
                   <span className="flex justify-end">{!showConfirmpassowrd ? <i onClick={eye_Confirmpassowrd} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Confirmpassowrd} className="fa-solid fa-eye"></i>}</span>
                  {errors.confirmpassword && touched.confirmpassword ? (
                  <div className='text-red-700 text-xs font-bold'>{errors.confirmpassword}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium mb-2" htmlFor="name">
                    GSTIN(Optional)
                  </label>
                  <Field id="username" type="text" name="GSTIN" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="XXXXXXXXXXXXXXX" />
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" defaultValue className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I
                    agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                      conditions</a>.</label>
                </div>
                <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 py-2 px-4 text-sm font-medium text-white ">
                  <a>Register Now</a>
                </button>
                <ToastContainer />
                <br />
                <div className="flex items-center justify-center">
                  <div className="text-sm">Already have account?&nbsp;<NavLink to="/login" className="text-blue-600 hover:underline
                              dark:text-blue-500">Login</NavLink>
                  </div>
                </div>
              </Form>
              )}
              </Formik>
             </div>
           </main>
          <aside className="lg:col-start-7 lg:col-end-12 mt-28">
            <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800">
              This is A Gradient Heading</h2>
            <div className="opacity-80">
              <p>Lorem Ipsum reget The Arget sjd jhbg djjkdjru trehe kf</p>
              <p>Lorem Ipsum reget The Arget sjd jhbg djjkdjru trehe kf</p>
            </div>
            <ul className="text-sm small-tick">
              <li className="my-1">Text</li>
              <li className="my-1">Text</li>
              <li className="my-1">Text</li>
              <li className="my-1">Text</li>
              <li className="my-1">Text</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
export default Signup;