import React from 'react';
import { useForm } from 'react-hook-form';

const ApplyForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleApply = data => {
        console.log(data);
    };

    return (
        <div>
            <div className='h-[690px]  flex justify-center items-center mx-5 md:mx-0'>
                <div className='w-96  shadow-xl p-6'>
                    <h1 className='text-xl text-center'>Please Fill-Up The Form</h1>
                    <form onSubmit={handleSubmit(handleApply)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Name</span> </label>
                            <input type="text"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Email</span> </label>
                            <input type="email"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Number</span> </label>
                            <input type="text"
                                {...register("number", {
                                    required: "Number is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                        </div>
                    </form>
                    <input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white w-full max-w-xs font-bold border-none mt-4" readOnly value='Apply' type="text" />
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;