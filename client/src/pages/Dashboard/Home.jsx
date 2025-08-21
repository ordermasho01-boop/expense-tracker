import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useAuth } from "../../hooks/useAuth";





const Home = () => {
   useAuth()
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
         home 
      </div>
    </DashboardLayout>
  )
};

export default Home;
