import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
    };

    const handleGoogleLogin = data => {
        console.log(data);
    }

    return (
        <div>
            <div className='h-[690px]  flex justify-center items-center'>
                <div className='w-96  shadow-xl p-6'>
                    <h1 className='text-xl text-center'>Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span> </label>
                            <input type="email"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input type="password"
                                {...register("password", {
                                    required: "password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-orange-600'>{errors.password?.message}</p>}
                        </div>

                        <input className="btn btn-primary w-full bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" value='Submit' type="submit" />
                        {
                            loginError && <p className='text-orange-600'>{loginError}</p>
                        }
                    </form>
                    <p>New to doctors portal? <Link className='text-primary' to="/register">Create new account</Link></p>
                    <div className='divider'>OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;