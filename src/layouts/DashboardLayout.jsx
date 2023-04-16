import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Dashboard/Sidebar";
import SplashScreen from "../components/_App/SplashScreen";

const DashboardLayout = ({ children, pageTitle }) => {
  const { isLoading, isAuthenticated } = useAuth0();
  return !isLoading ? (
    <Sidebar pageTitle={pageTitle}>
      <div className="container mx-auto lg:p-4 p-1">{children}</div>
    </Sidebar>
  ) : (
    <SplashScreen />
  );
};

export default DashboardLayout;
