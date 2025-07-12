import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import SpinnerMini from "../components/SpinnerMini";
import { updateLogin } from "../reduxSlicers/appSlicers";
import { useSignInWith } from "../services/useProducts";
import { signIn } from "../lib/dataService";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleLogIn, isLoading } = useSignInWith();
  const [remember, setRemember] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function submitForm(data) {
    try {
      const token = await signIn(data);
      if (remember === true) {
        const credential = { email: data.email, password: data.password };
        localStorage.setItem("loginCredentials", JSON.stringify(credential));
      } else {
        localStorage.removeItem("loginCredentials");
      }
      if (token.session.access_token) {
        localStorage.setItem(
          "authToken",
          JSON.stringify(token.session.access_token)
        );
      }
      if (!token) return;
      reset();
      navigate("/products");
      toast.success("welcome to your online shopping store");
      dispatch(updateLogin(true));
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handelSignIn = () => {
    handleLogIn();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className=" flex flex-col gap-2 mt-5 md:min-w-[45%] md:max-w-[45%] "
    >
      <div className="flex flex-col md:mb-[-20px] md:h-[6.2rem]">
        <label htmlFor="email" className=" font-semibold text-lg">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className=" md:px-3 md:py-2 rounded-md bg-stone-100  text-stone-900 focus:outline-none focus:border focus:border-stone--900 transition-colors duration-200"
          {...register("email", {
            required: "Email is required",
            pattern: {
              message: "enter valid email please",
            },
          })}
        />
        <div className="text-end">
          {errors.email && (
            <p className="text-red-500 text-[15px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:h-[6.2rem]">
        <label htmlFor="password" className=" font-semibold text-lg">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className=" md:px-3 md:py-2 rounded-md bg-stone-100  text-stone-900 focus:outline-none focus:border focus:border-stone--900 transition-colors duration-200"
          // className="border-2 border-stone-900 md:px-3 md:py-2 rounded-md bg-black/50  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          {...register("password", {
            required: "Password is required",
            pattern: {
              message: "valid pattern is A-Za-z0-9@$!%*?&",
            },
          })}
        />
        <div className="text-end">
          {errors.password && (
            <p className="text-red-500 text-[15px]">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center  gap-2">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={remember}
          onChange={() => setRemember(!remember)}
          className="mt-3 mr-3 cursor-pointer md:w-5 md:h-5 rounded-md focus:outline-none  focus:ring-blue-500 transition-colors duration-200"
        />
        <p className=" md:text-[1.3rem] md:mt-2">remember me</p>
      </div>
      <div className="Md:w-full flex items-end justify-between md:mt-[5px]">
        <Link
          to="/forgotPassword"
          className="md:hover:text-indigo-100 md:text-md md:text-[17px] underline float-right cursor-pointer"
        >
          forgot your password?
        </Link>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white float-end font-semibold py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer md:w-[8rem] md:text-xl"
        >
          {isSubmitting ? "Logging..." : "Login"}
        </button>
      </div>
      <div className="md:w-full flex justify-center items-center border md:bg-stone-100 hover:bg-stone-300 text-stone-900 text-xl md:p-1.5 md:rounded-[20px] md:mt-5 cursor-pointer transition-colors duration-200">
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <>
            <img
              width="22"
              height="22"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <Link onClick={handelSignIn} className="md:ml-3">
              Log in with gmail
            </Link>
          </>
        )}
      </div>
    </form>
  );
}

export default LoginForm;
