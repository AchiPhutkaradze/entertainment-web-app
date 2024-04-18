import loginIcon from "../../public/assets/images/film-icon.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
type inputsType = {
  email: string;
  password: string;
  repeatPass: string;
};
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<inputsType>();
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
  console.log("Error", errors);
  return (
    <div className=" h-lvh bg-bgLogin">
      <div className="flex pt-12 flex-col gap-y-14  items-center">
        <img className="w-8 h-6" src={loginIcon} alt="" />
        <div className="w-cardWidth bg-bgLoginCard rounded-xl md:w-widthTablet">
          <div className="pl-6 pt-6 md:pt-8 md:pl-8">
            <h1 className="text-white  leading-10 font-light md: text-[32px]">
              Sign Up
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onsubmit)}
            className=" flex flex-col gap-y-6 mt-10 pl-6 pr-6 md:pl-8 "
          >
            <div className="flex relative w-full">
              <input
                style={inputStyle}
                className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white w-full "
                placeholder="Email address"
                {...register("email", {
                  required: "can't be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "enter valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="absolute  whitespace-pre  right-0 ">
                  <span
                    style={{ fontSize: "13px" }}
                    className="leading-4  text-red-500 font-normal"
                  >
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div className="flex relative w-full">
              <input
                style={inputStyle}
                className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white w-full"
                placeholder="Password"
                {...register("password", { required: "can't be empty" })}
              />
              {errors.password && (
                <div className="absolute  whitespace-pre  right-0 ">
                  <span
                    style={{ fontSize: "13px" }}
                    className="leading-4  text-red-500 font-normal"
                  >
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>
            <div className="flex relative w-full">
              <input
                style={inputStyle}
                className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white w-full"
                placeholder="Repeat Password"
                {...register("repeatPass", {
                  required: true,
                  pattern: {
                    value: new RegExp(`^${watch("password")}$`),
                    message: "Passwords do not match",
                  },
                })}
              />
              {errors.repeatPass && (
                <div className="absolute  whitespace-pre  right-0 ">
                  <span
                    style={{ fontSize: "11px" }}
                    className="leading-4  text-red-500 font-normal"
                  >
                    {errors.repeatPass.message}
                  </span>
                </div>
              )}
            </div>
            <button
              type="submit"
              className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-10 text-white md:mt-0 font-extralight"
            >
              Create an account
            </button>
          </form>
          <div className="pt-6 pb-8 flex  justify-center">
            <p className="text-white leading-5 text-[15px] font-extralight">
              Alread have an account?{" "}
              <Link to={`/`}>
                {" "}
                <span className="text-rose-400 pl-2 ">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
