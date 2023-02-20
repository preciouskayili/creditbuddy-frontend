import { UilBars, UilAngleDown } from "@iconscout/react-unicons";
import avatar from "../../assets/avatars/gMyfIhZY_400x400.jpg";
const Navbar = () => {
  return (
    <nav className="w-full bg-[#111315] flex justify-between items-center p-4">
      {/* Navbar items */}
      <ul className="text-white flex list-none flex-row items-center mr-auto">
        <li className="font-bold text-xl hidden lg:inline-flex">My Wallet</li>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <UilBars />
        </label>
      </ul>
      {/* Navbar items */}
      <ul className="text-white flex list-none flex-row items-center ml-auto">
        <li className="mx-4">
          <div className="dropdown">
            <label
              tabindex="0"
              className="flex p-2 btn-ghost rounded-full cursor-pointer"
            >
              <img
                src={avatar}
                className="rounded-full w-[60px] h-[60px] object-cover"
                alt="Profile"
              />
              <div className="px-3 my-auto">
                <small className="text-xs text-white/70">Hello,</small>
                <h5 className="text-sm font-bold">Precious K.</h5>
              </div>
              <span className="my-auto">
                <UilAngleDown />
              </span>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-[#1A1C1E] rounded-lg w-52"
            >
              <li>
                <a className="font-bold mb-2">Profile</a>
              </li>
              <li>
                <a className="btn btn-error">Logout</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
