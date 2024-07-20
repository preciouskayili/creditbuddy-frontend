import React from "react";
import { UilAngleRightB, UilWordpress } from "@iconscout/react-unicons";

const RecentTransactions = () => {
  const transaction = {
    icon: UilWordpress,
    name: "Wordpress",
    date: "April 6, 11:45AM",
    amount: -10,
  };

  return (
    <TransactionItem 
      icon={transaction.icon}
      name={transaction.name}
      date={transaction.date}
      amount={transaction.amount}
    />
  );
};

const TransactionItem = ({ icon: Icon, name, date, amount }) => (
  <div className="flex mb-4 items-center justify-center cursor-pointer">
    <TransactionDetails Icon={Icon} name={name} date={date} />
    <TransactionAmount amount={amount} />
  </div>
);

const TransactionDetails = ({ Icon, name, date }) => (
  <div className="flex items-center justify-center">
    <Icon className="text-white text-lg mr-3 p-2 h-14 w-14 rounded-full bg-primary" />
    <div className="flex-col mr-auto">
      <p className="text-white/90 font-semibold text-md truncate overflow-hidden text-ellipsis w-100 sm:w-32">
        {name}
      </p>
      <p className="text-white/50 text-xs">{date}</p>
    </div>
  </div>
);

const TransactionAmount = ({ amount }) => (
  <div className="ml-auto flex">
    <p className="text-white font-semibold text-md">${amount.toFixed(2)}</p>
    <UilAngleRightB className="text-white/30" />
  </div>
);

export default RecentTransactions;