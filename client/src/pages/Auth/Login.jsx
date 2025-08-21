import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { UserContext } from "../../contexts/userContext";





const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate =useNavigate()
    const {updateUser} =useContext(UserContext)
    const handleSubmit =async(e)=>{
        e.preventDefault();
       
        if(!validateEmail(email)){
            setError('Please enter a validate email!')
            return;
        }
         if(!password){
            setError('password are required!')
            return;
        
        }
        setError('');

        try {
          const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email, password});
          const {token, user} = response.data;

          if(token){
            localStorage.setItem('token', token);
            
            updateUser(user)
            console.log(user)
            navigate('/dashboard')
          }
        } catch (error) {
          if (error.response && error.response.data.message) {
            setError(error.response.data.message);
          } else {
            setError('something went wrong, please try again')
          }
        }
    }
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center md:h-full h-3/4 lg:w-[70%] ">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please Enter your details to login
        </p>
        <div>
            <form className="flex flex-col gap-3"  onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="email" className="text-slate-700">Email Address</label>
                    <input type="text" placeholder="johndoe@gmail.com" className="border rounded-md outline-none  px-4 py-3 bg-white text-xs"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="password" className="text-slate-700 ">Password Address</label>
                    <input type="text" placeholder="min 6 character" className="border outline-none rounded-md px-4 py-3 bg-white text-sm" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {error && <p className="text-red-600 text-xs">{error}</p>}
                <button type="submit" className="btn my-3">Login</button>
                <p className="text-slate-600">Don't have an Account? <Link to={'/signup'} className="text-cyan-700 
                 pl-3">SignUp</Link></p>
            </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
