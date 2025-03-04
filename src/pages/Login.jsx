import React, { useState } from 'react';
import { Button, Checkbox, TextField, InputAdornment, IconButton } from '@mui/material';
import { HiEye, HiEyeOff } from "react-icons/hi"; // Using react-icons
import { ErrorMessage, Field, Form, Formik } from 'formik';
import loginimage from '../assets/loginimage.svg';
import * as Yup from 'yup';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const initialValues = { email: "", password: "", rememberMe: false };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email").required("Fill the email"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Fill the password"),
    });

    const handleSubmit = (values) => {
        console.log("Handle submit", values);
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
            <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto'>

                {/* Image Section */}
                <div className='hidden md:flex w-1/2 bg-gray-200 justify-center items-center p-8'>
                    <img src={loginimage} alt="Login" className='w-full h-auto max-w-xs md:max-w-sm' />
                </div>

                {/* Form Section */}
                <div className='w-full md:w-1/2 p-6 md:p-8'>
                    <Formik
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                    >
                        {({ values }) => (
                            <Form className='flex flex-col gap-5'>

                                {/* Title */}
                                <div className='text-center md:text-left'>
                                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>Welcome Back</h2>
                                    <p className='text-gray-500'>Sign in to Employee Management</p>
                                    <hr className='mt-2' />
                                </div>

                                {/* Email Input */}
                                <Field
                                    as={TextField}
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                />

                                <ErrorMessage name='email' component={"div"} className='text-red-500' />

                                {/* Password Field with Eye Icon */}
                                <Field
                                    as={TextField}
                                    name="password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <ErrorMessage name='password' component={"div"} className='text-red-500' />

                                {/* Remember Me & Forgot Password */}
                                <div className='flex justify-between items-center text-sm'>
                                    <label className='flex items-center gap-1 cursor-pointer'>
                                        <Field as={Checkbox} name="rememberMe" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className='text-blue-500 hover:underline'>Forgot Password?</a>
                                </div>

                                {/* Sign In Button */}
                                <Button
                                    sx={{ padding: '.8rem 0rem' }}
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    disabled={!values.rememberMe}
                                    fullWidth
                                >
                                    Sign In
                                </Button>

                                {/* Divider */}
                                <div className='flex items-center my-3'>
                                    <div className='flex-grow border-t border-gray-300'></div>
                                    <span className='mx-2 text-gray-500 text-sm'>or sign in with</span>
                                    <div className='flex-grow border-t border-gray-300'></div>
                                </div>

                                {/* Social Login Buttons */}
                                <div className='flex flex-col gap-2'>
                                    <button className='flex justify-center items-center gap-2 bg-white p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all'>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIbudNn2WDl1Lc_jAa_B4bwjPyjIJW-fcoQ&s"
                                            alt="Google"
                                            className='h-5 w-5'
                                        />
                                        <span className='text-sm'>Sign in with Google</span>
                                    </button>

                                    <button className='flex justify-center items-center gap-2 bg-white p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all'>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUge0y3COiVXXstoLOhEmUh7BURHuBnaoXw&s"
                                            alt="Github"
                                            className='h-5 w-5'
                                        />
                                        <span className='text-sm'>Sign in with Github</span>
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
