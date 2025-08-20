import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";


import Home from "./pages/Dashboard/Home";
import { UserProvider } from "./contexts/userContext";




const App = () => {
  return (
    <UserProvider>
      
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Root />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </BrowserRouter>
     
    </UserProvider>
  );
};

export default App;
const Root = () => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Navigate to={"/login"} />
  );
};
