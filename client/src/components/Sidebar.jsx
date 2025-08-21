import { useNavigate } from "react-router-dom";
import { SIDE_BAR_DATA } from "../utils/data";

import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import CharAvatar from "./CharAvatar";


const Sidebar = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext)
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    } else {
      navigate(route);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };
  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-slate-200 border-r border-gray-200/50 p-5 sticky top-[61px] z-20 ">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl  ? (
          <img
            src={user?.profileImageUrl || "/profile.jpg"}
            alt="profile pic"
            className="w-20 h-20 rounded-full bg-slate-400"
          />
        ) : (
          <CharAvatar 
          fullName = {user?.fullName || ""}
          width='w-20'
          h='h-20'
          style='text-xl'
          />
        )}
        <h5 className="text-gray-950 leading-6 font-medium ">
          {user?.fullName || ""}
        </h5>
      </div>
      {SIDE_BAR_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] ${
            activeMenu === item.label ? "text-white bg-secondary" : ""
          } py-3 px-6 rounded-lg mb-3`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl bg-transparent" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
