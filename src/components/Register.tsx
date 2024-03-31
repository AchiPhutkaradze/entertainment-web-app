import loginIcon from "../assets/images/film-icon.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
type inputsType = {
  email: string;
  password: string;
  repeatPass: string;
};
export default function Register() {
  const { register, handleSubmit } = useForm<inputsType>();
  const inputStyle = {
    borderBottom: "1px solid #5A698F",
  };

  const onsubmit = (data: inputsType) => {
    console.log(data);
    let InputValue = () => {
      return {
        email: data.email,
        password: data.password,
      };
    };
    localStorage.setItem("Email", JSON.stringify(InputValue()));
    console.log(InputValue());
  };

  return (
    <div className=" h-lvh bg-bgLogin">
      <div className="flex pt-12 flex-col gap-y-14  items-center">
        <img className="w-8 h-6" src={loginIcon} alt="" />
        <div className="w-cardWidth bg-bgLoginCard rounded-xl">
          <div className="pl-6 pt-6">
            <h1 className="text-white  leading-10 font-light">Sign Up</h1>
          </div>
          <form
            onSubmit={handleSubmit(onsubmit)}
            className=" flex flex-col gap-y-6 mt-10 pl-6 pr-6"
          >
            <input
              style={inputStyle}
              className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white"
              placeholder="Email address"
              {...register("email")}
            />
            <input
              style={inputStyle}
              className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white"
              placeholder="Password"
              {...register("password")}
            />
            <input
              style={inputStyle}
              className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white"
              placeholder="Repeat Password"
              {...register("repeatPass")}
            />
            <button
              type="submit"
              className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-10 text-white"
            >
              Create an account
            </button>
          </form>
          <div className="pt-6 pb-8 flex  justify-center">
            <p className="text-white">
              Alread have an account?{" "}
              <Link to={`/`}>
                {" "}
                <span className="text-rose-400">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
