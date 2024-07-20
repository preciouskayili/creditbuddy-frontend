import {
  UilSignal,
  UilLightbulbAlt,
  UilPhoneVolume,
  UilTvRetro,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  const actions = [
    { icon: UilPhoneVolume, label: "Airtime" },
    { icon: UilSignal, label: "Data" },
    { icon: UilLightbulbAlt, label: "Electricity" },
    { icon: UilTvRetro, label: "Cable TV" },
  ];

  return (
    <div className="grid gap-3 grid-cols-12">
      {actions.map((action, index) => (
        <ActionButton key={index} icon={action.icon} label={action.label} />
      ))}
    </div>
  );
};

const ActionButton = ({ icon: Icon, label }) => (
  <button className="col-span-6 bg-blue-500/10 transition-all rounded-xl px-4 py-3 text-xs text-white/80">
    <div className="text-sm h-12 w-12 p-3 flex items-center justify-center bg-black/50 rounded-full">
      <Icon />
    </div>
    <h3 className="font-bold text-white mt-3 text-left text-sm tracking-wide">
      {label}
    </h3>
  </button>
);

export default QuickActions;