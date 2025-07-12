import { useState } from "react";
import { useNavigate } from "react-router";
import { useForgetPassword } from "../services/useProducts";
import SpinnerMini from "./SpinnerMini";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { forgetPassword, isLoading } = useForgetPassword();

  const handleSubmitform = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace this with your actual forgot password logic (e.g., Supabase)
      //   await new Promise((res) => setTimeout(res, 1000));
      // await forgotPassword(email);
      forgetPassword(email);
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Forgot your password?
          </h2>
          <p className="text-sm text-gray-500">Enter your email to reset it</p>
        </div>
        <form onSubmit={handleSubmitform} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address :
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email address..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-xl transition"
            disabled={status === "loading"}
          >
            {isLoading ? <SpinnerMini /> : "Reset Password"}
          </button>

          {/* {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              ✅ Password reset link sent to your email.
            </p>
          )} */}
          {/* {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              ❌ Something went wrong. Try again.
            </p>
          )} */}
        </form>
        <div className="text-center text-sm cursor-pointer text-gray-500">
          Remembered?{" "}
          <button
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go back to login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
