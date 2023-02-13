import { AccountInformation } from "./components/Dashboard/AccountInformation";
import DashboardLayout from "./layouts/DashboardLayout";
import { ToggleProvider } from "./context/ToggleContext";
function App() {
  return (
    <ToggleProvider>
      <div className="bg-[#111315] min-h-[100vh]">
        <DashboardLayout>
          <AccountInformation />
        </DashboardLayout>
      </div>
    </ToggleProvider>
  );
}

export default App;
