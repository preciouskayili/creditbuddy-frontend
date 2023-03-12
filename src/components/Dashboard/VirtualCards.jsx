import CardChip from "../../assets/icons/CardChip";
import cardMesh from "../../assets/card-mesh.png";
import mc from "../../assets/mastercard.png";
import vc from "../../assets/visa.png";
const VirtualCards = () => {
  return (
    <>
      <div className="card w-auto sm:w-96 mx-auto cursor-pointer bg-card bg-cover bg-center bg-no-repeat rounded-xl text-white shadow-2xl">
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-between pt-5 px-8">
            <div>
              <h3 className="font-black text-xl text-black">Creditpadi</h3>
            </div>
          </div>
          <div className="pt-10 px-8 ">
            <CardChip />
          </div>
          <div className="flex justify-between p-5 rounded-b-xl mt-10 bg-black/70 px-8">
            <div>
              <p className="font-extrabold uppercase text-sm">
                Precious Kayili
              </p>
            </div>
            <img className="h-5" src={vc} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCards;
