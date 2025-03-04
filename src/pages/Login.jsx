import React from 'react'; // Importing React
import { Button, Checkbox, TextField } from '@mui/material'; // Importing Material-UI components
import { Field, Form, Formik } from 'formik'; // Importing Formik components for form handling
import loginimage from '../assets/loginimage.svg'; // Importing the login image
import * as Yup from 'yup'; // Importing Yup for form validation

const Login = () => {
    // Initial values for the form fields
    const initialValues = { email: "", password: "", rememberMe: false };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email").required("Fill the email"), // Email validation
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Fill the password"), // Password validation
    });

    // Handle form submission
    const handleSubmit = (values) => {
        console.log("Handle submit", values); // Logging the form values on submission
    };

    return (
        <>
            {/* Main container for the login page */}
            <div className='flex justify-center items-center h-screen bg-gray-100'>
                {/* Login form container with shadow and rounded corners */}
                <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-4'>
                    {/* Left side: Image container */}
                    <div className='w-full md:w-1/2 p-8 flex justify-center items-center'>
                        <img src={loginimage} alt="Login" className='w-full h-auto max-w-md' /> {/* Login image */}
                    </div>

                    {/* Right side: Form container */}
                    <div className='w-full md:w-1/2 p-8'>
                        {/* Formik wrapper for form handling */}
                        <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
                            {/* Form container with flex layout */}
                            <Form className='flex flex-col gap-4'>
                                {/* Form header */}
                                <div className='space-y-4'>
                                    <div>
                                        <h2 className='text-3xl md:text-4xl font-extrabold'>Sign in to Employee</h2> {/* Main heading */}
                                        <p className='text-lg md:text-xl'>Employee Management.</p> {/* Subheading */}
                                        <hr /> {/* Horizontal line */}
                                    </div>

                                    {/* Email input field */}
                                    <Field
                                        as={TextField}
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />

                                    {/* Password input field */}
                                    <Field
                                        as={TextField}
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>

                                {/* Remember me and Forgot Password section */}
                                <div className='flex justify-between items-center'>
                                    {/* Remember me checkbox */}
                                    <div className='flex items-center'>
                                        <Field as={Checkbox} name="rememberMe" />
                                        <span>Remember me</span>
                                    </div>

                                    {/* Forgot Password link */}
                                    <div className='flex items-center'>
                                        <span>Forgot Password?</span>
                                    </div>
                                </div>

                                {/* Sign In button */}
                                <Button sx={{ padding: '.8rem 0rem' }} type='submit' variant='contained' color='primary'>
                                    Sign In
                                </Button>

                                {/* Horizontal line with "or sign in" text */}
                                <div className='flex items-center my-4'>
                                    <div className='flex-grow border-t border-gray-300'></div> {/* Left line */}
                                    <span className='mx-4 text-gray-500'>or sign in</span> {/* Text */}
                                    <div className='flex-grow border-t border-gray-300'></div> {/* Right line */}
                                </div>

                                {/* Social login buttons */}
                                <div className='flex flex-col gap-2'>
                                    {/* Google login button */}
                                    <button className='flex justify-center items-center gap-2 bg-slate-50 p-3 rounded border-2 border-slate-300 hover:bg-slate-100 transition-colors'>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIbudNn2WDl1Lc_jAa_B4bwjPyjIJW-fcoQ&s"
                                            alt="Google"
                                            className='h-6 w-6'
                                        />
                                        <span>Sign in with Google</span>
                                    </button>

                                    {/* GitHub login button */}
                                    <button className='flex justify-center items-center gap-2 bg-slate-50 p-3 rounded border-2 border-slate-300 hover:bg-slate-100 transition-colors'>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUge0y3COiVXXstoLOhEmUh7BURHuBnaoXw&s"
                                            alt="Github"
                                            className='h-6 w-6'
                                        />
                                        <span>Sign in with Github</span>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;