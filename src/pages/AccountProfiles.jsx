import { VscAccount } from "react-icons/vsc";
import { formatPrice } from "../helper/helper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrdersByUserId } from "../lib/dataService";
import { Link } from "react-router";
import { closestTo } from "date-fns";
import { CiLock } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

function AccountProfiles() {
  const currentSession = useSelector((state) => state.app.currentSession);
  const user_id = useSelector((state) => state.app.user_id);
  const [allOrders, setAllOrders] = useState();
  const user = currentSession?.user.user_metadata;
  useEffect(() => {
    if (user_id) {
      async function getOrderList() {
        const fetchdata = await getOrdersByUserId(user_id);
        if (fetchdata.length > 0) {
          const closest = fetchdata.map((order) => order.placed_at);
          const closestTime = closestTo(new Date(), closest);
          const closestOrder = fetchdata.find((order) => {
            if (new Date(order.placed_at).getTime() === closestTime.getTime())
              return order;
          });

          const items = [closestOrder].flatMap((data) => {
            return data.items;
          });
          const parsed = items.map((item) => JSON.parse(item));
          setAllOrders(parsed);
        } else {
          setAllOrders([]);
        }
      }
      getOrderList();
    }
  }, [user_id]);

  return (
    <div>
      {/* // Profile Header //{" "} */}
      {/* <h3 className="text-lg font-semibold mb-4">Account Information</h3> */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex items-center gap-6 border-2  border-gray-300">
        {user?.avatar_url ? (
          <img
            src={user?.avatar_url}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover border"
          />
        ) : (
          <VscAccount className="w-13 h-13 " />
        )}
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>
      {/* Account Info //{" "} */}
      {/* <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border-2  border-gray-300">
        <h3 className="text-lg font-semibold mb-4">Account Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <span className="font-medium">Full Name:</span> {user.name}
          </div>
          <div>
            <span className="font-medium">Email:</span> {user.email}
          </div>
          <div>
            <span className="font-medium">Phone:</span> {user.phone}
          </div>
          <div>
            <span className="font-medium">Address:</span> {user.address}
          </div>
        </div>
      </div> */}
      {/* // Recent Orders  */}
      <div className="bg-white rounded-xl shadow-sm p-6 border-2  border-gray-300">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        {allOrders?.length === 0 ? (
          <div className="flex flex-col  text-center p-4 bg-gradient-to-br ">
            <div className="bg-gray-100 w-[90%] border-2  border-gray-300 p-6 rounded-2xl shadow-md">
              <div className="flex items-center justify-center bg-white p-4 rounded-full shadow-sm mb-4">
                <LuAlarmClock className="w-12 h-12 text-gray-500" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No Recent Orders</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't made any purchases recently.
              </p>
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl transition"
              >
                Browse Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-600">
            {allOrders?.map((order) => {
              return (
                <div
                  className="flex items-center gap-10 border text-[1rem] my-2 px-4 py-2"
                  key={order.id}
                >
                  <img src={order?.images?.[0]} className="w-[15%] h-25"></img>
                  <p className="w-[40%]">{order.descriptions}</p>
                  <p className="flex items-center flex-col">
                    <span className="">Per unit</span>
                    <span className="font-semibold">
                      {formatPrice(
                        order?.discount
                          ? order.price - order.discount
                          : order.price
                      )}
                    </span>
                  </p>
                  <p className="flex items-center flex-col">
                    <span>Quantity</span>
                    <span className="font-semibold">{order?.quantity}</span>
                  </p>
                  <p className="flex items-center flex-col">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      {formatPrice(
                        (order?.discount
                          ? order.price - order.discount
                          : order.price) * order.quantity
                      )}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountProfiles;
