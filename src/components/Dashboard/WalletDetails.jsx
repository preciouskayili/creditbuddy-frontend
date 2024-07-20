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
      <BalanceSection showBalance={showBalance} setShowBalance={setShowBalance} />
      <ActionButtons />
    </div>
  );
};

const BalanceSection = ({ showBalance, setShowBalance }) => (
  <div className="my-auto text-center">
    <ToggleBalanceButton showBalance={showBalance} setShowBalance={setShowBalance} />
    <p className="text-white/75 font-semibold text-sm items-center justify-center mt-2">
      Total Balance
    </p>
    <BalanceDisplay showBalance={showBalance} />
  </div>
);

const ToggleBalanceButton = ({ showBalance, setShowBalance }) => (
  <button
    className="text-white/75 font-semibold text-sm ml-auto mb-1 btn btn-ghost btn-circle"
    onClick={() => setShowBalance(!showBalance)}
  >
    {showBalance ? <UilEyeSlash /> : <UilEye />}
  </button>
);

const BalanceDisplay = ({ showBalance }) => (
  <h3 className="flex items-center overflow-x-auto overflow-y-hidden justify-center my-auto mb-6">
    <span className="font-extrabold text-white text-4xl">
      ${showBalance ? "86,688.00" : "*** **"}
    </span>
    <span className="ml-3 font-light text-white/70 text-xl">USD</span>
  </h3>
);

const ActionButtons = () => {
  const actions = [
    { icon: UilMoneyWithdraw, label: "Withdraw", rotate: true },
    { icon: UilMoneyInsert, label: "Fund Card" },
    { icon: UilLockAlt, label: "Freeze Card" },
  ];

  return (
    <div className="flex justify-around">
      {actions.map((action, index) => (
        <ActionButton key={index} {...action} />
      ))}
    </div>
  );
};

const ActionButton = ({ icon: Icon, label, rotate }) => (
  <button className="text-xs text-white/80 text-center flex flex-col items-center justify-center">
    <div className={`text-sm h-[50px] w-[50px] p-3 flex items-center justify-center bg-black/50 rounded-full mb-1 ${rotate ? 'rotate-180' : ''}`}>
      <Icon />
    </div>
    {label}
  </button>
);

export default WalletDetails;
