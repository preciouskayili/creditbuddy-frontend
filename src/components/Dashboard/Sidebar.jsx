import { UilCardAtm, UilEstate } from "@iconscout/react-unicons";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";
import Navbar from "./Navbar";
const Sidebar = ({ children }) => {
  const { isToggled } = useContext(ToggleContext);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#1A1C1E] text-neutral-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
