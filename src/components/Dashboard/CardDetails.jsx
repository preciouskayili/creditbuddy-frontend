import { UilMultiply } from "@iconscout/react-unicons";

const CardDetails = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <CloseButton />
          <h3 className="font-bold text-lg">Card details</h3>
          <div className="pt-4">
            <CardHolderAndCVV />
            <CardNumberAndValidity />
          </div>
        </div>
      </div>
    </>
  );
};

const CloseButton = () => (
  <label
    htmlFor="my-modal"
    className="p-3 absolute right-2 top-2 cursor-pointer"
  >
    <UilMultiply />
  </label>
);

const CardHolderAndCVV = () => (
  <div className="flex justify-between pb-7">
    <CardInfoField title="Card Holder" value="Precious Kayili" uppercase />
    <CardInfoField title="CVV" value="911" small />
  </div>
);

const CardNumberAndValidity = () => (
  <div className="flex justify-between pt-10 pb-7">
    <CardInfoField 
      title="Card number" 
      value="5012 2093 5998 3225" 
      small 
      bold 
      uppercase 
      className="tracking-wider"
    />
    <CardInfoField 
      title="VALID THRU" 
      value="08/22" 
      small 
      bold 
      className="text-black/70"
    />
  </div>
);

const CardInfoField = ({ title, value, small, bold, uppercase, className }) => (
  <div>
    <small className={`${small ? 'text-[10px]' : ''} block uppercase`}>{title}</small>
    <p className={`
      ${bold ? 'font-bold' : 'font-medium'} 
      ${uppercase ? 'uppercase' : ''} 
      ${small ? 'text-sm' : ''} 
      ${className || ''}
    `}>
      {value}
    </p>
  </div>
);

export default CardDetails;
