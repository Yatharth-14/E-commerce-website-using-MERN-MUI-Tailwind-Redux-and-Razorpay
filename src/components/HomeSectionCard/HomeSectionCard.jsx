import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeSectionCard = () => {
  const navigate = useNavigate();

  const handleHomeSectionCardClick=()=>{
    navigate('/product')
  }
  return (
      <div onClick={handleHomeSectionCardClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 border"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
        <p className="mt-2 text-sm text-gray-500">Men solid pure cotton straight kurta</p>
      </div>
    </div>
    
  );
};

export default HomeSectionCard;
