import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import Profile from "../../components/Profile";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS, BASE_URL } from "../../utils/apiPaths";

import { useAuth } from "../../contexts/userContext";


const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {updateUser} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      setError("All fields are required!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter validate email!");
      return;
    }
    setError("");
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user)
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("something went wrong please try again");
      }
    }
  };
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center md:h-full h-3/4 lg:w-[70%] ">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please Enter your details to register
        </p>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Profile />
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name" className="text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="border rounded-md outline-none  px-4 py-3 bg-white text-xs"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="email" className="text-slate-700">
                Email Address
              </label>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="border rounded-md outline-none  px-4 py-3 bg-white text-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="password" className="text-slate-700 ">
                Password{" "}
              </label>
              <input
                type="text"
                placeholder="min 6 character"
                className="border outline-none rounded-md px-4 py-3 bg-white text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button type="submit" className="btn my-3">
              SignUp
            </button>
            <p className="text-slate-600">
              Already have an Account?{" "}
              <Link
                to={"/login"}
                className="text-cyan-700 
                 pl-3"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
