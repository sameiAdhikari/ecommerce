import { useForm } from "react-hook-form";
import { Link } from "react-router";
const fullNamePattern = /^[A-Za-z\s'_]+$/;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }
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
          className="border border-gray-300 md:px-3 md:py-2 rounded-md bg-black/30  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          {...register("fullName", {
            required: "fullName is required",
            validate: (value) =>
              fullNamePattern.test(value) ||
              "Full name can only contain letters and hyphens",
            // pattern: {
            //   value: /^[A-Za-z\s'_]+$/,
            //   message: "fullname contains only letters",
            // },
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
          className="border border-gray-300 md:px-3 md:py-2 rounded-md bg-black/30  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
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
          className="border border-gray-300 md:px-3 md:py-2 rounded-md bg-black/30  text-stone-100 focus:outline-none focus:border-blue-500 transition-colors duration-200"
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      <div className="md:w-full flex justify-center items-center md:bg-stone-100 hover:md:bg-stone-400 text-stone-900 text-xl md:p-1.5 md:rounded-[20px] md:mt-7 cursor-pointer transition-colors duration-200">
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
