import Paginate from "./Paginate";
import TransactionItem from "./TransactionItem";
const TransactionHistory = () => {
  return (
    <>
      <p className="mb-5">
        Showing <span>1-20</span> of 100 Transactions
      </p>
      <div className="card bg-white/5 p-5 rounded-lg h-fit max-h-[75vh] overflow-y-auto">
        {[1, 2, 3, 4, 5].map((i) => (
          <TransactionItem key={i} />
        ))}
      </div>
      <div className="mt-5">
        <Paginate />
      </div>
    </>
  );
};

export default TransactionHistory;
