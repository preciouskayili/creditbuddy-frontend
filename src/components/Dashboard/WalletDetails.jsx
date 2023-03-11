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
    <div className="mt-5 rounded-md bg-[#0A82FC] py-3">
      <div className="px-5">
        <div className="flex">
          <span className="text-white/75 font-semibold text-sm mr-auto">
            Total Balance
          </span>

          <button
            className="text-white/75 font-semibold text-sm ml-auto"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? <UilEyeSlash /> : <UilEye />}
          </button>
        </div>

        <h3 className="mt-2 flex items-center overflow-x-auto overflow-y-hidden">
          <span className="font-bold text-white text-3xl">
            ${showBalance ? "86,688.00" : "*** **"}
          </span>
          <span className="ml-3 font-light text-white/70 text-xl">USD</span>
        </h3>
        <p className="mt-3 text-white/80 text-sm">Precious Kayili</p>
      </div>

      <div className="border-t-[2px] border-white/30 my-5 flex" />

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
