// import { useState } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { insertCardInfo } from "../lib/dataService";
import { resetOrderList, setSteps } from "../reduxSlicers/appSlicers";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const steps = useSelector((state) => state.app.steps);
  const order_id = useSelector((state) => state.app.order_id);
  const coupon_code = useSelector((state) => state.app.promoCode);
  const finalOrders = useSelector((state) => state.app.finalOrders);
  const totalAmountAfterDiscountAndTax = useSelector(
    (state) => state.app.totalAmountAfterDiscountAndTax
  );
  const cardInfo = JSON.parse(localStorage.getItem("cardInformation"));
  const [isSave, setIsSave] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const totalDiscount = finalOrders.reduce(
    (acc, el) => acc + el.discount * el.quantity,
    0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitForm = async (data) => {
    // make a api call to complete a payment make sure it's asynchronus function so that it wait to proceed;

    const PaymentVarification = true;
    const newData = {
      order_id,
      coupon_code,
      totalAmountAfterDiscountAndTax,
      finalOrders,
      totalDiscount,
      data,
      order_status: "confirmed",
      payment_status: PaymentVarification ? "confirmed" : "pending",
    };
    await insertCardInfo(newData);
    dispatch(resetOrderList());
    localStorage.setItem("orderList", JSON.stringify([]));
    dispatch(setSteps(1));
    handleSteps();
    if (data.saveCardInfo) {
      localStorage.setItem("cardInformation", JSON.stringify(data));
    }
    navigate("/cart");
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
          defaultValue={cardInfo?.cardHolder}
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
        <p className="text-red-500 md:mt-1">{errors?.cardHolder?.message}</p>
      </div>
      <div className="md:w-[100%]">
        <label className="font-semibold">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          defaultValue={
            cardInfo ? cardInfo.cardNumber : watch("cardNumber") || ""
          }
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
              defaultValue={
                cardInfo
                  ? cardInfo?.expiryMonth
                  : watch("expiryMonth") || "January"
              }
              className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm border-none outline-none"
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
              defaultValue={
                cardInfo
                  ? cardInfo.expiryYear
                  : watch("expiryYear") || new Date().getFullYear()
              }
              className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm border-none outline-none"
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
                required: "Please provide a CVC number",
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
        <div>
          <button className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer">
            {steps === 3 ? "Finish" : "Next"}
            {/* Next */}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PaymentInfo;
