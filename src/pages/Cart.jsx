import { IoIosUnlock } from "react-icons/io";

import PaymentSummary from "../components/PaymentSummary";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Sorting from "../components/Sorting";
import ProductList from "../components/ProductList";
import OrderList from "../components/OrderList";
import supabase from "../lib/supabase";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "../services/useProducts";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router";
import { updateSelectAll, updateSelectItems } from "../reduxSlicers/appSlicers";
const brandName = "samei";

function Cart() {
  const dispatch = useDispatch();
  // const [selectItems, setSelectItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const { products } = useProducts();
  const orderList = useSelector((state) => state.app.orderList);
  const selectAll = useSelector((state) => state.app.selectAll);
  const selectItems = useSelector((state) => state.app.selectItems);
  const orderedCategories = orders?.map((order) => order.category);
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "all";
  let filteredOrders;
  let finalProducts;

  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (!products || products.length === 0) return <Spinner />;
  if (sortBy === "deals") {
    filteredOrders = orders.filter((order) => order.discount > 0);
  } else {
    filteredOrders = orders;
  }

  // Filter products based on the ordered categories to show related products
  const productMatchWithOrder = [...new Set(orderedCategories)]
    ?.map((category) =>
      products?.filter((product) => product.category === category)
    )
    ?.map((products) => {
      return products?.slice(0, 12);
    });

  if (selectItems?.length > 0) {
    finalProducts = filteredOrders?.filter((product) => {
      return selectItems.includes(product.id);
    });
  }
  // console.log(finalProducts);
  const handleSelectAll = () => {
    if (orderList.length === 0) return;
    if (selectAll) {
      dispatch(updateSelectItems([]));
    } else {
      const allIds = orders.map((order) => order.id);
      dispatch(updateSelectItems(allIds));
    }
    dispatch(updateSelectAll(!selectAll));
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
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <OrderList
                    key={order.id}
                    order={order}
                    filteredOrders={filteredOrders}
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
              <div className="flex gap-4 flex-wrap md:ml-7 ">
                {productMatchWithOrder.length > 0
                  ? productMatchWithOrder?.map((products) => {
                      return products?.map((product) => (
                        <ProductList product={product} key={product.id} />
                      ));
                    })
                  : products?.map((product) => {
                      return <ProductList product={product} key={product.id} />;
                    })}
              </div>
            </div>
          </div>
          <div className="md:w-[25%] pb-5 ">
            <PaymentSummary orders={finalProducts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
