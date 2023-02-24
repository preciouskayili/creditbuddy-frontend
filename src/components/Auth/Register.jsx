import { UilEye } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#111315] min-h-[100vh] grid grid-cols-12">
      <div className="hidden lg:flex lg:col-span-6 bg-primary p-10">
        <img
          className="h-6"
          src="https://www.seekpng.com/png/full/212-2128294_visa-png.png"
        />
      </div>
      <div className="col-span-12 lg:col-span-6 p-5 flex items-center">
        <div className="card-body">
          <h3 className="text-white font-bold text-xl mb-3">Create Account</h3>
          <p className="text-gray-50 font-light text-sm mb-5">
            To get started, setup your account below.
          </p>
          <div className="gap-x-5 gap-y-9 grid grid-cols-2">
            <div className="w-full space-y-2 col-span-2">
              <label htmlFor="email" className="text-white">
                Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Doe"
                className="w-full input bg-gray-700"
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="email" className="text-white">
                First Name
              </label>
              <input
                type="text"
                id="email"
                placeholder="John"
                className="w-full input bg-gray-700"
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="email" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                id="email"
                placeholder="Doe"
                className="w-full input bg-gray-700"
              />
            </div>

            <div className="w-full space-y-2 col-span-2">
              <label htmlFor="email" className="text-white">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Doe"
                className="w-full input bg-gray-700"
              />
            </div>

            <div className="w-full space-y-2 col-span-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <div className="input-group">
                <input
                  type="text"
                  id="password"
                  placeholder="**********"
                  className="w-full input bg-gray-700"
                />

                <button className="btn btn-square bg-gray-700 border-0">
                  <UilEye />
                </button>
              </div>
            </div>

            <button className="btn btn-primary col-span-2 normal-case">Get Started</button>

            <span className="mt-1 text-white col-span-2">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500">
                Login →
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
