import { AccountInformation } from "./components/Dashboard/AccountInformation";
import DashboardLayout from "./layouts/DashboardLayout";
import { ToggleProvider } from "./context/ToggleContext";
import QuickActions from "./components/Dashboard/QuickActions";
import RecentTransactions from "./components/Dashboard/RecentTransactions";
function App() {
  return (
    <ToggleProvider>
      <div className="bg-[#111315] min-h-[100vh]">
        <DashboardLayout>
          <AccountInformation />

          <div className="grid grid-cols-12 mt-12 gap-8 items-start">
            <div className="col-span-5 bg-white/5 rounded-lg p-5">
              <h4 className="mr-auto text-white font-bold text-md mb-5">
                Quick actions
              </h4>
              <QuickActions />
            </div>

            <div className="col-span-7 bg-white/5 rounded-lg p-5">
              <div className="flex">
                <h4 className="mr-auto text-white font-bold text-md mb-5">
                  Recent Transactions
                </h4>

                <a className="text-blue-500 text-xs font-semibold" href="/">
                  View all
                </a>
              </div>
              <RecentTransactions />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </ToggleProvider>
  );
}

export default App;
