import { IoIosUnlock } from "react-icons/io";
import OrderList from "../components/OrderList";
import PaymentSummary from "../components/PaymentSummary";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Sorting from "../components/Sorting";
import ProductList from "../components/ProductList";

// make sure to change the data in orderList as well because it's export from here to use there
export const orders = [
  {
    id: 1,
    image: "/banner1.png",
    unitPrice: 255,
    title: "lehenga",
    description: "what a beautiful lehenga",
  },
  {
    id: 2,
    image: "/banner1.png",
    unitPrice: 2005,
    title: "Lehenga",
    description: "what a beautiful lehenga",
  },
  {
    id: 3,
    image: "/banner1.png",
    unitPrice: 5555,
    title: "lehenga",
    description:
      "what a beautiful lehenga jhgjhgjh jgjhg gjhgj mngvjhg jhgfhj hjh mvjhg jjhgh jgjhg jhjhg jhghjgjh",
  },
  {
    id: 4,
    image: "/banner1.png",
    unitPrice: 2005,
    title: "Lehenga",
    description: "what a beautiful lehenga",
  },
  {
    id: 5,
    image: "/banner1.png",
    unitPrice: 5555,
    title: "lehenga",
    description:
      "what a beautiful lehenga jhgjhgjh jgjhg gjhgj mngvjhg jhgfhj hjh mvjhg",
  },
];
const products = [
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 20,
  },
  {
    id: 1,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 10,
  },
  {
    id: 1,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 5,
  },
  {
    id: 1,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 30,
  },
  {
    id: 1,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
  },
  {
    id: 1,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
  },
];

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectItems, setSelectItems] = useState([]);

  const brandName = "samei";

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
      <div className="md:mt-15 flex items-center md:h-[2.5rem] md:px-[4rem]">
        {/* <img src="/logo-icon.png" className="md:w-[5rem] md:h-[5rem] z-[-99]" /> */}
        <p className="md:ml-5 flex items-center text-green-500 md:text-[1.1rem]">
          <IoIosUnlock />
          <span className=" md:ml-2">All data is encrypted</span>
        </p>
      </div>
      <div>
        <div className="flex ">
          <div className="md:w-[75%]">
            <div className="sticky top-16 z-999">
              <div className="md:h-[3rem] grid grid-cols-[4rem_20%_25%_1fr_1fr_1fr_4rem] items-center bg-yellow-600 capitalize  font-semibold text-stone-50">
                <div></div>
                <div></div>
                <div className="md:pl-3">descriptions</div>
                <div className="text-center">quantity</div>
                <div className="text-center">unit price</div>
                <div className="text-center">total price</div>
                <div></div>
              </div>
            </div>
            <div className="flex items-center justify-between md:pl-14 md:pt-3 md:pb-4 border-b border-black-900 sticky top-28 md:bg-stone-50 z-99">
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
            <div>
              {orders.map((order) => (
                <OrderList
                  key={order.id}
                  order={order}
                  selectItems={selectItems}
                  setSelectItems={setSelectItems}
                  setSelectAll={setSelectAll}
                  selectAll={setSelectAll}
                />
              ))}
              <p className="md:h-8 font-bold text-2xl md:mt-5 md:pl-8 underline">
                Explore more of {brandName}'s
              </p>
              <div className="flex flex-wrap md:ml-5 md:m-auto">
                {products.map((product) => (
                  <ProductList product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-[25%] md:pr-3">
            <PaymentSummary orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
