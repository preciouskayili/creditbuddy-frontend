import { UilBell, UilAngleDown } from "@iconscout/react-unicons";
import avatar from "../../assets/avatars/gMyfIhZY_400x400.jpg";
const Navbar = () => {
  return (
    <nav className="w-full bg-[#111315] flex justify-between items-center p-4">
      {/* Navbar items */}
      <ul className="text-white flex list-none flex-row items-center mr-auto">
        <li className="font-bold text-xl">My Wallet</li>
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
      {/* Navbar items */}
      <ul className="text-white flex list-none flex-row items-center ml-auto">
        <li className="mx-4 cursor-pointer p-2 rounded-full flex">
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
        </li>
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
