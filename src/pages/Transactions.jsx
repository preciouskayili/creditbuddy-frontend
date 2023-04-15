import DashboardLayout from "../layouts/DashboardLayout";
import TransactionDetails from "../components/Transactions/TransactionDetails";
import TransactionHistory from "../components/Transactions/TransactionHistory";

const Transactions = () => {
  return (
    <div className="bg-[#111315] w-full min-h-screen">
      <DashboardLayout pageTitle="Transactions">
        <TransactionHistory />
        <TransactionDetails />
      </DashboardLayout>
    </div>
  );
};

export default Transactions;
