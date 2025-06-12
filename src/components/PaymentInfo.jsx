// import { useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { insertCardInfo } from "../lib/dataService";
import { useDispatch, useSelector } from "react-redux";
import { setSteps } from "../reduxSlicers/appSlicers";
const years = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() + i
);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function PaymentInfo({ handleSteps }) {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.app.steps);
  const [isSave, setIsSave] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    if (data.saveCardInfo) {
      localStorage.setItem("cardInformation", JSON.stringify(data));
    }
    await insertCardInfo(data);
    handleSteps();
    toast.success("congratulations");
  };
  const handlePrevious = () => {
    if (steps <= 1) return;
    dispatch(setSteps(steps - 1));
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className=" md:w-[70%] md:m-auto md:border-t-1  md:border-gray-100 md:shadow-sm shadow-gray-600 md:mt-18 md:mb-8 md:p-4 flex flex-col gap-4"
    >
      <div className="md:w-[100%]">
        <label className="font-semibold">Name on card</label>
        <input
          type="text"
          name="cardHolder"
          id="cardHolder"
          placeholder="name on card"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
          {...register("cardHolder", {
            required: "cardHolder name is required",
            pattern: {
              value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
              message:
                "name must contain only letters, hyphens, or apostrophes",
            },
          })}
        />
        <p className="text-red-500 md:mt-1">{errors.cardHolder?.message}</p>
      </div>
      <div className="md:w-[100%]">
        <label className="font-semibold">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          value={watch("cardNumber") || ""}
          placeholder="Card number"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
          {...register("cardNumber", {
            required: "Card number is required",
            onChange: (e) => {
              const clean = e.target.value.replace(/\D/g, "");
              const limit = clean.slice(0, 16);
              const formate = limit.replace(/(.{4})/g, "$1 ").trim();
              setValue("cardNumber", formate);
            },
          })}
        />
        <p className="text-red-500 md:mt-1">{errors.cardNumber?.message}</p>
      </div>
      <div>
        <div className="flex justify-between">
          <label className="font-semibold">Expiration of card</label>
          <label className="md:mr-[18.5rem] font-semibold">CVC</label>
        </div>
        <div className="flex justify-between md:w-full">
          <div className="md:w-[32%]">
            <select
              value={watch("expiryMonth") || "January"}
              className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
              {...register("expiryMonth", {
                onChange: (e) => setValue(e.target.value),
              })}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <p className="text-red-500 md:mt-1">
              {errors.expiryMonth?.message}
            </p>
          </div>
          <div className="md:w-[32%]">
            <select
              value={watch("expiryYear") || new Date().getFullYear()}
              className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
              {...register("expiryYear", {
                onChange: (e) => setValue(e.target.value),
              })}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <p className="text-red-500 md:mt-1">{errors.expiryYear?.message}</p>
          </div>
          <div className="md:w-[32%]">
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="CVC"
              value={watch("cvc") || ""}
              className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
              {...register("cvc", {
                required: "Card expiry month is required",
                onChange: (e) => {
                  const clean = e.target.value.replace(/\D/g, "").trim();
                  const limit = clean.slice(0, 3);
                  setValue("cvc", limit);
                },
              })}
            />
            <p className="text-red-500 md:mt-1">{errors.cvc?.message}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <input
          type="checkbox"
          checked={isSave}
          className="md:w-5 md:h-5 cursor-pointer "
          {...register("saveCardInfo", {
            onChange: () => setIsSave(!isSave),
          })}
        />
        <p className="text-[1.15rem]">save my card information for next time</p>
      </div>
      <div className="flex justify-between md:p-5">
        <button
          className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer"
          onClick={handlePrevious}
          type="button"
        >
          Previous
        </button>
        <button className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer">
          {steps === 3 ? "Finish" : "Next"}
          {/* Next */}
        </button>
      </div>
    </form>
  );
}

export default PaymentInfo;
