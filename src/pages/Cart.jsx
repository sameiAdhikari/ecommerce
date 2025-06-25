import { IoIosUnlock } from "react-icons/io";

import PaymentSummary from "../components/PaymentSummary";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Sorting from "../components/Sorting";
import ProductList from "../components/ProductList";
import OrderList from "../components/OrderList";
import supabase from "../lib/supabase";
import { useSelector } from "react-redux";
import { useProducts } from "../services/useProducts";
const brandName = "samei";

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectItems, setSelectItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const { products } = useProducts();
  const orderList = useSelector((state) => state.app.orderList);

  useEffect(() => {
    async function getOrders() {
      const order = orderList.map(async ({ productId, quantity }) => {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", productId)
          .single();
        if (error) throw new Error("error while fetching data");
        return { ...data, quantity };
      });
      const promisedOrder = await Promise.all(order);
      setOrders(promisedOrder);
    }
    getOrders();
  }, [orderList]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectItems([]);
    } else {
      const allIds = orders.map((order) => order.id);
      setSelectItems(allIds);
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <div className="md:mt-30">
        <div className="flex">
          <div className="md:w-[75%] pr-4 border-r-2 border-gray-400">
            <div className="z-999">
              <div className="md:h-[3rem] grid grid-cols-[4.5rem_20%_30%_1fr_1fr_1fr_3.5rem] items-center bg-yellow-600 capitalize  font-semibold text-stone-50">
                <div></div>
                <div></div>
                <div className="md:pl-3">descriptions</div>
                <div className="text-center">quantity</div>
                <div className="text-center">unit price</div>
                <div className="text-center">total price</div>
                <div></div>
              </div>
            </div>
            <div className="flex items-center justify-between md:pl-14 md:pt-3 md:pb-4 border-b border-black-900  md:bg-stone-50 z-99">
              <div className="flex">
                <div
                  className="flex items-center justify-end md:mr-3"
                  onClick={handleSelectAll}
                >
                  {selectAll ? (
                    <FaCheckCircle className="w-6 h-6 cursor-pointer" />
                  ) : (
                    <MdRadioButtonUnchecked className="w-6 h-6 cursor-pointer" />
                  )}
                </div>
                <p>
                  Select all ( <span>{orders?.length || 0}</span> )
                </p>
              </div>
              <Sorting />
            </div>
            <div className="pb-5">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <OrderList
                    key={order.id}
                    order={order}
                    selectItems={selectItems}
                    setSelectItems={setSelectItems}
                    setSelectAll={setSelectAll}
                    selectAll={setSelectAll}
                  />
                ))
              ) : (
                <p className="text-center py-10 text-xl text-orange-500 border-b border-gray-500">
                  Oops! Your cart is feeling a bit lonely. Let’s fill it up with
                  awesome stuff!
                </p>
              )}
              <p className="md:h-8 font-bold text-2xl md:mt-5 md:mb-4 md:pl-8 underline">
                Explore more of {brandName}'s
              </p>
              <div className="flex gap-3 flex-wrap md:ml-7 md:m-auto">
                {products?.slice(0, 4).map((product) => (
                  <ProductList product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-[25%] pb-5 md:pr-3">
            <PaymentSummary orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
