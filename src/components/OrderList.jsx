import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDelete, MdRadioButtonUnchecked } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderList,
  updateOrderList,
  updateSelectAll,
  updateSelectItems,
} from "../reduxSlicers/appSlicers";

// import { useDispatch, useSelector } from "react-redux";

function OrderList({ order, filteredOrders }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(order.quantity || 1);
  const selectItems = useSelector((state) => state.app.selectItems || []);
  const localStorageOrderList =
    JSON.parse(localStorage.getItem("orderList")) || [];

  const increase = () => {
    if (quantity > order.stock) return;
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateOrderList({ productId: order.id, quantity: newQuantity }));
    // Update local storage
    const updatedLocalStorage = localStorageOrderList.findIndex(
      (item) => item.productId === order.id
    );
    if (updatedLocalStorage !== -1) {
      localStorageOrderList[updatedLocalStorage].quantity = newQuantity;
      localStorage.setItem("orderList", JSON.stringify(localStorageOrderList));
    }
  };
  const decrease = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    dispatch(updateOrderList({ productId: order.id, quantity: newQuantity }));
    const updatedLocalStorage = localStorageOrderList.findIndex(
      (item) => item.productId === order.id
    );
    if (updatedLocalStorage !== -1) {
      localStorageOrderList[updatedLocalStorage].quantity = newQuantity;
      localStorage.setItem("orderList", JSON.stringify(localStorageOrderList));
    }
  };

  const handleSelectItems = (id) => {
    if (selectItems.includes(id)) {
      dispatch(updateSelectItems(selectItems.filter((id) => order.id !== id)));
      dispatch(updateSelectAll(false));
    } else {
      dispatch(updateSelectItems([...selectItems, id]));
      if (selectItems.length + 1 === filteredOrders.length) {
        dispatch(updateSelectAll(true));
      }
    }
  };

  // need to delete order from the order list with order id
  const deleteOrder = (id) => {
    dispatch(deleteOrderList(id));

    const updatedOrderList = localStorageOrderList.filter((order) => {
      return order.productId !== id;
    });
    localStorage.setItem("orderList", JSON.stringify(updatedOrderList));
  };
  return (
    <div className=" capitalize grid grid-cols-[3rem_20%_30%_1fr_1fr_1fr_4rem] md:h-[8.5rem] gap-3 items-center md:my-2 font-semibold text-stone-900 border-b border-gray-500 bg-gray-100 ">
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
          src={order.images[0]}
          alt={order.images[0]}
          className="md:w-full md:h-[8rem] object-cover py-1"
        />
      </div>
      <div>
        <h3 className="capitalize font-semibold md:mb-2">{order?.title}</h3>
        <p className="md:text-sm text-stone-600 md:pr-3">
          {order?.descriptions.slice().length > 100
            ? order?.descriptions.slice(0, 100) + "..."
            : order?.description}
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
        $ {order?.price.toFixed(2)}
      </div>

      <div className="flex justify-center items-center">
        $ {(order?.price * quantity).toFixed(2)}
      </div>
      <div
        className="text-xl flex items-center justify-center cursor-pointer  md:w-10 md:h-10  hover:bg-gray-300 hover:rounded-full "
        onClick={() => deleteOrder(order?.id)}
      >
        <MdOutlineDelete />
      </div>
    </div>
  );
}

export default OrderList;
