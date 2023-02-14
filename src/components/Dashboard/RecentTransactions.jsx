import React from "react";
import {
  UilArrowDownLeft,
  UilArrowUpRight,
  UilMoneyStack,
} from "@iconscout/react-unicons";

const RecentTransactions = () => {
  return (
    <>
      {[1, 2].map((items) => (
        <>
          <div key={items} className="flex mb-4 bg-green-500/10 p-3 rounded-md">
            <div className="flex">
              <UilArrowUpRight className="text-green-500 text-lg mr-3 p-2 h-10 w-10 rounded-sm" />
              <div className="flex-col mr-auto">
                <p className="text-white/80 font-medium text-xs">
                  Wallet Transaction
                </p>
                <p className="text-white font-semibold text-sm">2051979748</p>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <p className="text-white/90 font-semibold text-sm">+ $2,500.00</p>
              <small className="text-xs ml-auto font-medium text-white/70">
                20/1/23
              </small>
            </div>
          </div>

          <div key={items} className="flex mb-4 bg-red-500/10 p-3 rounded-md">
            <div className="flex">
              <UilArrowDownLeft className="text-red-500 text-lg mr-3 p-2 h-10 w-10 rounded-sm" />
              <div className="flex-col mr-auto">
                <p className="text-white/80 font-medium text-xs">
                  Card Transaction
                </p>
                <p className="text-white font-semibold text-sm">
                  AMAZON.COM AMZN.COM/BI
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <p className="text-white/90 font-semibold text-sm">- $500.00</p>
              <small className="text-xs ml-auto font-medium text-white/70">
                20/1/23
              </small>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default RecentTransactions;
