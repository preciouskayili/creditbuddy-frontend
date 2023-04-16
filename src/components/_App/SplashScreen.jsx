import logo from "../../assets/logo.png";

const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-500/[0.05] rounded-full w-20 h-20 flex justify-center items-center">
        <img src={logo} className="w-14" alt="Creditbuddy" />
      </div>
    </div>
  );
};

export default SplashScreen;
