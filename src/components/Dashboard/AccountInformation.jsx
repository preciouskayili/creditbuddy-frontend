import VirtualCards from "./VirtualCards";
import WalletDetails from "./WalletDetails";
export const AccountInformation = () => {
  return (
    <div className="grid grid-cols-12 bg-white/5 rounded-lg">
      <div className="lg:col-span-6 col-span-12 p-5">
        <h4 className="mr-auto text-white font-bold text-md">Information</h4>
        <WalletDetails />
      </div>

      <div className="lg:col-span-6 col-span-12 lg:border-l-[1px] xl:border-t-[1px] border-white/10">
        <div className="p-5">
          <div className="ml-auto">
            <h4 className="mr-auto text-white font-bold text-md">
              Virtual Cards
            </h4>
            <div className="flex justify-center items-center">
              <div className="mt-5 ml-3 lg:w-96 lg:h-56 w-80">
                <VirtualCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
