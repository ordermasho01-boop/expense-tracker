import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/userContext"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axiosInstance"
import { API_PATHS } from "../utils/apiPaths"

export const useAuth =()=>{
    const {user, updateUser, clearUser}= useContext(UserContext)
    const navigate =useNavigate()

    useEffect(()=>{
        if(user) return;

        let isMouted = true;
        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER)

                if(isMouted && response.data){
                    updateUser(response.data)
                }
            } catch (error) {
                console.log('failed to fetch user info', error)
                if(isMouted){
                    clearUser();
                    navigate('/login')
                }
            }
        };

        fetchUserInfo();

        return ()=>{
            isMouted = false;
        }
    },[updateUser, clearUser, navigate])
}