import {
  UilWallet,
  UilExchangeAlt,
  UilInvoice,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-white/20 border border-white/20 rounded-lg shadow p-4 col-span-6 flex items-center">
          <UilWallet className="text-green-500 text-3xl rounded-full bg-black/40 p-3 h-12 w-12 mr-2" />
          <div>
            <h3 className="text-lg font-semibold">Airtime</h3>
            <small>Pay bills na</small>
          </div>
        </div>
        <div className="bg-white/20 border border-white/20 rounded-lg shadow p-4 col-span-6 flex items-center">
          <UilWallet className="text-green-500 text-3xl rounded-full bg-black/40 p-3 h-12 w-12 mr-2" />
          <h3 className="text-lg font-semibold">Data</h3>
        </div>
        <div className="bg-white/20 border border-white/20 rounded-lg shadow p-4 col-span-6 flex items-center">
          <UilWallet className="text-green-500 text-3xl rounded-full bg-black/40 p-3 h-12 w-12 mr-2" />
          <h3 className="text-lg font-semibold">Electricity</h3>
        </div>
        <div className="bg-white/20 border border-white/20 rounded-lg shadow p-4 col-span-6 flex items-center">
          <UilWallet className="text-green-500 text-3xl rounded-full bg-black/40 p-3 h-12 w-12 mr-2" />
          <h3 className="text-lg font-semibold">Cable TV</h3>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
