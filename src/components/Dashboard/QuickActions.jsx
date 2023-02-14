import {
  UilWallet,
  UilExchangeAlt,
  UilInvoice,
} from "@iconscout/react-unicons";

const QuickActions = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-white rounded-lg shadow p-4 col-span-6">
          <UilWallet className="text-green-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Deposit</h3>
          <p className="text-gray-600">
            Quickly deposit funds into your account
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 col-span-6">
          <UilExchangeAlt className="text-blue-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Transfer</h3>
          <p className="text-gray-600">
            Easily transfer money between accounts
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 col-span-6">
          <UilInvoice className="text-purple-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Pay</h3>
          <p className="text-gray-600">Make payments to vendors or billers</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
