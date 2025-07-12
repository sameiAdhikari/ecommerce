import { useForm } from "react-hook-form";
import SpinnerMini from "./SpinnerMini";
import { useUpdatePassword } from "../services/useProducts";
import { useNavigate } from "react-router";

function UpdatePassword() {
  const navigate = useNavigate();
  const { updateUserPassword } = useUpdatePassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const handleFormSubmit = async (data) => {
    updateUserPassword({
      email: data.emailAddress,
      password: data.newPassword,
    });
    navigate("/account");
  };

  return (
    <div className="h-[100vh] bg-gradient-to-br  from-gray-50 to-blue-100 pt-15">
      <div className="mt-[7rem] w-[40%] m-auto bg-stone-50 border px-5 pt-5 pb-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Update Your Password
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5  ">
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="Your Email Address"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              // value={form.emailAddress}
              // onChange={handleChange}
              {...register("emailAddress", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "valid email is testUser1990@gmail.com",
                },
              })}
            />
            {errors?.emailAddress && (
              <p className="text-red-500 text-[0.85rem] mt-1 mb-[-15px]">
                {errors?.emailAddress.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter your new password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              // value={form.newPassword}
              // onChange={handleChange}
              {...register("newPassword", {
                required: "Email address is required",

                validate: (value) => {
                  if (value.length < 8)
                    return "password length must be more than 8 character";
                  return true;
                },
              })}
            />
            {errors?.newPassword && (
              <p className="text-red-500 text-[0.85rem] mt-1 mb-[-15px]">
                {errors?.newPassword.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              // value={form.confirmPassword}
              // onChange={handleChange}
              {...register("confirmPassword", {
                required: "password must match",
                validate: (value) => {
                  if (value !== watch("newPassword"))
                    return "password doesn't match";
                  return true;
                },
              })}
            />
            {errors?.confirmPassword && (
              <p className="text-red-500 text-[0.85rem] mt-1 mb-[-15px]">
                {errors?.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-xl transition"
            //   disabled={status === "loading"}
          >
            {isSubmitting ? <SpinnerMini /> : "Update Password"}
          </button>
          {/* {status === "mismatch" && (
          <p className="text-red-500 text-sm text-center">
            Passwords do not match.
          </p> */}
          {/* // )} */}
          {/* {status === "success" && ( */}
          {/* <p className="text-green-600 text-sm text-center">
            ✅ Password updated successfully.
          </p> */}
          {/* )} */}
          {/* {status === "error" && ( */}
          {/* <p className="text-red-500 text-sm text-center">
            ❌ Failed to update password.
          </p> */}
          {/* )} */}
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
