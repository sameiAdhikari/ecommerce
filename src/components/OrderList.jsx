import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDelete, MdRadioButtonUnchecked } from "react-icons/md";
import { orders } from "../pages/Cart";

function OrderList({
  order,
  selectItems,
  setSelectItems,
  // selectAll,
  setSelectAll,
}) {
  const [quantity, setQuantity] = useState(1);
  // const [check, setCheck] = useState(true);

  const handleSelectItems = (id) => {
    if (selectItems.includes(id)) {
      setSelectItems(selectItems.filter((id) => order.id !== id));
      setSelectAll(false);
    } else {
      const updatedOrder = [...selectItems, id];
      setSelectItems(updatedOrder);
      setSelectAll(orders.length === updatedOrder.length);
    }
  };

  const increase = () => {
    setQuantity((c) => c + 1);
  };
  const decrease = () => {
    if (quantity <= 1) return;
    setQuantity((c) => c - 1);
  };

  // need to delete order from the order list with order id
  const deleteOrder = () => {
    // console.log(order.id);
  };
  return (
    <div className=" capitalize grid grid-cols-[5rem_20%_25%_1fr_1fr_1fr_4rem] md:h-[8rem] items-center md:my-2 font-semibold text-stone-900 border-b border-stone-200 ">
      <div
        className="flex items-center justify-end"
        onClick={() => handleSelectItems(order.id)}
      >
        {!selectItems.includes(order.id) ? (
          <MdRadioButtonUnchecked className="w-6 h-6 cursor-pointer" />
        ) : (
          <FaCheckCircle className="w-6 h-6 cursor-pointer" />
        )}
      </div>
      <div>
        <img
          src={order.image}
          alt={order.title}
          className="md:w-full md:h-[8rem] object-contain"
        />
      </div>
      <div>
        <h3 className="capitalize font-semibold md:mb-2">{order.title}</h3>
        <p className="md:text-sm text-stone-600 md:pr-3">
          {order.description.slice().length > 100
            ? order.description.slice(0, 100) + "..."
            : order.description}
        </p>
      </div>
      <div className="flex justity-between items-center md:m-auto">
        <div className="relative md:w-5 md:h-5 border border-stone-900 rounded-full">
          <button
            className="md:text-3xl cursor-pointer absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            onClick={decrease}
          >
            -
          </button>
        </div>
        <input
          type="text"
          disabled
          value={quantity}
          className=" md:w-[3.5rem] md:h-[2rem] md:mx-2 md:px-1 text-center md:py-3 outline-none border-1 border-gray-500"
        />
        <div className="relative md:w-5 md:h-5 border border-stone-900 rounded-full">
          <button
            className="md:text-2xl cursor-pointer absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        $ {order.unitPrice}
      </div>

      <div className="flex justify-center items-center">
        $ {order.unitPrice * quantity}
      </div>
      <div
        className="text-xl flex items-center justify-center cursor-pointer  md:w-8 md:h-8  hover:bg-gray-300 hover:rounded-full "
        onClick={deleteOrder}
      >
        {/* <IoIosClose /> */}
        <MdOutlineDelete />
      </div>
    </div>
  );
}

export default OrderList;
