import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/InfoCard";
import { addThousandsSeparator } from "../../utils/helper";
import { IoMdCard, IoMdWallet } from "react-icons/io";
import { LuHandCoins } from "react-icons/lu";
import RecentTransactions from "../../components/RecentTransactions";

const Home = () => {
   useAuth();
   const navigate =useNavigate()
   const [dashboardData, setDashboardData] = useState(null)
   const [loading, setLoading] = useState(false)

   const fetchDashboardData = async () => {
    if(loading) return;
    setLoading(true)
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA)
      if(response.data){
        setDashboardData(response.data)
      }
    } catch (error) {
      console.log('something went wrong ,please try again', error.message)
    }finally{
      setLoading(false)
    }
   };

   useEffect(()=>{
    fetchDashboardData();
    return ()=>{}
   },[])
   
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             <InfoCard icon={<IoMdCard/>}
             label='Total Balance'
             value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
             color= 'bg-secondary'
             />

             <InfoCard icon={<IoMdWallet/>}
             label='Total Income'
             value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
             color= 'bg-primary'
             />

             <InfoCard icon={<LuHandCoins />}
             label='Total Expense'
             value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
             color= 'bg-red-500'
             />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions 
          transactions= {dashboardData?.RecentTransactions}
          onSeeMore={()=>navigate('/expense')}
          />
        </div>
      </div>
    </DashboardLayout>
  )
};

export default Home;
