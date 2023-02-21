import { UilCardAtm, UilEstate } from "@iconscout/react-unicons";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
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
        <ul className="menu p-4 w-80 bg-[#1A1C1E] text-neutral-content">
          <li className="mr-auto mt-4 mb-5">
            <img
              src="https://uploads-ssl.webflow.com/6194b7fcf08b5fb4a89cf648/6194b7fcf08b5f1ea19cf671_Logo.svg"
              alt="Creditbuddy"
            />
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
