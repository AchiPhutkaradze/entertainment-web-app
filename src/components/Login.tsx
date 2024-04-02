import loginIcon from "../assets/images/film-icon.svg";
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
    let emailAndPass: emailAndPass | any = JSON.parse(
      localStorage.getItem("Email") || ""
    );
    setValidationObj(emailAndPass);
  }, []);

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
        <div className="w-cardWidth bg-bgLoginCard rounded-xl">
          <div className="pl-6 pt-6">
            <h1 className="text-white size-8 leading-10 font-light">Login</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
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
            {correctEmailAndPass ? (
              <Link to={`/home`}>
                <button
                  type="submit"
                  className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-10 text-white"
                >
                  Login to your account
                </button>
              </Link>
            ) : (
              <button
                type="submit"
                className=" bg-bgLoginBtn  w-full text-center pt-4 pb-4 rounded-md mt-10 text-white"
              >
                Login to your account
              </button>
            )}
          </form>
          <div className="pt-6 pb-8 flex  justify-center">
            <p className="text-white">
              Don’t have an account?{" "}
              <Link to={`/register`}>
                <span className="text-rose-400">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
