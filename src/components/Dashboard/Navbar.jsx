import { UilBars, UilAngleDown } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ pageTitle }) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <nav className="w-full bg-[#111315] flex justify-between items-center p-4">
      <NavbarLeft pageTitle={pageTitle} />
      <NavbarRight user={user} isAuthenticated={isAuthenticated} isLoading={isLoading} logout={logout} />
    </nav>
  );
};

const NavbarLeft = ({ pageTitle }) => (
  <ul className="text-white flex list-none flex-row items-center mr-auto">
    <li className="font-bold text-3xl hidden lg:inline-flex">{pageTitle}</li>
    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
      <UilBars />
    </label>
  </ul>
);

const NavbarRight = ({ user, isAuthenticated, isLoading, logout }) => (
  <ul className="text-white flex list-none flex-row items-center ml-auto">
    {!isLoading && isAuthenticated && (
      <li className="mx-4">
        <UserDropdown user={user} logout={logout} />
      </li>
    )}
  </ul>
);

const UserDropdown = ({ user, logout }) => (
  <div className="dropdown">
    <DropdownToggle user={user} />
    <DropdownMenu logout={logout} />
  </div>
);

const DropdownToggle = ({ user }) => (
  <label tabIndex="0" className="flex p-2 btn-ghost rounded-full cursor-pointer">
    <img
      src={user.picture}
      className="rounded-full w-[60px] h-[60px] object-cover"
      alt="Profile"
    />
    <div className="px-3 my-auto">
      <small className="text-xs text-white/70">Hello,</small>
      <h5 className="text-sm font-bold">{user.nickname}</h5>
    </div>
    <span className="my-auto">
      <UilAngleDown />
    </span>
  </label>
);

const DropdownMenu = ({ logout }) => (
  <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#1A1C1E] rounded-lg w-52">
    <li>
      <a className="font-bold mb-2">Profile</a>
    </li>
    <li>
      <Link
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="btn btn-error"
      >
        Logout
      </Link>
    </li>
  </ul>
);

export default Navbar;
