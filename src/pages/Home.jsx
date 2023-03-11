import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-lg rounded-none btn-square"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default Home;
