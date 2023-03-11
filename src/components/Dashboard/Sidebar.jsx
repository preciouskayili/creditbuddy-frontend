import {
  UilDashboard,
  UilTransaction,
  UilAnalytics,
  UilSetting,
} from "@iconscout/react-unicons";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/icons/logo.svg";

const Sidebar = ({ children, pageTitle }) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar pageTitle={pageTitle} />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#1A1C1E] text-neutral-content space-y-3">
          <li className="mr-auto mt-4 mb-5">
            <img className="h-20" src={logo} alt="Creditbuddy" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive && "text-primary bg-blue-500/[0.05]"
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
                isActive && "text-primary bg-blue-500/[0.05]"
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
                isActive && "text-primary bg-blue-500/[0.05]"
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
                isActive && "text-primary bg-blue-500/[0.05]"
              }
            >
              <UilSetting />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
