import { AccountInformation } from "./components/Dashboard/AccountInformation";
import DashboardLayout from "./layouts/DashboardLayout";
import { ToggleProvider } from "./context/ToggleContext";
import QuickActions from "./components/Dashboard/QuickActions";
function App() {
  return (
    <ToggleProvider>
      <div className="bg-[#111315] min-h-[100vh]">
        <DashboardLayout>
          <AccountInformation />

          <div className="bg-white/5 rounded-lg mt-8 p-5">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <QuickActions />
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </ToggleProvider>
  );
}

export default App;
