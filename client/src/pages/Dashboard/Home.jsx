import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";

const Home = () => {
 const {user}=  useUserAuth()
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
         home
      </div>
    </DashboardLayout>
  )
};

export default Home;
