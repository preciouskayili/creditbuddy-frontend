import {
  UilWallet,
  UilArrowFromTop,
  UilInvoice,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  return (
    <div className="grid gap-3 grid-cols-12">
      <button className="col-span-6 bg-yellow-300/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-md">Airtime</h3>
      </button>

      <button className="col-span-6 bg-orange-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-md">Data</h3>
      </button>

      <button className="col-span-6 bg-cyan-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-md">
          Electricity
        </h3>
      </button>

      <button className="col-span-6 bg-teal-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-md">
          Cable TV
        </h3>
      </button>
    </div>
  );
};

export default QuickActions;
