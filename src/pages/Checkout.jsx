import { useState } from "react";
import CustomerInfo from "../components/CustomerInfo";
import PaymentInfo from "../components/PaymentInfo";
import ShippingInfo from "../components/ShippingInfo";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSteps } from "../reduxSlicers/appSlicers";

function Checkout() {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.app.steps);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSteps = () => {
    if (steps === checkOutTopic.length) {
      setIsCompleted(true);
      navigate("/");
      return steps;
    } else return dispatch(setSteps(steps + 1));
  };

  const checkOutTopic = [
    {
      name: "Customer Info",
      component: <CustomerInfo handleSteps={handleSteps} />,
    },
    {
      name: "Shipping Info",
      component: <ShippingInfo handleSteps={handleSteps} />,
    },
    {
      name: "Payment Info",
      component: <PaymentInfo handleSteps={handleSteps} />,
    },
  ];
  const calculate = () => {
    const width = ((steps - 1) / (checkOutTopic.length - 1)) * 100;
    return width;
  };
  return (
    <div className="w-full h-auto mt-38 ">
      <div className="flex justify-between w-[100%] m-auto">
        {checkOutTopic.map((topic, i) => (
          <div
            className="w-full flex justify-center items-center flex-col"
            key={topic.name}
          >
            <p
              className={` md:text-2xl text-stone-100  ${
                steps === i + 1 && !isCompleted
                  ? "bg-blue-500"
                  : steps > i + 1 || isCompleted
                  ? "bg-green-500"
                  : "bg-gray-500"
              }      rounded-full md:w-10 md:h-10 flex items-center justify-center`}
            >
              {steps > i + 1 || isCompleted ? <span>&#10003;</span> : i + 1}
            </p>
            <p className="text-xl md:mt-1">{topic.name}</p>
          </div>
        ))}
      </div>
      <div className="md:w-[69%] md:m-auto md:mt-[-3.5rem] bg-gray-500 md:h-2">
        <div
          className="md:h-full bg-green-500"
          style={{ width: `${calculate()}%` }}
        ></div>
      </div>
      <div className="w-full">
        {checkOutTopic.map(
          (topic, i) =>
            steps === i + 1 && (
              <div key={i + Math.random()}>{topic.component}</div>
            )
        )}
      </div>
      {/* <div className="flex justify-end md:mr-[20%]">
        <button
          className="bg-indigo-100 text-2xl md:py-2 md:px-6 rounded text-stone-100 cursor-pointer"
          onClick={() => handleSteps()}
        >
          {steps === checkOutTopic.length ? "Finish" : "Next"}
        </button>
      </div> */}
    </div>
  );
}

export default Checkout;
