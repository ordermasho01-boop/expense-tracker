import React from "react";

const InfoCard = ({ label, icon, color, value }) => {
  return (
    <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div
        className={`w-14 h-14  flex items-center justify-center text-[26px] ${color} rounded-full drop-shadow-xl e`}
      >
        {icon}
      </div>
      <div className="bg-white">
        <h6 className="text-sm text-gray-500 mb-1 bg-white">{label}</h6>
        <span className="text-[22px] bg-white">${value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
