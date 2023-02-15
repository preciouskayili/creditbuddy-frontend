import {
  UilWallet,
  UilArrowFromTop,
  UilInvoice,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  return (
    <div className="grid gap-3 grid-cols-12">
      <button className="col-span-6 bg-blue-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-sm tracking-wide">Airtime</h3>
      </button>

      <button className="col-span-6 bg-blue-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-sm tracking-wide">Data</h3>
      </button>

      <button className="col-span-6 bg-blue-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-sm tracking-wide">
          Electricity
        </h3>
      </button>

      <button className="col-span-6 bg-blue-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
        <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white mt-3 text-left text-sm tracking-wide">
          Cable TV
        </h3>
      </button>
    </div>
  );
};

export default QuickActions;
