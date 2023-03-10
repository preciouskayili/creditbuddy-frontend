import AccountInformation from "../components/Dashboard/AccountInformation";
import DashboardLayout from "../layouts/DashboardLayout";
import QuickActions from "../components/Dashboard/QuickActions";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-[#111315] min-h-[100vh]">
      <DashboardLayout pageTitle="My Wallet">
        <AccountInformation />

        <div className="grid grid-cols-12 mt-12 gap-8 items-start container">
          <div className="col-span-12 xl:col-span-5 bg-white/5 rounded-lg p-5">
            <h4 className="mr-auto text-white font-bold text-xl mb-5">
              Quick actions
            </h4>
            <QuickActions />
          </div>

          <div className="col-span-12 xl:col-span-7 bg-white/5 rounded-lg p-5">
            <div className="flex">
              <h4 className="mr-auto text-white font-bold text-xl mb-5">
                Transactions
              </h4>

              <Link
                className="text-blue-500 text-xs font-semibold"
                to="/transactions"
              >
                View all
              </Link>
            </div>
            <RecentTransactions />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
