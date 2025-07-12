// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import supabase from "../lib/supabase";
import { TiTick } from "react-icons/ti";
import { MdAddShoppingCart } from "react-icons/md";

import supabase from "../lib/supabase";
import { useEffect, useState } from "react";
import { minimumPrice, VAT } from "../constant/constants"; // Import the minimum price constant
import { formatPrice } from "../helper/helper";
import {
  updateFinalOrders,
  updateTotalAmountAfterDiscountAndTax,
} from "../reduxSlicers/appSlicers";

function CheckoutSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const orderList = useSelector((state) => state.app.orderList);
  const isCartPage = useSelector((state) => state.app.isCartPage);
  const user_id = useSelector((state) => state.app.user_id);
  const [isMinimumPrice, setIsMinimumPrice] = useState(false);
  useEffect(() => {
    async function getOrderList() {
      try {
        const products = orderList.map(async ({ productId, quantity }) => {
          const { data: order, error } = await supabase
            .from("products")
            .select("price,discount,images")
            .eq("id", productId)
            .single();
          if (error)
            throw new Error(
              "error while fetching orderlist for checkoutSidebar"
            );
          return { ...order, quantity };
        });
        const order = await Promise.all(products);

        if (order.length > 0) {
          setOrders(order);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    getOrderList();
  }, [orderList]);

  const supTotal = orders
    ?.map((order) => order.price * order.quantity)
    .reduce((acc, price) => acc + price, 0);
  const totalDiscount = orders
    ?.map((order) => order.discount * order.quantity)
    .reduce((acc, price) => acc + price, 0);

  const estimatedTax = ((supTotal - totalDiscount) * VAT) / 100;
  const finalPrice = supTotal - totalDiscount + estimatedTax;
  const totalPrice = orders.reduce((acc, el) => {
    if (el.discount) {
      const newPrice = (el.price - el.discount) * el.quantity;
      return acc + newPrice;
    } else {
      const newPrice = el.price * el.quantity;
      return acc + newPrice;
    }
  }, 0);
  const handleCheckout = () => {
    if (totalPrice >= minimumPrice) {
      navigate("/checkout");
      setIsMinimumPrice(false);
      dispatch(updateFinalOrders(orders));
      dispatch(updateTotalAmountAfterDiscountAndTax(finalPrice));
    } else {
      setIsMinimumPrice(true);
    }
  };
  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[13.5rem] h-[86vh] flex-col px-5 text-center mt-[6rem]  overflow-y-scroll`}
      style={{ display: isCartPage ? "none" : "flex" }}
    >
      <p className="flex items-center gap-1 bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded mb-2">
        <span>SubTotals</span>
        <MdAddShoppingCart className="text-2xl" />
      </p>
      <p className="font-semibold text-2xl">{formatPrice(totalPrice)}</p>
      <p className="flex items-center py-3 px-1 text-[14px] bg-pink-200 rounded mt-2">
        {" "}
        <TiTick className="text-xl text-green-500" />
        <span>Free shipping</span>
      </p>
      {isMinimumPrice && (
        <p className="mt-2 text-[0.8rem] text-red-500 font-semibold">
          Minimum order value {formatPrice(minimumPrice)} is required for
          checkout.
        </p>
      )}
      {user_id ? (
        <button
          className=" mt-3 float-left py-2 px-6 rounded-full cursor-pointer capitalize text-[1rem] text-stone-50 bg-amber-500 hover:bg-amber-300 hover:text-stone-900"
          onClick={handleCheckout}
        >
          {/* orderList to be replace with orders */}
          checkout ({orderList.length})
        </button>
      ) : (
        <button
          className=" mt-3 float-left py-2 px-6 rounded-full cursor-pointer capitalize text-[0.85rem] text-stone-50 bg-green-400 hover:bg-green-300 hover:text-stone-900"
          onClick={() => navigate("/account")}
        >
          login to checkout
        </button>
      )}
      <button
        className=" mt-3 float-left py-2 px-6 rounded-full cursor-pointer capitalize text-[1rem] text-stone-900 border border-stone-900 hover:bg-stone-100 transition-all duration-200"
        onClick={handleGoToCart}
      >
        go to bucket
      </button>
      <div className=" flex flex-col gap-2 mt-4">
        {orders?.map((order) => (
          <div className="relative" key={order?.images[0]}>
            <img
              src={order?.images[0]}
              className="bg-red-500 w-[7.5rem] h-[6rem] m-auto cursor-pointer "
            />
            <p className="absolute top-1 right-5 bg-indigo-100 text-stone-50 text-[1.1rem] px-3 py-1 font-semibold rounded-full">
              {order.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckoutSidebar;
