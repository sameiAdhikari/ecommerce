import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function LoginForm() {
  const [remember, setRemember] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Function to handle form submission
  // need to implement actual login/register logic
  function submitForm(data) {
    if (remember === true) {
      const credential = { email: data.email, password: data.password };
      localStorage.setItem("loginCredentials", JSON.stringify(credential));
    } else {
      localStorage.removeItem("loginCredentials");
    }
    reset();
  }
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-2 mt-5 md:min-w-[45%] md:max-w-[45%]"
    >
      <div className="flex flex-col md:mb-[-20px] md:h-[6.7rem]">
        <label htmlFor="email" className=" font-semibold text-lg">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="border border-gray-300 md:px-3 md:py-2 rounded-md bg-black/30  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          {...register("email", {
            required: "Email is required",
            validate: (value) =>
              value === "example1@gmail.com" || "email does't match",
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
      <div className="flex flex-col md:h-[6rem]">
        <label htmlFor="password" className=" font-semibold text-lg">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="border border-gray-300 md:px-3 md:py-2 rounded-md bg-black/30  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          {...register("password", {
            required: "Password is required",
            validate: (value) =>
              value === "password" || "password doesn't match",
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
          to="*"
          className="md:hover:text-indigo-100 md:text-md md:text-[17px] underline float-right"
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
      <div className="md:w-full flex justify-center items-center md:bg-stone-100 hover:md:bg-stone-400 text-stone-900 text-xl md:p-1.5 md:rounded-[20px] md:mt-10 cursor-pointer transition-colors duration-200">
        <img
          width="22"
          height="22"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
        <Link className="md:ml-3">Log in with gmail</Link>
      </div>
    </form>
  );
}

export default LoginForm;
