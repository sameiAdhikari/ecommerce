import { useState } from "react";
import LoginDetails from "../components/LoginDetails";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Account() {
  const [active, setActive] = useState(true);
  const handleClick = (type) => {
    if ((type === "login" && !active) || (type === "register" && active)) {
      setActive(!active);
      // reset();
    }
  };
  return (
    <section>
      <div className="md:w-full md:h-[100vh] relative bg-stone-900/10 flex justify-center items-center text-stone-100">
        <img
          src="/login/login.jpg"
          alt="Login Background"
          className="absolute top-0 left-0 md:h-full md:w-full z-[-1]"
        />
        <div className="w-[100%] md:mt-25 flex justify-center items-center flex-col">
          <div className="flex justify-end md:w-[55%] gap-8 ">
            <button
              className={` md:px-5 md:py-2 md:text-2xl md:w-[7rem] bg-black/40  ${
                active ? "bg-black/80" : ""
              } hover:bg-black/80 transition-colors duration-100 cursor-pointer`}
              onClick={() => handleClick("login")}
            >
              Login
            </button>
            <button
              className={` md:px-5 md:py-2 md:text-2xl md:w-[7rem] bg-black/40 ${
                !active ? "bg-black/80" : ""
              } hover:bg-black/80 transition-colors duration-100 cursor-pointer`}
              onClick={() => handleClick("register")}
            >
              Register
            </button>
          </div>
          <div className="md:w-[70%] ">
            <div className="flex justify-between md:px-10">
              <LoginDetails />
              {active === true && <LoginForm />}
              {active === false && <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
