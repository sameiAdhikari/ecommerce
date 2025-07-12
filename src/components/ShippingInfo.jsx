import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByOrderId, insertShippingInfo } from "../lib/dataService";
import {
  setSteps,
  updateShippingInformation,
} from "../reduxSlicers/appSlicers";
const shippingOptions = [
  { label: "Standard (5-7 days)", value: "standard" },
  { label: "Express (2-3 days)", value: "express" },
  { label: "Overnight", value: "overnight" },
];

const ShippingInfo = ({ handleSteps }) => {
  const dispatch = useDispatch();
  const [shippingType, setShippingType] = useState("standard");
  const steps = useSelector((state) => state.app.steps);
  const order_id = useSelector((state) => state.app.order_id);
  const userInformation = useSelector((state) => state.app.userInformation);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getCustomer() {
      window.scrollTo(0, 0);
      const user = await getOrdersByOrderId(order_id);
      const userInformation = user[0].user_info;
      if (userInformation) {
        setValue("firstName", userInformation.firstName || "");
        setValue("middleName", userInformation.middleName || "");
        setValue("lastName", userInformation.lastName || "");
        setValue("emailAddress", userInformation.emailAddress || "");
        setValue("contactNumber", userInformation.contactNumber || "");
        setValue("addressLine1", userInformation.addressLine1 || "");
        setValue("state", userInformation.state || "");
        setValue("city", userInformation.city || "");
        setValue("gender", userInformation.gender || "");
        setValue("country", userInformation.country || "");
        setValue("postalCode", userInformation.postalCode || "");
      }
    }

    getCustomer();
  }, [userInformation, setValue, order_id]);

  const handlePrevious = () => {
    if (steps <= 1) return;
    dispatch(setSteps(steps - 1));
  };
  const submitForm = async (data) => {
    await insertShippingInfo({ order_id, data });
    dispatch(updateShippingInformation(data));
    handleSteps();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className=" md:w-[70%] md:m-auto md:border-t-1  md:border-gray-100 md:shadow-sm shadow-gray-600 md:mt-18 md:mb-8 md:p-4 flex flex-col gap-4"
    >
      <div className="flex justify-between">
        <div className="md:w-[32%]">
          <label className="font-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            // defaultValue={customer?.firstName || ""}
            placeholder="First Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("firstName", {
              required: "first name is required",
              pattern: {
                value: /^[A-Za-z][A-Za-z'-]{1,20}$/,
                message:
                  "First name must contain only letters, hyphens, or apostrophes",
              },
            })}
          />
          <p className="text-red-500 md:mt-1">{errors.firstName?.message}</p>
        </div>
        <div className="md:w-[32%]">
          <label className="font-semibold">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            // defaultValue={customer?.middleName || ""}
            placeholder="Middle Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("middleName", {
              pattern: {
                value: /^[A-Za-z][A-Za-z'-]{1,20}$/,
                message:
                  "Last name must contain only letters, hyphens, or apostrophes",
              },
            })}
          />
          <p className="text-red-500 md:mt-1">{errors.middleName?.message}</p>
        </div>
        <div className="md:w-[32%]">
          <label className="font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            // defaultValue={customer?.lastName || ""}
            placeholder="Last Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("lastName", {
              required: "last name is required",
              pattern: {
                value: /^[A-Za-z][A-Za-z'-]{1,20}$/,
                message:
                  "Last name must contain only letters, hyphens, or apostrophes",
              },
            })}
          />
          <p className="text-red-500 md:mt-1">{errors.lastName?.message}</p>
        </div>
      </div>

      <div className="md:w-[100%]">
        <label className="font-semibold">Email Address</label>
        <input
          type="email"
          name="emailAddress"
          id="emailAddress"
          // defaultValue={customer?.emailAddress || ""}
          placeholder="Email address"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
          {...register("emailAddress", {
            required: "email address is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        <p className="text-red-500 md:mt-1">{errors.emailAddress?.message}</p>
      </div>
      <div className="md:w-[100%]">
        <label className="font-semibold">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          id="contactNumber"
          // defaultValue={customer?.contactNumber || null}
          placeholder="Contact number"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
          {...register("contactNumber", {
            required: "contact number is required",
            pattern: {
              value: /^(\+)?([0-9]{1,3})?[0-9]{10}$/,
              message: "Enter a valid 10-digit phone number",
            },
          })}
        />
        <p className="text-red-500 md:mt-1">{errors.contactNumber?.message}</p>
      </div>
      <div className="md:w-[100%]">
        <label className="font-semibold">Shipping Address</label>
        <input
          type="text"
          name="addressLine1"
          id="addressLine1"
          // defaultValue={customer?.addressLine1 || ""}
          placeholder="Building/House number and street name"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
          {...register("addressLine1", { required: "address is required" })}
        />
        <p className="text-red-500 md:mt-1">{errors.addressLine1?.message}</p>
      </div>

      <div className="flex justify-between">
        <div className="md:w-[48%]">
          <label className="font-semibold">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            // defaultValue={customer?.country || ""}
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("country", { required: "country is required" })}
          />
          <p className="text-red-500 md:mt-1">{errors.country?.message}</p>
        </div>
        <div className="md:w-[48%]">
          <label className="font-semibold">City</label>
          <input
            type="text"
            name="city"
            id="city"
            // defaultValue={customer?.city || ""}
            placeholder="City "
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("city", { required: "city is required" })}
          />
          <p className="text-red-500 md:mt-1">{errors.city?.message}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="md:w-[48%]">
          <label className="font-semibold">State</label>
          <input
            type="text"
            name="state"
            id="state"
            // defaultValue={customer?.state || ""}
            placeholder="State name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("state", { required: "state is required" })}
          />
          <p className="text-red-500 md:mt-1">{errors.state?.message}</p>
        </div>
        <div className="md:w-[48%]">
          <label className="font-semibold">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Last Name"
            // defaultValue={customer?.postalCode || ""}
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1 md:bg-gray-100 w-full border-gray-300 rounded-md shadow-sm md:border-none outline-none"
            {...register("postalCode", { required: "postal code is required" })}
          />
          <p className="text-red-500 md:mt-1">{errors.postalCode?.message}</p>
        </div>
      </div>
      <div className="flex flex-col items-start ">
        <label className="font-semibold">Delivary type</label>
        <div className="md:flex md:gap-5 md:mt-3">
          {shippingOptions.map((option) => (
            <div
              className="flex justify-center items-center gap-1"
              key={option.value}
            >
              <input
                type="radio"
                value={option.value}
                checked={shippingType === option.value}
                // onChange={(e) => setShippingType(e.target.value)}
                className="md:w-[20px] md:h-[20px] cursor-pointer border-none"
                {...register("delivaryType", {
                  onChange: (e) => setShippingType(e.target.value),
                })}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between md:p-5">
        <button
          className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer">
          Next
        </button>
      </div>
    </form>
  );
};

export default ShippingInfo;
