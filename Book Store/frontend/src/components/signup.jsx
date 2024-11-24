import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Login from "./login";
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div>
                <Navbar />
                <div id="my_modal_3" className="flex h-screen justify-center align items-center">
                    <div className="modal-box p-5  dark:bg-slate-900 dark:text-white dark:border-2">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">SignUp!</h3>

                            <div className="flex flex-col mt-4 space-y-4">
                                {/* username */}
                                <div className="flex items-center">
                                    <span className="w-24">Email:</span>
                                    <input type="text" placeholder="Enter Your Email" className="w-80 px-8 border rounded-md outline-none dark:bg-slate-900 dark:text-white" {...register("Email", { required: true })} />
                                    {errors.Email && <span className="text-sm text-red-500">This field is required</span>}
                                </div>
                                {/* password */}
                                <div className="flex items-center">
                                    <span className="w-24">Password:</span>
                                    <input type="password" placeholder="Password" className="w-80 px-8 border rounded-md outline-none dark:bg-slate-900 dark:text-white" {...register("Password", { required: true })} />
                                    {errors.Password && <span className="text-sm text-red-500">This field is required</span>}
                                </div>

                                <div className="flex justify-center space-x-8">
                                    <button className="btn btn-secondary w-24">Submit</button>
                                    <button className="btn btn-secondary w-24">Reset</button>
                                </div>

                                <div className="flex items-center justify-center">
                                    <p>Already registered {" "}
                                        <span onClick={() => document.getElementById('my_modal_3').showModal()} className="underline text-blue-500 cursor-pointer">Login</span>
                                        {" "} </p>
                                    <Login />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup