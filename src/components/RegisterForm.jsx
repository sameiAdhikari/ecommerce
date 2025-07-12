import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useSignIn, useSignInWith } from "../services/useProducts";
import SpinnerMini from "./SpinnerMini";

function RegisterForm() {
  const { signInUser, isLoading } = useSignIn();
  const { handleLogIn } = useSignInWith();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitForm(data) {
    signInUser(data);
    reset();
  }

  const handelSignIn = () => {
    handleLogIn();
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-2 mt-5 md:min-w-[45%] md:max-w-[45%]"
    >
      <div className="flex flex-col  md:h-[5rem]">
        <label htmlFor="email" className=" font-semibold text-lg">
          Full Name
        </label>
        <input
          type="text"
          placeholder="your name"
          id="fullName"
          name="fullName"
          className=" md:px-3 md:py-2 rounded-md bg-stone-100  text-stone-900 focus:outline-none focus:border focus:border-stone--900 transition-colors duration-200"
          // className="border-2 border-stone-900 md:px-3 md:py-2 rounded-md bg-black/50  text-stone-100 focus:outline-none capitalize focus:border-blue-500 transition-colors duration-200"
          {...register("fullName", {
            required: "fullName is required",
            pattern: {
              value: /^[A-Za-z\s'_]+$/,
              message: "full name should contain only letters and hyphens",
            },
          })}
        />
        <div className=" text-end">
          {errors.fullName && (
            <p className="text-red-500 text-[15px] mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:h-[5rem]">
        <label htmlFor="email" className="font-semibold text-lg">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email address"
          className=" md:px-3 md:py-2 rounded-md bg-stone-100  text-stone-900 focus:outline-none focus:border focus:border-stone--900 transition-colors duration-200"
          // className="border-2 border-stone-900 md:px-3 md:py-2 rounded-md bg-black/50  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          {...register("email", {
            required: "email address required",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/,

              message: "email formate isn't match",
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
      <div className="flex flex-col md:h-[5rem]">
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

      <div className="md:w-[100%] flex items-center justify-center ">
        <button
          type="submit"
          className="md:w-[100%] bg-blue-600 hover:bg-blue-500 text-white float-end font-semibold py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer  md:text-xl"
        >
          {isLoading ? <SpinnerMini /> : "Submit"}
        </button>
      </div>

      <div
        className="md:w-full flex justify-center items-center border md:bg-stone-100 hover:md:bg-stone-300 text-stone-900 text-xl md:p-1.5 md:rounded-[20px] md:mt-2 cursor-pointer transition-colors duration-200"
        onClick={handelSignIn}
      >
        <img
          width="22"
          height="22"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
        <Link className="md:ml-3">Register with gmail</Link>
      </div>
    </form>
  );
}

export default RegisterForm;
