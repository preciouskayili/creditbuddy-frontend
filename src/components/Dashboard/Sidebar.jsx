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
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) loginWithRedirect();
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return (
    <div className="flex min-h-screen">
      <div className="drawer drawer-mobile relative">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <DrawerContent pageTitle={pageTitle}>{children}</DrawerContent>
        <DrawerSide user={user} />
      </div>
    </div>
  );
};

const DrawerContent = ({ children, pageTitle }) => (
  <div className="drawer-content flex flex-col">
    <Navbar pageTitle={pageTitle} />
    {children}
  </div>
);

const DrawerSide = ({ user }) => (
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu w-80 p-4 bg-[#1A1C1E] text-neutral-content font-medium space-y-3">
      <Logo />
      <UserProfile user={user} />
      <NavItems />
    </ul>
  </div>
);

const Logo = () => (
  <div className="mb-6 mt-5">
    <div className="bg-blue-500/[0.05] rounded-full w-20 h-20 flex justify-center items-center">
      <img src={logo} className="w-14" alt="Creditbuddy" />
    </div>
  </div>
);

const UserProfile = ({ user }) => (
  <li className="flex btn-ghost rounded-xl hover:bg-blue-500/[0.1] bg-blue-500/[0.05] cursor-pointer top-0">
    <NavLink to="/profile" tabIndex="0">
      <img
        src={user.picture}
        className="rounded-full w-[60px] h-[60px] object-cover"
        alt="Profile"
      />
      <div className="px-3 my-auto">
        <h5 className="text-sm font-bold">{user.name}</h5>
        <small className="text-sm text-white/70">@{user.nickname}</small>
      </div>
    </NavLink>
  </li>
);

const NavItems = () => {
  const navItems = [
    { to: "/dashboard", icon: UilDashboard, label: "Dashboard" },
    { to: "/transactions", icon: UilTransaction, label: "Transactions" },
    { to: "/expenses", icon: UilAnalytics, label: "Expenses" },
    { to: "/settings", icon: UilSetting, label: "Settings" },
  ];

  return navItems.map((item, index) => (
    <NavItem key={index} to={item.to} icon={item.icon} label={item.label} />
  ));
};

const NavItem = ({ to, icon: Icon, label }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-primary bg-blue-500/[0.05]" : null
      }
      to={to}
    >
      <Icon />
      {label}
    </NavLink>
  </li>
);

export default Sidebar;