import { useForm } from "react-hook-form";
import { insertCustomerInfo } from "../lib/dataService";
import { useDispatch } from "react-redux";
import { updateCustomerId } from "../reduxSlicers/appSlicers";

const CustomerInfo = ({ handleSteps }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitForm = async (data) => {
    const customer = await insertCustomerInfo(data);
    dispatch(updateCustomerId(customer[0].id));
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
            placeholder="First Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
            placeholder="Middle Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
            placeholder="Last Name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
          placeholder="Email address"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
          placeholder="Contact number"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
        <label className="font-semibold">Address Line-1</label>
        <input
          type="text"
          name="addressLine1"
          id="addressLine1"
          placeholder="Building/House number and street name"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
          {...register("addressLine1", { required: "address is required" })}
        />
        <p className="text-red-500 md:mt-1">{errors.addressLine1?.message}</p>
      </div>
      <div className="md:w-[100%]">
        <label className="font-semibold">Address Line-2</label>
        <input
          type="text"
          name="addressLine2"
          id="addressLine2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
          {...register("addressLine2")}
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Gender</label>
        <select
          name="gender"
          className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
          {...register("gender", { required: "select a gender" })}
        >
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
        <p className="text-red-500 md:mt-1">{errors.gender?.message}</p>
      </div>
      <div className="flex justify-between">
        <div className="md:w-[48%]">
          <label className="font-semibold">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
            placeholder="City "
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
            placeholder="State name"
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
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
            className="md:text-[1.3rem] md:py-2 md:px-4 mt-1  md:bg-gray-200 w-full rounded-md shadow-sm  outline-none"
            {...register("postalCode", { required: "postal code is required" })}
          />
          <p className="text-red-500 md:mt-1">{errors.postalCode?.message}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer">
          Next
        </button>
      </div>
    </form>
  );
};
export default CustomerInfo;
