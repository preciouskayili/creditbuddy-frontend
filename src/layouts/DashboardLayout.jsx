import Sidebar from "../components/Dashboard/Sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <Sidebar>
      <div className="px-4 py-4">
        {children}
      </div>
    </Sidebar>
  );
};

export default DashboardLayout;
