import { useForm } from "react-hook-form";
import Input from "./Input";

function ContactForm() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  // This function can be modified to send the form data to a server or API
  function submitForm(data) {
    // console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="flex flex-col items-center relative md:w-full md:h-auto md:py-[3rem]">
        <img
          src="/contact-page/contactform-bg.webp"
          alt="beautiful background for contact page"
          className="absolute top-0 left-0 md:w-full md:h-full object-cover opacity-90 z-[-1]"
        />
        <h1 className="capitalize text-4xl font-semibold md:mb-[2rem] text-stone-100">
          feel free to reach out !
        </h1>
        <div className="flex items-center justify-between md:w-[80%] md:h-auto md:rounded-lg md:shadow-lg md:pt-10 md:px-10 md:pb-30 bg-black/80 text-stone-100">
          <div className="md:w-[50%] flex flex-col gap-4 ">
            <div className="md:h-[6rem]">
              <Input
                label="full Name"
                type="text"
                placeholder="Enter your name"
                errors={errors}
                {...register("name", {
                  required: "Name is required",
                  validate: (value) =>
                    value.trim() === "" ? "Name is required" : true,
                })} // Custom validation to check for empty string
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="md:h-[6rem]">
              <Input
                label="email address"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message || "Email is required"}
                </span>
              )}
            </div>

            <div className="md:h-[6rem]">
              <Input
                label="contact number"
                type="tel"
                value={watch("contact") || ""}
                placeholder="+35699111070"
                {...register("contact", {
                  required: "Contact number is required",
                  // pattern: {
                  //   value: /^\D$/,
                  //   message:
                  //     "Invalid format. use +(country code) followed by 8 digits",
                  // },
                  onChange: (e) => {
                    const onlyNumbers = e.target.value.replace(/\D/, "");
                    setValue("contact", onlyNumbers);
                    return;
                  },
                })}
              />
              {errors.contact && (
                <span className="text-red-500 text-sm">
                  {errors.contact.message || "Contact number is required"}
                </span>
              )}
            </div>
          </div>
          <div className="md:w-[45%]  relative ">
            <div className="flex flex-col items-start justify-between ">
              <label
                htmlFor="message"
                className="font-semibold text-[1.3rem] mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="9"
                placeholder="Your message here..."
                // required
                {...register("message", { required: "Message is required" })}
                className=" text-stone-100 text-[1.2rem] border-b-2 border-blue-100 md:px-4 md:pb-2   outline-none focus:outline-none w-full md:h-[100%] resize-none"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 mt-3  text-sm">
                  {errors.message.message || "Contact number is required"}
                </span>
              )}
            </div>
            <div className="flex items-center justify-end absolute right-0 ">
              <button
                type="submit"
                className="md:mt-7 md:py-2.5 md:px-7 bg-indigo-100 text-xl rounded-md cursor-pointer hover:bg-indigo-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-[50%] bottom-20 text-stone-100 text-center text-[19px] translate-x-[-50%]">
          {/* <div>
            <p>We will get back to you as soon as possible.</p>
            <p>Thank you for reaching out!</p>
          </div> */}
          <div>
            <p>For urgent inquiries, please contact us at:</p>
            <p>+35699111070</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
