const VirtualCards = () => {
  return (
    <>
      <div className="card w-auto sm:w-96 sm:h-56 mx-auto cursor-pointer bg-gradient-to-bl from-[#0A82FC] to-[#2d55dc] rounded-xl text-white shadow-2xl">
        <div className="w-full px-8 flex flex-col justify-center">
          <div className="flex justify-between pt-8">
            <div>
              <h5 className="text-white/70 font-bold text-xs">Card Holder</h5>
              <p className="font-medium uppercase text-sm">Precious Kayili</p>
            </div>
            <img
              className="h-4"
              src="https://www.seekpng.com/png/full/212-2128294_visa-png.png"
            />
          </div>
          <div className="flex justify-between pt-20 pb-7">
            <div>
              <p className="text-white/70 font-bold text-xs">Card number</p>
              <p className="font-bold uppercase text-sm tracking-wider">
                **** **** **** 3225
              </p>
            </div>
            <p>
              <small className="text-[10px] block">VALID THRU</small>
              <span className="text-sm font-bold text-white/70">08/22</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCards;
