import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <Link to="/" method="dialog" onClick={() => document.getElementById("my_modal_3").close()}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </Link>
          <h3 className="font-bold text-lg">Login!</h3>

          <div className="flex flex-col mt-4 space-y-4">
            {/* username */}
            <div className="flex items-center">
              <span className="w-24">Email:</span>
              <input type="text" placeholder="Enter Your Email" className="w-80 px-8 border rounded-md outline-none dark:bg-slate-900 dark:text-white" />
            </div>
            {/* password */}
            <div className="flex items-center">
              <span className="w-24">Password:</span>
              <input type="password" placeholder="Password" className="w-80 px-8 border rounded-md outline-none dark:bg-slate-900 dark:text-white" />
            </div>

            <div className="flex justify-center space-x-8">
              <button className="btn btn-secondary w-24">Login</button>
              <button className="btn btn-secondary w-24">Reset</button>
            </div>

            <div className="flex items-center justify-center">
            <p>Not registered yet {" "}
               <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
              {" "} </p>
            </div>
          </div>

        </div>
      </dialog>
    </div>
  )
}

export default Login