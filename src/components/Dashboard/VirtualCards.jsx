import CardChip from "../../assets/icons/CardChip";
import logo from "../../assets/og-logo.png";
import vc from "../../assets/visa.png";

const VirtualCards = () => {
  return (
    <Card>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </Card>
  );
};

const Card = ({ children }) => (
  <div className="card w-auto sm:w-96 mx-auto cursor-pointer bg-card bg-cover bg-center bg-no-repeat rounded-xl text-white shadow-2xl">
    <div className="w-full flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const CardHeader = () => (
  <div className="flex justify-between pt-5 px-8">
    <div>
      <img src={logo} className="w-32" alt="Creditbuddy" />
    </div>
  </div>
);

const CardBody = () => (
  <div className="pt-10 px-8 ">
    <CardChip />
  </div>
);

const CardFooter = () => (
  <div className="flex justify-between p-5 rounded-b-xl mt-10 bg-black/70 px-8">
    <div>
      <p className="font-extrabold uppercase text-sm">
        Precious Kayili
      </p>
    </div>
    <img className="h-5" src={vc} alt="Visa" />
  </div>
);

export default VirtualCards;