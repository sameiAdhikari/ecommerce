import { useForm } from "react-hook-form";
import Input from "./Input";

function ContactForm() {
  const {
    register,
    handleSubmit,
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
          <div className="md:w-[50%] md:h-auto flex flex-col gap-4 ">
            <div className="md:h-[6rem]">
              <Input
                label="name"
                type="text"
                placeholder="Your Name"
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
                label="email"
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
                label="contact"
                type="tel"
                placeholder="Contact Number"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^(\+\d{2,3})\d{8}$/,
                    message:
                      "Invalid format. use +(country code) followed by 8 digits",
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
          <div className="md:w-[45%] md:h-[100%] relative">
            <div className="flex flex-col items-start justify-between md:pb-7 ">
              <label
                htmlFor="message"
                className="md:mt-3 font-semibold text-[1.3rem]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your message here..."
                // required
                // {...register("message", { required: "Message is required" })}
                className="text-stone-100 text-[1.2rem] border-b-2 border-blue-100 md:pt-2 md:px-4 md:pb-5   outline-none focus:outline-none w-full md:h-[100%] resize-none"
              ></textarea>
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
            <p>+xxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
