import React from "react";
import Date_Time from "./Date_time";

const navbar = () => {
  return (
    <div className="h-[15%] flex justify-around items-center bg-[#103a5d] shadow-sm">
      <div className="text-[#cae2f5] text-[35px] font-bold">
        GenAI Powered Travel Itinerary
      </div>
      <div>
        <Date_Time />
      </div>
    </div>
  );
};

export default navbar;
