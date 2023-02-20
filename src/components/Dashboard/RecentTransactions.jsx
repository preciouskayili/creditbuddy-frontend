import React from "react";
import { UilArrowDownLeft, UilArrowUpRight } from "@iconscout/react-unicons";

const RecentTransactions = () => {
  return (
    <>
      <div className="flex mb-4 bg-blue-300/10 p-5 rounded-md">
        <div className="flex">
          <UilArrowUpRight className="text-green-500 text-lg mr-3 p-2 h-10 w-10 rounded-sm" />
          <div className="flex-col mr-auto">
            <p className="text-white/80 font-medium text-xs">
              Wallet Transaction
            </p>
            <p className="text-white font-semibold text-sm truncate overflow-hidden text-ellipsis w-32 lg:w-100">
              Balance Topup
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <p className="font-semibold text-sm text-green-500">+ $2,500.00</p>
          <small className="text-xs ml-auto font-medium text-white/70">
            20/1/23
          </small>
        </div>
      </div>

      <div className="flex mb-4 bg-blue-300/10 p-5 rounded-md">
        <div className="flex">
          <UilArrowDownLeft className="text-red-500 text-lg mr-3 p-2 h-10 w-10 rounded-sm" />
          <div className="flex-col mr-auto">
            <p className="text-white/80 font-medium text-xs">
              Card Transaction
            </p>
            <p className="text-white font-semibold text-sm truncate overflow-hidden text-ellipsis w-100 sm:w-32">
              AMAZON.COM AMZN.COM/BI
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <p className="text-red-500 font-semibold text-sm">- $500.00</p>
          <small className="text-xs ml-auto font-medium text-white/70">
            20/1/23
          </small>
        </div>
      </div>

      <div className="flex mb-4 bg-blue-300/10 p-5 rounded-md">
        <div className="flex">
          <UilArrowDownLeft className="text-red-500 text-lg mr-3 p-2 h-10 w-10 rounded-sm" />
          <div className="flex-col mr-auto">
            <p className="text-white/80 font-medium text-xs">
              Card Transaction
            </p>
            <p className="text-white font-semibold text-sm truncate overflow-hidden text-ellipsis w-32">
              AMAZON.COM AMZN.COM/BI
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <p className="text-red-500 font-semibold text-sm">- $500.00</p>
          <small className="text-xs ml-auto font-medium text-white/70">
            20/1/23
          </small>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
