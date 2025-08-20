import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";

import { useAuth } from "../../contexts/userContext";


const Home = () => {
const {user}=useAuth()
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
         home 
      </div>
    </DashboardLayout>
  )
};

export default Home;
