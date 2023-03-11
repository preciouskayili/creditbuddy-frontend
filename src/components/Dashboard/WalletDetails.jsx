import { useState } from "react";
import {
  UilMoneyInsert,
  UilMoneyWithdraw,
  UilEyeSlash,
  UilEye,
  UilLockAlt,
} from "@iconscout/react-unicons";

const WalletDetails = () => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="mt-5 rounded-lg bg-[#275BE1] min-h-[35vh] flex flex-col p-5">
      <div className="flex"></div>
      <div className="my-auto text-center">
        <button
          className="text-white/75 font-semibold text-sm ml-auto mb-1 btn btn-ghost btn-circle"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <UilEyeSlash /> : <UilEye />}
        </button>
        <p className="text-white/75 font-semibold text-sm items-center justify-center mt-2">
          Total Balance
        </p>
        <h3 className="flex items-center overflow-x-auto overflow-y-hidden justify-center my-auto mb-6">
          <span className="font-extrabold text-white text-4xl">
            ${showBalance ? "86,688.00" : "*** **"}
          </span>
          <span className="ml-3 font-light text-white/70 text-xl">USD</span>
        </h3>
      </div>

      <div className="flex justify-around">
        <button className="text-xs text-white/80 text-center flex flex-col items-center justify-center">
          <div className="text-sm h-[50px] w-[50px] flex items-center justify-center rotate-180 bg-black/50 rounded-full mb-1">
            <UilMoneyWithdraw />
          </div>
          Withdraw
        </button>

        <button className="text-xs text-white/80 text-center flex flex-col items-center justify-center">
          <div className="text-sm h-[50px] w-[50px] p-3 flex items-center justify-center bg-black/50 rounded-full mb-1">
            <UilMoneyInsert />
          </div>
          Fund Card
        </button>

        <button className="text-xs text-white/80 text-center flex flex-col items-center justify-center">
          <div className="text-sm h-[50px] w-[50px] p-3 flex items-center justify-center bg-black/50 rounded-full mb-1">
            <UilLockAlt />
          </div>
          Freeze Card
        </button>
      </div>
    </div>
  );
};

export default WalletDetails;
