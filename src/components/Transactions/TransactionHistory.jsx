import TransactionItem from "./TransactionItem";
const TransactionHistory = () => {
  return (
    <div className="card bg-white/5 rounded-lg h-[75vh] overflow-y-auto">
      {[1, 2, 3, 4, 5].map((i) => (
        <TransactionItem key={i} />
      ))}
    </div>
  );
};

export default TransactionHistory;
