import Sidebar from "../components/Dashboard/Sidebar";
import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";
const DashboardLayout = ({ children }) => {
  const { setIsToggled } = useContext(ToggleContext);
  return (
    <Sidebar>
      <div className="px-4 py-4" onClick={() => setIsToggled(false)}>
        {children}
      </div>
    </Sidebar>
  );
};

export default DashboardLayout;
