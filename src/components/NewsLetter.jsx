import { useForm } from "react-hook-form";
import { insertNewsletter } from "../lib/dataService";
import { RiSpam2Fill } from "react-icons/ri";
import { useRef } from "react";
import { toast } from "react-toastify";

function NewsLetter() {
  const emailRef = useRef();
  const { register, handleSubmit, setValue } = useForm();
  const submitForm = async (data) => {
    console.log(data.email);
    if (!data?.email.trim()) {
      emailRef.current?.focus();
    }
    await insertNewsletter(data);
    setValue("email", "");
    toast.success("successsfully subscribe");
  };
  return (
    <section className="bg-gray-400">
      <div className="bg-stone-100 w-[94.5%] mx-auto flex flex-col justify-center items-center py-8 px-10 ">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-stone-800 mb-6 w-[70%]">
          Stay updated with our latest collections and exclusive offers.Be the
          first to discover new arrivals across all categories — from fashion to
          tech. Get insider access to limited-time deals, seasonal trends, and
          handpicked recommendations. Join our community and shop smarter,
          fresher, and faster — every time.
        </p>
        <form
          className="flex justify-between  w-[60%]"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border w-[80%] border-gray-300 bg-stone-50 rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            ref={(e) => {
              register("email").ref(e);
              emailRef.current = e;
            }}
            // ref={emailRef}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[17px] text-stone-800 md:mt-6 w-[100%] flex justify-center items-center">
          Your email is safe with us, we don't{" "}
          <span className="ml-2">
            <RiSpam2Fill />
          </span>{" "}
          spam
        </p>
      </div>
    </section>
  );
}

export default NewsLetter;
