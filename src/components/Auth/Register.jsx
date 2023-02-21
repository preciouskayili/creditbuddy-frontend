import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#111315] min-h-[100vh] flex flex-col items-center justify-center">
      <h3 className="text-white font-bold text-xl uppercase mb-6">
        <img
          className="h-8 mb-5"
          src="https://www.seekpng.com/png/full/212-2128294_visa-png.png"
        />
      </h3>
      <div className="bg-white/5 w-96 card rounded-lg">
        <div className="card-body">
          <form className="form-control">
            <label htmlFor="email" className="label-text mb-3 text-white">
              Username
            </label>
            <input
              type="email"
              id="email"
              className="input bg-gray-700 placeholder:text-xs input-bordered w-full"
              placeholder="name@domain.com"
            />

            <label htmlFor="email" className="label-text mb-3 mt-6 text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input bg-gray-700 placeholder:text-xs input-bordered w-full"
              placeholder="name@domain.com"
            />

            <label
              htmlFor="password"
              className="label-text mb-3 mt-6 text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input bg-gray-700 placeholder:text-xs input-bordered w-full"
            />
            <small className="text-gray-200 text-right mt-4">
              <a href="#">Forgot password?</a>
            </small>
            <button className="btn btn-primary mt-3">Get Started</button>

            <span className="text-sm text-center mt-4 text-white">
              Already a member?{" "}
              <Link
                to="/auth/login"
                className="text-primary underline underline-offset-2"
              >
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
