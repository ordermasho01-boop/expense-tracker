import { BASE_URL } from "./apiPaths";
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL : BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
    },
});

//request interceptor
axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem("token");
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

// response interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        //handle common error globallly
        if(error.response){
            if(error.response.status === 401){
                window.location.href="/login";
            }else if(error.response.status === 500){
                console.error("server error please try again later")
            }
        }else if(error.code === "ECONNABORTED"){
            console.error("Request timeout, please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance