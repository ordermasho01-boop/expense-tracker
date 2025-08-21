import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser(null);
  };

  // Dependencies

  const value = { user, updateUser, clearUser };
  console.log(value); // Log the context value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// export const useAuth = () => {
//   return useContext(UserContext);
// };
