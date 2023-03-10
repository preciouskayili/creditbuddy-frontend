import Sidebar from "../components/Dashboard/Sidebar";
const DashboardLayout = ({ children, pageTitle }) => {
  return (
    <Sidebar pageTitle={pageTitle}>
      <div className="container mx-auto lg:p-4 p-1">{children}</div>
    </Sidebar>
  );
};

export default DashboardLayout;
