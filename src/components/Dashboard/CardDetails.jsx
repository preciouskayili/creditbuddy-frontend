import { UilMultiply } from "@iconscout/react-unicons";

const CardDetails = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="p-3 absolute right-2 top-2 cursor-pointer"
          >
            <UilMultiply />
          </label>

          <h3 className="font-bold text-lg">Card details</h3>
          <div className="pt-4">
            <div className="flex justify-between pb-7">
              <div>
                <h5 className="text-black/70 font-bold text-xs">Card Holder</h5>
                <p className="font-medium uppercase text-sm">Precious Kayili</p>
              </div>

              <div>
                <small className="text-[10px] block uppercase">CVV</small>
                <p className="font-medium uppercase text-sm">911</p>
              </div>
            </div>
            <div className="flex justify-between pt-10 pb-7">
              <div>
                <small className="text-[10px] block uppercase">
                  Card number
                </small>
                <p className="font-bold uppercase text-sm tracking-wider">
                  5012 2093 5998 3225
                </p>
              </div>
              <p>
                <small className="text-[10px] block uppercase">
                  VALID THRU
                </small>
                <span className="text-sm font-bold text-black/70">08/22</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
