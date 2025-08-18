import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Expense from "./pages/Auth/Dashboard/Expense";
import Income from "./pages/Auth/Dashboard/Income";
import Home from "./pages/Auth/Dashboard/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Root />}>
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
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
