import loginIcon from "../../public/assets/images/film-icon.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
interface emailAndPass {
  email: string;
  password: string;
}
export default function Login() {
  const [correctEmailAndPass, setCorrectEmailAndPass] =
    useState<boolean>(false);
  console.log(correctEmailAndPass);
  const inputStyle = {
    borderBottom: "1px solid #5A698F",
  };
  const [validationObj, setValidationObj] = useState<emailAndPass>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const emailAndPassJSON = localStorage.getItem("Email");
    if (emailAndPassJSON) {
      let emailAndPass: emailAndPass = JSON.parse(emailAndPassJSON);
      setValidationObj(emailAndPass);
    }
  }, []);
  console.log(validationObj);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailAndPass>();
  const onSubmit = (data: emailAndPass) => {
    console.log(data);
    if (
      data.email === validationObj["email"] &&
      data.password === validationObj["password"]
    ) {
      setCorrectEmailAndPass(true);
    } else {
      setCorrectEmailAndPass(false);
    }
  };

  console.log("Error", errors);

  return (
    <div className=" h-lvh bg-bgLogin">
      <div className="flex pt-12 flex-col gap-y-14  items-center">
        <img className="w-8 h-6" src={loginIcon} alt="" />
        <div className="w-cardWidth bg-bgLoginCard rounded-xl md:w-widthTablet">
          <div className="pl-6 pt-6 md:pt-8 md:pl-8">
            <h1 className="text-white size-8 leading-10 font-light md:text-[32px]">
              Login
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-y-6 mt-10 pl-6 pr-6 md:pl-8"
          >
            <div className="flex relative w-full">
              <input
                style={inputStyle}
                className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white w-full"
                placeholder="Email address"
                {...register("email", {
                  required: "can't be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "enter valid email",
                  },
                  validate: (value: string) => {
                    if (value !== validationObj.email) {
                      return "Incorrect email";
                    } else {
                      return true;
                    }
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
                maxLength={16}
                style={inputStyle}
                className="bg-bgLoginCard pl-4 h-inputHeight outline-none text-white w-full"
                placeholder="Password"
                {...register("password", {
                  required: "can't be empty",
                  validate: (value: string) => {
                    if (value !== validationObj.password) {
                      return "Incorrect password";
                    }
                    return true;
                  },
                })}
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
            {correctEmailAndPass ? (
              <Link to={`/home`}>
                <button
                  type="submit"
                  className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-4 text-white dsk:hover:bg-white dsk:hover:text-black"
                >
                  Login to your account
                </button>
              </Link>
            ) : (
              <button
                type="submit"
                className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-4 text-white font-extralight dsk:hover:bg-white dsk:hover:text-black"
              >
                Login to your account
              </button>
            )}
          </form>
          <div className="pt-6 pb-8 flex  justify-center">
            <p className="text-white leading-5 text-[15px] font-extralight">
              Don’t have an account?{" "}
              <Link to={`/register`}>
                <span className="text-rose-400 pl-2">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
