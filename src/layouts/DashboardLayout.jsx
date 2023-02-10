import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { useState } from "react";
const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Sidebar showSidebar={showSidebar} />
      </div>
      <div
        className="lg:col-span-9 col-span-12"
        onClick={() => setShowSidebar(false)}
      >
        <Navbar />
        <div className="px-4 py-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
