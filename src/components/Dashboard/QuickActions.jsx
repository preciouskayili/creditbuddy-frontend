import {
  UilWallet,
  UilArrowFromTop,
  UilInvoice,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-3">
      <button className="bg-[#0A82FC]/40 hover:bg-[#0A82FC]/90 focus:ring-4 ring-[hover:bg-[#0A82FC]/90 transition-all rounded-lg px-4 py-3 col-span-6 text-xs text-white/80 text-center flex items-center">
        <div className="text-sm h-[40px] w-[40px] p-3 flex items-center justify-center bg-black/50 rounded-full mr-2">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white">Airtime</h3>
      </button>

      <button className="bg-[#0A82FC]/40 hover:bg-[#0A82FC]/90 focus:ring-4 ring-[hover:bg-[#0A82FC]/90 transition-all rounded-lg px-4 py-3 col-span-6 text-xs text-white/80 text-center flex items-center">
        <div className="text-sm h-[40px] w-[40px] p-3 flex items-center justify-center bg-black/50 rounded-full mr-2">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white">Data</h3>
      </button>

      <button className="bg-[#0A82FC]/40 hover:bg-[#0A82FC]/90 focus:ring-4 ring-[hover:bg-[#0A82FC]/90 transition-all rounded-lg px-4 py-3 col-span-6 text-xs text-white/80 text-center flex items-center">
        <div className="text-sm h-[40px] w-[40px] p-3 flex items-center justify-center bg-black/50 rounded-full mr-2">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white">Electricity</h3>
      </button>

      <button className="bg-[#0A82FC]/40 hover:bg-[#0A82FC]/90 focus:ring-4 ring-[hover:bg-[#0A82FC]/90 transition-all rounded-lg px-4 py-3 col-span-6 text-xs text-white/80 text-center flex items-center">
        <div className="text-sm h-[40px] w-[40px] p-3 flex items-center justify-center bg-black/50 rounded-full mr-2">
          <UilArrowFromTop />
        </div>
        <h3 className="font-bold text-white">Cable TV</h3>
      </button>
    </div>
  );
};

export default QuickActions;
