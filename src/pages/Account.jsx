import { useEffect, useState } from "react";
import LoginDetails from "../components/LoginDetails";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { updateUserId } from "../reduxSlicers/appSlicers";
import { useSignout } from "../services/useProducts";
import AccountAddressBook from "./AccountAddressBook";
import AccountOrders from "./AccountOrders";
import AccountPaymentMethod from "./AccountPaymentMethod";
import AccountProfiles from "./AccountProfiles";
import AccountWishlist from "./AccountWishlist";

function Account() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [isActive, setIsActive] = useState(0);
  const { logOut } = useSignout();
  const user_id = useSelector((state) => state.app.user_id);
  const handleClick = (type) => {
    if ((type === "login" && !active) || (type === "register" && active)) {
      setActive(!active);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user_id]);

  const handleLogout = async () => {
    try {
      logOut();
      queryClient.removeQueries(["user"]);
      dispatch(updateUserId(null));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const sideBarList = [
    {
      label: "profile",
      component: <AccountProfiles />,
    },
    { label: "orders", component: <AccountOrders /> },
    { label: "return orders", component: <AccountWishlist /> },
    { label: "address book", component: <AccountAddressBook /> },
    { label: "payment Methods", component: <AccountPaymentMethod /> },
  ];
  const handleClickSideBar = (i) => {
    setIsActive(i);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-100 text-stone-900">
      {!user_id ? (
        <div className="md:w-full md:h-[100vh] relative  flex justify-center items-center ">
          <div className="w-[100%] md:mt-25 flex justify-center items-center flex-col">
            <div className="flex justify-end md:w-[55%] gap-8 ">
              <button
                className={` md:px-5 md:py-2 md:text-2xl md:w-[7rem] border bg-stone-50  ${
                  active ? "bg-stone-900 text-stone-50" : ""
                } hover:bg-black/80 hover:text-stone-50 transition-colors duration-100 cursor-pointer`}
                onClick={() => handleClick("login")}
              >
                Login
              </button>
              <button
                className={` md:px-5 md:py-2 md:text-2xl md:w-[7rem] border bg-stone-50  ${
                  !active ? "bg-stone-900 text-stone-50" : ""
                } hover:bg-black/80 hover:text-stone-50 transition-colors duration-100 cursor-pointer`}
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
      ) : (
        <div className=" mt-[7.6rem] bg-gray-100 flex">
          <aside className=" w-64 bg-white shadow-md p-6 hidden md:block">
            <div className="text-xl font-bold mb-8">My Account</div>
            <ul className=" h-[70vh] text-xl space-y-4 text-gray-700">
              {sideBarList.map((data, i) => (
                <li key={data.label}>
                  <button
                    className=" hover:text-blue-600 cursor-pointer capitalize font-semibold"
                    style={{ color: isActive === i ? "blue" : "" }}
                    onClick={() => handleClickSideBar(i)}
                  >
                    {data.label}
                  </button>
                </li>
              ))}
              <li className=" w-full h-[2.5rem] text-stone-50 flex justify-center items-center bg-red-600 hover:bg-red-700 transition-all duration-200 cursor-pointer">
                <button
                  className="  text-2xl cursor-pointer font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </aside>
          <main className="flex-1 p-4 ">
            {sideBarList.map(
              (data, i) =>
                i === isActive && <span key={data.label}>{data.component}</span>
            )}
          </main>
        </div>
      )}
    </section>
  );
}

export default Account;
