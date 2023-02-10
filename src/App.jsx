import { AccountInformation } from "./components/Dashboard/AccountInformation";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <div className="bg-[#111315] min-h-[100vh]">
      <DashboardLayout>
        <AccountInformation />
      </DashboardLayout>
    </div>
  );
}

export default App;
