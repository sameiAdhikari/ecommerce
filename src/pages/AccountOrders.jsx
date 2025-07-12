import React from "react";
import { useGetAllOrdersList } from "../services/useProducts";
import Spinner from "../components/Spinner";
import { format, parseISO } from "../../node_modules/date-fns";
import { formatPrice } from "../helper/helper";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";

export default function AccountOrders() {
  const { allOrders, isLoading } = useGetAllOrdersList();
  if (isLoading) return <Spinner />;
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      {allOrders.length === 0 ? (
        <div className="flex flex-col   text-center p-4 ">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md border-2  border-gray-300">
            <div className="bg-white flex justify-center p-4 rounded-full shadow-sm mb-4">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/shopping-bag.png"
                alt="shopping-bag"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No Orders Yet</h2>
            <p className="text-gray-500 mb-6">
              You haven't placed any orders yet. Once you do, they'll appear
              here.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-xl transition"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6 bg-stone-50">
          {allOrders.map((order) => {
            const parsedItems = order.items.map((item) => JSON.parse(item));

            return (
              <div
                key={order.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-md text-gray-500">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-md text-gray-500">Date</p>
                    <p className="font-medium">
                      {format(parseISO(order.placed_at), "dd/MM/yyyy, hh:mm a")}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-md mb-1 text-gray-500">Status</p>
                    <span
                      className={`text-md font-semibold px-2 py-[5px] capitalize rounded-full ${
                        order.order_status === "delivered"
                          ? "bg-green-100 text-white"
                          : "bg-yellow-100 text-white"
                      }`}
                    >
                      {order.order_status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="w-[90%]">
                    <p className="text-md text-gray-500 mb-1">Items</p>
                    <ul className="w-full flex flex-wrap gap-4  text-sm text-gray-700 list-none list-inside ">
                      {parsedItems.map((item, i) => (
                        <li className="w-[32%] flex gap-3 my-2" key={i}>
                          <img
                            src={item.images[0]}
                            className="w-[6rem] h-[5rem] object-fit"
                          />
                          <p className="text-md">
                            {item.title} × {item.quantity}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="w-[7%]  mt-4 float-right
                  "
                  >
                    <p className="text-lg font-semibold">
                      {formatPrice(order.total_amount)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
