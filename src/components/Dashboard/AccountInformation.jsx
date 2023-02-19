import VirtualCards from "./VirtualCards";
import WalletDetails from "./WalletDetails";
import { UilPlus, UilEye } from "@iconscout/react-unicons";
export const AccountInformation = () => {
  return (
    <div className="grid grid-cols-12 bg-white/5 rounded-lg">
      <div className="lg:col-span-6 col-span-12 p-5">
        <h4 className="mr-auto text-white font-bold text-md">Information</h4>
        <WalletDetails />
      </div>

      <div className="lg:col-span-6 col-span-12 lg:border-l-[1px] border-t-[1px] xl:border-t-[0px] border-white/10">
        <div className="p-5">
          <div className="flex">
            <h4 className="mr-auto text-white font-bold text-md">
              Virtual Cards
            </h4>
            <div className="ml-auto text-white/80 flex">
              <button className="bg-white/20 rounded-[0.25rem] p-1 mr-2">
                <UilEye />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-5 ml-3 w-[100%]">
              <VirtualCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
