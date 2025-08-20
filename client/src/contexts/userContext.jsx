import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

 const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const navigate =useNavigate();

  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser(null);
  };

   

    useEffect(()=>{
        if(user) return;

        let isMounted = true;
        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER);

                if(isMounted && response.data){
                    updateUser(response.data);
                }
            } catch (error) {
                console.error('failed fetching user info', error);
                if(isMounted){
                    clearUser()
                    // window.location.href('/login')
                }
            }
        };
        fetchUserInfo();

        return ()=>{
            isMounted = false;
        }
    },[updateUser, clearUser])

  const value = { user, updateUser, clearUser };
  console.log(value);
  return (
  <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};