import React from "react";
import { UilAngleRightB, UilWordpress } from "@iconscout/react-unicons";

const RecentTransactions = () => {
  return (
    <>
      <div className="flex mb-4 items-center justify-center cursor-pointer">
        <div className="flex items-center justify-center">
          <UilWordpress className="text-white text-lg mr-3 p-2 h-14 w-14 rounded-full bg-primary" />
          <div className="flex-col mr-auto">
            <p className="text-white/90 font-semibold text-md truncate overflow-hidden text-ellipsis w-100 sm:w-32">
              Wordpress
            </p>
            <p className="text-white/50 text-xs">April 6, 11:45AM</p>
          </div>
        </div>
        <div className="ml-auto flex">
          <p className="text-white font-semibold text-md">-$10</p>
          <UilAngleRightB className="text-white/30" />
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
