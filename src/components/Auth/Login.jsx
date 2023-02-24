import { UilEye } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#111315] min-h-[100vh] grid grid-cols-12">
      <div className="hidden lg:flex lg:col-span-7 bg-primary p-10"></div>
      <div className="col-span-12 lg:col-span-5 p-5 flex w-full items-center">
        <div className="card-body">
          <h3 className="text-white font-bold text-xl mb-2">Sign In</h3>
          <p className="text-gray-50 text-sm mb-5">
            Sign in to access your dashboard
          </p>
          <form className="form-control">
            <label htmlFor="email" className="label-text mb-3 text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input bg-gray-700 w-full"
              placeholder="name@domain.com"
            />

            <label
              htmlFor="password"
              className="label-text mb-3 mt-6 text-white"
            >
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                placeholder="**********"
                className="input bg-gray-700 w-full"
              />
              <button className="btn btn-square border-0 bg-gray-700">
                <UilEye />
              </button>
            </div>
            <span className="text-white mt-4 text-right">
              Forgot your password?{" "}
              <a href="#" className="text-blue-500">
                Reset password
              </a>
            </span>
            <button className="btn btn-primary mt-8 text-white normal-case">
              Sign In
            </button>

            <span className=" mt-4 text-white">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500">
                Create account →
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
