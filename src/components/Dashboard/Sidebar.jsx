import {
  UilDashboard,
  UilTransaction,
  UilAnalytics,
  UilSetting,
} from "@iconscout/react-unicons";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Sidebar = ({ children, pageTitle }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) loginWithRedirect();
  });

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar pageTitle={pageTitle} />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-80 bg-[#1A1C1E] text-neutral-content font-medium space-y-3">
          <div className="p-4 mb-6 mt-5">
            <div className="bg-blue-500/[0.05] rounded-full w-20 h-20 flex justify-center items-center">
              <img src={logo} className="w-14" alt="Creditbuddy" />
            </div>
          </div>
          <div className="p-4 menu text-md">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary bg-blue-500/[0.05]" : null
                }
                to="/dashboard"
              >
                <UilDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive ? "text-primary bg-blue-500/[0.05]" : null
                }
              >
                <UilTransaction />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expenses"
                className={({ isActive }) =>
                  isActive ? "text-primary bg-blue-500/[0.05]" : null
                }
              >
                <UilAnalytics />
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "text-primary bg-blue-500/[0.05]" : null
                }
              >
                <UilSetting />
                Settings
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
