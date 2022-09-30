import React from "react"
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  }); 

 const Signup=()=> {
  return (
    <>
    <Formik
        initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={validationSchema}
         >
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {({ errors, touched }) => (
          <Form className="mt-8 space-y-6">
            
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
              <label htmlFor="firstName">Email Address</label>
                <Field
                  name="email"
                  type="email"
                //   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
                 {errors.email && touched.email ? (
                 <div>{errors.email}</div>
                 ) : null}
              </div>
              <div>
              <label htmlFor="firstName">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
                 {errors.email && touched.email ? (
                 <div>{errors.email}</div>
                 ) : null}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </Form>
           )}
        </div>
      </div>
    </Formik>
    </>
  )
}
export default Signup;