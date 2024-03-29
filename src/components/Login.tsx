import loginIcon from "../assets/images/film-icon.svg";
export default function Login() {
  const inputStyle = {
    borderBottom: "1px solid #5A698F",
  };

  return (
    <div className=" h-lvh bg-bgLogin">
      <div className="flex pt-12 flex-col gap-y-14  items-center">
        <img className="w-8 h-6" src={loginIcon} alt="" />
        <div className="w-cardWidth bg-bgLoginCard rounded-xl">
          <div className="pl-6 pt-6">
            <h1 className="text-white size-8 leading-10 font-light">Login</h1>
          </div>
          <form className=" flex flex-col gap-y-6 mt-10 pl-6 pr-6">
            <input
              style={inputStyle}
              className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white"
              placeholder="Email address"
            />
            <input
              style={inputStyle}
              className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white"
              placeholder="Password"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-10 text-white"
            >
              Login to your account
            </button>
          </form>
          <div className="pt-6 pb-8 flex  justify-center">
            <p className="text-white">
              Don’t have an account?{" "}
              <span className="text-rose-400">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
