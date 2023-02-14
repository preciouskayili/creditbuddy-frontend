import { UilCardAtm, UilEstate } from "@iconscout/react-unicons";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";
const Sidebar = () => {
  const { isToggled } = useContext(ToggleContext);
  return (
    <div
      className={
        isToggled
          ? "fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto z-50 text-center bg-[#1A1C1E] transition-all left-0"
          : "sm:-left-[100%] -left-[100%] lg:left-0 fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto z-50 text-center bg-[#1A1C1E]"
      }
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <UilCardAtm className="h-6 w-6 text-blue-500" />
          <h1 className="font-bold text-blue-500 text-[15px] ml-3">
            Creditbuddy
          </h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]" />
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <div className="my-auto text-gray-">
          <UilEstate />
        </div>
        <span className="text-[15px] ml-2 text-gray-200 font-bold">Home</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-bookmark-fill" />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Bookmark
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
