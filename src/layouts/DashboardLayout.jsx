import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";
const DashboardLayout = ({ children }) => {
  const { setIsToggled } = useContext(ToggleContext);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 col-span-12">
        <Navbar />
        <div className="px-4 py-4" onClick={() => setIsToggled(false)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
