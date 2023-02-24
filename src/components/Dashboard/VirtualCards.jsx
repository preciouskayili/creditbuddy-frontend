import CardChip from "../../assets/icons/CardChip";
const VirtualCards = () => {
  return (
    <>
      <div className="card w-auto sm:w-96 sm:h-56 mx-auto cursor-pointer bg-gradient-to-bl from-[#0A82FC] to-[#2d55dc] rounded-xl text-white shadow-2xl">
        <div className="w-full px-8 flex flex-col justify-center">
          <div className="flex justify-between pt-7">
            <div>
            <img
              src="https://uploads-ssl.webflow.com/6194b7fcf08b5fb4a89cf648/6194b7fcf08b5f1ea19cf671_Logo.svg"
              alt="Creditbuddy"
            />
            </div>
          </div>
          <div className="pt-10">
            <CardChip />
          </div>
          <div className="flex justify-between pt-10 pb-5">
            <div>
              <p className="font-medium uppercase text-sm">Precious Kayili</p>
            </div>
            <img
              className="h-4"
              src="https://www.seekpng.com/png/full/212-2128294_visa-png.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCards;
