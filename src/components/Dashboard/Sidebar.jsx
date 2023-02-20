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
          <li className="glass text-white font-bold text-center rounded-full mb-5 p-4">
            Creditpadi
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
