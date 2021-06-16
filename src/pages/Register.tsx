import React, {SyntheticEvent, useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


const Register = () => {
    const [redirect, setRedirect] = useState(false);
    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
    let passwordConfirmation = "";

const handleForm = async (e: SyntheticEvent) => {
  e.preventDefault();

  await axios.post("/register", {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation
  });

  setRedirect(true);

}

if(redirect) {
  return <Redirect to="/login" />
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>          
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register your account</h2>         
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="first_name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                  onChange={(e) => firstName = e.target.value}
                />
              </div>
              <div>
                <label htmlFor="last_name" className="sr-only">
                  Last name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="last_name"
                  onChange={(e) => lastName = e.target.value}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => email = e.target.value}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => password = e.target.value}
                />
              </div>
              <div>
                <label htmlFor="password_confirmation" className="sr-only">
                  Password Confirm
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password confirm"
                  onChange={(e) => passwordConfirmation = e.target.value}
                />
              </div>
            </div> 
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400">
                <i className="fas fa-lock"></i>
                    </span>
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Register;
