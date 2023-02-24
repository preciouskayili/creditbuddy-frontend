import {
  UilDashboard,
  UilTransaction,
  UilAnalytics,
  UilSetting,
} from "@iconscout/react-unicons";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children, pageTitle }) => {
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
            <img
              src="https://uploads-ssl.webflow.com/6194b7fcf08b5fb4a89cf648/6194b7fcf08b5f1ea19cf671_Logo.svg"
              alt="Creditbuddy"
            />
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
